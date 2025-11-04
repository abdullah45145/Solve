import React from "react";
import { Trophy, FileText, Users } from "lucide-react";

// Card Data
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
    title: "First unicorn company in 2024",
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

// ✅ Card Component
const Card = ({ Icon, title, subtitle, linkText, isPrimary }) => {
  const cardClasses = `
    flex flex-col items-start justify-start p-6 sm:p-8 rounded-xl
    backdrop-blur-md bg-white/10
    border border-gray-500/50 hover:border-violet-400/70
    transition-all duration-300 ease-in-out
    ${isPrimary ? "border-violet-500/70" : ""}
  `;

  return (
    <div className={cardClasses}>
      {/* Icon */}
      <div className="w-10 h-10 p-2 mb-4 rounded-full bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h2 className="text-lg md:text-xl font-semibold text-white mb-1 leading-snug item-start  flex justify-start">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-gray-300 mb-4">{subtitle}</p>
      )}

      {/* Button / Link */}
      <div className="mt-auto w-full">
        {isPrimary ? (
          <button className="w-full py-2.5 bg-violet-600 text-white text-sm font-medium rounded-md hover:bg-violet-700 transition">
            {linkText}
          </button>
        ) : (
          <a
            href="#"
            className="text-[#5F00FF] text-sm font-medium hover:text-violet-300 transition"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

// ✅ Box Component (Responsive Grid)
const Box = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Box;
