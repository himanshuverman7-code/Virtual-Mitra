import { findUserById } from "../../module/user/user.repository.js";
import { getCache } from "../services/redis.services.js";
import ApiError from "../utils/ApiError.js";
import { verifyAccessToken } from "../utils/jwt.js";

const authenticate = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;
  if (!accessToken) {
    throw new ApiError(401, "Unauthorized: No token provided");
  }
  // Check wegther user is Logged Out or not, if Logged Out then throw an error
  const isLoggedOut = await getCache(`access:${accessToken}:loggedOut`);
  if (isLoggedOut) {
    throw new ApiError(401, "Unauthorized: Invalid access token");
  }
  req.user = verifyAccessToken(accessToken);
  next();
};

export const authAdmin = async (req, res, next) => {
  // Validate administrator
  const isAdminitrator = await findUserById(req.user.id);
  if (!isAdminitrator || "admin" !== isAdminitrator?.role) {
    next(new ApiError(403, "Forbidden"));
  }
  next();
};

export default authenticate;
