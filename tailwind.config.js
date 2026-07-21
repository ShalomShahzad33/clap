/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        clap: {
          // Royal Blue family
          navy: '#081A4A',
          slate: '#123C9C',
          surface: '#0B2D82',
          elevated: '#1646B8',

          // Sky Blue family
          sky: '#38BDF8',
          skySoft: '#7DD3FC',
          skyLight: '#BAE6FD',

          // Accent aliases
          accent: '#38BDF8',
          accentSoft: '#7DD3FC',

          // Neutral supporting colors
          text: '#F8FAFC',
          muted: '#C7D2FE',

          // Transparent variations
          border: 'rgba(125, 211, 252, 0.24)',
          overlay: 'rgba(8, 26, 74, 0.82)',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(11, 31, 102, 0.28)',
      },
    },
  },
  plugins: [],
};
