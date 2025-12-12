'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnswerOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function AnswerOption({ text, isSelected, onClick }: AnswerOptionProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-[896px] h-[90px] rounded-[15px] border flex items-center justify-center transition-all duration-200 ${isSelected
          ? 'border-[#3CABDA] text-[#15313D] font-bold shadow-md'
          : 'bg-white border-[#E0F2F7] text-[#15313D] font-medium hover:border-[#BAE6FD] hover:bg-gray-50'
        }`}
      style={{
        background: isSelected
          ? 'linear-gradient(180deg, rgba(169, 237, 255, 0.45) 0%, rgba(169, 237, 255, 0.1) 100%)'
          : undefined
      }}
      animate={isSelected ? { scale: 1.02, y: -2 } : { scale: 1, y: 0 }}
      whileHover={!isSelected ? { scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.8)' } : {}}
      whileTap={{ scale: 0.98 }}
      initial={false}
      aria-pressed={isSelected}
      role="radio"
      aria-label={`Select answer: ${text}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span className="text-lg">{text}</span>
    </motion.button>
  );
}
