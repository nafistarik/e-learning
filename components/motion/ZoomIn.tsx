"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const ZoomIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
