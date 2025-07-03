const ProfileItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row justify-between border-b py-3 px-2 hover:bg-gray-50 transition">
    <span className="text-gray-600 font-medium capitalize">{label}</span>
    <span className="text-gray-900 font-semibold">
      {value || "Not provided"}
    </span>
  </div>
);
export default ProfileItem;
