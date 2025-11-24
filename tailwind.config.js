/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        skyup: {
          teal: "#28c0a9",
          purple: "#6f52ed"},
        bubble: {
          purple: "rgba(111, 82, 237, 0.6)", // soft purple
          white: "rgba(255, 255, 255, 0.5)", // glowing white
        },
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.15)",
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(135deg, #3b82f6, #6f52ed, #22e6cf)',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        blob: "blob 12s infinite",
      },
    },
  },
  plugins: [],
}
