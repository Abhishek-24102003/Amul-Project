import React from "react";
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

  return (
    <div className="w-full overflow-hidden py-8 space-y-8 bg-white my-20">
      {/* 🔹 First Track — moves LEFT */}
      <div className="flex items-center mt-10">
        <button className="relative px-10 py-3 rounded-full border-2 border-[#c5afff] text-[#b59cff] font-extrabold text-xl bg-white overflow-visible flex-shrink-0 ml-6">
          <span className="relative z-10">Impulse</span>
          
        </button>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-slide-left whitespace-nowrap">
            {items.concat(items).map((item, index) => (
              <span
                key={index}
                className="text-3xl font-extrabold text-[#5b2f1e] whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Second Track — moves RIGHT */}
      <div className="flex items-center">
        <button className="relative px-10 py-3 rounded-full border-2 border-[#c5afff] text-[#b59cff] font-extrabold text-xl bg-white overflow-visible flex-shrink-0 ml-6">
          <span className="relative z-10">Take Home</span>
          
        </button>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-slide-right whitespace-nowrap">
            {arr2.concat(arr2).map((item, index) => (
              <span
                key={index}
                className="text-3xl font-extrabold text-[#5b2f1e] whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Favorites/>
    </div>
  );
};

export default Newly;
