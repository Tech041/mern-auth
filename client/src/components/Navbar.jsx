import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const mobileStyle = "cursor-pointer text-white w-[100px]";
const liStyles =
  "hover:cursor-pointer  text-white  hover:border-b-2 border-orange-500  font-semibold  px-2 ";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useContext(AppContext);

  return (
    <header className=" fixed   h-[80px]  w-full  flex justify-center items-center bg-green-800 z-40">
      <div className="container">
        <div className="flex items-center hover:cursor-pointer">
          {/* logo */}
          <div className="flex-1 flex items-center gap-1 ">
            <Link
              onClick={() => scrollTo(0, 0)}
              to={"/"}
              className="flex  items-center justify-center gap-2"
            >
              <span className=" p-[2px] bg-gradient-to-l  from-green-400 to-orange-600 rounded-full">
                <img
                  src="/logo.webp"
                  loading="lazy"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full "
                />
              </span>
              <span className="text-xl font-bold text-orange-500 hidden md:block   ">
                Cols-nutraceutical
              </span>
            </Link>
          </div>

          {/* nav links */}
          <nav className=" flex justify-between items-center gap-3 flex-[2] relative">
            <div className="flex-[3] hidden md:block ">
              <ul className="flex justify-center items-center gap-5  font-semibold">
                <li className={liStyles}>
                  <Link onClick={() => scrollTo(0, 0)} to={"/"}>
                    Home
                  </Link>
                </li>
                <li className={liStyles}>
                  <Link onClick={() => scrollTo(0, 0)} to={"/about"}>
                    About
                  </Link>
                </li>
                <li className={liStyles}>
                  <Link onClick={() => scrollTo(0, 0)} to={"contact"}>
                    Contact
                  </Link>
                </li>

                <li className={liStyles}>
                  <Link onClick={() => scrollTo(0, 0)} to={"/products"}>
                    Products
                  </Link>
                </li>
                {token && (
                  <li className={liStyles}>
                    <Link onClick={() => scrollTo(0, 0)} to={"/post"}>
                      Post
                    </Link>
                  </li>
                )}

                {!token && (
                  <li className={liStyles}>
                    <Link onClick={() => scrollTo(0, 0)} to="/login">
                      Admin
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex-1 flex  items-center gap-4 justify-end ">
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden z-40 cursor-pointer"
              >
                {isOpen ? (
                  <MdClose color="white" size={30} />
                ) : (
                  <GiHamburgerMenu size={30} color="white" />
                )}
              </div>
            </div>
          </nav>
          {/* Mobile nav */}
          <nav
            className={`${
              isOpen ? "right-0" : "right-[-100%]"
            } md:hidden absolute  top-0 h-screen  w-[50%] bg-orange-500   transition-all duration-700 ease-out z-30`}
          >
            <ul className="text-black mt-20 pt-10 flex flex-col gap-6 items-center font-bold  ">
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                  Home
                </Link>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link onClick={() => scrollTo(0, 0)} to={"/about"} className="">
                  About
                </Link>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/contact"}
                  className=""
                >
                  Contact
                </Link>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/products"}
                  className=""
                >
                  Products
                </Link>
              </li>
              {token && (
                <li
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={mobileStyle}
                >
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    to={"/post"}
                    className=""
                  >
                    Post
                  </Link>
                </li>
              )}
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                {!token && (
                  <Link onClick={() => scrollTo(0, 0)} to="/login">
                    Admin
                  </Link>
                )}
              </li>
            </ul>
            {/* social links */}
            <div className="flex items-center justify-center gap-5 pt-10 ">
              <div className=" bg-blue-700 p-2 rounded-full">
                <a
                  href="https://www.facebook.com/share/1BsrNLBAEd/"
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaFacebookF size={15} color="white" />
                  </span>
                </a>
              </div>

              <div className="bg-white p-2 rounded-full">
                <a
                  href="https://www.instagram.com/kaceefresh"
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaInstagram size={15} color="red" />
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
