import { motion } from "framer-motion";

export default function Card() {
  const arr = [
    { img: "/assets/amulmilk.png", name: "Gold Milk", desc: "Rich in protein, low fat.", bg: "/assets/Background/bg1.webp" },
    { img: "/assets/Kooldrink.png", name: "Kool Drink", desc: "Rich chocolate smooth drink.", bg: "/assets/Background/bg2.webp" },
    { img: "/assets/butter.png", name: "Butter", desc: "Pasteurized butter", bg: "/assets/Background/bg3.webp" },
    { img: "/assets/lassi.png", name: "Lassi", desc: "Smooth sweet lassi", bg: "/assets/Background/bg1.webp" },
    { img: "/assets/slice.png", name: "Slice", desc: "High good fat cheese slice", bg: "/assets/Background/bg3.webp" },
    { img: "/assets/Rajbhog.png", name: "Rajbhog Icecream", desc: "Rich flavour rajbhog icecream", bg: "/assets/Background/bg1.webp" },
    { img: "/assets/ghee.png", name: "Cow ghee", desc: "100% pure low fat ghee.", bg: "/assets/Background/bg2.webp" },
    { img: "/assets/dahi.png", name: "Amul masti", desc: "Thick rich curd.", bg: "/assets/Background/bg3.webp" },
  ];

  // Scroll fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex gap-10 flex-wrap justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {arr.map((e, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          style={{
            backgroundImage: `url(${e.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative w-72 rounded-3xl shadow-md transition-transform duration-300 overflow-visible group cursor-pointer"
        >
          {/* ✨ Fancy Explore Button Tag */}
          <motion.div
            className="absolute top-4 left-4 border-2 border-[#5a3825] text-[#5a3825] px-3 py-1 rounded-full text-sm font-semibold bg-white overflow-hidden"
            whileHover={{
              scale: 1.08,
              rotate: -3,
              backgroundColor: "#5a3825",
              color: "#fff",
              transition: { type: "spring", stiffness: 250, damping: 12 },
            }}
          >
            {/* Shimmer effect layer */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">Explore More</span>
          </motion.div>

          {/* Product Image */}
          <motion.div
            className="relative flex justify-center mt-10 z-10 top-0 -right-5"
            whileHover={{
              y: -45,
              rotate: 8,
              scale: 1.15,
              transition: {
                duration: 0.45,
                ease: "easeOut",
              },
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              transition: { duration: 0.15 },
            }}
          >
            <motion.img
              src={e.img}
              alt={e.name}
              className="w-40 drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] pointer-events-none"
            />
          </motion.div>

          {/* Text */}
          <div className="p-6 text-center relative z-0">
            <h3 className="text-lg font-extrabold text-[#5a3825]">{e.name}</h3>
            <p className="text-sm text-[#5a3825]/80 mt-1">{e.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
