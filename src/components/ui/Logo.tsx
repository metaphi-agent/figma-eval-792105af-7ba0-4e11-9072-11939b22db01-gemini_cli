import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img 
      src="./assets/icons/5-34634.svg" 
      alt="Whitepace Logo" 
      className={`h-8 w-auto ${className}`} 
    />
  );
};
