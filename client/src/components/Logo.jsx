import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <img
        src="/medhunt_logo.webp"
        width={100}
        height={70}
        onClick={() => {
          navigate("/"), scrollTo(0, 0);
        }}
        className="cursor-pointer text-blue-600 font-semibold"
      />
    </div>
  );
};

export default Logo;
