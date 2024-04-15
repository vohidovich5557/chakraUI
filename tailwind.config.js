/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cardImg': "url('./assets/billing-img/card-bg.svg')",
        'bannerImg': "url('./assets/home-img/banner.svg')",
      },
      colors: {
        primary: "#F8F9FA",
        grayer: "#EEEEF5",
      },
      container: {
        center: true,
        screens: {
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
};
