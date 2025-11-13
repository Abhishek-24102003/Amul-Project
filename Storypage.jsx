import React from "react";
import ImageTrail from "./src/components/ImageTrail";

const Storypage = ({ setToggle }) => {
  return (
    <div className="h-screen flex flex-col gap-15 items-center-safe w-full bg-[radial-gradient(circle_at_50%_30%,#fffdf5,#f9ecd1,#f6e4b4)] relative">
      <img
        src="/assets/amulMainicon.png"
        alt=""
        className=" w-110"
      />

      <ImageTrail />

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="absolute -bottom-2 right-2 w-[90%] h-[80%] bg-[#c7a690] rounded-full z-0"></div>

        <button
          className="relative z-10 text-2xl text-amber-100 cursor-pointer tracking-wider bg-[#754838] px-5 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
          onClick={() => setToggle((prev) => !prev)}
        >
          Skip Story!
        </button>
      </div>
    </div>
  );
};

export default Storypage;
