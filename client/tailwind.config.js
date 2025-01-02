import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
      extend: {},
    },
    plugins: [
      daisyui
    ],
  }
  
