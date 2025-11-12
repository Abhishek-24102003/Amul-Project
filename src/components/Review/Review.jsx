import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    review:
      "Amul products are always fresh and full of flavor. Their ice creams are my family's absolute favorite!",
    img: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 2,
    name: "Ravi Patel",
    review:
      "The quality of Amul milk and butter is unbeatable. Proud to support Indian farmers through Amul!",
    img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 3,
    name: "Sneha Mehta",
    review:
      "Amul chocolates are so rich and creamy! Love the variety and smoothness of every bite.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 4,
    name: "Arjun Verma",
    review:
      "I trust Amul for all dairy products. The taste of their ghee reminds me of home-cooked meals.",
    img: "https://media.istockphoto.com/id/1280100017/photo/young-man-in-kurta-pyjamas-at-home-crossed-arms-on-a-festival-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=lX1ngu5w4L_rCCiRlztXOXmxAYe3IOZLIJlkTz4wNAk=",
  },
  {
    id: 5,
    name: "Neha Singh",
    review:
      "Refreshing lassi and amazing butter! Amul has been part of our daily routine for years.",
    img: "https://images.unsplash.com/photo-1597898111396-f149999e08f7?auto=format&fit=crop&q=60&w=900",
  },
];

const letterVariant = {
  rest: { color: "#374151" },
  hover: (i) => ({
    color: ["#ED1E26", "#6A42C1", "#4EC8E9", "#ED1E26"],
    transition: {
      duration: 1.2,
      delay: i * 0.03,
      ease: "easeInOut",
    },
  }),
};

const cardVariant = {
  rest: {},
  hover: {},
};

const Review = () => {
  return (
    <motion.div
      className="w-full py-20 bg-linear-to-r from-red-100 via-purple-200 to-red-300"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-20">
        <h2 className="text-3xl font-extrabold opacity-90 text-red-500">
          Here’s what our happy customers have to say!
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-16">
        {reviews.map((r) => {
          const letters = r.review.split("");

          return (
            <motion.div
              key={r.id}
              variants={cardVariant}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="bg-white text-gray-800 w-[280px] sm:w-[300px] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={r.img}
                alt={r.name}
                className="w-20 h-20 rounded-full mb-4 object-cover bg-top"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />

              <h3 className="font-bold text-lg text-[#de0404]">{r.name}</h3>

              <motion.p className="text-sm text-gray-700 mt-2 italic leading-relaxed flex flex-wrap justify-center">
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
              </motion.p>

              <motion.div
                className="flex mt-3 text-[#FFD700] text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <motion.span key={i} whileHover={{ scale: 1.3 }}>
                      ★
                    </motion.span>
                  ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Review;
