import React, { useState } from "react";
import { jobListing } from "../utils/data";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";

const spanStyle = "font-semibold text-lg py-2";
const JobList = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [jobItem, setJobItem] = useState(jobListing[0] || {});
  const handleJobId = async (item) => {
    setJobItem(item);
    console.log(jobItem);
  };
  const toggleAccordion = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className="w-full h-full">
      <div className="container">
        {/* desktop */}
        <div className="hidden md:block">
          <div className="flex  justify-between gap-4">
            {/* left side for job listing */}
            <div className="flex-1 w-full md:border-r-2">
              {jobListing?.map((item) => (
                <div
                  onClick={() => handleJobId(item)}
                  key={item.id}
                  className={`my-3 py-2 px-2 hover:cursor-pointer ${
                    jobItem.id === item.id
                      ? "bg-gray-100 border-l-2 border-green-500"
                      : ""
                  }`}
                >
                  <div className="font-semibold text-blue-800">
                    {item.profession}
                  </div>
                  <div className="">{item.title}</div>
                  <div className="italic text-sm text-gray-500">
                    ₦ {item.salary}
                  </div>
                </div>
              ))}
            </div>
            {/* right side for display */}
            <div className="flex-1  ">
              <div className="mt-5">
                <div className="pt-5 text-xl md:text-3xl font-bold pb-2">
                  {" "}
                  <span className="">Profession:</span> {jobItem.profession}
                </div>
                <div className="">
                  {" "}
                  <span className={spanStyle}>Job Title:</span> {jobItem.title}
                </div>
                <div className="">
                  <span className={spanStyle}>Salary</span>: ₦{jobItem.salary}
                </div>
                <div className="">
                  <span className={spanStyle}>Qualifications</span>:{" "}
                  {jobItem.qualifications}
                </div>
                <div className="">
                  {" "}
                  <span className={spanStyle}>Job Description</span>:{" "}
                  {jobItem.jobDescription}
                </div>
                <div className="">
                  <span className={spanStyle}>Posted by</span>:{" "}
                  {jobItem.postedBy}
                </div>
                <div className="">
                  <span className={spanStyle}>Posted</span>: {jobItem.createdAt}
                </div>
                <div className="">
                  <span className={spanStyle}>Contact</span>: {jobItem.Contact}
                </div>
                <div className="mt-4 pt-4 flex justify-center mb-4 ">
                  <button className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="block md:hidden">
          {jobListing?.map((item) => (
            <div key={item.id} className="border-b">
              <div
                className="p-4 flex justify-between items-center my-2 cursor-pointer"
                onClick={() => toggleAccordion(item.id)}
              >
                <div>
                  <div className="font-semibold text-blue-800">
                    {item.profession}
                  </div>
                  <div className="text-sm">{item.title}</div>
                </div>
                <span>
                  {openAccordionId === item.id ? (
                    <IoChevronDownOutline size={15} />
                  ) : (
                    <FaAngleUp size={15} />
                  )}
                </span>
              </div>
              {openAccordionId === item.id && (
                <div className="p-4 bg-white text-sm space-y-1">
                  <div>
                    <span className={spanStyle}>Profession:</span>
                    {item.profession}
                  </div>
                  <div>
                    <span className={spanStyle}>Job Title:</span> {item.title}
                  </div>
                  <div>
                    <span className={spanStyle}>Salary:</span> ₦{item.salary}
                  </div>
                  <div>
                    <span className={spanStyle}>Qualifications:</span>{" "}
                    {item.qualifications}
                  </div>
                  <div>
                    <span className={spanStyle}>Job Description:</span>{" "}
                    {item.jobDescription}
                  </div>
                  <div>
                    <span className={spanStyle}>Posted by:</span>{" "}
                    {item.postedBy}
                  </div>
                  <div>
                    <span className={spanStyle}>Posted:</span> {item.createdAt}
                  </div>
                  <div>
                    <span className={spanStyle}>Contact:</span> {item.Contact}
                  </div>
                  <div className="mt-2 text-center">
                    <button className="bg-blue-600 hover:bg-blue-400 text-white px-3 py-2 rounded">
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
