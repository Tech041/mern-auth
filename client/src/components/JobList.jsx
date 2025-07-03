import React, { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { formatDistanceToNow } from "date-fns";

import Spinner from "./Spinner";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const spanStyle = "font-semibold text-lg py-2";

const JobList = () => {
  const { jobIsLoading, jobItem, jobs, fetchAllJobs, setJobItem, applyForJob } =
    useContext(AppContext);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  console.log("Jobitem id id ", jobItem && jobItem._id);
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleJobId = (item) => {
    setJobItem(item);
  };

  const toggleAccordion = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full h-full">
      <div className="container">
        {/* Desktop view */}
        {jobIsLoading ? (
          <Spinner />
        ) : (
          <div className="hidden md:block">
            <div className="flex justify-between gap-4">
              {/* Job list */}
              <div className="flex-1 max-h-screen overflow-y-auto  md:border-r-2">
                {jobs.map((item) => (
                  <div
                    onClick={() => handleJobId(item)}
                    key={item._id}
                    className={`my-3 py-2 px-2 hover:cursor-pointer ${
                      jobItem?._id === item._id
                        ? "bg-gray-100 border-l-2 border-green-500"
                        : ""
                    }`}
                  >
                    <div className="font-semibold text-blue-800">
                      {item?.profession}
                    </div>
                    <div>{item?.title}</div>
                    <div className="italic text-sm text-gray-500">
                      ₦ {item?.salary}
                    </div>
                  </div>
                ))}
              </div>

              {/* Job details */}
              <div className="flex-1  max-h-screen overflow-y-auto ">
                {jobItem && (
                  <div className="mt-5">
                    <div className="pt-5 text-xl md:text-3xl font-bold pb-2">
                      <span>Profession:</span> {jobItem.profession}
                    </div>
                    <div>
                      <span className={spanStyle}>Job Title:</span>{" "}
                      {jobItem.title}
                    </div>
                    <div>
                      <span className={spanStyle}>Salary:</span> ₦
                      {jobItem.salary}
                    </div>
                    <div>
                      <span className={spanStyle}>Qualifications:</span>{" "}
                      {jobItem.qualifications}
                    </div>
                    <div>
                      <span className={spanStyle}>Job Description:</span>{" "}
                      {jobItem.jobDescription}
                    </div>
                    {/* <div>
                      <span className={spanStyle}>Posted by:</span>{" "}
                      {jobItem.postedBy}
                    </div> */}
                    <div>
                      <span className={spanStyle}>Posted:</span>{" "}
                      {formatDistanceToNow(new Date(jobItem.createdAt), {
                        addSuffix: true,
                      })}
                    </div>
                    <div>
                      <span className={spanStyle}>Contact:</span>{" "}
                      {jobItem.email}
                    </div>
                    <div className="mt-4 pt-4 flex justify-center mb-4">
                      <button
                        onClick={() => applyForJob(jobItem._id)}
                        className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-md"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile view */}
        {jobIsLoading ? (
          <Spinner />
        ) : (
          <div className="block md:hidden">
            {jobs.map((item) => (
              <div key={item._id} className="border-b">
                <div
                  className="p-4 flex justify-between items-center my-2 cursor-pointer"
                  onClick={() => toggleAccordion(item._id)}
                >
                  <div>
                    <div className="font-semibold text-blue-800">
                      {item.profession}
                    </div>
                    <div className="text-sm">{item.title}</div>
                  </div>
                  <span>
                    {openAccordionId === item._id ? (
                      <IoChevronDownOutline size={15} />
                    ) : (
                      <FaAngleUp size={15} />
                    )}
                  </span>
                </div>

                {openAccordionId === item._id && (
                  <div className="p-4 bg-white text-sm space-y-1">
                    <div>
                      <span className={spanStyle}>Profession:</span>{" "}
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
                    {/* <div>
                      <span className={spanStyle}>Posted by:</span>{" "}
                      {item.postedBy}
                    </div> */}
                    <div>
                      <span className={spanStyle}>Posted:</span>{" "}
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}
                    </div>
                    <div>
                      <span className={spanStyle}>Contact:</span> {item.email}
                    </div>
                    <div className="mt-2 text-center">
                      <button
                        onClick={() => applyForJob(item._id)}
                        className="bg-blue-600 hover:bg-blue-400 text-white px-3 py-2 rounded"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;
