/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'ink':           '#0A0A0A',
        'surface':       '#111111',
        'surface-2':     '#1C1C1C',
        'border-dim':    '#2a2a2a',
        'forest':        '#14532d',
        'forest-mid':    '#166534',
        'forest-bright': '#16a34a',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body':    ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      letterSpacing: {
        'widest': '0.18em',
      },
    },
  },
  plugins: [],
};
