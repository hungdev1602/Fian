/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'avenir': ['Avenir Next Cyr', 'sans-serif'],
      'avenirThin': ['Avenir Thin', 'sans-serif'],
    },
    screens: {
      "xs": "350px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1620px"
    },
    extend: {
      backgroundImage: {
        'bgCommercial': "url('/images/bg-commercial.png')",
        'bg1': "url('/images/bg-1.png')",
        'bg2': "url('/images/bg-2.png')",
        'bg3': "url('/images/bg-3.png')",
      },
    },
  },
  plugins: [],
}