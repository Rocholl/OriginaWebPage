/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#D95C2B',
					50: '#fef5f2',
					100: '#fde8e0',
					200: '#fbd0c0',
					300: '#f7b095',
					400: '#f28566',
					500: '#D95C2B',
					600: '#c94a1f',
					700: '#a83a1a',
					800: '#8a311a',
					900: '#712c19'
				},
				secondary: {
					DEFAULT: '#3A9D8F',
					50: '#f0fdfb',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#3A9D8F',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a'
				},
				dark: {
					DEFAULT: '#3B2F2F',
					50: '#f7f6f5',
					100: '#edeae8',
					200: '#d9d3d0',
					300: '#beb5b1',
					400: '#9d918c',
					500: '#827772',
					600: '#6b615d',
					700: '#5a514e',
					800: '#3B2F2F',
					900: '#2d2525'
				},
				beige: {
					DEFAULT: '#F9F5EF',
					50: '#F9F5EF',
					100: '#f5f0e8',
					200: '#ebe0d1',
					300: '#dfd0bb',
					400: '#d1bea3'
				}
			}
		}
	},
	plugins: []
};

