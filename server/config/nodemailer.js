import nodemailer from "nodemailer";

const transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure:true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});
export default transpoter;
