/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        /* primary */
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",

        /** neutral */
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        LightBlack: "hsl(0, 0%, 75%)"
      },
    },
  },
  plugins: [],
};
