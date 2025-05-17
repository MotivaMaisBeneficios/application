/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <- isso permite controle manual com a classe "dark"
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // necessário para App Router
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // opcional, caso ainda use pages/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
