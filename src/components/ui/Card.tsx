import React from 'react';

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
};

const Card: React.FC<CardProps> = ({ title, children, className = '', onClick, as: As = 'div' }) => {
  const interactive = typeof onClick === 'function' || As !== 'div';
  return (
    <As
      onClick={onClick}
      className={
        'group relative rounded-2xl bg-white shadow-soft ring-1 ring-navy-100/80 hover:shadow-soft-lg hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-navy-300 transition-transform duration-250 ease-gentle ' +
        className
      }
    >
      <div className="p-6">
        {title && (
          <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-navy-900">
            {title}
          </h3>
        )}
        <div className="text-navy-800/90">{children}</div>
      </div>
      {interactive && <span className="absolute inset-0 rounded-2xl focus:outline-none" aria-hidden="true" />}
    </As>
  );
};

export default Card;
