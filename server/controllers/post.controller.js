import mongoose from "mongoose";
import Post from "../models/post.model.js";
import User from "../models/user.auth.model.js";

export const postJob = async (req, res) => {
  try {
    const { id } = req.user;
    const userId = id;
    const user = await User.findById(userId);
    if (!user.isAccountVerified) {
      return res
        .status(403)
        .json({ success: false, message: "Verify your email" });
    }

    const {
      profession,
      title,
      salary,
      requirements,
      jobDescription,
      email,
      location,
    } = req.body;
    if (
      !profession ||
      !title ||
      !salary ||
      !requirements ||
      !jobDescription ||
      !email ||
      !location
    ) {
      return res.status(400).json({ message: "Missing details" });
    }

    const postedJob = await Post.create({
      profession,
      title,
      salary,
      requirements,
      jobDescription,
      postedBy: userId,
      email,
      location,
    });
    return res
      .status(200)
      .json({ success: true, message: "Posted successfuly", postedJob });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetchAllJobs = async (req, res) => {
  try {
    const allJobs = await Post.find({});
    return res
      .status(200)
      .json({ success: true, message: "All Jobs Fetched", allJobs });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const applyForJob = async (req, res) => {
  try {
    const { id } = req.params;
    const applicantId = req.user.id;
    const jobId = id;
    const applicant = await User.findById(applicantId);
    if (applicant.profile === null) {
      return res.status(403).json({
        success: false,
        message: "You do not have profile, create one and try again",
      });
    }
    const job = await Post.findById(jobId);
    if (job.candidate.includes(applicantId)) {
      return res.status(200).json({
        success: false,
        message: "You have an existing application",
        applied: true,
        jobId: jobId,
      });
    }
    job.candidate.push(applicantId);
    job.applicants.push(applicant.profile);
    applicant.appliedJobs.push(jobId);
    applicant.postedJobs.push(jobId);

    await Promise.all([job.save(), applicant.save()]);
    return res
      .status(201)
      .json({ success: true, message: "Application successful", job });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Fetch posted jobs

export const fetchPostedJobs = async (req, res) => {
  const { postIds } = req.body;

  if (!postIds || (typeof postIds !== "string" && !Array.isArray(postIds))) {
    return res
      .status(400)
      .json({ message: "postIds must be a string or array" });
  }

  // Convert to array if it's a single ID
  if (typeof postIds === "string") {
    postIds = [postIds];
  }

  try {
    const objectIds = postIds.map((id) => new mongoose.Types.ObjectId(id));

    const posts = await Post.find({ _id: { $in: objectIds } })
      .select(
        "profession title salary requirements location jobDescription candidate"
      )
      .populate({
        path: "applicants", // Points directly to Profile
        model: "Profile", // Just to be explicit
        select: "cv", // Grab only the CV URL (you can add more fields if needed)
      });

    return res
      .status(200)
      .json({ success: true, message: "Posted jobs fetched", posts });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
