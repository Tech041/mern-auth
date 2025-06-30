import React from "react";
import Hero from "../components/Hero";
import LatestJobPost from "../components/LatestJobPost";
import WhyChooseUs from "../components/WhyChooseUs";
import OurBlogs from "../components/OurBlogs";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <main className="pt-20  w-full min-h-screen ">
      <Hero />
      <LatestJobPost />
      <WhyChooseUs />
      <OurBlogs />
      <Testimonials />
      <NewsLetter />
    </main>
  );
};

export default Home;
