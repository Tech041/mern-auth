import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.auth.model.js";
import transpoter from "../config/nodemailer.js";
import {
  EMAIL_VERIFY_TEMPLATE,
  PASSWORD_RESET_TEMPLATE,
} from "../config/emailTemplate.js";

// Register User
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete credentials" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(201)
      .json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// Login User
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      // secure: process.env.NODE_ENV === "production",

      // sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
// Logout User
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// Sending verification OTP to users
export const sendVerifyOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (user.isAccountVerified) {
      return res
        .status(200)
        .json({ success: false, message: "Account already verified" });
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;

    // set expiry to 5mins
    user.verifyOtpExpiredAt = Date.now() + 5 * 60 * 1000;
    await user.save();

    // SENDING OTP TO USER
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "ACCOUNT VERIFICATION OTP",
      // text: `Your OTP is ${otp}. Verify your account now. This OTP expires in 5 minutes`,
      html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace(
        "{{email}}",
        user.email
      ),
    };
    await transpoter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Verification OTP sent on email",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// VERIFYING THE EMAIL USING OTP

export const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp) {
    return res.status(400).json({ success: false, message: "Missing details" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (user.verifyOtpExpiredAt < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP Expired" });
    }

    user.isAccountVerified = true;
    (user.verifyOtp = ""), (user.verifyOtpExpiredAt = 0);
    await user.save();

    // Sending welcome email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "MedHunt Healthcare Job Portal.",
      text: `Dear ${user.name} your  account with ${user.email} has  been verified. When creating a profile, use this same email address. We promise to serve you better.`,
    };
    await transpoter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// Check if user is authenticated not need now. commented it out in frontend

export const isAuthenticated = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// SEND PASSWORD RESET OTP

export const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.resetOtp = otp;

    // set expiry to 10mins
    user.resetOtpExpiredAt = Date.now() + 10 * 60 * 1000;
    4;
    await user.save();

    // SENDING OTP TO USER
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "PASSWORD RESET OTP",
      // text: `Your OTP is ${otp}. Reset your password now. This OTP expires in 10 minutes`,
      html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace(
        "{{email}}",
        user.email
      ),
    };
    await transpoter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Password Reset OTP sent on email",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// Reset user password
export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    return res.status(403).json({
      success: false,
      message: "Email,OTP and new Password are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (user.resetOtp === "" || user.resetOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    if (user.resetOtpExpiredAt < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP has expired" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedNewPassword;
    user.resetOtp = "";
    user.resetOtpExpiredAt = 0;
    await user.save();
    return res
      .status(201)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
