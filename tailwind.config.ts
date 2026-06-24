/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Theme Colors
        navy: {
          950: "#0E1A2B", // Dark Navy
          900: "#162B4D", // Primary Navy
          800: "#223E68",
          700: "#2C4C7E",
        },
        gold: {
          DEFAULT: "#C9A15A", // Luxury Gold
          light: "#D8B67A", // Champagne Gold
          dark: "#A68246",
        },
        ivory: {
          DEFAULT: "#F7F3ED",
          dark: "#E7DDD1", // Warm Beige
        },
        wood: {
          DEFAULT: "#5A4332",
        },
        slate: {
          950: "#0E1A2B",
          800: "#162B4D",
          700: "#2C4C7E",
          600: "#5F6B7A",
          100: "#E7DDD1",
          50: "#F7F3ED",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0E1A2B 0%, #162B4D 45%, #223E68 100%)",
        "gradient-gold": "linear-gradient(135deg, #C9A15A 0%, #D8B67A 100%)",
        "gradient-luxury-light": "linear-gradient(180deg, #F7F3ED 0%, #E7DDD1 100%)",
        "gradient-premium-dark": "linear-gradient(135deg, #0E1A2B 0%, #162B4D 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "mesh-pattern": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212, 175, 55, 0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.4)",
        "blue": "0 4px 24px rgba(37, 99, 235, 0.3)",
        "blue-lg": "0 8px 40px rgba(37, 99, 235, 0.4)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.12)",
        "card": "0 4px 20px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 16px 48px rgba(15, 23, 42, 0.16)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
