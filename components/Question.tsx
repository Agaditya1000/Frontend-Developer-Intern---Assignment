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
      className="w-[896px] h-[90px] rounded-[15px] flex items-center justify-center border border-[#BAE6FD]"
      style={{
        background: 'linear-gradient(180deg, rgba(169, 237, 255, 0.45) 0%, rgba(169, 237, 255, 0.1) 100%)',
      }}
    >
      <p className="text-[#15313D] text-xl font-bold text-center">
        {questionNumber}. {questionText}
      </p>
    </motion.div>
  );
}
