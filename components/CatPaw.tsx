'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CatPaw() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute overflow-visible"
            style={{
                top: '794.55px',
                left: '240.55px',
                width: '173.45px',
                height: '173.45px',
                zIndex: 20,
                pointerEvents: 'none'
            }}
        >
            <svg
                width="173.45"
                height="173.45"
                viewBox="0 0 173.45 173.45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse cx="86.725" cy="120" rx="50" ry="40" fill="#FFC0CB" />
                <ellipse cx="50" cy="60" rx="20" ry="25" fill="#FFC0CB" />
                <ellipse cx="86.725" cy="50" rx="20" ry="25" fill="#FFC0CB" />
                <ellipse cx="123.45" cy="60" rx="20" ry="25" fill="#FFC0CB" />
                <ellipse cx="70" cy="40" rx="18" ry="22" fill="#FFC0CB" />
                <ellipse cx="103.45" cy="40" rx="18" ry="22" fill="#FFC0CB" />
            </svg>
        </motion.div>
    );
}
