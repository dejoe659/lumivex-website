import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#071426", navy2: "#0D1B2A", brand: "#1677FF", cyan: "#00CFFF", mute: "#B8C6D9" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
