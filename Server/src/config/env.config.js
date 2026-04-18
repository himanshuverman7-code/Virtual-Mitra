import dotenv from "dotenv/config";
const env = process.env;

// Server
const PORT = env.PORT;
const NODE_ENV = env.NODE_ENV;

// Token secret
const ACCESS_TOKEN_SECRET = env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = env.REFRESH_TOKEN_SECRET;

// Database variables
const MONGO_URI = env.MONGO_URI;

// Redis variables
const REDIS_URL = env.REDIS_URL;

// OAuth 2
const GOOGLE_USER = env.GOOGLE_USER;
const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = env.GOOGLE_REFRESH_TOKEN;

// Image Kit
const IMAGEKIT_PRIVATE_KEY = env.IMAGEKIT_PRIVATE_KEY;
const IMAGEKIT_URL_ENDPOINT = env.IMAGEKIT_URL_ENDPOINT;

export const config = {
  // Server
  PORT,
  NODE_ENV,
  // Token Secret
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  // Database
  MONGO_URI,
  // Redis
  REDIS_URL,
  // OAuth
  GOOGLE_USER,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  // Image Kit
  IMAGEKIT_PRIVATE_KEY,
  IMAGEKIT_URL_ENDPOINT
};
