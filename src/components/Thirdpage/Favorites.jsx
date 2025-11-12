import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Favorites = () => {
  const items = [
    {
      id: 1,
      name: "Black Currant",
      img: "./public/assets/Icecream.png",
    },
    {
      id: 2,
      name: "Very Berry Chocolaty",
      img: "./public/assets/kool.png",
    },
    {
      id: 3,
      name: " High Protien",
      img: "./public/assets/dahi.png",
    },
    {
      id: 4,
      name: "100% Pure",
      img: "./public/assets/ghee.png",
    },
    {
      id: 5,
      name: "Rajbhog special",
      img: "./public/assets/Rajbhog.png",
      },
    {
      id: 6,
      name: "Summer special",
      img: "./public/assets/lassi.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsToShow >= items.length ? 0 : prev + itemsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsToShow < 0 ? items.length - itemsToShow : prev - itemsToShow
    );
  };

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + itemsToShow
  ).length
    ? items.slice(currentIndex, currentIndex + itemsToShow)
    : items.slice(0, itemsToShow);

  return (
    <div className="relative w-full text-center">
      {/* Title */}
      <div className="mb-20">
        <h2 className="text-[#de0404] text-4xl font-bold">All time</h2>
        <h3 className="text-brown-800 text-5xl font-extrabold">Favorites</h3>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-700 text-3xl transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-700 text-3xl transition"
      >
        <FaChevronRight />
      </button>

      {/* Items */}
      <div className="flex justify-center gap-10 px-12">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-[250px] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[250px] h-[250px] object-contain mb-4"
            />
            <h4 className="text-2xl font-semibold text-[#3B1C0A] mb-3">
              {item.name}
            </h4>
            <button className="bg-[#de0404] text-white hover:bg-white hover:text-[#de0404] hover:border-red-600 border px-5 py-2 rounded-md text-sm font-semibold">
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
