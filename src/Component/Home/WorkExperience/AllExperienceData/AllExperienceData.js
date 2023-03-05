import { useQuery } from '@tanstack/react-query';
import React from "react";
import Loding from "../../../SharableContent/Loding";
import CssLoder from "../../CssLoder/CssLoder";
import AllWorkCard from "../AllWork/AllWorkCard";

const AllExperienceData = () => {
  const { data: allWorkExperienceNotLimit, isLoading } = useQuery({
    queryKey: ["allWorkExperienceNotLimit"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_LOCALHOST}allWorkExperienceNotLimit`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(allWorkExperienceNotLimit)

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto py-10">
        {allWorkExperienceNotLimit.length ? allWorkExperienceNotLimit.map((workExp) => (
          <AllWorkCard workExp={workExp} key={workExp._id} />
        )) : <CssLoder />
        }
      </div>
    </div>
  );
};

export default AllExperienceData;
