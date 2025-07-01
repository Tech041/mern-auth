import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verifyOtp: {
      type: String,
      default: "",
    },
    verifyOtpExpiredAt: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String,
      default: "",
    },
    resetOtpExpiredAt: {
      type: Number,
      default: 0,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      default: null,
    },
    appliedJobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    postedJobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
