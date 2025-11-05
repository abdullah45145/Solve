import React from "react";
import { Trophy, FileText, Users } from "lucide-react";

const cardData = [
  {
    id: 1,
    Icon: Trophy,
    title: "Best interaction achievement award",
    subtitle: "",
    linkText: "Visit Solve.com",
    isPrimary: false,
  },
  {
    id: 2,
    Icon: FileText,
    title: "First unicorn company in  2024",
    subtitle: "With 120k+ active users",
    linkText: "Visit Solve.com",
    isPrimary: true,
  },
  {
    id: 3,
    Icon: Users,
    title: "We reached 1M users in just 6 months",
    subtitle: "We got 12 records in the tech industry",
    linkText: "Visit Solve.com",
    isPrimary: false,
  },
];

const Card = ({ Icon, title, subtitle, linkText, isPrimary }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start 
        p-6 md:p-8 rounded-2xl 
        backdrop-blur-md bg-white/10 
        border border-gray-500/50 hover:border-violet-400/70 
        transition-all duration-300 ease-in-out
        w-full max-w-[600px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[720px]
        h-[280px]
        ${isPrimary ? "border-violet-500/70" : ""}`}
    >
      <div className="w-10 h-10 p-2 mb-4 rounded-full bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-white mb-2 leading-snug text-left">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm text-gray-300 mb-6 font-inter font-normal text-left">{subtitle}</p>
      )}

      <div className="mt-auto w-full text-center">
        {isPrimary ? (
          <button className="py-3 w-full bg-[#5F00FF] font-inter text-white text-sm font-medium rounded-md hover:bg-violet-700 transition">
            {linkText}
          </button>
        ) : (
          <a
            href="#"
            className="text-[#5F00FF] text-sm font-inter font-medium hover:text-violet-300 transition"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div className="w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-6 sm:gap-8 justify-items-center 
                   max-w-[1900px] mx-auto"
      >
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Box;
