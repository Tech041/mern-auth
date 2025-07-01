import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";

// Dynamic imports.
const Home = React.lazy(() => import("./pages/Home"));
const CreateProfile = React.lazy(() => import("./pages/CreateProfile"));
const Login = React.lazy(() => import("./pages/Login"));
const EmailVerification = React.lazy(() => import("./pages/EmailVerification"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const Register = React.lazy(() => import("./pages/Register"));
const PostJobs = React.lazy(() => import("./pages/PostJobs"));
const Jobs = React.lazy(() => import("./pages/Jobs"));
const MyProfile = React.lazy(() => import("./pages/MyProfile"));
const SingleJob = React.lazy(() => import("./pages/SingleJob"));
const WhyUs = React.lazy(() => import("./pages/WhyUs"));
const OurBlog = React.lazy(() => import("./pages/OurBlog"));

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-jobs" element={<PostJobs />} />
        <Route path="/job-details/:id" element={<SingleJob />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/our-blog" element={<OurBlog />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/my-profile/:profileId" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
