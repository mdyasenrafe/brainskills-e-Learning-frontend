
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', "sans-serif"],
        'Roboto': ['Roboto', "sans-serif"],
      },
      fontSize: {
        '12xl': '14rem',
        '13xl': '16rem',
        '14xl': '18rem',
        '15xl': '20rem',
      },
      keyframes: {
        // wiggle: {
        //   '0%': { transform: 'translate-x-full' },
        //   '50%': { transform: 'translate-x-0' },
        // },
        // animation: {
        //   'spin-slow': 'spin 3s linear infinite',
        //   'wiggle': 'wiggle 2s linear infinite'
        // }
      }
    },
  },
  plugins: [],
}