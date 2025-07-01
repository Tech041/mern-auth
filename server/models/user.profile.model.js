import mongoose from "mongoose";
const { Schema } = mongoose;

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
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cv: {
      type: new Schema(
        {
          url: { type: String, required: true },
          public_id: { type: String, required: true },
        },
        { _id: false } // prevents Mongoose from auto-generating a subdocument ID
      ),
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
