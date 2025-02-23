"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const BlurIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
