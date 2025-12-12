'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FinalResultsProps {
  score: number;
  onRestart: () => void;
}

export default function FinalResults({ score, onRestart }: FinalResultsProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{ minWidth: '1920px', minHeight: '1080px' }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E0F2F7] via-[#C6E9F7] to-[#E5F8FF]"></div>

      {/* Main Content Container - Rectangle 1: 2088x1160, top: -40px, left: -84px, radius: 42px */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 rounded-[42px] bg-[#F4FDFF] flex flex-col items-center justify-center"
        style={{
          width: '2088px',
          height: '1160px',
          position: 'relative',
        }}
      >
        {/* Keep Learning Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 text-xl mb-4"
        >
          Keep Learning!
        </motion.p>

        {/* Your Final score is */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-serif-display text-4xl text-[#15313D] mb-6"
        >
          Your Final score is
        </motion.h2>

        {/* Score Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
          className="mb-12"
        >
          <span 
            className="font-serif-display leading-none font-bold bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
            style={{
              fontSize: '200px',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {score}
          </span>
          <span 
            className="font-serif-display leading-none font-bold bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
            style={{
              fontSize: '120px',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            %
          </span>
        </motion.div>

        {/* Start Again Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-12 py-4 bg-gradient-to-r from-[#3CABDA] to-[#2A9BC8] text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Start quiz again"
        >
          Start Again
        </motion.button>
      </motion.div>
    </div>
  );
}
