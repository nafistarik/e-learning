"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // Smoother ease-out curve
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
