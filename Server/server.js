import http from "http";
import app from "./src/app.js";
import { config } from "./src/config/env.config.js";
import connectDB from "./src/config/db.config.js";
import connectRedis from "./src/config/redis.config.js";

const createServer = async () => {
  const PORT = config.PORT || 3000;
  await Promise.all([connectDB(), connectRedis()]);

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

createServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
