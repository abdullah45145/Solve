import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom"; // ✅ Import NavLink

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItems = [
    
    { name: "", path: "/" },
    { name: "", path: "/" },
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Achievement", path: "/acheivement" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 
                 w-[95%] sm:w-[95%] lg:w-[92%] 
                 px-5 py-3 flex justify-between items-center 
                 rounded-full 
                 backdrop-blur-md bg-gray-700/30 
                 text-white transition-all duration-300"
    >
      {/* 🔹 Logo */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl sm:text-2xl font-black tracking-tight font-paytone ml-6"
      >
        SOLVE<span className="text-white">.</span>
      </motion.div>

      {/* 🔹 Desktop Menu */}
      <motion.ul
        className="hidden md:flex items-center space-x-12 text-sm lg:text-base text-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item, i) => (
          <motion.li key={i} variants={itemVariants}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-paytone transition cursor-pointer ${
                  isActive
                    ? "text-[#5f00ff]  pb-1"
                    : "hover:text-blue-400"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      {/* 🔹 Buttons (Desktop) */}
      <motion.div
        className="hidden md:flex items-center space-x-3 lg:space-x-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 lg:px-8 py-2 lg:py-3 font-paytone font-semibold rounded-full bg-gray-800/70 hover:bg-gray-700 transition text-xs sm:text-sm"
        >
          Sign Up
        </motion.button>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 lg:px-8 py-2 lg:py-3 font-paytone font-semibold rounded-full bg-[#5f00ff] hover:opacity-90 transition text-xs sm:text-sm"
        >
          Log In
        </motion.button>
      </motion.div>

      {/* 🔹 Mobile Menu Toggle */}
      <motion.button
        whileTap={{ scale: 0.9, rotate: open ? 180 : 0 }}
        className="md:hidden text-white p-2"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          key={open ? "close" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.div>
      </motion.button>

      {/* 🔹 Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-full 
                       bg-[#050020]/95 backdrop-blur-xl 
                       rounded-3xl px-6 py-6 flex flex-col 
                       space-y-4 md:hidden z-40"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-base font-paytone transition ${
                      isActive
                        ? "text-[#5f00ff] font-bold"
                        : "hover:text-blue-400"
                    }`
                  }
                  onClick={() => setOpen(false)} // closes menu on click
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}

            <div className="flex flex-col sm:flex-row sm:space-x-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-3 rounded-full bg-gray-800/70 hover:bg-gray-700 transition font-paytone text-sm"
              >
                Sign Up
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-3 rounded-full bg-[#5f00ff] hover:opacity-90 transition font-paytone text-sm mt-3 sm:mt-0"
              >
                Log In
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
