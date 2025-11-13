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

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastRender.current < 100) return;
      lastRender.current = now;

      const rect = container.getBoundingClientRect();
      const xVal = e.clientX ;
      const yVal = e.clientY ;

      const imgDiv = document.createElement('div');
      imgDiv.style.width = '100px';
      imgDiv.style.height = '120px';
      imgDiv.style.position = 'absolute';
      imgDiv.style.left = `${xVal}px`;
      imgDiv.style.top = `${yVal}px`;
      imgDiv.classList.add('overflow-hidden', 'pointer-events-none', 'z-50');

      const img = document.createElement('img');
      const randomUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      img.setAttribute('src', randomUrl);
      img.classList.add('w-full', 'h-full', 'object-cover','opacity-60');
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
      contentArea.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (contentArea) {
        contentArea.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=" w-fit"
    >
      <div
        ref={contentRef}
        className="relative z-10 text-white  cursor-default mix-blend-difference"
      >
        <div className="relative z-10 mix-blend-difference">
          {children || (
            <h1 className="text-[5vw] font-bold text-center w-fit">
             The Taste of India <br /> Reimagined <br />for a New Generation
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTrail;
