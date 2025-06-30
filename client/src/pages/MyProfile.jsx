import React from "react";
import { user } from "../utils/data";

const MyProfile = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 pb-10  px-4">
      <div className="container">
        <div className="pt-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">
            User Profile
          </h2>
          <div className="space-y-4">
            <ProfileItem label="Full Name" value={user.name} />
            <ProfileItem label="Profession" value={user.profession} />
            <ProfileItem label="University" value={user.university} />
            <ProfileItem label="Nationality" value={user.nationality} />
            <ProfileItem label="Phone Number" value={user.phone} />
            <ProfileItem label="Email Address" value={user.email} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2">
    <span className="text-gray-600 font-semibold text-lg">{label}:</span>
    <span className="text-gray-800">{value || "Not provided"}</span>
  </div>
);

export default MyProfile;
