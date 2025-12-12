'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface QuestionProps {
  questionNumber: number;
  questionText: string;
}

export default function Question({ questionNumber, questionText }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[896px] h-[78px] rounded-[10px] flex items-center justify-center gap-[10px] border border-[#BAE6FD] px-[277px] py-[24px]"
      style={{
        background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
      }}
    >
      <p className="text-[#15313D] text-xl font-bold text-center whitespace-nowrap">
        {questionNumber}. {questionText}
      </p>
    </motion.div>
  );
}
