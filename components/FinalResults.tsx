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
          width: '1920px',
          height: '1080px',
          position: 'absolute',
          top: '0px',
          left: '0px',
        }}
      >
        {/* Keep Learning Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute flex items-center justify-center bg-white text-[#15313D] font-medium"
          style={{
            width: '239px',
            height: '45px',
            top: '337px',
            left: '840px',
            borderRadius: '8px',
            padding: '10px 31px',
            gap: '10px',
            zIndex: 20
          }}
        >
          Keep Learning!
        </motion.p>

        {/* Your Final score is */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute font-serif-display italic font-normal text-center flex items-center justify-center bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
          style={{
            width: '919px',
            height: '61px',
            top: '443px',
            left: '501px',
            fontSize: '60px',
            lineHeight: '24px',
            letterSpacing: '-4px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            verticalAlign: 'middle',
          }}
        >
          Your Final score is
        </motion.h2>

        {/* Score Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
          className="absolute flex items-center justify-center"
          style={{
            width: '270px',
            height: '164px',
            top: '484px',
            left: '825px',
            position: 'absolute'
          }}
        >
          <span
            className="font-serif-display leading-none font-bold bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
            style={{
              fontSize: '160px',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {score}
          </span>
        </motion.div>

        {/* Percentage Symbol */}
        {/* Percentage Symbol */}
        {score > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute flex items-center justify-center p-0 m-0"
            style={{
              width: '53px',
              height: '24px',
              top: '561px',
              left: '1043px',
              zIndex: 20,
              overflow: 'visible', // Ensure gradient text outside 24px box is visible
            }}
          >
            <span
              className="font-serif-display italic font-normal text-center flex items-center justify-center bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
              style={{
                fontSize: '60px',
                lineHeight: '24px',
                letterSpacing: '-4px',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                height: '70px', // Explicit height larger than parent to hold entire paint
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // Adjust position to visually center within the 24px parent if needed, 
                // but flex-center on parent + line-height might handle it.
                // Given vertical-align middle request, flex center is best proxy.
                marginTop: '-10px' // Slight optical correction if needed, or remove. Let's start clean.
              }}
            >
              %
            </span>
          </motion.div>
        )}

        {/* Start Again Button */}
        {score > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="absolute flex items-center justify-center text-[#15313D] text-xl font-semibold shadow-lg hover:shadow-xl"
            style={{
              width: '200px',
              height: '50px',
              top: '757px',
              left: '860px',
              gap: '10px',
              borderRadius: '10px',
              background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
              border: '1px solid rgba(150, 229, 255, 0.05)', // #96E5FF0D
              zIndex: 30, // Ensure clickable
            }}
            aria-label="Start quiz again"
          >
            Start Again
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
