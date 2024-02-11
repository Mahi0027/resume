import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1476ff',
        'secondary': '#f3f5ff',
        'light': '#f9faff',
        'light-background': '#e1e7f2',
        'light-background-gradient-from': '#d4d9e4',
        'light-background-gradient-to': '#e1e7f2',
        'light-options': '#f3f5ff',
        'light-option-gradient-from': '#f3f5ff',
        'light-option-gradient-to': '#e0e0e0',
        'light-action': '#f3f5ff',
        'light-border': '#dddddd',
        'light-text': '#181818',
        'hover': '#0fbfc8',
        'dark-background': '#000000',
        'dark-background-gradient-from': '#161616',
        'dark-background-gradient-to': '#000000',
        'dark-options': '#181818',
        'dark-options-gradient-from': '#292929',
        'dark-options-gradient-to': '#181818',
        'dark-action': '#292929',
        'dark-border':'#373737',
        'dark-text': '#f3f5ff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
