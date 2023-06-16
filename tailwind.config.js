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
        dark: {
          DEFAULT: "#1C1C27",
          light: "#363740",
        },
        white: {
          DEFAULT: "#FFFFFF",
          dimmed: {
            DEFAULT: "rgba(255,255,255,0.4)",
            heavy: "rgba(255,255,255,0.2)",
          },
        },
        green: "#22C55E",
        red: "#EF4444",
        yellow: "#FFB43A",
      },
    },
  },
  plugins: [],
};
