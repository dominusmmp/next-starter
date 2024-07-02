import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./{app,pages,components}/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
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
