"use client";

import { motion } from 'framer-motion';

export function BackgroundMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      style={{
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
      }}
      className="relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
}