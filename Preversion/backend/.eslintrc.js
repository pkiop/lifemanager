module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'no-underscore-dangle': 0,
    'no-redeclare': 1,
    'no-console': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
