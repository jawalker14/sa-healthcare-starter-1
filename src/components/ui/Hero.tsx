import React from 'react';

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string | React.ReactNode;
  ctaPrimary?: React.ReactNode;
  ctaSecondary?: React.ReactNode;
  align?: 'left' | 'center';
};

const Hero: React.FC<HeroProps> = ({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary, align = 'center' }) => {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-navy-50">
      <div className={`max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-6 ${alignCls}`}>
        {eyebrow && (
          <span className="inline-block text-sm font-semibold tracking-wide text-navy-700/90">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl text-lg md:text-xl text-navy-800/90">{subtitle}</p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            {ctaPrimary}
            {ctaSecondary}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
