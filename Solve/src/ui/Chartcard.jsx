import React from "react";

const ChartCard = () => {
  return (
    <div className="w-full max-w-[440px] pt-7  bg-[#120D2B] rounded-2xl flex items-end justify-center overflow-hidden">
      {/* Bars Container */}
      <div className="flex items-end w-full h-full">
        {/* Bar 1 */}
        <div className="flex flex-col items-center space-y-4 justify-end w-1/3 h-full">
          <div>
            <div className="text-[#8740FF] text-xl font-inter font-semibold leading-tight">60%</div>
            <div className="text-white font-inter text-xl font-normal">Usability</div>
          </div>

          <div className="w-full h-80 bg-[#2E264B] rounded-t-2xl flex items-end justify-center">
            <div className="w-full h-[270px] bg-[#9B5CFF] rounded-t-2xl"></div>
          </div>
        </div>

        {/* Bar 2 */}
        <div className="flex flex-col items-center justify-end space-y-3 w-1/3 h-full">
          <div className="text-[#8740FF] text-xl font-inter mr-10 font-semibold">30%</div>
          <div className="text-white text-xs">&nbsp;</div>

          <div className="w-full h-60 bg-[#2B1B54] rounded-t-2xl flex items-end justify-center">
            <div className="w-full h-[190px] bg-[#7422FF] rounded-t-2xl"></div>
          </div>
        </div>

        {/* Bar 3 */}
        <div className="flex flex-col items-center space-y-4 justify-end w-1/3 h-full">
          <div>
            <div className="text-[#8740FF] font-inter text-xl font-semibold leading-tighter">10%</div>
            <div className="text-white text-xl font-inter">Marketing</div>
          </div>

          <div className="w-full h-[170px] bg-[#2B1B54] rounded-t-2xl flex items-end justify-center">
            <div className="w-full h-[120px] bg-[#5F00FF] rounded-t-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
