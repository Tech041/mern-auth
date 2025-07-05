import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import apiRequest from "../utils/apiRequest";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const { userData, setUserData, sendVerificationOtp, navigate } =
    useContext(AppContext);
  const profileId = userData?.profileId;

  const logout = async () => {
    try {
      const { data } = await apiRequest.post("/api/auth/logout");
      data.success && setUserData(null);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header className=" fixed w-full h-[100px]  flex items-center  bg-gray-50 z-20 ">
      <div className="container">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <Logo />
          <div className="hidden md:flex justify-center items-center ">
            <NavbarLinks />
          </div>
          {/* Mobile menu */}
          <div
            className={` block md:hidden w-[70%] h-screen absolute z-30 bg-gray-200 top-0 transition-all duration-500 ease-in-out ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <nav className=" mt-10 pt-10 flex justify-center">
              <ul className="flex flex-col justify-center items-center gap-6 font-bold">
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/about"}>About</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/jobs"}>Jobs</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/post-jobs"}>Post Jobs</Link>
                </li>

                {/* {userData?.profileId === null ? (
                  <li
                    onClick={() => {
                      setOpen((prev) => !prev), scrollTo(0, 0);
                    }}
                    className=""
                  >
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={`/create-profile`}
                    >
                      Create Profile
                    </Link>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      setOpen((prev) => !prev), scrollTo(0, 0);
                    }}
                    className=""
                  >
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={`/my-profile/${profileId}`}
                    >
                      My Profile
                    </Link>
                  </li>
                )} */}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {userData ? (
              <div className="h-5 flex justify-center items-center cursor-pointer  text-blue-700 rounded-md  relative group">
                {userData?.profileId === null ? (
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    to={`/create-profile`}
                    className="text-base  px-3 py-1 border-2 border-blue-500 rounded-md z-20"
                  >
                    Create profile
                  </Link>
                ) : (
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    to={`/my-profile/${profileId}`}
                    className="text-base  px-3 py-1 border-2 border-blue-500 rounded-md z-20"
                  >
                    My profile
                  </Link>
                )}
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                  <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
                    {!userData?.isAccountVerified && (
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
                  onClick={() => {
                    navigate("/register"), scrollTo(0, 0);
                  }}
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
            <div
              onClick={handleToggle}
              className="block md:hidden z-40 cursor-pointer "
            >
              {open ? (
                <IoMdClose color="blue" size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
