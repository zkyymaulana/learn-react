/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#77EC6A',
				secondary: '#2BC71A',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '3rem',
				},
			},
		},
	},
	plugins: [],
};
