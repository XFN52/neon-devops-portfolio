import React, { useState } from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  color?: 'cyan' | 'purple' | 'green';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Tag = 'span', className = '', color = 'cyan' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClass = 
    color === 'cyan' ? 'text-neon-cyan' : 
    color === 'purple' ? 'text-neon-purple' : 
    'text-neon-green';

  const shadowColor = 
    color === 'cyan' ? '#00f3ff' : 
    color === 'purple' ? '#bc13fe' : 
    '#0aff00';

  return (
    <Tag
      className={`relative inline-block cursor-default transition-all duration-200 ${className} ${isHovered ? 'animate-pulse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textShadow: isHovered ? `2px 2px 0px ${shadowColor}` : 'none'
      }}
    >
      {text}
      {isHovered && (
        <>
          <span className={`absolute top-0 left-0 -ml-0.5 translate-x-[2px] text-${color}-500 opacity-70 animate-pulse`}>{text}</span>
          <span className={`absolute top-0 left-0 -ml-0.5 -translate-x-[2px] text-white opacity-70 animate-pulse`}>{text}</span>
        </>
      )}
    </Tag>
  );
};

export default GlitchText;