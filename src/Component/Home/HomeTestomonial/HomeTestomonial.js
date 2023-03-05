

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loding from "../../SharableContent/Loding";
import HomeTestomialCard from "./HomeTestomialCard";
import "../HomeTestomonial/Testimonial.css"




import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const HomeTestomonial = () => {
  const { data: allTestimonial, isLoading } = useQuery({
    queryKey: ["allTestimonial"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_LOCALHOST}allTestimonial`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loding />;
  }

  console.log(allTestimonial);
  return (
    <div className="lg:w-9/12 w-11/12  mx-auto mt-10">
      <div className="text-center py-10">
        <h1 className="text-xl md:text-4xl font-bold ">TESTIMONIAL</h1>
        <p className="text-blue-500 py-4 font-semibold text-sm">
          What <span className="text-black ">Customers Say</span>
        </p>
      </div>
      <div className=" ">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            navigation={true}
            className="mySwiper"
          >

            {
              allTestimonial.length &&
              allTestimonial.map((allTest) => (
                <div className=" ">
                  <SwiperSlide>
                    <div className="bg-image flex py-10 items-center justify-center gap-10 flex-col md:flex-row">
                      <div className="pt-10 md:p-0 p-5 w-full md:w-96 text-white">
                        <img className="w-[100px]" src="https://www.dynadot.com/domain/logo/reviews-logo1490663287.png" alt="" />
                        <h1 className="text-2xl font-semibold py-1">{allTest?.
                          Name}</h1>
                        <h1 className="text-sky-300">{allTest?.position}</h1>
                        <p className="text-base text-sky-100">{allTest?.
                          detail}</p>
                      </div>
                      <img className="p-5 sm:p-0 w-full sm:w-[300px] h-[400px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-top  rounded-3xl" src={allTest?.image} alt="" />
                    </div>
                  </SwiperSlide>
                </div>
              ))
            }


          </Swiper>
        </>
      </div>

    </div>
  );
};

export default HomeTestomonial;


