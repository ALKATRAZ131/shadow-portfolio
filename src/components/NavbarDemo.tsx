"use client";
import { useIdentity } from "@/hooks/useIdentity";
import React, { useState } from "react";
import { FaSun, FaMoon, FaHome, FaProjectDiagram, FaBlog, FaEnvelope, FaArrowRight } from "react-icons/fa";
import colors from "@/constants/color";


function Navbar({ className }: { className?: string }) {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useIdentity();
  const name = user?.name || "Guest";

  return (
    <nav
      className={`w-[85%] mx-auto mt-8 flex items-center justify-between bg-black border-1 border-[#362f2f] rounded-full px-8 py-3 shadow-lg ${className || ""}`}
      style={{ borderRadius: "999px" }}
    >
      {/* Left: Name */}
      <div className="text-white text-xl font-bold tracking-wide select-none">
        {name}
      </div>
      {/* Right: Nav links, toggle, button */}
      <div className="flex items-center gap-16">
        <a href="#home" className="flex items-center gap-1 text-white hover:text-red-400 transition-colors">
          Home
        </a>
        <a href="#projects" className="flex items-center gap-1 text-white hover:text-green-400 transition-colors">
          Projects
        </a>
        <a href="#blog" className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors">
          Blog
        </a>
        <a href="#contact" className="flex items-center gap-1 text-white hover:text-yellow-400 transition-colors">
          Contact
        </a>
        {/* Dark/Light toggle */}
        <div className="ml-2 flex items-center">
          <FaMoon className={`text-lg mr-2 ${darkMode ? 'text-gray-400' : 'text-yellow-400'} transition-colors`} />
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            style={{ backgroundColor: darkMode ? colors.primary : colors.background }}
            className={
              `relative w-12 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none`
            }
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}
            />
          </button>
          <FaSun className={`text-lg ml-2 ${darkMode ? 'text-yellow-400' : 'text-gray-400'} transition-colors`} />
        </div>
        {/* Hire Me button */}
        <a
          href="#hire-me"
          className="ml-2 flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white transition-all shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 50%, ${colors.secondary} 100%)`
          }}
        >
          Hire Me <FaArrowRight className="rotate-45 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
