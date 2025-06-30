import React from "react";
import JobCard from "./JobCard";
import { motion } from "framer-motion";
import { jobListing } from "../utils/data";
import { Link } from "react-router-dom";

const LatestJobPost = () => {
  return (
    <section className="w-full h-full">
      <div className="container">
        <h1 className="capitalize text-lg font-semibold">
          find the perfect healthcare job with us
        </h1>
        <h2 className="">
          Looking for opportunity?{" "}
          <Link
            to={"/jobs"}
            onClick={() => scrollTo(0, 0)}
            className="text-blue-500 text-sm italic cursor-pointer"
          >
            Browse all jobs
          </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {jobListing?.slice(0, 4).map((job) => (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
              key={job.id}
            >
              <JobCard
                title={job.title}
                location={job.location}
                salary={job.salary}
                qualifications={job.qualifications}
                posted={job.createdAt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobPost;
