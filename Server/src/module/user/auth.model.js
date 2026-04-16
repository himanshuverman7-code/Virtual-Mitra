import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    providerId: {
      type: String,
      unique: true,
    },
    provider: {
      type: String,
      enum: ["google"]
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
