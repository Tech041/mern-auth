import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const CategoryCard = ({
  className1,
  className2,
  title,
  paragraph,
  path,
  text,
}) => {
  return (
    <div className={className1}>
      {/* wrapper */}
      <div className="flex  justify-center gap-3 items-center">
        <div className="">
          <div className={className2}>
            <span className="">
              <IoStarSharp size={25} />
            </span>
            <span className="absolute top-[-8px] right-2">
              <IoStarSharp size={15} />
            </span>
          </div>
        </div>
        <h2 className="uppercase  text-lg font-semibold">{title}</h2>
      </div>
      <div className="">
        <p className="flex justify-center items-center">{paragraph}</p>
        <div className="pt-3">
          <Link onClick={() => scrollTo(0, 0)} to={path}>
            <button className=" flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-600 border px-4 py-1  text-sm">
              {text}
              <img src={assets.arrow_icon} alt="" className="arrow_icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
