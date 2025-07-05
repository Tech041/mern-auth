import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import { formatDistanceToNow } from "date-fns";

const spanStyle = "font-semibold text-lg py-2";

const SingleJob = () => {
  const { jobs } = useContext(AppContext);
  const { id } = useParams();
  const [jobItem, setJobItem] = useState(null);

  useEffect(() => {
    if (jobs.length > 0) {
      const foundJob = jobs.find((job) => job._id === id);
      setJobItem(foundJob);
      
    }
  }, [jobs, id]);

  if (!jobItem) {
    return <Spinner />;
  }

  return (
    <section className="w-full min-h-screen pt-20">
      <div className="container">
        <div className="pt-10">
          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <div className="mt-5">
                <div className="pt-5 text-xl md:text-3xl font-bold pb-2">
                  <span>Profession:</span> {jobItem.profession}
                </div>
                <div>
                  <span className={spanStyle}>Job Title:</span> {jobItem.title}
                </div>
                <div>
                  <span className={spanStyle}>Salary:</span> ₦{jobItem.salary}
                </div>
                <div>
                  <span className={spanStyle}>Qualifications:</span>{" "}
                  {jobItem.requirements}
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
                  <span className={spanStyle}>Contact:</span> {jobItem.email}
                </div>
                <div className="mt-4 pt-4 flex justify-center mb-4">
                  <button className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-md">
                    Apply Now
                  </button>
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
