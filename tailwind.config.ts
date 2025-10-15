import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#f4f7fb",
          100: "#e7eef7",
          200: "#cedceb",
          300: "#a5c0dd",
          400: "#749cc7",
          500: "#4f7db0",
          600: "#3b6396",
          700: "#314e78",
          800: "#2b4162",
          900: "#293854"
        }
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgba(79, 125, 176, 0.45)"
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
