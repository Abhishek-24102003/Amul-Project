import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { FaTimes, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -40, y: -15, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 220, 
        damping: 14,    
        duration: 0.35, 
        when: "beforeChildren",
        staggerChildren: 0.05, 
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: -25,
      transition: { duration: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[100] backdrop-blur-2xl opacity-95">
      <div className="flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            {menuOpen ? (
              <FaTimes size={28} color="#ED1E26" />
            ) : (
              <SlidersHorizontal
                size={25}
                color="#ED1E26"
                strokeWidth={3}
                className="cursor-pointer"
              />
            )}
          </button>

          <img
            src="/assets/amul_logo.png"
            alt="Amul Logo"
            className="h-14 sm:h-20 md:h-24 object-contain"
          />
        </div>

        <div className="hidden md:flex gap-5 items-center">
          <h3 className="px-5 py-2 bg-[#ED1E26] text-lg lg:text-xl font-semibold text-white rounded-lg shadow-md hover:scale-105 transition-transform">
            Order Now
          </h3>
          <h3 className="px-5 py-2 bg-[#ED1E26] text-lg lg:text-xl font-semibold text-white rounded-lg shadow-md hover:scale-105 transition-transform">
            Rewards Program
          </h3>
          <img
            src="/assets/girlImage.png"
            alt="User"
            className="h-14 lg:h-20 object-contain drop-shadow-md"
          />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            className="absolute top-[90px] left-4 w-[90%] md:w-[450px] bg-white rounded-[2rem] shadow-xl p-8 z-[200]"
          >
            <motion.div className="flex flex-col text-[#623b2a] font-[600] space-y-5">
              {[
                "Home",
                "Brand Story",
                "Products",
                "Now For Ever Cafe",
                "Hangout",
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    x: 10,
                    color: "#ED1E26",
                    transition: { duration: 0.15 },
                  }}
                  className="text-2xl md:text-3xl cursor-pointer"
                >
                  {text}
                </motion.p>
              ))}

              <div className="flex flex-wrap gap-4 pt-3 text-[1rem] font-medium">
                {[
                  "Locate Us",
                  "Franchise",
                  "Chronicles",
                  "Careers",
                  "Contact Us",
                ].map((sub, idx) => (
                  <motion.p
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      color: "#ED1E26",
                      transition: { duration: 0.15 },
                    }}
                    className="cursor-pointer"
                  >
                    {sub}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="flex justify-start gap-5 pt-5 text-[#623b2a]"
                variants={itemVariants}
              >
                {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      backgroundColor: "#623b2a",
                      color: "#fff",
                      transition: { duration: 0.15 },
                    }}
                    className="border-2 border-[#623b2a] rounded-full p-2 cursor-pointer flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
