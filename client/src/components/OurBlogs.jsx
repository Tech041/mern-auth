import React from "react";
import BlogCard from "./BlogCard";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurBlogs = () => {
  return (
    <section className="w-full h-full mt-5">
      <div className="container">
        <div className="flex flex-col md:flex-row  gap-3">
          {/* wrapper */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex-1  w-full h-full pt-5"
          >
            <Heading text={"OUR BLOGS"} />
            <h1 className="text-lg md:text-xl font-semibold uppercase py-3">
              explore insights and innovations in healthcare staffing
            </h1>
            <p className="text-gray-600 text-sm pt-4">
              Dive into emerging trends, data-driven strategies, and creative
              solutions that are reshaping healthcare staffing. Discover how
              technology, expertise, and innovation are transforming care
              delivery and workforce optimization
            </p>
            <div className="mt-3 py-3">
              <Link onClick={() => scrollTo(0, 0)} to={"/our-blog"}>
                <button className=" text-base text-white capitalize bg-black hover:bg-black/70 px-4 py-1 rounded-md">
                  View all
                </button>
              </Link>
            </div>
          </motion.div>
          <div className="flex-1  w-full h-full">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <BlogCard
                src={"/health_team3.webp"}
                title={"Navigating healthcare hiriing challenges"}
                text={
                  " Addressing healthcare hiring challenges requires agility,strategic outreach, and innovation. From talent shortages to evolving care demands, success lies in adapting recruitment methods, leveraging tech-driven solutions."
                }
              />
            </motion.div>
          </div>
          <div className="flex-1  w-full h-full">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <BlogCard
                src={"/health_team2.webp"}
                title={"the rise of global opportunities"}
                text={
                  "As borders blur in the digital age, global opportunities are on the rise—enabling professionals and organizations to collaborate, innovate, and scale across continents. From remote work to cross-border partnerships, the world is becoming one interconnected marketplace of potential."
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
