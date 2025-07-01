import mongoose from "mongoose";
import { Schema } from "mongoose";
const postSchema = new Schema(
  {
    profession: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    candidate: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
const Post = mongoose.model("Profile", postSchema);
export default Post;
