import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FiHome } from "react-icons/fi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const listStyle =
  "cursor-pointer px-2 flex flex-col justify-center item-center text-primary ";
const Navbar = () => {
  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);
  const navigate = useNavigate();
  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verification");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
   <header className="fixed top-0 left-0 w-full h-[80px] flex items-center bg-gray-50 z-20 shadow-sm overflow-y-hidden overflow-x-hidden">
  <div className="container">
    <div className="flex justify-between items-center w-full">
      {/* Logo */}
      <div className="flex-shrink-0">
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer text-blue-600 font-semibold text-lg md:text-xl"
        >
          MedHunt
        </span>
      </div>

      {/* Nav Links (Desktop Only) */}
      <nav className="hidden md:flex items-center">
        <ul className="flex gap-4 items-center">
          <NavLink to="/" className={listStyle}>
            <span className="flex justify-center">
              <FiHome size={20} />
            </span>
            <span className="text-sm">Home</span>
          </NavLink>
          <NavLink to="/jobs" className={listStyle}>
            <span className="flex justify-center">
              <BsFillBoxSeamFill size={20} />
            </span>
            <span className="text-sm">Jobs</span>
          </NavLink>
          <NavLink to="/post-jobs" className={listStyle}>
            <span className="flex justify-center">
              <AiFillMedicineBox size={20} />
            </span>
            <span className="text-sm">Post a job</span>
          </NavLink>
          <NavLink to="/notifications" className={listStyle}>
            <span className="flex justify-center">
              <IoMdNotificationsOutline size={25} />
            </span>
            <span className="text-sm">Notifications</span>
          </NavLink>
        </ul>
      </nav>

      {/* Auth Section */}
      <div className="flex items-center">
        {userData ? (
          <div className="relative group">
            <span className="text-base px-3 py-1 border-2 border-blue-500 text-blue-700 rounded-md cursor-pointer whitespace-nowrap">
              My profile
            </span>
            <div className="absolute hidden group-hover:block top-3 right-3 mt-2 z-30 text-sm  ">
              <ul className="list-none p-2">
                {!userData.isAccountVerified && (
                  <li
                    onClick={sendVerificationOtp}
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Verify Email
                  </li>
                )}
                <li
                  onClick={logout}
                  className="py-1 px-2 hover:bg-gray-200 text-red-600 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/register")}
            className="flex items-center gap-2 border border-blue-500 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md whitespace-nowrap"
          >
            Login
            <img src={assets.arrow_icon} alt="arrow" className="w-2" />
          </button>
        )}
      </div>
    </div>
  </div>
</header>
  );
};

export default Navbar;
