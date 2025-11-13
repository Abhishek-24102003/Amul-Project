// AboutPopup.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const popup = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.35 } 
  },
};

const AboutPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* POPUP BOX */}
          <motion.div
            className="
              fixed z-[210] left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-[92%] md:w-[600px] 
              max-h-[85vh]        /* LIMIT HEIGHT */
              bg-white rounded-3xl shadow-2xl p-6 md:p-8
              flex flex-col
            "
            variants={popup}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-[#ED1E26] mb-4 text-center">
              About Amul
            </h1>

            {/* SCROLLABLE CONTENT AREA */}
            <div
              className="
                overflow-y-auto 
                pr-2        /* space for scrollbar */
                custom-scrollbar
              "
              style={{
                maxHeight: "60vh",   // CONTENT scroll limit
              }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Amul, India’s iconic dairy brand, stands as a symbol of purity,
                trust, and excellence. Built on the cooperative movement
                established in 1946, Amul connects millions of farmers to
                millions of families, ensuring fair livelihood and quality
                products.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                From milk, butter, cheese, paneer, and ghee, to chocolates,
                beverages, and ice creams — Amul touches every home and every
                generation with love and nourishment.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                With the spirit of “The Taste of India”, Amul continues to evolve
                for the new generation while staying rooted in values of purity,
                quality, and trust.
              </p>
            </div>

            {/* CLOSE BUTTON */}
            <button
              className="mt-6 px-6 py-3 rounded-xl bg-[#ED1E26] text-white font-semibold
              hover:scale-105 transition-all shadow-lg mx-auto"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutPopup;
