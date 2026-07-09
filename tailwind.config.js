/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#08090B',
          900: '#0C0F12',
          850: '#10141A',
          800: '#151A21',
          700: '#1C222B',
          600: '#262E39',
          500: '#3A4552',
          400: '#5B6774',
          300: '#8791A0',
          200: '#B4BDC9',
          100: '#DDE2E9',
          50: '#F4F6F8',
        },
        signal: {
          DEFAULT: '#4C8DFF',
          dim: '#2E4E8C',
          bright: '#7DAAFF',
        },
        safe: '#3ECF8E',
        moderate: '#E8A33D',
        tough: '#E85D5D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
