import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loding from "../../../SharableContent/Loding";
import AllWorkCard from "../AllWork/AllWorkCard";

const DesgnWork = () => {
  const { data: designExperience, isLoading } = useQuery({
    queryKey: ["designExperience"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_LOCALHOST}designExperience`);
      const data = res.json();
      return data;
    },
  });
  // console.log(designExperience);

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto py-10">
        {designExperience &&
          designExperience.map((workExp) => (
            <AllWorkCard workExp={workExp} key={workExp._id} />
          ))}
      </div>
    </div>
  );
};

export default DesgnWork;
