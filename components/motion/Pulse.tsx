"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Pulse = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Pulse;
