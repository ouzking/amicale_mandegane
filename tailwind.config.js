/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06140E',
          900: '#0A1F16',
          800: '#10301F',
          700: '#17402B',
          600: '#21573B',
        },
        gold: {
          100: '#F6EDD5',
          200: '#EFDFB3',
          300: '#E4CB8C',
          400: '#D6B46B',
          500: '#C9A55C',
          600: '#A8853F',
          700: '#7F6430',
        },
        ivory: {
          50: '#FBF9F4',
          100: '#F5F1E6',
          200: '#EAE3D2',
          300: '#D9CFB8',
        },
      },
      fontFamily: {
        display: ['"Gilda Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        kenburns: {
          from: { transform: 'scale(1.02)' },
          to: { transform: 'scale(1.14)' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(28px)', opacity: '0' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        kenburns: 'kenburns 9s ease-out forwards',
        'scroll-dot': 'scroll-dot 2.2s cubic-bezier(0.16,1,0.3,1) infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
