import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  axios.defaults.withCredentials = true;
  const { backendUrl } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigate = useNavigate();
  const inputRefs = React.useRef([]);

  // Function for handling Input
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  // Function for handling delete using backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  // Function for handling automatic input filling
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };
  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-reset-otp",
        {
          email,
        }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  // function for submitting otp
  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSent(true);
  };
  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/reset-password",
        { email, otp, newPassword }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-white pt-20">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="w-96">
            <div className="flex justify-center items-center w-full ">
              {/* For adding email id */}
              {!isEmailSent && (
                <form
                  onSubmit={onSubmitEmail}
                  className="bg-slate-900 p-8 rounded-lg shadow-lg w-full  text-sm"
                >
                  <h1 className="text-white text-2xl font-semibold text-center mb-4">
                    Reset Password
                  </h1>
                  <p className="text-center mb-6 text-indigo-300">
                    Enter your registered Email Address.
                  </p>
                  <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                    <img
                      src={assets.mail_icon}
                      alt="password_reset_icon"
                      className="w-3 h-3"
                    />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="bg-transparent outline-none text-white w-full"
                      placeholder="Email ID"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3"
                  >
                    Submit
                  </button>
                </form>
              )}
              {/* OTP input form */}
              {!isOtpSent && isEmailSent && (
                <form
                  onSubmit={onSubmitOtp}
                  className="bg-slate-900 p-8 rounded-lg shadow-lg w-full text-sm"
                >
                  <h1 className="text-white text-2xl font-semibold text-center mb-4">
                    Reset Password OTP
                  </h1>
                  <p className="text-center mb-6 text-indigo-300">
                    Enter the 6 digits code sent to your Email ID
                  </p>
                  <div
                    className="flex justify-between mb-8"
                    onPaste={handlePaste}
                  >
                    {Array(6)
                      .fill(0)
                      .map((_, index) => (
                        <input
                          type="text"
                          className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
                          maxLength="1"
                          key={index}
                          required
                          ref={(e) => (inputRefs.current[index] = e)}
                          onInput={(e) => handleInput(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      ))}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full"
                  >
                    Submit
                  </button>
                </form>
              )}
              {/* Form for new password */}
              {isOtpSent && isEmailSent && (
                <form
                  onSubmit={onSubmitNewPassword}
                  className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
                >
                  <h1 className="text-white text-2xl font-semibold text-center mb-4">
                    New Password
                  </h1>
                  <p className="text-center mb-6 text-indigo-300">
                    Enter your new password
                  </p>
                  <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                    <img
                      src={assets.lock_icon}
                      alt="password_reset_icon"
                      className="w-3 h-3"
                    />
                    <input
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                      type="password"
                      className="bg-transparent outline-none text-white"
                      placeholder="Enter your new password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
