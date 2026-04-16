import ApiError from "../../shared/utils/ApiError.js";
import Auth from "./auth.model.js";
import User from "./user.model.js";

// Actual Shit Starts From Here

export const createUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    throw new ApiError(500, "Error creating new user");
  }
};

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.log(error);
    
    throw new ApiError(500, "Error finding user");
  }
};

export const findUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    throw new ApiError(500, "Error finding user");
  }
};

export const findAuthByProvider = async (provider, providerId) => {
  try {
    return await Auth.findOne({ provider, providerId });
  } catch (error) {
    throw new ApiError(500, "Error finding user");
  }
};

export const findAuthByUserId = async (userId, provider) => {
  try {
    return await Auth.findOne({ userId, provider });
  } catch (error) {
    throw new ApiError(500, "Error finding user");
  }
};

export const linkGoogleAuth = async (userId, googleId) => {
  try {
    return await Auth.create({
      userId,
      provider: "google",
      providerId: googleId,
    });
  } catch (error) {
    throw new ApiError(500, "Error finding user");
  }
};

export const findUserWithLocalAuth = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) return null;

    const auth = await Auth.findOne({
      userId: user._id,
      provider: "local",
    });

    return { user, auth };
  } catch (error) {
    throw new ApiError(500, "Error finding user");
  }
};
