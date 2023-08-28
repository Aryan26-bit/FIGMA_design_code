import React, { useState } from "react";
import "./style.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  let iconStyle = { color: "black" };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className=" text-xl font-bold text-white bg-black font-objectivity w-[135px] h-[49px]">
        <b className="aa5" style={{ PaddingToP: "28PX" }}>
          AFC Inc.
        </b>
      </h1>
      <ul className="hidden md:flex" type="none">
        <li className="p-4 text-black font-medium">Track my Application</li>
        <li className="p-4 text-black font-medium">Manage My Card</li>
        <li className="p-4 text-black font-medium">FAQs</li>
        <button className="aa4 p-4 text-center text-white overflow-hidden flex flex-row items-center justify-start relative  cursor-pointer py-3 px-6 w-[132px] rounded-md font-medium">
          Get Started
        </button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} style={iconStyle} />
        ) : (
          <AiOutlineMenu size={20} style={iconStyle} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-[50%] border-r border-r-gray-900 bg-black ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
        type="none"
      >
        <h1 className="text-xl font-bold w-[135px] h-[49px] text-white m-4">
          {" "}
          <b style={{ PaddingToP: "28PX" }}>AFC Inc.</b>
        </h1>
        <li className="p-4 border-b text-white font-medium">
          Track my Application
        </li>
        <li className="p-4 border-b text-white font-medium">Manage my Card</li>
        <li className="p-4 border-b text-white font-medium">FAQs</li>
        <li>
          {" "}
          <button className="aa4 p-4 text-center text-white bg-red-400 overflow-hidden flex flex-row items-center justify-start relative  cursor-pointer py-3 px-6 w-[132px] rounded-md font-medium">
            Get Started
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
