import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'typescript-eslint';

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', '.lintstagedrc.js', '*.md']),
]);

export default eslintConfig;
