import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-up': 'moveUp 3s ease-out forwards', // Custom animation
      },
      keyframes: {
        moveUp: {
          '0%': {
            transform: 'translateY(100%)', // Start position (below the screen)
            opacity: '0', // Invisible at start
          },
          '100%': {
            transform: 'translateY(0)', // End position (normal position)
            opacity: '1', // Fully visible at the end
          },
        },
      },
      clipPath: {
        hexagon: "polygon(35% 0%, 85% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;
