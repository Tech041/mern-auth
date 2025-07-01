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
      required: true,
    },
    jobDescription: {
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
    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
