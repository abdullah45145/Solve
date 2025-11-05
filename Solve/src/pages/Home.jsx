import React from "react";
import bgImage from "../assets/2fe0ed2348e86ac9e188c9367fbd4faf45b2ce2e.jpg";
import Box from "../ui/Box";
import ScrollIndicator from "../ui/ScrollIndicator";

const Home = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white overflow-hidden w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 text-center w-full max-w-[1600px] mx-auto">
        
        {/* Headings */}
        <div className="mb-4 sm:mb-4 md:mb-4">
          <h2 className="text-[14px] sm:text-[16px] md:text-[20px] font-inter tracking-[0.18em] text-gray-300 mb-1">
            Welcome to Solve.
          </h2>

          <h3 className="font-inter font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-tight mb-1 break-words">
            Manage Your Task
            <br className="hidden sm:block" />
            Efficiently
          </h3>

          <p className="text-[12px] sm:text-[14px] md:text-[14px] lg:text-[20px] text-gray-300 max-w-4xl leading-relaxed mx-auto">
            Solve Your Project Management Problems
            <br className="hidden sm:block" />
            For Your Satisfaction
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="my-3 sm:my-2 md:my-2 flex justify-center">
          <ScrollIndicator />
        </div>

        {/* Boxes Section */}
        <div className="w-full flex justify-center mt-1 sm:mt-4 md:mt-4">
          <div className="w-full max-w-[1700px]">
            <Box />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
