import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./WrokRoute/WorkRoute";

const WorkExperience = () => {
  return (
    <div className="pt-10">
      <h1 className="text-center text-3xl font-semibold text-blue-800">
        <span className="text-black">WORK </span>DEMO
      </h1>
      <div className="lg:w-9/12 w-11/12 mx-auto mb-5"></div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default WorkExperience;
