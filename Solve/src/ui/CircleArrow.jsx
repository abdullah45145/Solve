import React from "react";
import arrow from "../assets/arrow.png";

const CircleArrow = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Circle */}
      <div className="w-[70px] h-[70px] rounded-full border border-gray-400 flex items-center justify-center rotate-135 hover:scale-110 transition-transform duration-300">
        {/* Arrow Icon */}
        <img src={arrow} alt="arrow icon" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default CircleArrow;
