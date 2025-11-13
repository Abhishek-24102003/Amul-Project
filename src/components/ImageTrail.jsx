import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from "framer-motion";   // <-- NEW

import img1 from '/assets/dahi.png';
import img2 from '/assets/Icecream.png';
import img3 from '/assets/ghee.png';
import img4 from '/assets/lassi.png';
import img5 from '/assets/milkbottle.png';
import img6 from '/assets/slice.png';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.25
    }
  })
};

const ImageTrail = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const lastRender = useRef(0);
  const imageUrls = [img1, img2, img3, img4, img5, img6];

  // GSAP TRAIL — unchanged
  useEffect(() => {
    const contentArea = contentRef.current;
    const container = containerRef.current;

    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastRender.current < 100) return;
      lastRender.current = now;

      const rect = container.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : null;
      const clientX = touch ? touch.clientX : e.clientX;
      const clientY = touch ? touch.clientY : e.clientY;

      const xVal = clientX - rect.left;
      const yVal = clientY - rect.top;

      const imgDiv = document.createElement('div');
      imgDiv.style.width = '100px';
      imgDiv.style.height = '120px';
      imgDiv.style.position = 'absolute';
      imgDiv.style.left = `${xVal}px`;
      imgDiv.style.top = `${yVal}px`;
      imgDiv.style.transform = 'translate(-50%, -50%)'; 
      imgDiv.classList.add('overflow-hidden', 'pointer-events-none', 'z-50');

      const img = document.createElement('img');
      const randomUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      img.src = randomUrl;
      img.classList.add('w-full', 'h-full', 'object-cover', 'opacity-60');
      img.style.transform = 'translateY(100%)';

      imgDiv.appendChild(img);
      container.appendChild(imgDiv);

      gsap.timeline({ onComplete: () => imgDiv.remove() })
        .to(img, { y: "0%", duration: 0.5, ease: "power1.out" })
        .to(img, { y: "100%", duration: 0.5, delay: 0.2, ease: "power2.in" });
    };

    contentArea.addEventListener('mousemove', handleMove);
    contentArea.addEventListener('touchmove', handleMove);

    return () => {
      contentArea.removeEventListener('mousemove', handleMove);
      contentArea.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-fit relative">
      <div
        ref={contentRef}
        className="relative z-10 text-white cursor-default mix-blend"
      >
        <div className="relative z-10 mix-blend-difference">

          {/* 🌟 FRAMER MOTION TEXT ANIMATION */}
          {!children && (
            <div className="text-center w-fit">

              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                custom={0}
                className="text-[9vh] font-bold text-red-600 rubix"
              >
                The Taste of India
              </motion.h1>

              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-[9vh] font-bold text-red-600 rubix"
              >
                Reimagined
              </motion.h1>

              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                custom={2}
                className="text-[9vh] font-bold text-red-600 rubix"
              >
                for a New Generation
              </motion.h1>

            </div>
          )}

          {children}

        </div>
      </div>
    </div>
  );
};

export default ImageTrail;
