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
      orange: "#fe875d",
      darkGray: "#3e3f3c",
      border: "#e0e2e7",
    },
    borderRadius: {
      DEFAULT: "16px",
      button: "24px",
    },
  },
  plugins: [],
};
