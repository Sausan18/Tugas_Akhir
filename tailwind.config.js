/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
		extend: {},
		fontFamily: {
			sans: ["Quicksand", "sans-serif"],
			display: ["Quicksand", "sans-serif"],
		},
	},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"]
  }
}
