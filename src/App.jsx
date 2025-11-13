// App.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intropage from "../Intropage";
import Storypage from "../Storypage";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const transitionSettings = {
    duration: 0.25,
    ease: "easeInOut",
  };

  return (
    //
    // --- STEP 1 ---
    // The main wrapper is 'relative' but has NO height.
    // It will grow with its content.
    //
    <div className="relative">
      <AnimatePresence mode="wait">
        {toggle ? (
          //
          // --- STEP 2: THE FIX ---
          // Intropage is NOT wrapped in a motion.div.
          // It renders normally and is allowed to be 500vh tall,
          // making the *entire page* scroll.
          //
          <Intropage />
        ) : (
          //
          // --- STEP 3 ---
          // Your Storypage (the intro animation) IS wrapped
          // so it can be fixed to the screen.
          //
          <motion.div
            key="story"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionSettings}
            // 'h-screen' locks this part to the full screen
            className="w-full h-screen"
          >
            <Storypage setToggle={setToggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;