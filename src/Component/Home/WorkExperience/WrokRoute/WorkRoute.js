import { createBrowserRouter } from "react-router-dom";
import AllExperienceData from "../AllExperienceData/AllExperienceData";
import AllWork from "../AllWork/AllWork";
import DesgnWork from "../Design/Desgn";
import Javascript from "../Javascript/Javascript";
import { default as React, default as ReactWork } from "../React/React";
import ReactTeamProject from "../ReactTeamProject/ReactTeamProject";
import WorkMain from "../WorkMain/WorkMain";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkMain />,
    children: [
      {
        path: "/designWeb",
        element: <DesgnWork />,
      },
      {
        path: "/",
        element: <AllWork />,
      },
      {
        path: "/javascript",
        element: <Javascript />,
      },
      {
        path: "/react",
        element: <ReactWork />,
      },
      {
        path: "/allExperienceData",
        element: <AllExperienceData />,
      },
      {
        path: "/reactTeamProject",
        element: <ReactTeamProject />,
      },
    ],
  },
]);
