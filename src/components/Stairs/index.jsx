"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { opacity, expand } from './anim';

export default function Layout({ children, backgroundColor }) {
  const anim = (variants, custom = null) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="relative w-full h-screen" style={{ backgroundColor }}>
      {/* Background transition */}
      <motion.div {...anim(opacity)} className="fixed top-0 left-0 w-full h-full bg-white pointer-events-none z-50" />

      {/* Transition containers with expand animation */}
      <div className="fixed top-0 left-0 w-full h-full flex pointer-events-none z-50">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div key={i} {...anim(expand, nbOfColumns - i)} className="relative w-full h-full bg-white -z-50" />
          );
        })}
      </div>

      {/* Children content */}
      {children}
    </div>
  );
}
