"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RotateProps {
  children: ReactNode;
  className?: string;
}

const Rotate: React.FC<RotateProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ rotate: -5, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Rotate;
