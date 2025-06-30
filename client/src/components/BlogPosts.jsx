import React from "react";

const BlogPosts = ({
  src,
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  paragraph3,
}) => {
  return (
    <div className="w-full h-full border-b-2 pb-4 my-4">
      <div className="flex flex-col md:flex-row   gap-4">
        <div className="flex-1 h-full w-full">
          <img src={src} alt="" className="w-full h" />
        </div>
        <div className="flex-1 h-full w-full">
          <h2 className="text-lg font-semibold text-blue-600 capitalize">
            {heading1}
          </h2>
          <p className="">{paragraph1}</p>
          <h2 className="text-lg font-semibold text-blue-600 capitalize">
            {heading2}
          </h2>
          <p className="">{paragraph2}</p>
          <p
            className="flex justify-end italic text-sm text-gray-500
          "
          >
            {paragraph3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
