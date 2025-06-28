import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { assets } from "../assets/assets";

const CategoryCard = ({ className1, className2,title, text }) => {
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
        <h2 className="uppercase  text-lg font-semibold">
          {title}
        </h2>
      </div>
      <div className="">
        <p className="flex justify-center items-center">
          Choose us as your trusted partner and experience a transformative
          approach to connecting healthcare facilities with top-tier
          professionals.
        </p>
        <div className="pt-3">
          <button className=" flex items-center gap-2 bg-white text-gray-600 border px-4 py-1  text-sm">
            {text}
            <img src={assets.arrow_icon} alt="" className="arrow_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
