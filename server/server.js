import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/user.auth.route.js";
import userRouter from "./routes/user.profile.route.js";
import helmet from "helmet";
import connectCloudinary from "./config/cloudinary.js";
const app = express();

// DB AND CLOUDINARY CONNECTIONS
connectDB();
connectCloudinary();

// Frontend Url
const allowedOrigins = [
  "https://mernauth-frontend.vercel.app",
  "http://localhost:3000",
];

const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(helmet());

// API ENDPOINTS
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
