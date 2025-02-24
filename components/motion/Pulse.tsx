"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Pulse = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1], opacity: [0.8, 1, 0.8] }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Pulse;
