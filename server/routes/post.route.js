import { Router } from "express";
import userProfileAuth from "../middlewares/user.profile.auth.js";
import { fetchAllJobs, postJob } from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post("/post-job", userProfileAuth, postJob);
postRouter.get("/fetch-jobs", fetchAllJobs);

export default postRouter;
