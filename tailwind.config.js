/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        'half-screen': '80vh',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'opacity-100 translate-y-0' },
          '100%': { transform: 'opacity-0 translate-y-full' },
        }
      },
      animation: {
        drop: 'drop 1s ease-in-out'
      }
    },
  },
  plugins: [],
};
