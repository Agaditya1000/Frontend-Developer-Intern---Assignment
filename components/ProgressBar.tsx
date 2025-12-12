'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="flex items-center justify-center gap-6">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="h-[6px] rounded-full relative overflow-hidden transition-all duration-300"
          style={{ width: '160px', backgroundColor: index < current ? '#15313D' : '#E0E0E0' }}
        >
          {/* Active segment indicator if needed, but solid color works well for finished steps */}
        </div>
      ))}
    </div>
  );
}
