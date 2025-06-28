import React from "react";
import Hero from "../components/Hero";
import LatestJobPost from "../components/LatestJobPost";
import WhyChooseUs from "../components/WhyChooseUs";
import OurBlogs from "../components/OurBlogs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <LatestJobPost />
      <WhyChooseUs />
      <OurBlogs />
      <Testimonials />
    </main>
  );
};

export default Home;
