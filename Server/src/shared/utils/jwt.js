import jwt from "jsonwebtoken";
import ApiError from "./ApiError.js";
import { config } from "../../config/env.config.js";


export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, config.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, config.ACCESS_TOKEN_SECRET);
  } catch (err) {
    throw new ApiError(401, "Invalid access token");
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.REFRESH_TOKEN_SECRET);
  } catch (err) {
    throw new ApiError(408, "Refresh is token expired");
  }
};
