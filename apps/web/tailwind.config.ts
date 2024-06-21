import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#7154E0',
				border: '#CACACA',
				background: {
					light: '#f2f5f3',
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
			},
			gridTemplateColumns: {
				'1x4': '1fr, 4fr',
				'2x1': '2fr, 1fr',
			},
		},
	},
	plugins: [],
}
export default config
