"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Shake = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      animate={{ x: [0, -5, 5, -5, 5, 0] }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Shake;
