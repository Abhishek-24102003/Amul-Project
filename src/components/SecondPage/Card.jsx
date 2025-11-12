import { motion } from "framer-motion";

export default function Card() {
    let arr = [
        {
            img: "./public/assets/amulmilk.png",
            name: "Gold Milk",
            desc: "Rich in protien,low fat.",
            bg:"./public/assets/Background/bg1.webp"
        },
        {
            img: "./public/assets/Kooldrink.png",
            name: "Kool Drink",
            desc: "Rich chocolate smooth drink.",
            bg:"./public/assets/Background/bg2.webp"
        },
        {
            img: "./public/assets/butter.png",
            name: "Butter",
            desc: "Pasteurized butter",
            bg:"./public/assets/Background/bg3.webp"
        },
         {
            img: "./public/assets/lassi.png",
            name: "Lassi",
            desc: "Smooth sweet lassi",
            bg:"./public/assets/Background/bg1.webp"
        },
          {
            img: "./public/assets/slice.png",
            name: "Slice",
            desc: "High good fat cheese slice",
            bg:"./public/assets/Background/bg3.webp"
        },
          {
            img: "./public/assets/Rajbhog.png",
            name: "Rajbhog Icecream",
            desc: "Rich flavour rajbhog icecream",
            bg:"./public/assets/Background/bg1.webp"
        },
          {
            img: "./public/assets/ghee.png",
            name: "Cow ghee",
            desc: "100% pure low fat ghee.",
            bg:"./public/assets/Background/bg2.webp"
      },
           {
            img: "./public/assets/dahi.png",
            name: "Amul masti",
            desc: "Thick rich curd.",
            bg:"./public/assets/Background/bg3.webp"
        },
    ]
  return (
      <div className="flex gap-15 flex-wrap">
          {
               arr.map((e) => {
       return  <motion.div
           whileHover={{ scale: 1.02 }}
           transition={{ type: "spring", stiffness: 200, damping: 15 }}
           className={`relative w-72 bg-[url(${e.bg})] bg-cover rounded-3xl shadow-md transition-transform duration-500 overflow-hidden group cursor-pointer`}
    >
      {/* --- 'New' label --- */}
      <div className="absolute top-4 left-4 border-2 border-[#5a3825] text-[#5a3825] hover:scale-95 px-3 py-1 rounded-full text-sm font-medium bg-white">
        Exlpore More
      </div>

      {/* --- Ice cream image (pops out on hover) --- */}
      <div className="relative flex justify-center mt-16">
        <motion.img
          src={e.img} // 👈 replace with your file path
          alt="Choco Fudge Ice Cream"
          className="w-60 drop-shadow-xl hover:rotate-6 transition-transform duration-500 "
          whileHover={{
            y: -40,
            scale: 1.1,
          }}
        />
      </div>

      {/* --- Text details --- */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-extrabold text-[#5a3825]">
         {e.name}
        </h3>
        <p className="text-sm text-[#5a3825]/80 mt-1">
          {e.desc}
        </p>
      </div>
    </motion.div>
   })
          }
     </div>
  )
}
