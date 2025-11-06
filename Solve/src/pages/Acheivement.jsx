import React from "react";
import bg from "../assets/3111755db69e9263d771036b212bb4f0bcb93adf.jpg";
import bgquotes from "../assets/aafb4966f931241aefbba2f479f8e65a376e0a01.png"

const Achievement = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Title */}
      <h1 className="text-4xl md:text-4xl ml-2 font-inter font-semibold mb-10 tracking-tight text-white px-4 md:px-12">
        Testinomial
      </h1>

      {/* Main Card */}
      <div
        className="bg-[#120a32] p-6 md:p-12 mx-9 md:mx-9 rounded-2xl shadow-xl flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-14 relative overflow-hidden"
        style={{
          boxShadow:
            "0 10px 60px rgba(123, 63, 228, 0.1), 0 0 10px rgba(123, 63, 228, 0.1)",
        }}
      >
        {/* Left Side: Background Image Box */}
        <div className="lg:w-1/3 min-h-[200px] lg:min-h-full rounded-xl overflow-hidden relative">
          <img
            src={bg}
            alt="Achievement"
            className="w-70% h-full object-cover rounded-xl brightness-90 hover:scale-105 transition duration-500"
          />
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-2/3 flex flex-col justify-between relative">
          {/* Decorative Quote Icon */}
          <span className="text-4xl mt-8 font-white text-white  absolute top-[-30px] left-0 opacity-10 leading-none select-none">
             <img
            src={bgquotes}
            alt="bgquotes"
            className="w-[34px] h-[34px] rotate-180"
            
          />
          </span>

          {/* Text Content */}
          <p className="text-xl md:text-2xl  text-white mt-22  leading-relaxed font-light z-10">
            Using this tool has completely transformed how our team operates.<br></br>
            We’re more organized, meet our deadlines consistently, and<br></br>
            collaboration has never been smoother. It's a game-changer!
          </p>


          {/* Footer / Author Section */}
          <div className="flex justify-between items-center mt-10">
            <div>
              <p className="text-2xl font-inter font-semibold text-white">Ketul Adani</p>
              <p className="text-md text-gray-400">CEO of xyz Company</p>
            </div>

            {/* Navigation Arrow */}
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer transition duration-300 hover:border-indigo-400">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
