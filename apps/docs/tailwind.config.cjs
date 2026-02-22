/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
    "../../packages/components/src/**/*.{js,jsx,ts,tsx}",
    "../../packages/patterns/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
