import { useQuery } from "@tanstack/react-query";
import React from "react";

import Loding from "../../SharableContent/Loding";
import HomeBlogCard from "./HomeBlogCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const HomeBlog = () => {
  const { data: allBlog, isLoading } = useQuery({
    queryKey: ["allBlog"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_LOCALHOST}allBlog`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(allBlog);

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto  my-20">
      <div className="text-center py-10">
        <h1 className="text-xl md:text-4xl font-bold ">LATEST BLOG</h1>
        <p className="text-black  py-4 font-semibold text-sm">
          My <span className=" text-blue-500">Traveling blog</span>
        </p>
      </div>

      <div className="">
        {allBlog &&
          <>
            <Swiper
              breakpoints={
                {
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  },
                }
              }
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}

              navigation={true}
              className="mySwiper"
            >

              <div className=" grid grid-cols-1 md:grid-cols-2  gap-8">
                {
                  allBlog.map((blog) => (

                    <SwiperSlide>
                      <div className="mx-auto bg-white p-8 rounded-3xl relative">
                        <div className="py-5">
                          <h1 className="text-lg font-semibold">{blog?.LocationName}</h1>
                          <h1 className="text-lg font-semibold ">{blog?.date}</h1>
                          <p className="text-sm pt-5">
                            {blog?.detail ? blog?.detail.slice(0, 100) + "..." : ""}
                          </p>
                        </div>
                        <img
                          className="h-96 w-full object-cover rounded-3xl "
                          src={blog?.image}
                          alt="/"
                        />
                      </div>
                    </SwiperSlide>

                  ))
                }
              </div>


            </Swiper>
          </>}
      </div>

    </div>
  );
};

export default HomeBlog;
