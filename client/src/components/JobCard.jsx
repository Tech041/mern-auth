import React from "react";
import { PiMoneyWavyBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ title, location, salary, posted,  id }) => {
  return (
    <Link
      to={`/job-details/${id}`}
      onClick={() => scrollTo(0, 0)}
      className="flex items-center gap-3 border bg-gray-50 rounded-lg px-4 py-3 shadow-lg"
    >
      <div className="w-[20%]">
        <img
          src="/hiring_img.webp"
          alt="medical_logo"
          className="w-full h-[70px]"
        />
      </div>
      <div className="w-[80%]">
        <h2 className="">{title}</h2>
        <div className="flex items-center text-gray-500 gap-2 text-sm">
          <div className="flex items-center justify-center gap-2 py-1">
            <IoLocationSharp size={10} />{" "}
            <span className="text-xs">{location}</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <PiMoneyWavyBold size={10} />{" "}
            <span className="text-xs"> ₦{salary}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaRegClock size={10} /> <span className="text-xs">{posted}</span>
          </div>
        </div>
        {/* <p className="text-xs text-gray-600 pt-2">{qualifications}</p> */}
      </div>
    </Link>
  );
};

export default JobCard;
