/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
      border: {
        1: "5px",
      },
      animation: {
        "modal-show": "modalShow .2s ease",
        "modal-hide": "modalHide .2s ease",
      },
      keyframes: {
        modalShow: {
          "0%": { scale: "0.7", opacity: "0.7" },
          "100%": { scale: "1.0", opacity: "1" },
        },
        modalHide: {
          "0%": { scale: "1", opacity: "1" },
          "95%": { scale: "0.9", opacity: "0.7" },
          "100%": { display: "none" },
        },
      },
    },
  },
  plugins: [],
};
