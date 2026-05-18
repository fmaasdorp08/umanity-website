import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ivory: '#f6f1e8', cream: '#fbf8f2', gold: '#d2b77b', olive: '#7d8f63', forest: '#25372f', charcoal: '#2d2a26', sand: '#f0e6d3' }, boxShadow: { soft: '0 20px 60px rgba(48,38,20,0.07)', elevated: '0 30px 90px rgba(68,55,35,0.08)' }, fontFamily: { sans: ['var(--font-sans)'], serif: ['var(--font-serif)'] } } },
  plugins: [],
} satisfies Config;
