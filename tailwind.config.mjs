import { blueDark, grayDark } from "@radix-ui/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["livory", ...fontFamily.serif],
        sans: ["geist-sans", ...fontFamily.sans],
        mono: ["geist-mono", ...fontFamily.mono],
      },
      colors: {
        gray: {
          1: grayDark.gray1,
          2: grayDark.gray2,
          3: grayDark.gray3,
          4: grayDark.gray4,
          5: grayDark.gray5,
          6: grayDark.gray6,
          7: grayDark.gray7,
          8: grayDark.gray8,
          9: grayDark.gray9,
          10: grayDark.gray10,
          11: grayDark.gray11,
          12: grayDark.gray12,
        },
        blue: {
          1: blueDark.blue1,
          2: blueDark.blue2,
          3: blueDark.blue3,
          4: blueDark.blue4,
          5: blueDark.blue5,
          6: blueDark.blue6,
          7: blueDark.blue7,
          8: blueDark.blue8,
          9: blueDark.blue9,
          10: blueDark.blue10,
          11: blueDark.blue11,
          12: blueDark.blue12,
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
