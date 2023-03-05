import React from "react";
import { Link } from "react-router-dom";

const WorkMenu = () => {
  return (
    <div className="lg:w-9/12 w-11/12 mx-auto">
      <div className="text-center  flex flex-wrap">
        <Link to="/" className="m-3 py-1 px-3 border-slate-300 rounded-lg border text-sm font-semibold ">
          All Work
        </Link>
        <Link to="/designWeb" className="m-3 py-1 px-3 border-slate-300 rounded-lg border text-sm font-semibold ">
          Design
        </Link>
        <Link to="/javascript" className="m-3 py-1 px-3 border-slate-300 rounded-lg border text-sm font-semibold">
          Javascript
        </Link>
        <Link to="/react" className="m-3 py-1 px-3 border-slate-300 rounded-lg border text-sm font-semibold">
          React
        </Link>
        <Link to="/reactTeamProject" className="m-3 py-1 px-3 border-slate-300 rounded-lg border text-sm font-semibold">
          Team Project
        </Link>
      </div>
    </div>
  );
};

export default WorkMenu;
