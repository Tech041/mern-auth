import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyProfile = () => {
  const { profileId } = useParams();
  const { fetchProfile, loading, myProfile, } = useContext(AppContext);
  

  useEffect(() => {
    fetchProfile(profileId);
  }, [profileId]);
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 pb-10 px-4">
      <div className="container">
        <div className="pt-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
            My Profile
          </h2>
          <>
            {loading ? (
              <Spinner />
            ) : (
              <div className="space-y-4 ">
                <ProfileItem label="Full Name" value={myProfile?.name} />
                <ProfileItem label="Profession" value={myProfile?.profession} />
                <ProfileItem label="University" value={myProfile?.university} />
                <ProfileItem
                  label="Nationality"
                  value={myProfile?.nationality}
                />
                <ProfileItem label="Phone Number" value={myProfile?.phone} />
                <ProfileItem label="Email Address" value={myProfile?.email} />
                <div className="flex items-center justify-center pt-3">
                  <a
                    href={myProfile?.cv?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 text-white italic capitalize rounded-md"
                  >
                    Download my CV
                  </a>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center  border-b pb-2">
    <span className="flex-1 text-gray-600 font-semibold text-lg capitalize">
      {label}:
    </span>
    <span className="flex-1 text-gray-800 capitalize">
      {value || "Not provided"}
    </span>
  </div>
);

export default MyProfile;
