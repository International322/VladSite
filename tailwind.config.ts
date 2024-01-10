import Layout from '@/components/layout/Layout';
import build from 'next/dist/build';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				build1: "url('/images/pgs.jpg')",
				build2: "url('/images/2.jpg')",
				build3: "url('/images/3.jpg')",
				build4: "url('/images/4.jpg')",
				build5: "url('/images/5.jpg')",
				build6: "url('/images/6.jpg')",
				build7: "url('/images/7.png')",
			},

			colors: {
				'gray-100': '#efeff3',
				'brown-100': '#5e5850',
				'yellow-100': '#ffa600',
			},
			borderWidth: {
				'1': '1px',
			},
			padding: {
				layout: '1.25rem',
			},
			width: {
				container: '80rem',
			},
			height: {
				dvh: '100dvh',
			},
		},
	},
	plugins: [],
};
export default config;
