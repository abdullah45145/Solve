import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/2fe0ed2348e86ac9e188c9367fbd4faf45b2ce2e.jpg";
import Box from "../ui/Box";
import ScrollIndicator from "../ui/ScrollIndicator";
import AboutUs from "./Aboutus";
import Achievement from "./Acheivement";
import Services from "./Services";

const Home = () => {
  return (
    <>
    <section
      className="relative flex flex-col items-center justify-center 
                 min-h-screen bg-cover bg-fixed text-white 
                 overflow-hidden w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      

      {/* 🔹 Centered Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center
                   text-center w-full max-w-[1600px] px-6 sm:px-10 md:px-16
                   py-50 sm:py-58 lg:py-65"
      >
        {/* Headings with animation */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 mb-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h2
            className="text-[14px] sm:text-[16px] md:text-[18px] font-inter tracking-[0.18em] text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Welcome to Solve.
          </motion.h2>

          <motion.h3
            className="font-inter font-semibold text-[20px] sm:text-[30px] md:text-[50px] lg:text-[40px] leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Manage Your Task
            <br className="hidden sm:block" />
            Efficiently
          </motion.h3>

          <motion.p
            className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[16px] text-gray-300 max-w-3xl leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            Solve Your Project Management Problems
            <br className="hidden sm:block" />
            For Your Satisfaction
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ScrollIndicator />
        </motion.div>

        {/* Boxes Section */}
        <motion.div
          className="w-full flex justify-center mt-5 sm:mt-2 md:mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-full max-w-[1700px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          >
            <Box />
          </motion.div>
        </motion.div>
      </div>
    </section>
  <AboutUs />
  <Services />
  <Achievement />
  </>
  );
};

export default Home;
