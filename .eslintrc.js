module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
  },
  'no-use-before-define': ['error', { functions: true, classes: true }],
};
