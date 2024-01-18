import Layout from '@/components/layout/layout';
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
        build8: "url('../../public/images/pgs.jpg')",
      },

      colors: {
        'gray-my': '#333333',
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
      keyframes: {
        zoomOpacity: {
          '0%': { opacity: '0.95', backgroundSize: '120%' },
          '10%': { opacity: '0.8' },
          '50%': { opacity: '0.1' },
          '100%': { opacity: '1', backgroundSize: '100%' },
        },
      },
      animation: {
        zoomOpacity: 'zoomOpacity 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
