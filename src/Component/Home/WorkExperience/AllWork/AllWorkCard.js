import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../AllWork/allworkcard.css";

const AllWorkCard = ({ workExp }) => {
  const { LiveSideLink, details, imageLink, websiteName, category } = workExp;
  return (
    <>
      <div className="cardBg mx-auto  rounded-3xl ">
        <div className="px-6 pt-5 bg-[#e9b806] rounded-3xl">
          <img
            className="rounded-3xl p-5 h-[350px] w-full object-cover border-gray-500 border-2"
            src={imageLink}
            alt="/"
          />
          <div className="py-5">
            <p className="font-bold pb-1 text-gray-500">{category}</p>
            <h1 className="text-xl font-bold pb-5 text-gray-500">{websiteName}</h1>
            <p className="pb-4 ">{details}</p>
            <a href={LiveSideLink} className="py-2 px-3 w-48 flex items-center border border-gray-500 rounded-md ">
              <p className="">
                See Live Project
              </p>
              <FaArrowRight className="ml-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWorkCard;
