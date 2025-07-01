import React, { useContext, useEffect } from "react";
import JobForm from "../components/JobForm";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PostJobs = () => {
  const navigate = useNavigate();
  const { userData, isLoading } = useContext(AppContext);
  useEffect(() => {
    if (!isLoading && userData === null) {
      navigate("/login");
    }
  }, [userData, isLoading]);

  return (
    <section className="w-full min-h-screen pt-20">
      <JobForm />
    </section>
  );
};

export default PostJobs;
