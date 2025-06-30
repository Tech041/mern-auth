import React, { useState } from "react";
import { jobListing } from "../utils/data";

const spanStyle = "font-semibold text-lg py-2";

const SingleJob = () => {
  const [jobItem, setJobItem] = useState(jobListing[0] || {});
  const handleJobId = async (item) => {
    setJobItem(item);
    console.log(jobItem);
  };
  return (
    <section className="w-full min-h-screen pt-20">
      <div className="container">
        <div className="pt-10">
          <div className="">
            <div className="flex  justify-between gap-4">
              <div className="flex-1  ">
                <div className="mt-5">
                  <div className="pt-5 text-xl md:text-3xl font-bold pb-2">
                    {" "}
                    <span className="">Profession:</span> {jobItem.profession}
                  </div>
                  <div className="">
                    {" "}
                    <span className={spanStyle}>Job Title:</span>{" "}
                    {jobItem.title}
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
                    <span className={spanStyle}>Posted</span>:{" "}
                    {jobItem.createdAt}
                  </div>
                  <div className="">
                    <span className={spanStyle}>Contact</span>:{" "}
                    {jobItem.Contact}
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
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
