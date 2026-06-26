/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        clap: {
          navy: '#0F172A',
          slate: '#1E293B',
          surface: '#111827',
          elevated: '#162033',
          gold: '#D4AF37',
          goldSoft: '#E6C766',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: 'rgba(148, 163, 184, 0.18)',
          overlay: 'rgba(15, 23, 42, 0.78)',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(2, 6, 23, 0.24)',
      },
    },
  },
  plugins: [],
};
