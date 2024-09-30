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

        // Split Complementary - a3e635
        green: "#a3e635",
        pink: "#d233e6",
        orange: "#e67835",

        // Triad
        blue: "#33a1e6",
        pinkTriad: "#e633a1",

        // Square
        cyan: "#33e6d2",
        purple: "#7835e6",
        red: "#e63348",


        darkBackground: "#161515",
      },
    },
  },
  plugins: [],
};
