import React from "react";

const HomeTestomialCard = ({ allTest }) => {
  const { detail, image, name, position, quate } = allTest;
  return (
    <div className="mx-auto bg-white p-8 rounded-3xl relative">
      <img
        className="absolute w-20 h-20 bg-white rounded-br-3xl p-5"
        src={quate}
        alt="/"
      />
      <img
        className="h-96 w-full object-cover rounded-3xl "
        src={image}
        alt="/"
      />
      <div className="py-5">
        <h1 className="text-lg font-semibold">{position}</h1>
        <h1 className="text-lg font-semibold ">{name}</h1>
        <p className="text-sm pt-5">
          {detail ? detail.slice(0, 100) + "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default HomeTestomialCard;
