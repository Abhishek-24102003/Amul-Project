import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Popularpick = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3, 
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "120px",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="w-full mt-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
     
      <motion.h1
        className="text-center font-extrabold rubix mt-55 text-4xl font-bold text-[#ED1E26]"
        variants={headingVariants}
      >
        Hero Products
      </motion.h1>

      
      <motion.div
        className="mx-auto mt-3 h-[4px] bg-[#ED1E26] rounded-full"
        variants={underlineVariants}
      />

    
      <motion.div
        className="p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card />
      </motion.div>
    </motion.div>
  );
};

export default Popularpick;
