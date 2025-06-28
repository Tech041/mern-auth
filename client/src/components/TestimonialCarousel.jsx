import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { TfiAngleLeft } from "react-icons/tfi";
const testimonials = [
  {
    id: 1,
    name: "Alice",
    quote:
      "Amazing service and dedicated team. Got my internship placement through their premium package.Very professional and dedicated in rendering their services.!",
    role: "Nurse",
  },
  {
    id: 2,
    name: "Bob",
    quote: "Highly professional staff and motivated.Making healthcare job search easy and seamless. Very amazed the site was developed by a health practitioner!",
    role: "Doctor",
  },
  {
    id: 3,
    name: "Charlie",
    quote: "Top-tier experience,  highly recommendded.",
    role: "Physiotherapist",
  },
  {
    id: 4,
    name: "Dana",
    quote: "Very responsive support!",
    role: "Pharmacist",
  },
  { id: 5, name: "Eli", quote: "Would recommend 10/10.", role: "Lab Tech" },
  {
    id: 6,
    name: "Faye",
    quote: "Efficient and friendly team.",
    role: "Intern Doctor",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % testimonials.length);

  const handlePrev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full mx-auto px-4 relative">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className=" px-3 py-1 absolute top-1/2 left-0"
        >
          <TfiAngleLeft size={20} color="blue" />
        </button>
        <button
          onClick={handleNext}
          className=" px-3 py-1  absolute top-1/2 right-0"
        >
          <BsChevronRight size={20} color="blue" />
        </button>
      </div>

      <div className="bg-white p-4  text-center transition-all duration-300">
        <p className="italic text-gray-600">"{testimonials[index].quote}"</p>
        <div className="mt-2 font-semibold">{testimonials[index].name}</div>
        <div className="text-sm text-gray-500">{testimonials[index].role}</div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
