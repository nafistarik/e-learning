"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeUp = ({
  children,
  delay = .2,
  duration = .8,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease-out curve
      }}
      className=" transition-colors"
    >
      {children}
    </motion.tr>
  );
};

export default FadeUp;
