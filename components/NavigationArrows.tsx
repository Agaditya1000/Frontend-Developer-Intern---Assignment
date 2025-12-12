'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function NavigationArrows({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: NavigationArrowsProps) {
  return (
    <div className="flex gap-4 absolute bottom-12 right-12">
      <motion.button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${canGoPrevious
            ? 'bg-[#E5F8FF] hover:bg-[#C6E9F7] text-[#15313D] border border-[#96E5FF]'
            : 'bg-gray-100 text-gray-300 cursor-not-allowed hidden'
          }`}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        aria-label="Previous question"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${canGoNext
            ? 'bg-[#C6E9F7] hover:bg-[#96E5FF] text-[#15313D] border border-[#96E5FF]'
            : 'bg-gray-100 text-gray-300 cursor-not-allowed'
          }`}
        whileHover={canGoNext ? { scale: 1.05 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
        aria-label="Next question"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
