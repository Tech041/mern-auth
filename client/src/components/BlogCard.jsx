import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const BlogCard = ({ title, text }) => {
  return (
    <div className="w-full h-[500px] border bg-gradient-to-br from-blue-50 to-white overflow-hidden rounded-md mb-4">
      <div className="w-full h-full flex flex-col justify-center gap-2 ">
        <div className="h-[50%] bg-red-400">
          <img
            src="/medical_team.webp"
            alt="team"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="h-[50%]">
          <div className="px-3 text-gray-500">
            <h1 className="capitalize text-gray-700 font-semibold py-1">{title}</h1>
            <p className="text-sm">{text}</p>
            <div className="flex items-center gap-2 pt-3 italic text-sm ">
              <span className="text-blue-500">Read More</span>{" "}
              <IoArrowForwardSharp size={15} color="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
