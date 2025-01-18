import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
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
        "base-black": "#333333",
        "base-gray-1": "#646464",
        "base-gray-2": "#979797",
        "base-gray-3": "#cacaca",
        "base-gray-4": "#f2f2f2",
        "base-gray-5": "#f5f5f5",
      },
      fontFamily: {
        source: ["source-sans-pro", ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
} satisfies Config;
