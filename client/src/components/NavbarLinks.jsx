import React from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { FiHome } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const listStyle =
  "cursor-pointer px-2 flex flex-col justify-center item-center text-primary ";

const NavbarLinks = () => {
  return (
    <nav className="">
      <ul className="flex justify-between items-center gap-3">
        <NavLink to={"/"} onClick={() => scrollTo(0, 0)} className={listStyle}>
          <span className="flex items-center justify-center">
            <FiHome size={20} />
          </span>
          <span className="text-sm">Home</span>
        </NavLink>
        <NavLink
          to={"/about"}
          onClick={() => scrollTo(0, 0)}
          className={listStyle}
        >
          <span className="flex items-center justify-center">
            <FcAbout size={20} color="gray" />
          </span>
          <span className="text-sm">About</span>
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
  );
};

export default NavbarLinks;
