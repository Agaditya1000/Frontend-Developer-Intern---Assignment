'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  className?: string;
}

export default function NavigationArrows({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  className,
}: NavigationArrowsProps) {
  return (
    <div className={`flex gap-[10px] ${className || ''}`}>
      <motion.button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`w-[53px] h-[50px] rounded-lg flex items-center justify-center transition-all duration-300 border ${canGoPrevious
          ? 'bg-white hover:bg-gray-50 text-gray-700 border-[#E2E8F0]'
          : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        className={`w-[53px] h-[50px] rounded-lg flex items-center justify-center transition-all duration-300 border ${canGoNext
          ? 'bg-[#C6E9F7] hover:bg-[#96E5FF] text-[#15313D] border-[#96E5FF]'
          : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
