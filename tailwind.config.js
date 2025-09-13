/** @type {import('tailwindcss').Config} */

module.export = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    'docs/content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

