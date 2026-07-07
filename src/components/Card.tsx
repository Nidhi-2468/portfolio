import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = true 
}) => {
  return (
    <div 
      className={`
        bg-white 
        border border-slate-100 
        rounded-xl 
        p-6 
        shadow-xs 
        ${hoverable ? 'hover:border-accent-blue/30 hover:shadow-md hover:shadow-accent-blue/5 transition-all duration-300' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
