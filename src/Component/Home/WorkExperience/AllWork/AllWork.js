import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loding from "../../../SharableContent/Loding";
import AllWorkCard from "./AllWorkCard";

const AllWork = () => {
  const { data: WorkExperience, isLoading } = useQuery({
    queryKey: ["WorkExperience"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_LOCALHOST}allWorkExperience`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(WorkExperience);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div className="lg:w-9/12 w-11/12 mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto py-10">
        {WorkExperience.length &&
          WorkExperience.map((workExp) => (
            <AllWorkCard workExp={workExp} key={workExp._id} />
          ))}
      </div>
      <div className="text-center ">
        <Link to="/allExperienceData" className="bg-white py-2 px-5">
          know All Data
        </Link>
      </div>
    </div>
  );
};

export default AllWork;
