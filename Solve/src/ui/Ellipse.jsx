import React from "react";

const Ellipse = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div
        className="w-[720px] h-[720px] rounded-full blur-[250px]"
        style={{
          backgroundColor: "#F4A0FF",
          boxShadow: "0 0 60px 25px #F4A0FF80", // subtle glow
        }}
      ></div>
    </div>
  );
};

export default Ellipse;
