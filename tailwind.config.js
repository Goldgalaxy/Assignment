/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        BlessingY: "hsl(75, 94%, 57%)",
        GoldW: "hsl(0, 0%, 100%)",
        Grey700: "hsl(0, 0%, 20%)",
        Grey800: "hsl(0, 0%, 12%)",
        Grey900: "hsl(0, 0%, 8%)",

      }
    },
  },
  plugins: [],
}

