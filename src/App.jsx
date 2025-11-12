import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intropage from "../Intropage";
import Storypage from "../Storypage";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  };

  const transitionSettings = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <AnimatePresence mode="wait">
        {toggle ? (
          <motion.div
            key="intro"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionSettings}
            className="absolute top-0 left-0 w-full h-full overflow-y-auto"
          >
            <Intropage />
          </motion.div>
        ) : (
          <motion.div
            key="story"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionSettings}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Storypage setToggle={setToggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
