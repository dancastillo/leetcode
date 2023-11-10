module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-undef': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-useless-return': 'off',
    'no-else-return': 'off',
    'no-var': 'off'
  }
}
