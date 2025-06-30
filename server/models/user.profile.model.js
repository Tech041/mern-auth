import mongoose from "mongoose";
import { Schema } from "mongoose";
const userProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Profile = mongoose.model("Profile", userProfileSchema);
export default Profile;
