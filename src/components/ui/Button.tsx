import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'a' | 'link';
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
};

const base = 'inline-flex items-center justify-center rounded-2xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400 transition-colors duration-250 ease-gentle';
const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
};
const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-navy-800 text-white hover:bg-navy-900 shadow-soft hover:shadow-soft-lg',
  secondary: 'bg-white text-navy-900 ring-1 ring-navy-200 hover:bg-gray-50',
  ghost: 'bg-transparent text-navy-800 hover:bg-gray-50',
};

const Button: React.FC<ButtonProps> = ({ href, children, variant = 'primary', size = 'md', className = '', onClick, as, type = 'button', ...rest }) => {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    if (as === 'link') {
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
