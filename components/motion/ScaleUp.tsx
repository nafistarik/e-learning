"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleUpProps {
  children: ReactNode;
  className?: string;
}

const ScaleUp: React.FC<ScaleUpProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1], // Soft bounce effect
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleUp;
