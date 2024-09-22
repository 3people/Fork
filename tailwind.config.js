/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: ['./index.html', './src/**/*.{js,ts,svelte,html}'],
  theme: {
    extend: {
      fontFamily: {
        line: ['line'],
        santokki: ['santokki'],
      },
      colors: {
        black: {
          primary: '#0a0a0a',
          secondary: 'rgba(10,10,10,0.7)',
          tertiary: 'rgba(10,10,10,0.5)',
          quaternary: 'rgba(10,10,10,0.3)',
        },
        gray: {
          100: '#fbfbfb',
          200: '#f5f5f5',
        },
        brand: {
          point: '#FF4A22',
          blue: '#5398FF',
        },
      },
    },
  },
  plugins: [scrollbarHide],
}
