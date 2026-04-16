import { createClient } from "redis";
import { config } from "./env.config.js";

let client = createClient({
  url: config.REDIS_URL,
});

const connectRedis = async () => {
  try {
    await client.connect();
    console.log("Redis connected successfully");
  } catch (err) {
    console.error("Redis failed, app still running");
  }
};

export const getRedis = () => client;

export default connectRedis;