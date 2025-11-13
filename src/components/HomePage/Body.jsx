import React from "react";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div
      className="h-[90vh] w-full bg-[radial-gradient(circle_at_10%_30%,#d9a76c_0%,#b07c4f_35%,#6b4423_70%,#2c1b0f_100%)]
 relative top-25 overflow-hidden"
    >
      {/* Moving Background Gradient */}
      <motion.div
        className="
absolute inset-0 
bg-gradient-to-r 
from-[#ffffff0a] 
via-[#ffffff26] 
to-[#00000040] 
blur-3xl 
opacity-70 
mix-blend-multiply"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Cream Tilted Background Layer */}
      <motion.div
        className="absolute h-4/5 w-4/5 bg-cover rounded-b-full rounded-r-full bg-[#5D392D] rotate-10 -bottom-40 -left-70 z-0"
        animate={{
          rotate: [20, 22, 18, 20],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="w-full h-full absolute flex">
        {/* LEFT SIDE */}
        <div id="left" className="w-[55%] h-full relative">
          {/* 🧊 Icecream + Kool (hover fix applied) */}
          <motion.div
            className="relative w-[200px] h-[500px]"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="
                relative w-full h-full transition-all duration-300 ease-out transform-gpu
                drop-shadow-[-20px_20px_25px_rgba(0,0,0,0.35)]
                hover:scale-[1.05]
                hover:-translate-y-2
                hover:drop-shadow-[-18px_25px_45px_rgba(0,0,0,0.55)]
                cursor-pointer
              "
            >
              <img
                src="/assets/Icecream.png"
                alt="Ice Cream"
                className="h-[45%] absolute top-14 left-5 rotate-20 pointer-events-none"
              />
              <img
                src="/assets/kool.png"
                alt="Kool"
                className="h-[45%] absolute top-13 left-7 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* 🧀 Cheese */}
          <motion.img
            src="/assets/cheese.png"
            alt="Cheese"
            className="h-[35%] absolute top-50 left-35 drop-shadow-[-20px_20px_25px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { duration: 0.3 },
            }}
          />

          {/* 🥛 Milk Bottle */}
          <motion.img
            src="/assets/milkbottle.png"
            alt="Milk Bottle"
            className="h-[60%] absolute right-5 bottom-8 drop-shadow-[-20px_20px_25px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 },
            }}
          />

          {/* 🐄 Cow */}
          <motion.img
            src="/assets/cow.png"
            alt="Cow"
            className="h-[15%] opacity-70 absolute left-0 bottom-13"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          />

          {/* 📜 Bottom Notes */}
          <motion.p
            className="text-[8px] absolute bottom-5 left-3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Images are for <br /> representation purpose only!
          </motion.p>

          <motion.h1
            className="absolute bottom-5 text-[#c2997e] text-2xl font-bold left-50"
            animate={{
              opacity: [0.9, 1, 0.9],
              y: [0, -2, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Price Effective 20<sup>th</sup> November 2025
          </motion.h1>
        </div>

        {/* RIGHT SIDE */}
        <div
          id="right"
          className="w-[45%] h-full text-white flex flex-col pt-20 relative"
        >
          <motion.p
            className="text-3xl font-semibold mb-2 tracking-wide"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            The Taste of India!
          </motion.p>

          {/* Animated Gradient Heading (no glow) */}
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#fff3b0] via-[#ff758c] to-[#a8edea] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            QUALITY YOU CAN TRUST. GOODNESS YOU CAN FEEL.
          </motion.h1>

          <div className="w-[95%] border-t-2 border-white my-4"></div>

          <motion.p
            className="text-2xl font-light max-w-3xl"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Milk • Butter • Ghee • Paneer • Cheese • Dahi • Ice Cream •
            Chocolates • Beverages
          </motion.p>

          <motion.h3
            className="text-xl font-semibold mb-2 tracking-wide w-fit p-3 rounded-lg bg-[#ED1E26] absolute bottom-10 right-10"
            whileHover={{
              scale: 1.05,
            }}
          >
            From India’s Farmers to Your Family
          </motion.h3>
        </div>
      </div>

      {/* ✨ Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/50 rounded-full blur-md"
            style={{
              width: Math.random() * 6 + 4,
              height: Math.random() * 6 + 4,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
