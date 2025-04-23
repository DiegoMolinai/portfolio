// src/components/AnimatedPage.jsx

import { motion } from 'framer-motion';

const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
