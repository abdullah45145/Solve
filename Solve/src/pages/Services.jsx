import React from "react";
import figmalogo from "../assets/figmalogo.png";

const tabs = [
  { label: "Team Management", active: false },
  { label: "Company Benefit", active: true },
  { label: "Road Map", active: false },
];

const AvatarRow = () => {
  const avatars = [
    { id: 1, color: "bg-indigo-600" },
    { id: 2, color: "bg-yellow-500" },
    { id: 3, color: "bg-red-500" },
    { id: 4, color: "bg-purple-700" },
    { id: 5, color: "bg-cyan-500" },
  ];

  return (
    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex items-center font-inter">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`w-10 h-10 rounded-full border-r-3 border-t-3 border-white ${avatar.color} shadow-lg`}
            style={{
              zIndex: 10 - index,
              backgroundImage:
                "linear-gradient(to top right, rgba(255,255,255,0.2), rgba(0,0,0,0.2))",
            }}
          ></div>
        ))}
      </div>
      <span className="ml-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
        1.2M Follower
      </span>
    </div>
  );
};

const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center px-5 lg:px-20 py-16 bg-[#050020] text-white font-inter">
      {/* ===== LEFT SIDE ===== */}
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-2xl md:text-3xl font-semibold font-inter mb-10 ml-0 lg:ml-10 tracking-normal text-center lg:text-left">
          Built for endless uses, <br />
          Across all teams.
        </h1>

        <div
          className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto shadow-2xl rounded-2xl md:p-4"
          style={{
            backgroundColor: "rgba(25, 17, 56, 0.7)",
            padding: "20px",
            maxWidth: "450px",
          }}
        >
          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden relative"
            style={{ height: "390px" }}
          >
            <div
              className="flex items-center space-x-2"
              style={{
                paddingLeft: "35px",
                paddingRight: "35px",
                paddingTop: "18px",
                paddingBottom: "12px",
              }}
            >
              <div className="w-4 h-4 rounded-full bg-red-400"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            </div>

            <div
              className="relative flex items-center justify-center"
              style={{
                height: "calc(100% - 130px)",
                backgroundColor: "#CDAFFF",
                marginLeft: "20px",
                marginRight: "35px",
                borderRadius: "20px",
              }}
            >
              <div className="absolute top-4 right-4 bg-white rounded-xl p-3">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.05 8.729c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>

              <img
                src={figmalogo}
                alt="App UI"
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl"
              />
            </div>

            <AvatarRow />
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="flex flex-col justify-center mt-12 lg:mt-0 space-y-10 px-2 sm:px-0 ">
        <div className="flex flex-nowrap sm:flex-wrap justify-center sm:justify-start mt-25 items-center gap-4 mb-12 overflow-x-auto sm:overflow-visible">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`py-3 px-9 rounded-3xl cursor-pointer transition duration-200 text-sm font-inter font-normal whitespace-nowrap ${
                tab.active
                  ? "bg-transparent text-[#5F00FF] border-[#5F00FF] border shadow-lg"
                  : "text-gray-300 bg-[#1E1936] hover:bg-[#1e1936a0]"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold font-inter text-white mb-6 text-center lg:text-left">
          Company main platform
        </h2>
        <p className="text-lg text-gray-300 mb-6 md:mb-10 leading-relaxed text-center lg:text-left">
          Simplify your workflow with our intuitive task management tool,
          designed to help you stay on top of your daily responsibilities and
          long-term goals.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed text-center lg:text-left">
          Our platform grows with your business, offering scalable solutions
          that adapt to your changing needs. Customize your workflow to match
          your team's unique processes, so you can work smarter, not harder.
        </p>
      </div>
    </section>
  );
};

export default Services;
