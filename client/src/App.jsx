import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import React from "react";

// Dynamic imports.
const Home = React.lazy(() => import("./pages/Home"));
const CreateProfile = React.lazy(() => import("./pages/CreateProfile"));
const Login = React.lazy(() => import("./pages/Login"));
const EmailVerification = React.lazy(() => import("./pages/EmailVerification"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const Register = React.lazy(() => import("./pages/Register"));
const PostJobs = React.lazy(() => import("./pages/PostJobs"));
const Jobs = React.lazy(() => import("./pages/Jobs"));
const Notifications = React.lazy(() => import("./pages/Notifications"));

const App = () => {
  return (
    <main className="w-full h-full">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-jobs" element={<PostJobs />} />
        <Route path="/creeate-profile" element={<CreateProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </main>
  );
};

export default App;
