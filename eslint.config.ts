import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'node_modules/**',
      '.next/*',
      'out/*',
      'build/*',
      'coverage/*',
      'dist/*',
      'public/*',
      'package-lock.json',
      'bun.lockb',
      'next-env.d.ts',
      '*.md',
    ],
  },
];

export default eslintConfig;
