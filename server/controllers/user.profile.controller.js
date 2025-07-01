import User from "../models/user.auth.model.js";
import streamifier from "streamifier";
import { v2 as cloudinary } from "cloudinary";
import Profile from "../models/user.profile.model.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      success: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified,
        profileId: user.profile,
        appliedJobs: user.appliedJobs,
        postedJobs: user.postedJobs,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createProfile = async (req, res) => {
  try {
    const { name, profession, university, nationality, phone, email } =
      req.body;
    const { id } = req.user;
    const user = await User.findById(id);
    if (user.profile !== null) {
      return res
        .status(409)
        .json({ success: false, message: "You have an existing profile" });
    }

    if (
      !name ||
      !profession ||
      !university ||
      !nationality ||
      !phone ||
      !email
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing credentials" });
    }

    // file upload

    const uploadFromBuffer = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "raw", //  'raw' is better for files like PDFs, DOCs, etc.
            folder: "cv", // Optional: Organize under a folder in Cloudinary
          },
          (error, result) => {
            if (result) {
              resolve({
                url: result.secure_url,
                public_id: result.public_id,
              });
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };
    const { url, public_id } = await uploadFromBuffer(req.file.buffer);

    const profile = await Profile.create({
      name,
      profession,
      university,
      nationality,
      phone,
      email,
      cv: { url, public_id },
      user: id,
    });
    user.profile = profile._id;
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      profile,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!profileId) {
      return res
        .status(400)
        .json({ success: false, message: "Profile Id is required" });
    }
    const profile = await Profile.findById(profileId);
    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Profile found", profile });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
