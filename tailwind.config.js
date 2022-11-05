/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "jj": "0 3px 24px 0 rgb(34 41 47 / 7%)",
        "logo": "0 3px 5px 0 rgb(34 41 47 / 7%)",
        "popup": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      },
      // backgroundImage: (theme) => ({
      //   check: "url('https://i.imgur.com/yvmn9hf.png')",
      // }),
    }
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },

}
