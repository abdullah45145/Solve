import React from "react";

// ✅ Data for the navigation tabs
const tabs = [
  { label: "Company Benefit", active: true },
  { label: "Team Management", active: false },
  { label: "Road Map", active: false },
];

/**
 * ✅ Renders the circular avatars for the "Follower" count.
 */
const AvatarRow = () => {
  const avatars = [
    { id: 1, color: "bg-indigo-600" },
    { id: 2, color: "bg-yellow-500" },
    { id: 3, color: "bg-red-500" },
    { id: 4, color: "bg-purple-700" },
    { id: 5, color: "bg-cyan-500" },
  ];

  return (
    <div className="absolute bottom-2 left-8 flex items-center font-inter">
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
      <span className="ml-4 text-xs font-semibold text-gray-700 whitespace-nowrap">
        1.2M Follower
      </span>
    </div>
  );
};

/**
 * ✅ Main Services Section
 */
const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 lg:px-20 py-16 bg-[#0B0120] text-white font-inter">
      {/* ===== LEFT SIDE ===== */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold font-inter mb-2 ml-10 tracking-normal">
          Built for endless uses, <br />
          Across all teams.
        </h1>

        {/* App UI Card */}
        <div
          className="relative w-full max-w-sm mx-auto shadow-2xl rounded-2xl p-2 md:p-4"
          style={{
            backgroundColor: "rgba(25, 17, 56, 0.7)",
            padding: "20px",
            maxWidth: "530px",
          }}
        >

            {/* Main Content */}
              <div
                className="bg-white rounded-xl shadow-xl overflow-hidden relative"
                style={{ height: "440px" }}
              >
                {/* Title Bar */}
                <div className="flex items-center space-x-2 p-3 border-b border-gray-100">
                  <div className="w-4 h-4 rounded-full bg-red-400"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                </div>
            <div
              className="relative p-10 flex items-center justify-center"
              style={{
                  height: "calc(100% - 130px)",
                  backgroundColor: "#CDAFFF",
                margin :"35px",
                borderRadius :"20px"
              }}
            >
              {/* Star Icon */}
              <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-md">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.05 8.729c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>

              {/* ✅ Replaced Floating Box with Image */}
              <img
                src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/b8d00b2e389e3a38f115ea00f7dc3dff3ef4f337/dbc32aa496f21ffa8508a4f6432d1e6c6f76e3b1"
                alt="App UI"
                className="w-20 20-40 object-cover rounded-2xl "
              />

            </div>
              <AvatarRow />
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="flex flex-col justify-center">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-12">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`py-2 px-4 rounded-lg cursor-pointer transition duration-200 text-sm font-medium ${
                tab.active
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-transparent text-gray-300 border border-gray-700 hover:border-indigo-500"
              }`}
              style={
                tab.active
                  ? {
                      backgroundImage:
                        "linear-gradient(to right, #7b3fe4, #5a1ec4)",
                    }
                  : {}
              }
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Title + Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Company main platform
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Simplify your workflow with our intuitive task management tool,
          designed to help you stay on top of your daily responsibilities and
          long-term goals.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our platform grows with your business, offering scalable solutions
          that adapt to your changing needs. Customize your workflow to match
          your team's unique processes, so you can work smarter, not harder.
        </p>
      </div>
    </section>
  );
};

export default Services;
