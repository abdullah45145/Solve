import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 🔹 Outer glowing circle */}
      <motion.div
        className="flex items-center justify-center rounded-full border border-white/30 bg-white/5
                    w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,255,255,0.3)",
            "0 0 15px rgba(255,255,255,0.5)",
            "0 0 0px rgba(255,255,255,0.3)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {/* 🔹 Mouse oval */}
        <div
          className="flex items-start justify-center border border-white rounded-full
                      w-3 h-4 sm:w-3 sm:h-5 md:w-4 md:h-5"
        >
          {/* 🔹 Inner scroll line */}
          <motion.div
            className="bg-white rounded-full mt-[2px] w-[1.4px] h-1 sm:h-1 md:h-2"
            animate={{
              y: [0, 6, 0], // moves down and back up
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </motion.div>

      {/* 🔹 Line + Arrow */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}
        <motion.div
          className="bg-white text-white w-[1.5px] rounded-b-xl h-6 sm:h-8 md:h-10"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Arrow attached below */}
        <motion.div
          animate={{
            y: [0, 6, 0],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="text-white w-2 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 -mt-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
