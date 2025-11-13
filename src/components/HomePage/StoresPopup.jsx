// StoresPopup.jsx
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
    transition: { duration: 0.35 },
  },
};

const stores = [
  "Amul Dairy Store - Ahmedabad, Gujarat",
  "Amul Parlour - Delhi Connaught Place",
  "Amul Ice Cream Shop - Mumbai Andheri",
  "Amul Milk Center - Pune FC Road",
  "Amul Outlet - Bengaluru Koramangala",
  "Amul Mega Store - Kolkata Salt Lake",
  "Amul Fresh Store - Chennai T Nagar",
  "Amul Retail Hub - Hyderabad Banjara Hills",
  "Amul Express - Jaipur MI Road",
  "Amul Parlour - Lucknow Hazratganj",
  "Amul Shop - Chandigarh Sector 17",
  "Amul Mini Store - Indore Vijay Nagar",
];

const StoresPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            className="
              fixed z-[210] left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-[92%] md:w-[600px]
              max-h-[85vh]
              bg-white rounded-3xl shadow-2xl p-6 md:p-8
              flex flex-col
            "
            variants={popup}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h1 className="text-3xl font-bold text-[#ED1E26] mb-5 text-center">
              Amul Stores Nearby
            </h1>

            {/* Scrollable Store List */}
            <div
              className="overflow-y-auto pr-2 custom-scrollbar"
              style={{ maxHeight: "60vh" }}
            >
              {stores.map((store, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 my-2 rounded-xl border border-[#f0d3b0] shadow-sm 
                             hover:shadow-md hover:bg-[#fff7ef] transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-[#6a3f2a] font-semibold">{store}</p>
                </motion.div>
              ))}
            </div>

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

export default StoresPopup;
