/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Wine red — accents and colored surfaces
        ember: {
          50: '#fbf4f5',
          100: '#f3e2e4',
          200: '#e4c0c5',
          300: '#c98992',
          400: '#a84d5c',
          500: '#8b2332',
          600: '#72202c',
          700: '#5a1822',
          800: '#3f1118',
          900: '#260a0e',
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
          DEFAULT: '#ffffff',
          soft: '#fafafa',
          deep: '#f3f3f3',
        },
        // Soft navy-tinted mid surfaces (Experience)
        sand: {
          DEFAULT: '#dbe5f4',
          soft: '#eaf0f9',
          deep: '#c8d5e9',
        },
        // Midnight navy — dark surfaces / text
        charcoal: {
          DEFAULT: '#0a0a0a',
          soft: '#161616',
          mute: '#525252',
          mist: '#a3a3a3',
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
