import RefreshToken from "./refresh.model.js";
import ApiError from "../../shared/utils/ApiError.js";

// Actual Shit Starts From Here

export const createRefreshToken = async ({ userId, refreshToken }) => {
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    return await RefreshToken.create({
      userId,
      refreshToken,
      expiresAt,
    });
  } catch (err) {
    throw new ApiError(500, "Error creating refresh token");
  }
};

export const findRefreshToken = async (refreshToken) => {
  try {
    return await RefreshToken.findOne({ refreshToken });
  } catch (err) {
    throw new ApiError(500, "Error finding refresh token");
  }
};


export const deleteRefreshToken = async (refreshToken) => {
  try {
    await RefreshToken.deleteOne({ refreshToken });
  } catch (err) {
    throw new ApiError(500, "Error deleting refresh token");
  }
};
