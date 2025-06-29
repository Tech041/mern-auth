import React from "react";
import Heading from "./Heading";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  return (
    <section className="w-full h-full">
      <div className="container">
        <div className="flex justify-center items-center">
          <Heading text={"Our success stories"} />
        </div>
        <h1 className="capitalize text-lg py-1 text-center font-semibold text-gray-600">
          what healthcare pros and facilities say about us
        </h1>
        <div className="">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
