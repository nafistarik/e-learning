"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Flip = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Flip;
