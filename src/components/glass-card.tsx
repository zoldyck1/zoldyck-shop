"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-xl
        bg-white/85 backdrop-blur-xl
        border border-teal-100
        shadow-[0_8px_32px_rgba(45,212,191,0.15)]
        before:content-[''] before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-teal-100/40 before:to-transparent
        before:animate-[gradient_3s_ease_infinite]
        ${className}
      `}
      style={{
        '--glass-refraction': '1.5',
        '--glass-darkness': '0.07',
      } as any}
    >
      <div className="relative z-10">
        {children}
      </div>
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(45,212,191,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(45,212,191,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(45,212,191,0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}

// Add this to your globals.css
/*
@keyframes gradient {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
*/