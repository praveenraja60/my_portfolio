/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bright red — accents / CTAs
        ember: {
          50: '#fff1f1',
          100: '#ffd6d6',
          200: '#ffb0b0',
          300: '#ff7a7a',
          400: '#ff3d3d',
          500: '#ff1e1e',
          600: '#e10600',
          700: '#c10500',
          800: '#9a0400',
          900: '#7a0300',
        },
        // Cobalt blue — secondary accent
        cobalt: {
          50: '#eff5ff',
          100: '#dbe8ff',
          200: '#bdd5ff',
          300: '#90b8ff',
          400: '#5a91ff',
          500: '#0047ab',
          600: '#003d96',
          700: '#00327a',
          800: '#00285f',
          900: '#001a3d',
        },
        // Cool light surfaces (About)
        cream: {
          DEFAULT: '#f4f7fc',
          soft: '#f9fbfe',
          deep: '#e8eef8',
        },
        // Soft navy-tinted mid surfaces (Experience)
        sand: {
          DEFAULT: '#dbe5f4',
          soft: '#eaf0f9',
          deep: '#c8d5e9',
        },
        // Midnight navy — dark surfaces / text
        charcoal: {
          DEFAULT: '#0a1628',
          soft: '#12233d',
          mute: '#4a6080',
          mist: '#8fa3c0',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        display: [
          '"Bricolage Grotesque"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        sans: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.04em',
        section: '0.18em',
      },
      fontSize: {
        'display-xl': [
          'clamp(3.25rem, 8vw, 6.5rem)',
          { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '800' },
        ],
        'display-lg': [
          'clamp(2.25rem, 4.5vw, 3.5rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
      },
    },
  },
  plugins: [],
};
