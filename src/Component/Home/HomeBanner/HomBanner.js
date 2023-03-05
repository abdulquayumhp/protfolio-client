import React from "react";
import "../HomeBanner/HomeBanner.css";

import selfImageTwo from "../../Assarat/png-self-with-desgine-logo-2.png";
import Desgine from "../../SharableContent/Desgine";
import HomeBannerModal from "./HomeBannerModal";

const HomBanner = () => {
  return (
    <div className="h-full lg:w-9/12 w-11/12 mx-auto">
      <div className="flex py-20 md:flex-row flex-col-reverse">
        <div className="md:w-[900px] w-full lg:pt-36 pt-5 md:pt-10 text-center md:text-left flex justify-center">
          <Desgine />

          <div className="md:pl-10">
            <h2 className="uppercase font-bold text-xl pb-2 pl-1">
              hello
              <span className="font-normal text-blue-800 text-sm">
                , my name is
              </span>
            </h2>
            <h1 className="text-lg md:text-4xl  lg:text-6xl font-bold">
              MD ABDUL QUAYUM
            </h1>
            <h3 className="text-lg md:text-4xl pt-2 md:pt-5">
              Junior Web Developer
            </h3>
            <p className="pt-2 md:pt-5 text-sm md:text-xl">
              Hello, i'm Junior Web Developer from Feni, Bangladesh. As a web
              developer, I have more then one years of experience with
              JavaScript, node js, express js, react js, mongodb, HTML, CSS,
              Wordpress..
            </p>
            <div className="pt-10 resumeButtonDesign">
              <label
                htmlFor="my-modal-3"
                className="bg-white py-2 px-10 rounded-full cursor-pointer"
              >
                Download RESUME
              </label>
            </div>
          </div>
        </div>
        <div className="w-full relative lg:w-[900px] imagePosition">
          {/* <img className="relative z-1" src={selfImageTwo} alt="/" /> */}
          <img className="w-[800px]" src="https://i.ibb.co/ssnd4c9/Quayum1.png" alt="" />
          <div>

          </div>
        </div>
        <HomeBannerModal />
      </div>
    </div>
  );
};

export default HomBanner;
