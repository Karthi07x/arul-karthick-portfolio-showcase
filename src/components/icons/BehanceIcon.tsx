
import React from 'react';

interface BehanceIconProps {
  size?: number;
  className?: string;
}

const BehanceIcon: React.FC<BehanceIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 15a3.5 3.5 0 0 0 3.5 3.5h1A3.5 3.5 0 0 0 16 15v-2a3.5 3.5 0 0 0-3.5-3.5h-1A3.5 3.5 0 0 0 8 13" />
      <path d="M8 7.5h4" />
      <circle cx="16" cy="8.5" r="1" />
      <path d="M16 11.5v6" />
    </svg>
  );
};

export default BehanceIcon;
