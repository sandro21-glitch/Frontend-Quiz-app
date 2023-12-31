/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "html-bg": "#FFF1E9",
        "css-bg": "#E0FDEF",
        "js-bg": "#EBF0FF",
        "accessibility-bg": "#F6E7FF",
        "text-color": "#313E51",
        "text-color-p": "#626C7F",
        "medium-purple": "#A729F5",
        "light-purple": "rgb(246 231 255 / 1)",
        "bg-col": "#ffffff",
        darkBg: "rgb(59 77 102 / 1)",
        "button-bg": "#ffffff",
        "option-bg": "#F4F6FA",
        "option-color": "#626C7F",
        "correct-color": "#26D782",
        "invalid-color": "#EE5454",
      },
    },
  },
  plugins: [],
};
