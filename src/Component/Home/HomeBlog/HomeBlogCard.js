import React from "react";

const HomeBlogCard = ({ allBlog }) => {
  console.log(allBlog);
  const { LocationName, date, detail, image } = allBlog;
  return (
    <div className="mx-auto bg-white p-8 rounded-3xl relative">
      <div className="py-5">
        <h1 className="text-lg font-semibold">{LocationName}</h1>
        <h1 className="text-lg font-semibold ">{date}</h1>
        <p className="text-sm pt-5">
          {detail ? detail.slice(0, 100) + "..." : ""}
        </p>
      </div>
      <img
        className="h-96 w-full object-cover rounded-3xl "
        src={image}
        alt="/"
      />
    </div>
  );
};

export default HomeBlogCard;
