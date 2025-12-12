/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quiz-blue': '#F4FDFF',
        'quiz-dark-blue': '#15313D',
        'quiz-light-blue': '#3CABDA',
        'quiz-border-blue': '#96E5FF',
        'quiz-gradient-start': '#C6E9F7',
        'quiz-gradient-end': '#E5F8FF',
        'quiz-pink': '#FFC0CB',
      },
      fontFamily: {
        'serif-display': ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}
