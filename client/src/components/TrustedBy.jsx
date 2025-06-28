import React from "react";
const trustBy = [
  {
    id: 1,
    association: "Medical",
    image: "/medical.webp",
  },
  {
    id: 2,
    association: "Pharmacy",
    image: "/pharmacy.webp",
  },
  {
    id: 3,
    association: "MedReHab",
    image: "/medrehab.webp",
  },
  {
    id: 4,
    association: "MedLab",
    image: "/medlab.webp",
  },
  {
    id: 5,
    association: "Nurses",
    image: "/nurses.webp",
  },
  {
    id: 6,
    association: "Radiography",
    image: "/radiography.webp",
  },
];
const TrustedBy = () => {
  return (
    <div className="w-full h-full ">
      <h3 className="text-blue-400">Trusted By</h3>
      <div className=" flex items-center justify-center lg:justify-start gap-4 w-full h-full pt-4 ">
        {trustBy.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.association}
            className="h-6 w-6"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
