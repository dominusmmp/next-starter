import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import ts from 'typescript-eslint';
// import tailwind from 'eslint-plugin-tailwindcss'; // better to use but has conflict with tailwindcss 4 as of now

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/*',
      'build/*',
      'coverage/*',
      'dist/*',
      'out/*',
      '.next/*',
      'public/*',
      'package-lock.json',
      'bun.lockb',
      '*.md',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  js.configs.recommended,
  ...ts.configs.recommended,
  // ...tailwind.configs['flat/recommended'],
  // {
  //   settings: {
  //     tailwindcss: {
  //       // These are the default values but feel free to customize
  //       callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
  //       config: 'tailwind.config.ts',
  //       cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
  //       cssFilesRefreshRate: 5_000,
  //       removeDuplicates: true,
  //       skipClassAttribute: false,
  //       whitelist: [],
  //       tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
  //       classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
  //     },
  //   },
  // },
];

export default eslintConfig;
