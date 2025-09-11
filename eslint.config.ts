import {
  defineConfig,
  globalIgnores,
} from 'eslint/config';

import globals from 'globals';

import {
  fixupConfigRules,
  fixupPluginRules,
} from '@eslint/compat';

import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import js from '@eslint/js';

import {
  FlatCompat,
} from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = defineConfig([{
  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
    'ecmaVersion': 12,
    'sourceType': 'module',

    parserOptions: {
      'ecmaFeatures': {
        'jsx': true,
      },
    },
  },

  extends: fixupConfigRules(compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:storybook/recommended',
  )),

  plugins: {
    react: fixupPluginRules(react),
    '@typescript-eslint': typescriptEslint,
    'no-relative-import-paths': noRelativeImportPaths,
  },

  'rules': {
    'react/display-name': 'off',
    'no-unused-vars': [0],
    'react/prop-types': [0],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/no-unknown-property': ['warn'],
    'no-relative-import-paths/no-relative-import-paths': ['warn', {
      'allowSameFolder': true,
      'prefix': '@',
      'rootDir': 'src',
    }],

    'arrow-body-style': ['warn', 'as-needed'],
  },
}, {
  files: ['**/*.test.*'],

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },
}, globalIgnores([
  'eslint.config.ts',
  'vite.config.ts',
  'dist/',
  'storybook-static/',
  'types/',
  'docs/',
  'demo/',
  '.storybook/',
  'coverage/',
  'scripts/',
  'src/**/*.story.tsx',
  'src/**/*.test.ts',
])]);
