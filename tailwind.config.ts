import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/{app,pages,components}/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          background: {
            DEFAULT: colors.white,
            half: colors.neutral[100],
            full: colors.neutral[200],
          },
          foreground: {
            DEFAULT: colors.neutral[800],
            half: colors.neutral[900],
            full: colors.neutral[950],
          },
          title: colors.neutral[950],
          body: colors.neutral[800],
          subtitle: colors.neutral[700],
          muted: colors.neutral[500],
          active: colors.neutral[400],
          inactive: colors.neutral[300],
          disabled: colors.neutral[200],
        },
        dark: {
          background: {
            DEFAULT: colors.black,
            half: colors.neutral[900],
            full: colors.neutral[800],
          },
          foreground: {
            DEFAULT: colors.neutral[200],
            half: colors.neutral[100],
            full: colors.neutral[50],
          },
          title: colors.neutral[50],
          body: colors.neutral[200],
          subtitle: colors.neutral[300],
          muted: colors.neutral[500],
          active: colors.neutral[600],
          inactive: colors.neutral[700],
          disabled: colors.neutral[800],
        },
        primary: {
          DEFAULT: colors.blue[500],
          ...colors.blue,
        },
        secondary: {
          DEFAULT: colors.fuchsia[500],
          ...colors.fuchsia,
        },
        success: {
          DEFAULT: colors.emerald[500],
          ...colors.emerald,
        },
        info: {
          DEFAULT: colors.blue[500],
          ...colors.blue,
        },
        warning: {
          DEFAULT: colors.amber[500],
          ...colors.amber,
        },
        error: {
          DEFAULT: colors.rose[500],
          ...colors.rose,
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(({ matchUtilities }) => {
      matchUtilities(
        {
          direction: (value: string) => ({
            direction: value,
          }),
        },
        {
          values: {
            ltr: 'ltr',
            rtl: 'rtl',
            inherit: 'inherit',
            initial: 'initial',
            revert: 'revert',
            'revert-layer': 'revert-layer',
            unset: 'unset',
          },
        }
      );
    }),
  ],
};

export default config;
