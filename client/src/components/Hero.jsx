import React from "react";
import TrustedBy from "./TrustedBy";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" w-full  pb-5 pt-20 ">
      <div className="container">
        {/* wrapper div */}
        <div className=" w-full h-full flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex-1 h-full w-full flex flex-col gap-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl uppercase text-center lg:text-start ">
                Your <span className="text-blue-500 italic">trusted</span>{" "}
                partner in healthcare staffing{" "}
                <span className="text-blue-500 italic">solutions</span>.
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h3 className="py-4 text-center lg:text-start">
                Our platform servers as a seamless bridge, connecting private
                and public health care service providers with skilled health
                care workers.
              </h3>
            </motion.div>

            <div className="text-center lg:text-start">
              <Link to={"/jobs"}>
                <button className=" bg-blue-600 text-white border px-4 py-1 hover:bg-blue-500 rounded-md">
                  Get started
                </button>
              </Link>
            </div>
            <div className="text-center lg:text-start">
              <TrustedBy />
            </div>
          </div>
          <div className="flex-1 h-full w-full">
            <img
              src="/health_team3.webp"
              alt="hero_image"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* card */}

        <div className="flex flex-col md:flex-row  justify-between gap-4 mt-5 pt-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <CategoryCard
              className1={
                "h-full w-full px-5 border  bg-blue-50 rounded-lg p-5"
              }
              paragraph={
                "Choose us as your trusted and dedicated partner in uniting healthcare providers with world-class professionals—where precision meets care."
              }
              path={"/create-profile"}
              className2={"relative w-10 text-blue-600 "}
              title={"healthcare professionals"}
              text={"    Create Profile"}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <CategoryCard
              className1={
                "h-full w-full px-5 border  bg-green-50 rounded-lg p-5"
              }
              className2={"relative w-10 text-green-600 "}
              paragraph={
                " Choose us as your trusted partner and experience a transformative approach to connecting healthcare facilities with top-tier professionals."
              }
              path={"/post-jobs"}
              title={"healthcare organizations"}
              text={"Post Jobs"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
