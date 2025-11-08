import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import bgImage from "../assets/2fe0ed2348e86ac9e188c9367fbd4faf45b2ce2e.jpg";

const Signup = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔹 Back to Home link */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 text-sm 
                   hover:text-white transition-all duration-300 backdrop-blur-sm 
                   bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      {/* 🔹 Compact Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 
                   rounded-3xl shadow-2xl w-[90%] max-w-sm 
                   p-6 sm:p-8 text-white"
      >
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 font-paytone">
          Create Account 💫
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/30 
                         focus:border-[#5f00ff] outline-none text-white 
                         placeholder-white/60 transition-all text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/30 
                         focus:border-[#5f00ff] outline-none text-white 
                         placeholder-white/60 transition-all text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/30 
                         focus:border-[#5f00ff] outline-none text-white 
                         placeholder-white/60 transition-all text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/30 
                         focus:border-[#5f00ff] outline-none text-white 
                         placeholder-white/60 transition-all text-sm"
            />
          </div>

          {/* Signup Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2.5 mt-2 bg-[#5f00ff] rounded-full 
                       font-semibold text-white hover:bg-[#7030ff] 
                       transition-all text-sm"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-center text-xs text-white/70 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#a88cff] hover:text-[#c2a8ff] font-semibold"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
