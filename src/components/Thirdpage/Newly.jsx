import React from "react";
import { motion } from "framer-motion";
import Favorites from "./Favorites";

const Newly = () => {
  const items = [
    "Scoop Ice Cream",
    "Dollies",
    "Flingo Ice Cream Cone",
    "Badaboom",
    "Milk",
    "Butter",
    "Ghee",
    "Paneer",
    "Cheese",
    "Dahi",
    "Ice Cream",
    "Chocolates",
    "Beverages",
  ];

  const arr2 = [
    "Amul Mithai Mate",
    "Amul Butter",
    "Amul Cheese",
    "Amul Fresh Cream",
    "Amul Paneer",
    "Amul Ghee",
    "Amul Dahi",
    "Amul Lassi",
    "Amul Buttermilk",
  ];

  
  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full overflow-hidden py-8 space-y-8 bg-white my-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }} 
    >

      <motion.div className="flex items-center mt-10" variants={childVariants}>
    
        <motion.div
          className="relative shrink-0 ml-6 mx-5"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
        >
        
          <motion.div
            className="absolute -bottom-2 -right-2 w-[90%] h-[80%] bg-[#bca5f9] rounded-full z-0"
            layout
          />
          <motion.button
            className="relative px-10 py-3 rounded-full border-2 border-[#bca5f9] text-[#b59cff] font-extrabold text-xl bg-white overflow-visible z-10 shadow-none"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#bca5f9",
              color: "#fff",
              transition: { duration: 0.3 },
            }}
          >
            Impulse
          </motion.button>
        </motion.div>

     
        <motion.div className="relative w-full overflow-hidden" variants={childVariants}>
          <motion.div className="flex gap-16 animate-slide-left whitespace-nowrap" layout>
            {items.concat(items).map((item, index) => (
              <motion.span
                key={index}
                layout
                className="text-3xl font-extrabold text-[#5b2f1e] whitespace-nowrap"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

    
      <motion.div className="flex items-center" variants={childVariants}>
 
        <motion.div
          className="relative shrink-0 ml-6 mx-4"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
        >
      
          <motion.div
            className="absolute -bottom-2 -right-2 w-[90%] h-[80%] bg-[#9cdcfb] rounded-full z-0"
            layout
          />
          <motion.button
            className="relative px-10 py-3 rounded-full border-2 border-[#9cdcfb] text-[#7ad4f8] font-extrabold text-xl bg-white overflow-visible z-10"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#9cdcfb",
              color: "#fff",
              transition: { duration: 0.3 },
            }}
          >
            Take Home
          </motion.button>
        </motion.div>

    
        <motion.div className="relative w-full overflow-hidden" variants={childVariants}>
          <motion.div className="flex gap-16 animate-slide-right whitespace-nowrap" layout>
            {arr2.concat(arr2).map((item, index) => (
              <motion.span
                key={index}
                layout
                className="text-3xl font-extrabold text-[#5b2f1e] whitespace-nowrap"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

    
      <motion.div variants={childVariants} className="mt-20">
        <Favorites />
      </motion.div>
    </motion.div>
  );
};

export default Newly;
