import asyncHandler from "../../shared/utils/asyncHandler.js";
import * as authServices from "./auth.services.js";
import * as userRepo from "../user/user.repository.js";
import { config } from "../../config/env.config.js";

// Actual Shit Starts From Here
export const googleCallback = asyncHandler(async (req, res) => {
  const user = req.user;

  // Calling Services
  const { accessToken, refreshToken } =
    await authServices.googleCallbackService(user);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    })
    .status(201)
    .json({ user });
});

export const register = asyncHandler(async (req, res) => {
  const userData = req.body;

  // Calling Services
  const { accessToken, refreshToken, user } =
    await authServices.registerService(userData);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    })
    .status(201)
    .json({ user: user });
});

export const login = asyncHandler(async (req, res) => {
  const email = req.body.email;

  // Calling Services
  await authServices.loginService(email);

  res.status(200).json({ message: `OTP sent successfully to ${email}` });
});

export const verifyLogin = asyncHandler(async (req, res) => {
  const {otp, email} = req.body;

  // Calling Services
  const {refreshToken, accessToken, user} = await authServices.verifyLoginService(email, otp);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    })
    .status(200)
    .json({ user: user });
});

export const logout = asyncHandler(async (req, res) => {
  await authServices.logoutService(req.cookies);
  res
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .status(200)
    .json({ message: "Logged out successfully" });
});

export const getMe = asyncHandler(async (req, res) => {
  const user = await userRepo.findUserById(req.user.id);
  res.status(200).json({ user });
});

export const refreshToken = asyncHandler(async (req, res) => {
  const oldRefreshToken = req.cookies?.refreshToken;
  const { accessToken, refreshToken } =
    await authServices.refreshTokenService(oldRefreshToken);
  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    })
    .status(200)
    .json({ accessToken, refreshToken });
});
