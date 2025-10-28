const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-montserrat)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      colors: {
        // Brand palette per brief
        brand: {
          DEFAULT: '#27287B', // navy
          navy: '#27287B',
          slate: '#3B556B',
          white: '#FFFFFF',
          gray: '#F5F7FA',
          teal: '#1AB5A6', // accent sparingly
        },
        navy: {
          50: '#f3f6f9',
          100: '#e6edf3',
          200: '#c9d7e5',
          300: '#a3bad0',
          400: '#6f90b1',
          500: '#416a92',
          600: '#3B556B', // slate tone
          700: '#234d77',
          800: '#102a4c',
          900: '#0b1f3a',
          950: '#071326',
        },
        teal: {
          500: '#1AB5A6',
          600: '#139c8f',
        },
        gray: {
          50: '#F5F7FA',
          100: '#EAEEF3',
          200: '#D4DCE5',
          700: '#3B556B',
          900: '#0b1f3a',
        },
        white: '#FFFFFF',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(2, 6, 23, 0.06)',
        'soft-lg': '0 12px 32px rgba(2, 6, 23, 0.10)',
        outline: '0 0 0 2px rgba(22, 54, 95, 0.6)',
      },
      transitionDuration: {
        200: '200ms',
        250: '250ms',
        350: '350ms',
        400: '400ms',
      },
      transitionTimingFunction: {
        gentle: 'cubic-bezier(0.22, 1, 0.36, 1)',
        entrance: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      ringOffsetWidth: {
        2: '2px',
      },
      ringColor: {
        brand: '#27287B',
      },
    },
  },
  plugins: [],
} as const;

export default config;