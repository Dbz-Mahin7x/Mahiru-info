/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['var(--font-fredoka)', '"Fredoka One"', 'cursive'],
        varela: ['var(--font-varela)', '"Varela Round"', 'sans-serif'],
        inter: ['var(--font-inter)', '"Inter"', 'sans-serif'],
      },
      colors: {
        cream: "#FFF8F1",
        mahiruBrown: "#A68A79",
        mahiruText: "#6E5C52",
      },
      animation: {
        'fadein': 'fadeIn 0.5s ease-in forwards',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#A68A79' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}