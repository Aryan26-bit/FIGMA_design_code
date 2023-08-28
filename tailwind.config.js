module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        salmon: "#f2707c",
        gray: {
          100: "#262a2f",
          200: "#12193b",
        },
        "medium-emphasis": "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
        lightblue: "#bfe1ff",
        mistyrose: "#ffe4e7",
        ghostwhite: "#f7f3ff",
        "high-emphasis-text": "rgba(0, 0, 0, 0.87)",
        steelblue: "#7c7eb5",
      },
      fontFamily: {
        objectivity: "Objectivity",
        body: "Roboto",
        "nunito-sans": "'Nunito Sans'",
        "helvetica-neue": "'Helvetica Neue'",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "21xl": "40px",
      sm: "14px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
