import express from "express";
import userAuth from "../middlewares/user.auth.js";
import {
  createProfile,
  getUserData,
  getUserProfile,
} from "../controllers/user.profile.controller.js";
import upload from "../middlewares/multer.js";
import userProfileAuth from "../middlewares/user.profile.auth.js";
const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);
userRouter.post(
  "/create-profile",
  upload.single("cv"),
  userProfileAuth,
  createProfile
);
userRouter.get("/profile/:profileId", userAuth, getUserProfile);

export default userRouter;
