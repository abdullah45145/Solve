import React from "react";
import bg from "../assets/3111755db69e9263d771036b212bb4f0bcb93adf.jpg";
import bgquotes from "../assets/aafb4966f931241aefbba2f479f8e65a376e0a01.png";

const Achievement = () => {
  return (
    <div className="flex flex-col w-full bg-[#050020] min-h-screen">
      {/* Title */}
      <h1 className="text-4xl md:text-4xl ml-10 font-inter font-semibold m-15 tracking-tight text-white px-4 md:px-20">
        Testimonial
      </h1>

      {/* Main Card */}
      <div
        className="bg-[#100B2A] p-6 md:p-12 mx-6 md:mx-30 rounded-2xl shadow-xl flex md:space-x-20 flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 relative overflow-hidden"
        
      >
        {/* Left Side: Background Image Box */}
        <div className="lg:w-[30%] md:w-[45%] sm:w-[90%] object-cover bg-center min-h-[370px] rounded-xl overflow-hidden relative">
          <img
            src={bg}
            alt="Achievement"
            className="w-50% h-full object-cover rounded-xl brightness-90 hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-[70%] md:w-[65%] flex flex-col ml-10 justify-between relative">
          {/* Decorative Quote Icon */}
          <span className="absolute top-[2px] left-0  select-none">
            <img
              src={bgquotes}
              alt="bgquotes"
              className="w-[30px] h-[30px] rotate-180"
            />
          </span>

          {/* Text Content */}
          <p className="text-lg md:text-xl text-white leading-relaxed font-light z-10 mt-20">
            Using this tool has completely transformed how our team operates. <br />
            We’re more organized, meet our deadlines consistently, and <br />
            collaboration has never been smoother. It's a game-changer!
          </p>

          {/* Footer / Author Section */}
          <div className="flex justify-between items-center mt-10">
            <div>
              <p className="text-2xl font-inter font-semibold text-white">
                Ketul Adani
              </p>
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
