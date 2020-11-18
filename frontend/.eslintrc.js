const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  settings: {
    'import/parsers':
      { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    typescript: {},
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'no-redeclare': 1,
    'no-console': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
