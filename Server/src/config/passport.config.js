import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import * as userRepo from "../module/user/user.repository.js";
import { config } from "./env.config.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails, photos } = profile;

        let [auth, user] = await Promise.all([
          userRepo.findAuthByProvider("google", id),
          userRepo.findUserByEmail(profile.emails[0].value),
        ]);

        if (!user) {
          user = await userRepo.createUser({
            name: displayName,
            email: emails[0].value,
            profilePic: photos[0].value,
          });
          auth = await userRepo.linkGoogleAuth(user._id, id);
        }

        if (!auth) {
          auth = await userRepo.linkGoogleAuth(user._id, id);
          user.profilePic = photos[0].value;
          user.save();
        }
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);

export default passport;
