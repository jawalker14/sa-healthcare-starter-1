import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
};

const Container: React.FC<Props> = ({ children, className = '', padded = true }) => {
  return (
    <div className={`max-w-7xl mx-auto ${padded ? 'px-6' : ''} ${className}`}>{children}</div>
  );
};

export default Container;
