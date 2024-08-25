module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    jsx: true,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    useJSXTextNode: true,
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'max-lines': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      rules: {
        'no-undef-init': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.svelte'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'prefer-destructuring': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
}
