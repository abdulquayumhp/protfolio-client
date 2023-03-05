import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Nabvar/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed">
      <div
        className={`p-4 z-10 ${open ? "text-white" : "text-black"
          } text-white  absolute top-0`}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <FaBars className="text-3xl z-1" />
        ) : (
          <FaTimes className="text-3xl " />
        )}
      </div>

      <div
        className={`  ${open
            ? " h-screen  pt-20 pr-20 pl-5 w-48 bg-black duration-500 ease-in-out"
            : " absolute w-96 top-[-250px] pl-5 duration-500 ease-in-out"
          }`}
      >
        <a className="block text-white pt-4" href="/">
          Home
        </a>
        <a className="block text-white pt-4" href="/">
          Service
        </a>
        <a className="block text-white pt-4" href="/">
          Work
        </a>
        <a className="block text-white pt-4" href="/">
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
