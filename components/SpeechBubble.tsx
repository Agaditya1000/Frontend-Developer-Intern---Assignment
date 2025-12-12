'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpeechBubble() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute overflow-visible"
            style={{
                top: '725px',
                left: '94px',
                width: '196.51px',
                height: '96.06px',
                zIndex: 20,
                pointerEvents: 'none',
                transform: 'rotate(-180deg)',
                transformOrigin: 'center'
            }}
        >
            <div className="relative w-full h-full overflow-visible">
                <div className="absolute top-0 left-0 bg-white border border-[#77C7E3] rounded-2xl px-4 py-3 shadow-lg whitespace-nowrap" style={{ color: '#15313D' }}>
                    <p className="text-[#15313D] text-sm font-medium" style={{ transform: 'rotate(180deg)', fontFamily: 'cursive' }}>
                        Best of Luck!
                    </p>
                    {/* Speech bubble tail */}
                    <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#77C7E3]"></div>
                    <div className="absolute -bottom-1 left-[26px] w-0 h-0 border-l-7 border-r-7 border-t-7 border-transparent border-t-white"></div>
                </div>
            </div>
        </motion.div>
    );
}
