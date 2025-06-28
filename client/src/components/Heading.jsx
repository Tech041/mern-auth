import React from "react";
import { CiWavePulse1 } from "react-icons/ci";

const Heading = ({ text }) => {
  return (
    <h2 className="flex items-center gap-2 uppercase italic text-xl text-blue-500 py-2">
      <CiWavePulse1 size={30} color=" blue" />
      {text}
    </h2>
  );
};

export default Heading;
