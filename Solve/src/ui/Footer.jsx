import React from "react";
import { Link, NavLink } from "react-router-dom";

// const Ellipse = () => {
//   return (
//     <div
//       className="absolute -top-[40px] right-0 w-[250px] h-[125px] rounded-t-full blur-[170px] -mr-[150px]"
//       style={{
//         backgroundColor: "#F4A0FF",
//         boxShadow: "0 0 60px 25px #F4A0FF80",
//       }}
//     ></div>
//   );
// };


const Footer = () => {
  return (
    <footer
      className="relative overflow-y-visible  w-full min-h-screen flex flex-col justify-between 
                 bg-[#050020] 
                 text-gray-300 px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16"
    >
      {/* 🔹 Decorative Glowing Ellipse
      <Ellipse /> */}

      {/* 🔹 Top Section */}
      <div className="text-center mt-10 px-2 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-[45px] lg:text-[45px] font-inter font-semibold text-white mb-5 leading-[122%]">
          So, what are you waiting for?
        </h2>
        <p className="text-gray-400 mb-6 font-inter leading-[122%] font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
          Stay Updated with the Latest News, Tips, and Updates!
        </p>

        {/* 🔹 Newsletter Input */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 
                w-full max-w-[550px] mx-auto px-4 sm:px-6 md:px-0">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email..."
    className="w-full sm:flex-1 px-4 py-4 rounded-lg 
               bg-[#1E1E2F]/70 text-gray-200 font-inter text-[16px] sm:text-[16px] md:text-[18px]
               placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5F00FF]/50"
  />

  {/* Subscribe Button */}
  <button
    className="w-full sm:w-auto px-9 md:px-10 py-3 font-inter text-[16px] sm:text-[20px] md:text-[22px] rounded-lg 
               bg-[#5F00FF] hover:bg-[#4b00cc] transition text-white font-normal"
  >
    Subscribe
  </button>
</div>

      </div>

      {/* 🔹 Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm text-gray-400 mt-10 items-start relative z-10">
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col space-y-4 text-center sm:text-left">
          <h3 className="text-[22px] sm:text-[24px] font-black text-white tracking-tight font-paytone">
            SOLVE<span className="text-white">.</span>
          </h3>
          <p className="leading-relaxed text-[15px] sm:text-[16px]">
            Work together seamlessly with real-time updates and communication.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Team Conditional & Policy
          </p>
        </div>

        {/* Pages */}
        <div className="flex flex-col space-y-3 text-center sm:text-left">
          <h4 className="text-white font-semibold mb-3 text-[16px] sm:text-lg">
            Pages
          </h4>
          <ul className="space-y-3 text-[15px] sm:text-base">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Achievement</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-3 text-center sm:text-left">
          <h4 className="text-white font-semibold mb-3 text-[16px] sm:text-lg">
            Company
          </h4>
          <ul className="space-y-3 text-[15px] sm:text-base">
            <li className="hover:text-blue-400 cursor-pointer">Customer</li>
            <li className="hover:text-blue-400 cursor-pointer">Enterprise</li>
            <li className="hover:text-blue-400 cursor-pointer">Partners</li>
            <li className="hover:text-blue-400 cursor-pointer">Job</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-start items-center sm:items-start md:items-end gap-4 w-full">
         <Link className="w-full" to='/signup'>
          <button className="w-full sm:w-[150px] md:w-[140px] h-[45px] sm:h-[58px] md:h-[60px] rounded-full font-paytone font-semibold bg-gray-800/60 hover:bg-gray-700/70 transition text-white text-[14px] sm:text-base">
            Sign Up
          </button>
         </Link>
        <Link className="w-full" to='/login'>
          <button className="w-full sm:w-[150px] md:w-[140px] h-[45px] sm:h-[58px] md:h-[60px] rounded-full font-paytone font-semibold bg-[#5f00ff] hover:opacity-90 transition text-white text-[14px] sm:text-base">
            Log In
          </button>
        </Link>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-[980px] h-[1px] bg-white/30 mx-auto mt-10 relative z-10"></div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-xs sm:text-sm relative z-10">
        © Solve. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
