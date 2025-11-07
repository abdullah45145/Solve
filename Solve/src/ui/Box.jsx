import React from "react";
import { motion } from "framer-motion";
import unicorn from "../assets/fb7a3766e182f2f7c1643685c5dd80f0efe22aab.png";
import badge from "../assets/831ae09965666093089bfee781527fe394e6df5b.png";
import customer from "../assets/26f0607956346c7d640654fcea6b4aa736c3ca56.png";

const cardData = [
  {
    id: 1,
    Icon: badge,
    title: "Best interaction achievement award",
    subtitle: "",
    linkText: "Visit Solve.com",
    isPrimary: false,
    iconBg: "bg-black",
    textColor: "white",
  },
  {
    id: 2,
    Icon: unicorn,
    title: "First unicorn company in 2024",
    subtitle: "With 120k+ active users",
    linkText: "Visit Solve.com",
    isPrimary: true,
    iconBg: "bg-white",
    textColor: "black",
  },
  {
    id: 3,
    Icon: customer,
    title: "We reached 1M users in just 6 months",
    subtitle: "We got 12 records in the tech industry",
    linkText: "Visit Solve.com",
    isPrimary: false,
    iconBg: "bg-black",
    textColor: "white",
  },
];

// ✨ Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Card = ({ Icon, title, subtitle, linkText, isPrimary, iconBg, textColor, index }) => {
  return (
    <motion.div
      className={`flex flex-col items-start justify-start 
        p-6 md:p-8 rounded-2xl 
        backdrop-blur-md bg-white/10 
        border border-gray-500/50 hover:border-violet-400/70 
        transition-all duration-300 ease-in-out
        w-full max-w-[400px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[580px]
        h-[250px] sm:h-[270px] md:h-[290px]
        ${isPrimary ? "border-violet-500/70" : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      {/* 🔹 Icon Container */}
      <motion.div
        className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${iconBg}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={Icon}
          alt="icon"
          className={`w-6 h-6 object-contain ${
            textColor === "white" ? "brightness-200" : "brightness-100"
          }`}
        />
      </motion.div>

      {/* 🔹 Title */}
      <h2 className="text-lg md:text-xl font-normal font-inter text-white mb-2 leading-snug text-left">
        {title}
      </h2>

      {/* 🔹 Subtitle */}
      {subtitle && (
        <p className="text-sm text-gray-300 mb-7 font-inter font-normal text-left">
          {subtitle}
        </p>
      )}

      {/* 🔹 Button or Link */}
      <div className="mt-auto w-full text-center">
        {isPrimary ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 w-full bg-[#5F00FF] font-inter text-white text-sm font-medium rounded-xl hover:bg-violet-700 transition"
          >
            {linkText}
          </motion.button>
        ) : (
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, color: "#A78BFA" }}
            className="text-[#5F00FF] text-sm font-inter font-medium transition"
          >
            {linkText}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Box = () => {
  return (
    <motion.div
      className="w-full px-3 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-6 sm:gap-8 justify-items-center 
                   max-w-[1600px] mx-auto"
      >
        {cardData.map((card, i) => (
          <Card key={card.id} {...card} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Box;
