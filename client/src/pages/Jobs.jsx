import React from "react";
import JobHeader from "../components/JobHeader";
import JobList from "../components/JobList";

const Jobs = () => {
  return (
    <main className="pt-20 w-full min-h-screen">
      <JobHeader />
      <JobList />
    </main>
  );
};

export default Jobs;
