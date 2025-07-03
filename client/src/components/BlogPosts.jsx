import React from "react";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full h-full"
      >
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
      </motion.div>
    </div>
  );
};

export default BlogPosts;
