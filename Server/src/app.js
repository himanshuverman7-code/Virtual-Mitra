// Packages
import express from "express";
import cookieParser from "cookie-parser";

// Middlewares
import morgan from "morgan";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "./config/passport.config.js";
import errorHandler from "./shared/middlewares/errorHandler.middleware.js";

// Local imports
import router from "./routes/index.js";
import { config } from "./config/env.config.js";

const app = express();

// app.use(
//   cors({
//     origin: config.ALLOWED_SITES || "http://localhost:5173",
//     credentials: true,
//   }),
// );

// setup Morgan
// if (config.NODE_ENV === "production") {
  app.use(morgan("dev"));
// }

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Passport
app.use(passport.initialize());

// app.use("/api/test", (req, res)=>{
//   console.log(req.method);
//   res.json("hello")
// });


// Use API routes
app.use("/api", router);

// Global error handling middleware
app.use(errorHandler);

export default app;
