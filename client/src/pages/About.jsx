import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen pt-20 pb-5">
      <div className="container">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full pt-10"
        >
          <h1 className="text-xl font-semibold text-center text-blue-600 italic">
            About MedHunt
          </h1>
          <p className="py-2">
            At MedHunt, we blend healthcare expertise with smart technology to
            create a better job-hunting experience.
          </p>
          <p className="py-2">
            Founded by a pharmacist and software developer, this platform is
            built to connect medical professionals with the opportunities they
            deserve. MedHunt simplifies the hiring process, enhances applicant
            visibility, and helps organizations find talent faster.
          </p>
          <p className="py-2">
            It’s more than a portal—it’s a purposeful solution born out of
            real-world insight and a passion for innovation. Whether you're an
            employer or job seeker, MedHunt is here to make the process easy,
            transparent, and efficient
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
