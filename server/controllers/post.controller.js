import Post from "../models/post.model.js";

export const postJob = async (req, res) => {
  try {
    const { id } = req.user;
    const userId = id;

    const { profession, title, salary, requirements, jobDescription, email } =
      req.body;
    if (
      !profession ||
      !title ||
      !salary ||
      !requirements ||
      !jobDescription ||
      !email
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
