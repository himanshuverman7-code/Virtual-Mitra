import passport from "passport";
import { Router } from "express";
import * as authControllers from "./auth.controllers.js";

// Importing Middlewares
import authenticate from "../../shared/middlewares/authenticate.middleware.js";
import validate from "../../shared/middlewares/validate.middleware.js";
import { loginSchema, otpSchema, registerSchema } from "./auth.schema.js";

const authRouter = Router();

// Actual Shit Starts From Here

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authControllers.googleCallback,
);

authRouter.post("/register", validate(registerSchema), authControllers.register);

authRouter.post("/login", validate(loginSchema), authControllers.login);

authRouter.post("/verify-login", validate(otpSchema), authControllers.verifyLogin);

authRouter.get("/me", authenticate, authControllers.getMe);

authRouter.delete("/logout", authenticate, authControllers.logout);

authRouter.post("/refresh", authControllers.refreshToken);

// export
export default authRouter;
