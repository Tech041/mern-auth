import React, { useContext } from "react";
import JobHeader from "../components/JobHeader";
import JobList from "../components/JobList";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Jobs = () => {
  const { setSearch } = useContext(AppContext);
  return (
    <main className="pt-20 w-full min-h-screen">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <JobHeader setSearch={setSearch} />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <JobList />
      </motion.div>
    </main>
  );
};

export default Jobs;
