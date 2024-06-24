/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#7652DB',
				border: '#CACACA',
				background: {
					light: '#f5f5f5',
					dark: '#1d1d1d',
				},
				badge: {
					light: '#FFFFFF',
					dark: '#232323',
				},
				table: {
					light: '#FFFFFF',
					dark: '#323236',
				},
				input: {
					light: '#FFFFFF',
					dark: '#1D1D1D',
				},
				button: {
					primary: '#7154E0',
					secondary: '#656565',
					destructive: '#DC3545',
				},
				icon: {
					light: '#444648',
					dark: '#FFFFFF',
				},
			},
			borderRadius: {
				base: '5px',
				xl: '10px',
				midCircle: '50px 50px 0 0',
			},
			gridTemplateColumns: {
				'1x4': '1fr, 4fr',
				'2x1': '2fr, 1fr',
			},
			screens: {
				sm: '375px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [],
}

