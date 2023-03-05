import React from "react";

const Loding = () => {
  return (
    <div className="h-screen l:w-9/12 w-11/12 mx-auto  flex items-center justify-center rounded-3xl ">
      <progress className=" progress w-96 px-5"></progress>
    </div>
  );
};

export default Loding;
