/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        xs: "360px",
        sm: "480px", // Small mobile devices
        md: "576px", // Tablets and small mobile screens
        lg: "768px", // Medium tablets and large phones
        xl: "992px", // Laptops or larger tablets
        "2xl": "1200px", // Standard desktop screens
        "3xl": "1500px", // Larger desktop displays
        "4xl": "1920px", // High-resolution or ultra-wide displays
      },
      colors: {
        primaryBg: "#0c081f",
        paragraphColor: "#A5ADBA",
        cardBorderColor: "#332E4C",
        btnBg: "#2765F7",
        primaryBlack: "#05060A",
        footerBg: "#080614",
        faqBg: "#131023",
      },
      backgroundColor: {
        white_transparent: "rgba(0, 0, 0)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
