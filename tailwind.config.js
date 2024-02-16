/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      s: ["14px", "16px"],
      md: ["16px", "24px"],
      mdBold: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      xBold: [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "700",
        },
      ],
      lg: ["20px", "24px"],
      titleLg: ["32px", "40px"],
      titleMd: ["24px", "32px"],
    },
    colors: {
      white: "#fff",
      creme: "#FFF8F0",
      black: "#191a20",
      orange: {
        light: "#f9a98e",
        DEFAULT: "#fe875d",
        dark: "#f97448",
      },
      darkGray: "#3e3f3c",
      border: "#e0e2e7",
      stone: {
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
      },
    },
    borderRadius: {
      DEFAULT: "16px",
      button: "24px",
    },
  },
  plugins: [],
};
