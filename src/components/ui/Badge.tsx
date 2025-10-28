import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: 'brand' | 'slate' | 'teal';
  className?: string;
};

const variants = {
  brand: 'bg-navy-800 text-white',
  slate: 'bg-navy-100 text-navy-800',
  teal: 'bg-teal-500 text-white',
};

const Badge: React.FC<Props> = ({ children, color = 'slate', className = '' }) => {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${variants[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
