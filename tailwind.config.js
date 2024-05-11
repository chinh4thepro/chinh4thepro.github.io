/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      'personal': ['Roboto', '"Noto Emoji"'],
    },
    extend: {
      'animation': {
        'gradient-move-xy': 'gradient-move-xy 10s ease infinite',
      },
      'keyframes': {
        'gradient-move-xy': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}

