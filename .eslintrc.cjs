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
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'],
      rules: {
        'max-lines': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.svelte'],
      extends: ['plugin:svelte/recommended'],
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
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'quote-props': 'off',
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
}
