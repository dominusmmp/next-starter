import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

import { default as twTypography } from '@tailwindcss/typography';
import { default as twScrollbar } from 'tailwind-scrollbar';
import { default as twAnimate } from 'tailwindcss-animate';

export default {
  content: ['./src/{pages,app,components}/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [twTypography, twAnimate, twScrollbar({ nocompatible: true })],
} satisfies Config;
