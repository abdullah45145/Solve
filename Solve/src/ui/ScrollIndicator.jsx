import React from "react";
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4">
      {/* 🔹 Outer glowing circle */}
      <div className="flex items-center justify-center rounded-full border border-white/30 bg-white/5
                      w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
        {/* 🔹 Mouse oval */}
        <div className="flex items-start justify-center border border-white rounded-full
                        w-3 h-4 sm:w-3 sm:h-5 md:w-4 md:h-5">
          {/* 🔹 Inner scroll line */}
          <div className="bg-white rounded-full mt-[2px] w-[1.4px] h-1 sm:h-1 md:h-2"></div>
        </div>
      </div>

      {/* 🔹 Line + Arrow */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}
        <div className="bg-white text-white w-[1.5px] rounded-b-xl h-6 sm:h-8 md:h-10"></div>

        {/* Arrow attached below */}
        <ArrowDown className="text-white w-2 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 -mt-1" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
