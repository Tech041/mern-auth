import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { FiHome } from "react-icons/fi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import apiRequest from "../utils/apiRequest";

const listStyle =
  "cursor-pointer px-2 flex flex-col justify-center item-center text-primary ";
const Navbar = () => {
  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);
  const navigate = useNavigate();
  const sendVerificationOtp = async () => {
    try {
      const { data } = await apiRequest.post(
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
      const { data } = await apiRequest.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <header className=" fixed w-full h-[100px]  flex items-center  bg-gray-50 z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="">
            <img
              src="/medhunt_logo.webp"
              width={100}
              height={70}
              onClick={() => {
                navigate("/"), scrollTo(0, 0);
              }}
              className="cursor-pointer text-blue-600 font-semibold"
            />
          </div>{" "}
          <div className="hidden md:flex justify-center items-center ">
            <nav className="">
              <ul className="flex justify-between items-center gap-3">
                <NavLink
                  to={"/"}
                  onClick={() => scrollTo(0, 0)}
                  className={listStyle}
                >
                  <span className="flex items-center justify-center">
                    <FiHome size={20} />
                  </span>
                  <span className="text-sm">Home</span>
                </NavLink>
                <NavLink
                  onClick={() => scrollTo(0, 0)}
                  to={"/jobs"}
                  className={listStyle}
                >
                  <span className="flex items-center justify-center">
                    <BsFillBoxSeamFill size={20} />
                  </span>
                  <span className="text-sm">Jobs</span>
                </NavLink>
                <NavLink
                  onClick={() => scrollTo(0, 0)}
                  to={"/post-jobs"}
                  className={listStyle}
                >
                  <span className="flex items-center justify-center">
                    <AiFillMedicineBox size={20} />
                  </span>
                  <span className="text-sm">Post a job</span>
                </NavLink>
              </ul>
            </nav>
          </div>
          <div className="">
            {userData ? (
              <div className="h-5 flex justify-center items-center cursor-pointer  text-blue-700 rounded-md  relative group">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/my-profile"}
                  className="text-base  px-3 py-1 border-2 border-blue-500 rounded-md z-20"
                >
                  My profile
                </Link>{" "}
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                  <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
                    {!userData.isAccountVerified && (
                      <li
                        onClick={sendVerificationOtp}
                        className="py-1 px-2 hover:bg-gray-200 text-green-500 cursor-pointer"
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
              <div className="flex items-center ">
                <button
                  onClick={() => navigate("/register")}
                  className="flex items-center gap-2 border border-blue-500  px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Login{" "}
                  <img
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                    className="w-2"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
