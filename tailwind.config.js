/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1d4ed8",
        "primary-hover": "#1e40af",
        "secondary": "#f97316",
        "secondary-hover": "#ea580c"
      },
      backgroundImage: {
        "contact-bg": "url('/assets/images/contact-bg.png')",
        "home-bg": "url('/assets/images/home-bg.png')",
        "subheader-bg": "url('/assets/images/subheader.jpg')",
        "action-bg": "url('/assets/images/action-bg.jpg')",
        dashboard: "url('/assets/images/dashboard.png')",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(249, 115, 22, 1)" },
          "100%": { boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)" },
        },
      },
      animation: {
        glow: "glow 1.5s infinite",
      },
      boxShadow: {
        glow: "0 0 10px rgba(249, 115, 22, 0.5)",
      },
    },
  },
  plugins: [],
};
