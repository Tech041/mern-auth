import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-black  text-white h-full" id="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-14  text-sm">
          <div className="">
            <div className="">
              <div className="p-2">
                <a href="#home" className="">
                  <img
                    src="/medhunt_logo.webp"
                    alt=""
                    className="w-[70px] h-[60px] rounded-md "
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <p className=" capitalize text-xl font-medium mb-5 pt-5 text-gray-300 ">
              company
            </p>
            <ul className="flex flex-col gap-1 text-gray-400">
              <li className="cursor-pointer py-1">
                <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"/about"} onClick={() => scrollTo(0, 0)} className="">
                  About
                </Link>
              </li>
              <li className="cursor-pointer py-1">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/contact"}
                  className=""
                >
                  Contact Us
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/products"}
                  className=""
                >
                  Careers
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/products"}
                  className=""
                >
                  Privacy Policy
                </Link>
              </li>{" "}
              <li className="cursor-pointer">
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/products"}
                  className=""
                >
                  Terms Of Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className=" capitalize text-xl font-medium mb-5 text-gray-300 ">
              For professionals
            </p>
            <div className="">
              <div className="flex  items-center ">
                <ul className="flex flex-col gap-1 text-gray-400">
                  <li className="cursor-pointer py-1">
                    <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                      Browse Jobs
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      to={"/about"}
                      onClick={() => scrollTo(0, 0)}
                      className=""
                    >
                      Create Profile
                    </Link>
                  </li>
                  <li className="cursor-pointer py-1">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/contact"}
                      className=""
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/products"}
                      className=""
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/products"}
                      className=""
                    >
                      Privacy Policy
                    </Link>
                  </li>{" "}
                  <li className="cursor-pointer">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/products"}
                      className=""
                    >
                      Terms Of Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <p className=" capitalize text-xl font-medium mb-5 text-gray-300 ">
              For organizations
            </p>
            <div className="">
              <div className="flex  items-center ">
                <ul className="flex flex-col gap-1 text-gray-400">
                  <li className="cursor-pointer py-1">
                    <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                      Employer's Login
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      to={"/about"}
                      onClick={() => scrollTo(0, 0)}
                      className=""
                    >
                      Employer's Dashboard
                    </Link>
                  </li>
                  <li className="cursor-pointer py-1">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/contact"}
                      className=""
                    >
                      Post Job
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/products"}
                      className=""
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/products"}
                      className=""
                    >
                      Privacy Policy
                    </Link>
                  </li>{" "}
                  <li className="cursor-pointer">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/products"}
                      className=""
                    >
                      Terms Of Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <p className=" capitalize text-xl font-medium mb-5 text-gray-300 ">
            Contact Us
          </p>
          <div className="">
            <div className="flex  items-center ">
              <div className="flex items-center justify-center gap-3 ">
                <div className="">
                  <a
                    href="https://www.facebook.com/share/1BsrNLBAEd/"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <FaFacebookF size={20} color="white" />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://www.instagram.com/kaceefresh"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <FaInstagram size={20} color="white" />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://www.tiktok.com/@kaceefresh1"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <FaTiktok size={20} color="white" />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://x.com/kaceefresh"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <RiTwitterXLine size={20} color="white" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs text-center  ">
            Copyright &copy;MedHunt {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
