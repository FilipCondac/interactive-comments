/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-blue": "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-grayish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "dark-blue": "hsl(212, 24%, 26%)",
        "grayish-blue": "hsl(211, 10%, 45%)",
        "light-gray": "hsl(223, 19%, 93%)",
        "very-light-gray": "hsl(228, 33%, 97%)",
      },
      animation: {
        // Bounces for a total of 5 seconds
        "bounce-short": "bounce 1s ease-in-out 5",
        "lift-off":
          "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
        wiggle: "wiggle 3s ease-in-out infinite",
        flip: "flip 2s ease-in-out 3",
        fadeOut: "fadeOut 2s ease-in",
        fadeIn: "fadeIn 1s ease-in",
      },
      keyframes: {
        flip: {
          "0%,80%": {
            transform: "rotateY(360deg)",
            "animation-delay": "calc(.2s * var(--i))",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-1deg)",
            // "-webkit-backface-visibility": "hidden",
            "-webkit-background-clip": " content-box",
            padding: "1px",
          },
          "50%": {
            transform: "rotate(1deg)",
            // "-webkit-backface-visibility": "hidden",
            "-webkit-background-clip": "content-box",
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,

            "-webkit-background-clip": "content-box",
          },
          "100%": {
            opacity: 0,
            "-webkit-background-clip": "content-box",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,

            "-webkit-background-clip": "content-box",
          },
          "100%": {
            opacity: 1,
            "-webkit-background-clip": "content-box",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-children")],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
