import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[100]">
      {/* 🌟 Main Container */}
      <div className="w-full flex justify-between items-center px-4 md:px-8 py-3">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          {/* Show only on medium+ screens */}
          <SlidersHorizontal
            size={36}
            color="#ED1E26"
            strokeWidth={3}
            className="cursor-pointer hidden md:block"
          />
          <img
            src="./public/assets/amul_logo.png"
            alt="Amul Logo"
            className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain"
          />
        </div>

        {/* RIGHT SECTION (Desktop Only) */}
        <div className="hidden md:flex gap-5 items-center">
          <h3 className="px-5 py-2 bg-[#ED1E26] text-lg lg:text-xl font-semibold text-white rounded-lg shadow-md hover:scale-105 transition-transform">
            Order Now
          </h3>
          <h3 className="px-5 py-2 bg-[#ED1E26] text-lg lg:text-xl font-semibold text-white rounded-lg shadow-md hover:scale-105 transition-transform">
            Rewards Program
          </h3>
          <img
            src="./public/assets/girlImage.png"
            alt="User"
            className="h-20 lg:h-28 object-contain drop-shadow-md"
          />
        </div>

        {/* 🍔 MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#ED1E26] text-3xl focus:outline-none"
        >
          {isOpen ? (
            <FaTimes />
          ) : (
             <SlidersHorizontal
            size={36}
            color="#ED1E26"
            strokeWidth={3}
            className="cursor-pointer"
          />
          )}
        </button>
      </div>

      {/* 📱 MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-4">
          <h3 className="px-5 py-2 w-[80%] text-center bg-[#ED1E26] text-lg font-semibold text-white rounded-lg hover:scale-105 transition-transform">
            Order Now
          </h3>
          <h3 className="px-5 py-2 w-[80%] text-center bg-[#ED1E26] text-lg font-semibold text-white rounded-lg hover:scale-105 transition-transform">
            Rewards Program
          </h3>
          <img
            src="./public/assets/girlImage.png"
            alt="User"
            className="h-24 object-contain drop-shadow-md"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
