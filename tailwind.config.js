/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: 'hsl(227, 75%, 14%)',
          800: 'hsl(226, 25%, 17%)',
          700: 'hsl(225, 23%, 24%)',
          600: 'hsl(226, 11%, 37%)',
          300: 'hsl(0, 0%, 78%)',
          200: 'hsl(217, 61%, 90%)',
          100: 'hsl(0, 0%, 93%)',
          0: 'hsl(200, 60%, 99%)',
        },
        red: {
          400: 'hsl(3, 86%, 64%)',
          500: 'hsl(3, 71%, 56%)',
          700: 'hsl(3, 77%, 44%)',
        },
        custom: {
          background: '#181F3A',
          border: '#2E3650',
          borderHover: '#3E4C75',
          cardHeader: '#1E263F',
          toggleInactive: '#3B4862',
          textMuted: '#C0C8DF',
          tab: '#2F3A5A',
        },
      },
      fontFamily: {
        'sans': ['Noto Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)',
        'gradient-dark': 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      }
    },
  },
  plugins: [],
}
