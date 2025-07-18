// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        'slide-zoom-fade': {
          '0%': { transform: 'translateX(100%) scale(1.2)', opacity: '0' },
          '30%': { transform: 'translateX(0%) scale(1)', opacity: '1' },
          '80%': { transform: 'translateX(0%) scale(1)', opacity: '1' },
          '100%': { opacity: '0' },
        },
        'zoom-in-out': {
          '0%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        'slide-zoom-fade': 'slide-zoom-fade 5s ease-in forwards',
        'zoom-in-out': 'zoom-in-out 5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}