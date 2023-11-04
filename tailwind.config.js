/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				'goldish': "#F0DA70",
				'blueish': '#52ADE1'
			}
			// fontFamily: {
			// 	'khula': 'Khula',
			// 	'inter': 'Inter'
			// }
		}
	},
	plugins: []
};
