// Repository
import * as userRepo from "../user/user.repository.js";
import * as tokenRepo from "./refresh.repository.js";

// Services and Utils
import * as jwt from "../../shared/utils/jwt.js";
import { getCache, setCache } from "../../shared/services/redis.services.js";
import {
  compareHashedOtp,
  generateOTP,
  hashOTP,
} from "../../shared/utils/OTP.js";
import sendEmail from "../../shared/services/sendMail.services.js";
import { getOtpMailOptions } from "../../shared/schemas/mail.schema.js";
import ApiError from "../../shared/utils/ApiError.js";
import { AUTH_MESSAGES, HTTP_STATUS } from "../../shared/constants/messages.js";

// Actual Shit Starts From Here

export const googleCallbackService = async (user) => {
  // Generate a JWT for the authenticated user
  const payload = {
    id: user._id,
  };
  const accessToken = jwt.generateAccessToken(payload);
  const refreshToken = jwt.generateRefreshToken(payload);

  await tokenRepo.createRefreshToken({ userId: user._id, refreshToken });

  return { accessToken: accessToken, refreshToken: refreshToken };
};

export const registerService = async (userData) => {
  // Check if user already exists
  const isUserExist = await userRepo.findUserByEmail(userData.email);

  if (isUserExist) {
    throw new ApiError(HTTP_STATUS.CONFLICT, AUTH_MESSAGES.USER_ALREADY_EXISTS);
  }

  const user = await userRepo.createUser(userData);
  const payload = { id: user._id };

  // Generate JWT tokens for the authenticated user
  const accessToken = jwt.generateAccessToken(payload);
  const refreshToken = jwt.generateRefreshToken(payload);

  await tokenRepo.createRefreshToken({ userId: user._id, refreshToken });

  return { accessToken: accessToken, refreshToken: refreshToken, user };
};

export const loginService = async (email) => {
  // Check if user already exists
  const user = await userRepo.findUserByEmail(email);

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, AUTH_MESSAGES.USER_NOT_FOUND);
  }

  // Generating otp and mail options
  const otp = await generateOTP();
  const hash = await hashOTP(otp);
  const options = getOtpMailOptions(email, otp);

  // Calling services
  await Promise.all([
    sendEmail(options),
    setCache(`otp:${email}`, { hash: hash, attempts: 0 }, 180),
  ]);

  return;
};

export const verifyLoginService = async (email, otp) => {
  // Check if user already exists
  const otpChache = await getCache(`otp:${email}`);
  const hash = otpChache?.hash;

  // Check expiry
  if (!hash) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.OTP_EXPIRED);
  }

  // Check OTP
  const verifyOtp = await compareHashedOtp(otp, hash);
  if (!verifyOtp) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, AUTH_MESSAGES.OTP_INVALID);
  }

  // Generate a JWT for the authenticated user
  const user = await userRepo.findUserByEmail(email);
  const payload = {
    id: user._id,
  };
  const accessToken = jwt.generateAccessToken(payload);
  const refreshToken = jwt.generateRefreshToken(payload);

  await tokenRepo.createRefreshToken({ userId: user._id, refreshToken });

  return { accessToken: accessToken, refreshToken: refreshToken, user };
};

export const logoutService = async ({ refreshToken, accessToken }) => {
  // calling database
  Promise.all([
    // delete refresh token from database
    tokenRepo.deleteRefreshToken(refreshToken),

    // set user logged in status to false in cache for 15
    setCache(`access:${accessToken}:loggedOut`, true, 60 * 15),
  ]);

  return { message: "Logged out successfully" };
};

export const refreshTokenService = async (refreshToken) => {
  // verify refresh token
  if (!refreshToken) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.REFRESH_TOKEN_NOT_FOUND,
    );
  }

  const decoded = jwt.verifyRefreshToken(refreshToken);

  // check if refresh token exists in database
  const storedToken = await tokenRepo.findRefreshToken(refreshToken);

  if (!storedToken) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      AUTH_MESSAGES.INVALID_REFRESH_TOKEN,
    );
  }

  const newAccessToken = jwt.generateAccessToken({ id: decoded.id });
  const newRefreshToken = jwt.generateRefreshToken({ id: decoded.id });

  // calling database
  await Promise.all([
    // delete old refresh token from database
    tokenRepo.deleteRefreshToken(refreshToken),

    // generate new access token and refresh token
    tokenRepo.createRefreshToken({
      userId: decoded.id,
      refreshToken: newRefreshToken,
    }),
  ]);
  // return new tokens
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};
