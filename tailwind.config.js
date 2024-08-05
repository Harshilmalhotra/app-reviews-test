/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "root-1": "#4A5A6C",
        "root-2": "#11212d",
        "custom-blue": "#344D67",
      },
      fontFamily: {
        'sans': ['Sora', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}