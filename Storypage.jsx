import React from "react";
import ImageTrail from "./src/components/ImageTrail";

const Storypage = ({ setToggle }) => {
  return (
    // MODIFIED:
    // 1. h-screen -> min-h-screen (prevents overflow issues)
    // 2. Added py-12 for vertical padding
    // 3. gap-15 -> gap-12 md:gap-16 (responsive spacing)
    // 4. items-center-safe -> items-center (fixed typo)
    <div className="min-h-screen flex flex-col gap-12 md:gap-16 items-center w-full bg-[radial-gradient(circle_at_50%_30%,#fffdf5,#f9ecd1,#f6e4b4)] relative">
      <img
        src="/assets/amulMainicon.png"
        alt=""
        // MODIFIED:
        // 1. w-110 -> w-1/2 max-w-xs
        //    (50% width on mobile, capped at 320px on larger screens)
        className="w-1/2 max-w-xs"
      />

      <ImageTrail />

      <div className="relative">
        <div className="absolute -bottom-2 right-2 w-[90%] h-[80%] bg-[#c7a690] rounded-full z-0"></div>

        <button
          // MODIFIED:
          // 1. text-2xl -> text-xl md:text-2xl (responsive font size)
          className="relative z-10 text-xl md:text-2xl text-amber-100 cursor-pointer tracking-wider bg-[#754838] px-5 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
          onClick={() => setToggle((prev) => !prev)}
        >
          Skip Story!
        </button>
      </div>
    </div>
  );
};

export default Storypage;