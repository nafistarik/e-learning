"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionXProps {
  children: ReactNode;
  className?: string;
}

const TransitionX: React.FC<TransitionXProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TransitionX;
