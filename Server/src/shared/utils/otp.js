import bcrypt from "bcryptjs";
import crypto from "crypto";
import ApiError from "./ApiError.js";

// Generate numeric OTP (6 digits by default)

export const generateOTP = (length = 4) => {
  const digits = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, digits.length);
    otp += digits[randomIndex];
  }
  return otp;
};

export const hashOTP = async (otp) => {
  try {
    return await bcrypt.hash(otp, 5);
  } catch (error) {
    throw new ApiError(500, "Error generating otp");
  }
};

export const compareHashedOtp = async (otp, hash) => {
  try {
    return await bcrypt.compare(otp, hash);
  } catch (error) {
    throw new ApiError(500, "Error comparing otp");
  }
};
