import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="z-50 w-100% m-[45px] px-5 py-4
                 flex justify-between items-center 
                 rounded-full border border-gray-700/50
                 backdrop-blur-sm bg-gray-400 
                 text-white absolute top-1" 
                 
    >
      {/* Logo */}
      <div className="text-[24px] font-black ml-5 tracking-tight shrink-0 font-paytone ">
        SOLVE<span className="text-white">.</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden  md:flex items-center space-x-14 text-md font-lg text-gray-200">
        {/* <li className="hover:text-blue-400 cursor-pointer mx-0 transition"></li> */}
        <li className="hover:text-blue-400 ml-5 cursor-pointer transition"></li>
        <li className=" font-paytone hover:text-blue-400 cursor-pointer transition"></li>
        <li className=" font-paytone hover:text-blue-400 cursor-pointer transition">Home</li>
        <li className=" font-paytone hover:text-blue-400 cursor-pointer transition">Services</li>
        <li className=" font-paytone hover:text-blue-400 cursor-pointer transition">Achievement</li>
        <li className=" font-paytone hover:text-blue-400 cursor-pointer transition">About Us</li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="px-7 font-paytone  font-semibold py-3 rounded-full bg-gray-800/60 hover:bg-gray-700/70 transition text-sm">
          Sign Up
        </button>
        <button className="px-7 font-paytone font-semibold  py-3 rounded-full bg-[#5f00ff] hover:opacity-90 transition text-sm">
          Log In
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="absolute top-16 left-0 w-full bg-black/60 backdrop-blur-md
                     rounded-2xl p-6 flex flex-col space-y-4 md:hidden"
        >
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Achievement</a>
          <a href="#" className="hover:text-blue-400">About Us</a>

          <div className="flex space-x-3 pt-4">
            <button className="flex-1 py-2 rounded-full bg-gray-800/70 hover:bg-gray-700 transition text-sm">
              Sign Up
            </button>
            <button className="flex-1 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition text-sm">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
