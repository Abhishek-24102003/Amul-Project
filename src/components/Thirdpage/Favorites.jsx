import React, { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const chunk = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

const Favorites = () => {
  const items = [
    { id: 1, name: "Black Currant", img: "/assets/Icecream.png" },
    { id: 2, name: "Very Berry Chocolaty", img: "/assets/kool.png" },
    { id: 3, name: "High Protein", img: "/assets/dahi.png" },
    { id: 4, name: "100% Pure", img: "/assets/ghee.png" },
    { id: 5, name: "Rajbhog Special", img: "/assets/Rajbhog.png" },
    { id: 6, name: "Summer Special", img: "/assets/lassi.png" },
  ];

  const itemsToShow = 3;
  const pages = useMemo(() => chunk(items, itemsToShow), [items]);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setPage((p) => (p + 1) % pages.length);
  };
  const handlePrev = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + pages.length) % pages.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      position: "relative",
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      position: "absolute",
      transition: { duration: 0.45, ease: "easeInOut" },
    }),
  };


  const letterVariant = {
    rest: { color: "#3B1C0A" }, 
    hover: (i) => ({
      color: ["#ED1E26", "#6A42C1", "#4EC8E9", "#3B1C0A"],
      transition: {
      
        duration: 1.2,
        delay: i * 0.04,
        ease: "easeInOut",
      },
    }),
  };

  
  const imageVariants = {
    rest: { y: 0 },
    hover: {
      y: [-5, -15, -5],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative w-full text-center overflow-hidden">

      <div className="mb-20">
        <h2 className="text-[#de0404] text-4xl font-bold">All time</h2>
        <h3 className="text-[#3B1C0A] text-5xl font-extrabold">Favorites</h3>
      </div>


      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#de0404] hover:scale-110 transition-all z-10"
      >
        <FaChevronLeft size={32} />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#de0404] hover:scale-110 transition-all z-10"
      >
        <FaChevronRight size={32} />
      </button>

     
      <div className="relative w-full flex justify-center overflow-hidden px-6 h-[400px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex justify-center gap-10 px-12 w-full items-center"
          >
            {pages[page].map((item) => {
              const letters = item.name.split("");

              return (
               
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center w-[250px] bg-white rounded-xl shadow-md transition-all duration-300 cursor-pointer"
                  initial="rest"
                  whileHover="hover"   
                  animate="rest"       
                >
                 
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-[250px] h-[250px] object-contain mb-4"
                    variants={imageVariants}
                  />

                  
                  <motion.h4 className="text-2xl font-semibold mb-3 flex justify-center">
                    {letters.map((char, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariant}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h4>

                  <motion.button
                    className="bg-[#de0404] text-white mb-5 border px-5 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-[#de0404] hover:border-[#de0404] transition-all"
                    whileTap={{ scale: 0.96 }}
                  >
                    View more
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      
      <div className="mt-6 flex justify-center gap-2">
        {pages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > page ? 1 : -1);
              setPage(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === page ? "bg-[#de0404]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
