import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <section className="w-full h-[400px] py-8 px-4 rounded-md ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full h-full"
      >
        <div className="container">
          <div className="  bg-gradient-to-tr from-indigo-200 to-white px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-6 rounded-md">
            {/* Left Content */}
            <div className="flex-1 w-full text-center md:text-left space-y-4">
              <Heading text="stay informed, stay empowered" />
              <h2 className="text-xl md:text-2xl font-semibold uppercase text-gray-700">
                Subscribe to our newsletter
              </h2>
              <p className="text-sm text-gray-600 max-w-md">
                Join our community and stay ahead in healthcare staffing with
                our informative newsletter.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full relative"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  className="w-full pr-28 pl-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 bg-black text-white rounded hover:bg-opacity-80 transition text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full hidden md:block ">
              <img
                src="/news_img.webp"
                alt="team_image"
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsLetter;
