import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen bg-[#050020] text-white flex flex-col items-center justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-20">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start justify-center w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-left w-full">
            Who we are?
          </h2>

          {/* Chart Container */}
          <div className="flex  w-full max-w-sm sm:max-w-md bg-[#0f0225] rounded-2xl p-6 ">
            {/* Bar 1 */}
            <div className="flex flex-col item-start justify-start w-1/3 relative">
              {/* Base rectangle */}
              <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] bg-[#201045] rounded-t-[12px] relative overflow-hidden flex justify-center">
                {/* Top smaller rectangle */}
                <div className="absolute bottom-0 w-full h-[60%] bg-[#7B3EFF] rounded-t-[12px]"></div>
              </div>
              <p className="absolute -top-5 text-xs sm:text-sm font-medium text-gray-300">60%</p>
              <p className="mt-3 text-sm sm:text-base text-gray-300">Usability</p>
            </div>

            {/* Bar 2 */}
            <div className="flex flex-col items-center justify-end w-1/3 relative">
              {/* Base rectangle */}
              <div className="w-full h-[100px] sm:h-[120px] md:h-[220px] bg-[#201045] rounded-t-[12px] relative overflow-hidden flex justify-center">
                {/* Top smaller rectangle */}
                <div className="absolute bottom-0 w-full h-[30%] bg-[#7B3EFF] rounded-t-[12px]"></div>
              </div>
              <p className="absolute -top-5 text-xs sm:text-sm font-medium text-gray-300">30%</p>
              <p className="mt-3 text-sm sm:text-base text-gray-300">System</p>
            </div>

            {/* Bar 3 */}
            <div className="flex flex-col items-center justify-end w-1/3 relative">
              {/* Base rectangle */}
              <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] bg-[#201045] rounded-[12px] relative overflow-hidden flex justify-center">
                {/* Top smaller rectangle */}
                <div className="absolute bottom-0 w-full h-[10%] bg-[#7B3EFF] rounded-t-[12px]"></div>
              </div>
              <p className="absolute -top-5 text-xs sm:text-sm font-medium text-gray-300">10%</p>
              <p className="mt-3 text-sm sm:text-base text-gray-300">Marketing</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start justify-center text-left space-y-6">
          <div className="flex flex-wrap gap-8 sm:gap-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">24</h3>
              <p className="text-gray-400 text-sm sm:text-base">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">1M</h3>
              <p className="text-gray-400 text-sm sm:text-base">User’s Satisfaction</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">10k</h3>
              <p className="text-gray-400 text-sm sm:text-base">Official Subscribers</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            Simplify your workflow with our intuitive task management tool, designed to help you stay on top of your daily responsibilities and long-term goals.
          </p>

          <p className="font-medium text-white text-sm sm:text-base md:text-lg">
            Streamline Your Workflow, Achieve More.
          </p>

          <button className="mt-4 px-6 py-3 bg-[#5F00FF] hover:bg-violet-700 transition rounded-lg text-sm sm:text-base font-medium">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
