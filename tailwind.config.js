/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'heading': ['Josefin Sans', 'sans-serif'],
        'sub-heading': ['Exo 2', 'sans-serif'],
        'paragraph': ['Rubik', 'sans-serif']
      },
      backgroundColor: {
        'light-primary': '#edf2f8',
        'light-primary-2': '#F5F5F5',
        'light-secondary': '#313bac',
        'light-accent': '#FFC107',
        'dark-primary': '#121721',
        'dark-primary-2': '#1a1a1a',
        'dark-secondary': '#87CEFA',
        'dark-accent': '#FFA500',
      },
      backgroundImage: {
        'custom-home': "url('/src/assets/images/floating-cogs.svg')"
      },
      textColor: {
        'light-primary': '#000000',
        'light-secondary': '#6e8098',
        'light-accent': '#FFC107',
        'dark-primary': '#FFFFFF',
        'dark-secondary': '#9daec2',
        'dark-accent': '#FFA500',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
      }
    },
  },
  plugins: [
  ],
}

