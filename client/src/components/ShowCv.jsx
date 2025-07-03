import React from "react";

const ShowCv = ({ url }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <iframe
        src={`https://docs.google.com/gview?url=${encodeURIComponent(
          url
        )}&embedded=true`}
        style={{ width: "100%", height: "600px", border: "none" }}
        title="CV Preview"
      />
    </div>
  );
};

export default ShowCv;
