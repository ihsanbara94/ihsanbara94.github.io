module.exports = {
  content: [
    "./node_modules/@themesberg/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@themesberg/flowbite/plugin"),
    require("tw-elements/dist/plugin"),
  ],
};
