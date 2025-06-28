import React from "react";
import JobCard from "./JobCard";
import { motion } from "framer-motion";

const LatestJobPost = () => {
  return (
    <section className="w-full h-full">
      <div className="container">
        <h1 className="capitalize text-lg font-semibold">
          find the perfect healthcare job with us
        </h1>
        <h2 className="">
          Looking for opportunity?{" "}
          <span className="text-blue-500 text-sm italic cursor-pointer">
            Browse all jobs
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <JobCard />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <JobCard />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <JobCard />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <JobCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestJobPost;
