import React from 'react';

const Logo = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '8px' }}
    >
      <defs>
        <linearGradient id="paperGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Folded Paper Effect */}
      <g filter="url(#shadow)">
        <rect
          x="12"
          y="12"
          width="40"
          height="40"
          rx="6"
          ry="6"
          fill="url(#paperGradient)"
        />
        <polygon
          points="52,12 52,52 12,52"
          fill="#9333ea"
          opacity="0.3"
        />
        {/* Optional: Add white border */}
        <rect
          x="12"
          y="12"
          width="40"
          height="40"
          rx="6"
          ry="6"
          fill="none"
          stroke="#ffffffaa"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
};

export default Logo;
