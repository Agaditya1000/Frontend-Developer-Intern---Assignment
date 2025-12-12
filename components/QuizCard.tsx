import React from 'react';

interface QuizCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function QuizCard({ children, className = '' }: QuizCardProps) {
  return (
    <div
      className={`rounded-[50px] relative overflow-hidden flex items-center justify-center ${className}`}
      style={{
        width: '1625px',
        height: '920px',
        background: 'linear-gradient(112.86deg, rgba(255, 255, 255, 0.4) -6.68%, rgba(255, 255, 255, 0.12) 45.63%, rgba(255, 255, 255, 0.4) 103.45%)',
        backdropFilter: 'blur(200px)',
        border: '0.72px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        position: 'relative',
      }}
    >
      <div
        className="relative overflow-visible"
        style={{
          width: '1542px',
          height: '856px',
          backgroundColor: '#F4FDFF',
          borderRadius: '42px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
