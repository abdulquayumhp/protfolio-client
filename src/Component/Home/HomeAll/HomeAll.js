import React from "react";
import Navbar from "../../Nabvar/Navbar";
import About from "../About/About";
import CssLoder from "../CssLoder/CssLoder";
import HomBanner from "../HomeBanner/HomBanner";
import HomeBlog from "../HomeBlog/HomeBlog";
import HomeContacat from "../HomeContact/HomeContacat";
import HomeSection from "../HomeSection/HomeSection";
import HomeTestomonial from "../HomeTestomonial/HomeTestomonial";
import WhatIDid from "../WhatIdid/WhatIDid";
import WorkExperience from "../WorkExperience/WorkExperience";
import WorkTimeLine from "../WrokTimeline/WorkTimeLine";

const HomeAll = () => {
  return (
    <div className="navbarStyle pb-10">
      <Navbar />
      <HomBanner />
      <HomeSection />
      <WhatIDid />
      <WorkExperience />
      <WorkTimeLine />
      <About />
      <HomeTestomonial />
      <HomeBlog />
      <HomeContacat />
    </div>
  );
};

export default HomeAll;
