// tailwind.config.ts

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  // 1. حل تداخل کانتینر: کانتینر پیش‌فرض رو خاموش می‌کنیم
  corePlugins: {
    container: false,
  },
  // This array tells Tailwind where to look for utility classes (i.e., in which files to scan).
  // If you are not using the 'src/' directory, these paths cover the root structure:
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router components
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Shared components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router pages and layouts
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Includes components that might be inside a 'src/' folder (just in case)
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(199, 100%, 33%)",
        secondary: "hsl(187, 85%, 43%)",
        blackColor: "hsl(201, 33%, 16%)",
        textColor: "hsl(240, 4%, 36%)",
        whiteColorDeam: "hsl(0, 0%, 93%)",
        greyText: "rgb(190, 190, 190)",
        inputColor: "rgb(239, 239, 239)",
        bodyColor: "rgb(240, 240, 246)",
        cardBG: "rgb(225, 225, 235)",
        cardHover: "rgb(255, 255, 255)",
        // ... rest of the colors
      },
      screens: {
        sm: "640px",
        md: "768px",
        "769w": "769px",
        lg: "1024px",
        laptop: "1240px",
        desktop: "2560px",
      },
      fontFamily: {
        // This line means: Wherever I said "sans" (like font-sans),
        // You go use the "--font-poppins" variable!
        sans: ["var(--font-poppins)", "sans-serif"],
        kanit: ["var(--font-kanit)", "sans-serif"],

        lobster: ["var(--font-lobster)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(to right, hsl(187, 85%, 43%), hsl(199, 100%, 33%))", // --gradientColor
      },
    },
  },
  // ... plugins ...
  plugins: [
    // Add a custom plugin to create the zoom-240 class
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".zoom-240": {
          zoom: "2.4",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
