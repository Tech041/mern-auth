import React, { useContext, useEffect } from "react";
import JobForm from "../components/JobForm";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PostJobs = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  useEffect(() => {
    !userData && navigate("/login");
  }, [userData]);
  return (
    <section className="w-full min-h-screen pt-20">
      <JobForm />
    </section>
  );
};

export default PostJobs;
