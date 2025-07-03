import { Router } from "express";
import userProfileAuth from "../middlewares/user.profile.auth.js";
import {
  applyForJob,
  fetchAllJobs,
  fetchPostedJobs,
  postJob,
} from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post("/post-job", userProfileAuth, postJob);
postRouter.get("/fetch-jobs", fetchAllJobs);
postRouter.post("/apply/:id", userProfileAuth, applyForJob);
postRouter.post("/posted-jobs", userProfileAuth, fetchPostedJobs);

export default postRouter;
