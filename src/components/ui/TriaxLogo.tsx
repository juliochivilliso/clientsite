import React from 'react';

interface TriaxLogoProps {
  className?: string;
}

export const TriaxLogo: React.FC<TriaxLogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <img 
        src="/logo_triax_official.png" 
        alt="Triax Dominicana" 
        className="w-full h-auto object-contain"
      />
    </div>
  );
};
