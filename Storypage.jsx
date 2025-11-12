import React from "react";
import ImageTrail from "./src/components/ImageTrail";

const Storypage = ({ setToggle }) => {
  return (
    <div className="h-screen w-full bg-amber-100 relative">
      <img
        src="/assets/amulMainicon.png"
        alt=""
        className="absolute w-110 left-1/2 transform -translate-x-1/2"
      />

      <ImageTrail />

      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2">
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
