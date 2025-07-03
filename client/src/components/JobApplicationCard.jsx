import React, {  useState } from "react";
import ShowCv from "./ShowCv";

const JobApplicationCard = ({ posts }) => {
  const [showCv, setShowCv] = useState(false);

  const handleToggle = () => {
    setShowCv((prev) => !prev);
  };

  return (
    <div className="w-full max-w-xl bg-white border rounded-lg shadow-sm p-5 mx-auto mb-6 transition hover:shadow-md">
      <div className="mb-4 space-y-1">
        <h1 className="text-center py-2 font-semibold text-lg italic">Candidate Job Application</h1>
        <h3 className="text-xl font-semibold text-gray-800 uppercase">
          {posts?.title}
        </h3>
        <p className="text-sm text-gray-600">
          <strong>Location:</strong> {posts?.location}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Salary:</strong> {posts?.salary}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-start sm:items-center gap-3 mt-4">
        <button
          onClick={handleToggle}
          className="px-2 py-1 bg-indigo-600 text-xs text-white rounded-md hover:bg-indigo-700 transition"
        >
          {showCv ? "Hide Resume" : "View Resume"}
        </button>

        {showCv &&
          posts?.applicants?.map((resume) => (
            <div
              key={resume._id}
              className="w-full mt-4 border rounded-md overflow-hidden space-y-2"
            >
              <ShowCv url={resume?.cv?.url} />
              <a
                href={resume?.cv?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-2 py-1 text-center bg-green-600 hover:bg-green-700 text-white italic capitalize text-xs rounded-md"
              >
                Download CV
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobApplicationCard;
