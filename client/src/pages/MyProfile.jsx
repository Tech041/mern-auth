import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AppContext } from "../context/AppContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import apiRequest from "../utils/apiRequest";
import ShowCv from "../components/ShowCv";
import JobApplicationCard from "../components/JobApplicationCard";
import ProfileItem from "../components/ProfileItem";

const MyProfile = () => {
  const { profileId } = useParams();
  const { fetchProfile, loading, myProfile, userData } = useContext(AppContext);

  const [expanded, setExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [detail, setDetail] = useState(true);
  const [postedJob, setPostedJob] = useState([]);

  const handleToggle = () => {
    setShowCv((prev) => !prev);
  };

  const handleToggleDetail = () => {
    setDetail((prev) => !prev);
  };

  const fetchPostedJobs = async () => {
    const postedJobs = userData?.postedJobs;

    try {
      const { data } = await apiRequest.post("/api/posted-jobs", {
        postIds: postedJobs,
      });

      if (data.success) {
        setPostedJob(data.posts);
        console.log("Fetched users:", data);
      }
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  useEffect(() => {
    fetchProfile(profileId);
  }, [profileId, showCv]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (label) => {
    setExpanded(expanded === label ? null : label);
  };

  const profileFields = [
    { label: "Full Name", value: myProfile?.name },
    { label: "Profession", value: myProfile?.profession },
    { label: "University", value: myProfile?.university },
    { label: "Nationality", value: myProfile?.nationality },
    { label: "Phone Number", value: myProfile?.phone },
    { label: "Email Address", value: myProfile?.email },
  ];

  return (
    <section className="min-h-screen bg-gray-100 pt-28 pb-10  flex justify-center items-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-2 text-center text-indigo-700">
          User Dashboard
        </h2>
        <hr className="border-t-2 border-indigo-200 w-24 mx-auto mb-6" />

        {loading ? (
          <Spinner />
        ) : (
          <div className="space-y-4">
            {profileFields.map(({ label, value }) =>
              isMobile ? (
                <div
                  key={label}
                  className="border rounded-md bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(label)}
                    className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 text-left text-gray-700 font-semibold capitalize"
                  >
                    <span>{label}</span>
                    {expanded === label ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {expanded === label && (
                    <div className="px-4 py-2 text-gray-800 capitalize border-t">
                      {value || "Not provided"}
                    </div>
                  )}
                </div>
              ) : (
                <ProfileItem key={label} label={label} value={value} />
              )
            )}

            <div className="text-gray-700 italic capitalize">
              <p>
                Applied Jobs
                <span className="font-bold pl-2">
                  {userData?.appliedJobs.length}
                </span>
              </p>
            </div>

            <div className="text-gray-700 italic capitalize">
              <p>
                Posted Jobs
                <span className="font-bold pl-2">
                  {userData?.postedJobs.length}
                </span>
                {detail ? (
                  <button
                    onClick={() => {
                      fetchPostedJobs();
                      handleToggleDetail();
                    }}
                    className="ml-3 px-2 py-1 text-sm bg-black text-white rounded"
                  >
                    see details
                  </button>
                ) : (
                  <button
                    onClick={handleToggleDetail}
                    className="ml-3 px-2 py-1 text-xs bg-black text-white rounded"
                  >
                    close
                  </button>
                )}
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleToggle}
                className="px-2 py-1 bg-indigo-600 text-xs text-white rounded-md hover:bg-indigo-700 transition"
              >
                {showCv ? "Hide my Resume" : "View my Resume"}
              </button>
            </div>

            {showCv && (
              <div className="w-full mt-4 border rounded-md overflow-hidden">
                <ShowCv url={myProfile?.cv?.url} />
              </div>
            )}

            <div className="flex justify-center pt-1">
              <a
                href={myProfile?.cv?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white italic capitalize text-xs rounded-md"
              >
                Download my Resume
              </a>
            </div>
          </div>
        )}
        {!detail && (
          <div className="w-full h-full pt-5">
            {postedJob?.map((job) => (
              <JobApplicationCard key={job._id} posts={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
