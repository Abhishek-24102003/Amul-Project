import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import img1 from '/assets/dahi.png';
import img2 from '/assets/Icecream.png';
import img3 from '/assets/ghee.png';
import img4 from '/assets/lassi.png';
import img5 from '/assets/milkbottle.png';
import img6 from '/assets/slice.png';

const ImageTrail = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const lastRender = useRef(0);
  const imageUrls = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const contentArea = contentRef.current;
    const container = containerRef.current;

    // This single handler works for both mouse and touch events
    const handleMove = (e) => {
      // Throttle the event
      const now = Date.now();
      if (now - lastRender.current < 100) return;
      lastRender.current = now;

      // Get container's position on the page
      const rect = container.getBoundingClientRect();

      // Check if it's a touch event or mouse event
      const touch = e.touches ? e.touches[0] : null;
      const clientX = touch ? touch.clientX : e.clientX;
      const clientY = touch ? touch.clientY : e.clientY;

      // Calculate position *relative* to the container
      const xVal = clientX - rect.left;
      const yVal = clientY - rect.top;

      const imgDiv = document.createElement('div');
      imgDiv.style.width = '100px';
      imgDiv.style.height = '120px';
      imgDiv.style.position = 'absolute';
      // Position relative to the container
      imgDiv.style.left = `${xVal}px`;
      imgDiv.style.top = `${yVal}px`;
      // Center the image on the cursor (optional but nice)
      imgDiv.style.transform = 'translate(-50%, -50%)'; 
      imgDiv.classList.add('overflow-hidden', 'pointer-events-none', 'z-50');

      const img = document.createElement('img');
      const randomUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      img.setAttribute('src', randomUrl);
      img.classList.add('w-full', 'h-full', 'object-cover', 'opacity-60');
      img.style.transform = 'translateY(100%)';

      imgDiv.appendChild(img);
      container.appendChild(imgDiv);

      const tl = gsap.timeline({
        onComplete: () => {
          imgDiv.remove();
        },
      });

      tl.to(img, {
        y: '0%',
        duration: 0.5,
        ease: 'power1.out',
      }).to(img, {
        y: '100%',
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.in',
      });
    };

    if (contentArea) {
      // Add listeners for both mouse and touch
      contentArea.addEventListener('mousemove', handleMove);
      contentArea.addEventListener('touchmove', handleMove);
    }

    return () => {
      if (contentArea) {
        // Remove both listeners on cleanup
        contentArea.removeEventListener('mousemove', handleMove);
        contentArea.removeEventListener('touchmove', handleMove);
      }
    };
  }, []); // Empty dependency array is correct here

  return (
    <div
      ref={containerRef}
      // Added 'relative' to make it the positioning context
      className="w-fit relative"
    >
      <div
        ref={contentRef}
        className="relative z-10 text-white cursor-default mix-blend-difference"
      >
        <div className="relative z-10 mix-blend-difference">
          {children || (
            <h1 className="text-[8vh] font-bold text-center w-fit">
              The Taste of India <br /> Reimagined <br />
              for a New Generation
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTrail;