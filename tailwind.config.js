export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050C17',
          900: '#07111F',
          800: '#101D2B',
          700: '#1B2B3D',
          600: '#2A3B4F',
        },
        crl: {
          DEFAULT: '#D71920',
          dark: '#B3141A',
          light: '#FF5A5F',
        },
        off: '#F7F8FA',
        line: '#E9EDF2',
        body: '#5D6672',
        ink: '#111827',
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
