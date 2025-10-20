import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  contained?: boolean;
  padded?: boolean;
};

const Section: React.FC<SectionProps> = ({ children, className = '', as: As = 'section', contained = true, padded = true }) => {
  const content = <div className={padded ? 'px-6 py-16 md:py-20' : ''}>{children}</div>;
  return (
    <As className={`relative ${className}`}>
      {contained ? (
        <div className="max-w-7xl mx-auto">{content}</div>
      ) : (
        content
      )}
    </As>
  );
};

export default Section;
