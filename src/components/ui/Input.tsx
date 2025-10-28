import React from 'react';

type BaseProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
};

export const Input: React.FC<BaseProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ id, label, hint, error, required, className = '', ...rest }) => {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">{label}{required && ' *'}</label>
      <input id={id} aria-describedby={describedBy} aria-invalid={!!error} required={required} className="w-full border border-navy-200 rounded-lg p-3 text-navy-900 placeholder-navy-400 bg-white shadow-soft focus:shadow-soft-lg focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-300" {...rest} />
      {hint && <p id={`${id}-hint`} className="text-xs text-navy-700/80">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export const TextArea: React.FC<BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ id, label, hint, error, required, className = '', ...rest }) => {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">{label}{required && ' *'}</label>
      <textarea id={id} aria-describedby={describedBy} aria-invalid={!!error} required={required} className="w-full border border-navy-200 rounded-lg p-3 text-navy-900 placeholder-navy-400 bg-white shadow-soft focus:shadow-soft-lg focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-300" {...rest} />
      {hint && <p id={`${id}-hint`} className="text-xs text-navy-700/80">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export const Select: React.FC<BaseProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({ id, label, hint, error, required, className = '', children, ...rest }) => {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">{label}{required && ' *'}</label>
      <select id={id} aria-describedby={describedBy} aria-invalid={!!error} required={required} className="w-full border border-navy-200 rounded-lg p-3 text-navy-900 bg-white shadow-soft focus:shadow-soft-lg focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-300" {...rest}>
        {children}
      </select>
      {hint && <p id={`${id}-hint`} className="text-xs text-navy-700/80">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
