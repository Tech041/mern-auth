import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

const JobCard = () => {
  return (
    <div className="flex items-center gap-3 border bg-gray-50 rounded-lg px-4 py-3 shadow-lg">
      <div className="w-[20%]">
        <img
          src="/medical.webp"
          alt="medical_logo"
          className="w-[90%] h-[50px]"
        />
      </div>
      <div className="w-[80%]">
        <h2 className="">Medical Doctor-General practitioner</h2>
        <div className="flex items-center text-gray-500 gap-2 text-sm">
          <div className="flex items-center justify-center gap-2 py-1">
            <LuBuilding2 size={10} /> <span className="text-xs">Public</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <IoLocationSharp size={10} />{" "}
            <span className="text-xs">Enugu</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaRegClock size={10} /> <span className="text-xs">11hr ago</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 pt-2">
          MBBS or equivalent board certificate and minimum of 5 years of
          experience.
        </p>
      </div>
    </div>
  );
};

export default JobCard;
