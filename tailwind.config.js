/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["pretendard"],
        line: ['line']
      },
      colors: {
        'black': {
          'primary': '#0a0a0a',
          'secondary': 'rgba(10,10,10,0.7)',
          'tertiary': 'rgba(10,10,10,0.5)',
        },
        'gray': {
          '100': '#fbfbfb',
          '200': '#f5f5f5'
        },
        'brand': {
          'point': '#FF4A22'
        }
      }
    },
  },
  plugins: [],
}

