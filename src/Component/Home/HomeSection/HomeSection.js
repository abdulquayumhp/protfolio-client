import { useQuery } from "@tanstack/react-query";
import React from "react";
import Desgine from "../../SharableContent/Desgine";
import Loding from "../../SharableContent/Loding";
import "../HomeBanner/HomeBanner.css";

const HomeSection = () => {
  const { data: experience, isLoading } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_LOCALHOST}Experience`);
      const data = await res.json();
      return data;
    },
  });
  console.log(experience);
  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="lg:w-9/12 w-11/12 h-full mx-auto">
      <h1 className="text-center text-3xl font-semibold">
        <span className="text-blue-800">PROFESSIONAL</span> SKILLS
      </h1>
      <div className=" flex item-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 md:pr-20">
          {experience &&
            experience.map((experi) => (
              <div className="w-full ">
                <div className="py-2  flex justify-between items-center">
                  <h1 className="text-xl font-semibold">{experi?.name}</h1>
                  <p>{experi?.parcent}</p>
                </div>
                <div className=" pr-2 pt-5 pb-5">
                  <h1>
                    {experi?.detail
                      ? experi?.detail.slice(0, 400) + "..."
                      : "N/A"}
                  </h1>
                </div>
                <div className="experienceDesign">
                  <div className="w-full h-1 bg-black ">
                    <div
                      style={{ background: "#e9b806" }}
                      className="w-48 h-1 -mt-2 "
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="">
          <Desgine />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
