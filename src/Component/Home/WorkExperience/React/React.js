import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loding from "../../../SharableContent/Loding";
import AllWorkCard from "../AllWork/AllWorkCard";

const ReactWork = () => {
  const { data: reactJsExperience, isLoading } = useQuery({
    queryKey: ["reactJsExperience"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_LOCALHOST}reactJsExperience`);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto py-10">
        {reactJsExperience &&
          reactJsExperience.map((workExp) => (
            <AllWorkCard workExp={workExp} key={workExp._id} />
          ))}
      </div>
    </div>
  );
};

export default ReactWork;
