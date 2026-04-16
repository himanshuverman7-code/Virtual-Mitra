import { getRedis } from "../../config/redis.config.js";
import ApiError from "../utils/ApiError.js";

export const setCache = async (key, value, ttl = 300) => {
  try {
    const redis = getRedis();
    if (!redis) return;

    await redis.set(key, JSON.stringify(value), {
      EX: ttl,
    });
  } catch (error) {
    throw new ApiError(500, "Error seting chache");
  }
};

export const getCache = async (key) => {
  try {
    const redis = getRedis();
    if (!redis) return null;

    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    throw new ApiError(500, "Error geting chache");
  }
};

export const deleteCache = async (key) => {
  try {
    const redis = getRedis();
    if (!redis) return;

    await redis.del(key);
  } catch (error) {
    throw new ApiError(500, "Error seting chache");
  }
};
