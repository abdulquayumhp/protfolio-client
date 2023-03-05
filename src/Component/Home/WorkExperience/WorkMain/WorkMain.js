import React from "react";
import { Outlet } from "react-router-dom";
import WorkMenu from "../WorkMenu/WorkMenu";

const WorkMain = () => {
  return (
    <div>
      <WorkMenu />
      <Outlet />
    </div>
  );
};

export default WorkMain;
