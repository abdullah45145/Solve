import React from "react";
import bgImage from "../assets/2fe0ed2348e86ac9e188c9367fbd4faf45b2ce2e.jpg";
import Box from "../ui/Box";

const Home = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        {/* Hero Text */}
        <h2 className="text-[20px] md:text-[22px] font-inter tracking-[0.18em] text-gray-300 mb-2">
          Welcome to Solve.
        </h2>

        <h3 className="font-inter font-semibold text-[40px] md:text-[58px] text-white leading-tight">
          Manage Your Tasks
          <br />
          Efficiently
        </h3>
        <h1 className="text-[18px]  md:text-[22px] font-inter mb-16 text-gray-300 ">
         Solve Your Project Management Problems <br></br>
For Your Satisfaction 
        </h1>

        {/* Boxes Section */}
        <div className="w-full max-w-7xl">
          <Box />
        </div>
      </div>
    </section>
  );
};

export default Home;
