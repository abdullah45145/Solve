import React from "react";
import ChartCard from "../ui/Chartcard";
import CircleArrow from "../ui/CircleArrow";

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen relative bg-[#050020] text-white flex flex-col items-center justify-center py-16 px-6 sm:px-10 md:px-16">
    {/* <div className="absolute md:hidden right-25 top-30">
      <CircleArrow />
    </div> */}

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-start gap-1 lg:gap-2">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start justify-start w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-semibold mb-10 w-full text-center lg:text-left">
            Who we are?
          </h2>

          {/* ChartCard responsive wrapper */}
          <div className="w-full max-w-full overflow-hidden">
            <ChartCard />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start justify-start text-left mt-20 space-y-8 mr-20 w-full">
          {/* First Row: Years of Experience */}
          <div className="flex items-center gap-4">
            <h3 className="text-3xl sm:text-5xl md:text-3xl font-inter font-normal">
              24
            </h3>
            <p className="text-gray-400 font-inter text-sm sm:text-base md:text-base leading-5">
              Years <br /> Experience
            </p>
          </div>

          {/* Second Row: Users & Subscribers */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 w-full">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl sm:text-5xl md:text-3xl font-inter font-normal">
                1M
              </h3>
              <p className="text-gray-400 font-inter text-sm sm:text-base md:text-base leading-5">
                User’s <br /> Satisfaction
              </p>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-3xl sm:text-5xl md:text-3xl font-inter font-normal">
                10k
              </h3>
              <p className="text-gray-400 font-inter text-sm sm:text-base md:text-base leading-5">
                Official <br /> Subscriber
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed max-w-full lg:max-w-lg">
            Simplify your workflow with our intuitive task management <br /> tool,
            designed to help you stay on top of your daily <br /> responsibilities
            and long-term goals.
          </p>

          <p className="font-normal text-white text-sm sm:text-base md:text-lg">
            Streamline Your Workflow, Achieve More.
          </p>

          <button className="mt-4 px-6 py-3 bg-[#5F00FF] hover:bg-violet-700 transition rounded-lg text-sm sm:text-base font-normal">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
