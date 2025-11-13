import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import bowlcream from "/assets/bowlcream.png";
import carmel from "/assets/carmel.png";
import glassmilk from "/assets/glassmilk.png";
import icestick from "/assets/icestick.png";

const AnimatedItem = ({ style, img }) => (
  <motion.img
    src={img}
    className="absolute top-1/2 left-1/2 w-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
    style={style}
  />
);

const HeroScroll = () => {
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgressSticky } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressReveal } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const textOpacity = useTransform(
    scrollYProgressSticky,
    [0, 0.75, 1.0],
    [1, 1, 0]
  );
  const textScale = useTransform(scrollYProgressSticky, [0.75, 1.0], [1, 0.8]);

  const img1_opacity = useTransform(
    scrollYProgressSticky,
    [0.0, 0.05, 0.2, 0.25],
    [0, 1, 1, 0]
  );
  const img1_scale = useTransform(scrollYProgressSticky, [0.0, 0.25], [0.5, 1]);
  const img1_x = useTransform(scrollYProgressSticky, [0.0, 0.25], ["80%", "-80%"]);
  const img1_rotate = useTransform(
    scrollYProgressSticky,
    [0.0, 0.25],
    [15, -15]
  );

  const img2_opacity = useTransform(
    scrollYProgressSticky,
    [0.25, 0.3, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const img2_scale = useTransform(scrollYProgressSticky, [0.25, 0.5], [0.5, 1]);
  const img2_y = useTransform(scrollYProgressSticky, [0.25, 0.5], ["80%", "-80%"]);
  const img2_rotate = useTransform(
    scrollYProgressSticky,
    [0.25, 0.5],
    [-10, 10]
  );

  const img3_opacity = useTransform(
    scrollYProgressSticky,
    [0.5, 0.55, 0.7, 0.75],
    [0, 1, 1, 0]
  );
  const img3_scale = useTransform(scrollYProgressSticky, [0.5, 0.75], [0.5, 1]);
  const img3_x = useTransform(
    scrollYProgressSticky,
    [0.5, 0.75],
    ["-80%", "80%"]
  );
  const img3_rotate = useTransform(
    scrollYProgressSticky,
    [0.5, 0.75],
    [10, -10]
  );

  const img4_opacity = useTransform(
    scrollYProgressSticky,
    [0.75, 0.8, 0.95, 1.0],
    [0, 1, 1, 0]
  );
  const img4_scale = useTransform(scrollYProgressSticky, [0.75, 1.0], [0.5, 1]);
  const img4_y = useTransform(
    scrollYProgressSticky,
    [0.75, 1.0],
    ["-80%", "80%"]
  );
  const img4_rotate = useTransform(
    scrollYProgressSticky,
    [0.75, 1.0],
    [-15, 15]
  );

  const containerScale = useTransform(scrollYProgressReveal, [0, 1], [0.8, 1]);
  const containerBorderRadius = useTransform(
    scrollYProgressReveal,
    [0, 1],
    ["50%", "0%"]
  );
  const containerRotate = useTransform(scrollYProgressReveal, [0, 1], [45, 0]);

  return (
    <div ref={ref} className="relative" style={{ height: "800vh" }}>
      <motion.div
        className="sticky top-0 h-screen bg-[#e60026] rounded-2xl  flex items-center justify-center overflow-hidden"
        style={{
          scale: containerScale,
          borderRadius: containerBorderRadius,
          rotate: containerRotate,
        }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white text-center z-20"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          Unlock a world of indulgence
        </motion.h1>

        <AnimatedItem
          img={bowlcream}
          style={{
            opacity: img1_opacity,
            scale: img1_scale,
            x: img1_x,
            rotate: img1_rotate,
          }}
        />

        <AnimatedItem
          img={carmel}
          style={{
            opacity: img2_opacity,
            scale: img2_scale,
            y: img2_y,
            rotate: img2_rotate,
          }}
        />

        <AnimatedItem
          img={glassmilk}
          style={{
            opacity: img3_opacity,
            scale: img3_scale,
            x: img3_x,
            rotate: img3_rotate,
          }}
        />

        <AnimatedItem
          img={icestick}
          style={{
            opacity: img4_opacity,
            scale: img4_scale,
            y: img4_y,
            rotate: img4_rotate,
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroScroll;