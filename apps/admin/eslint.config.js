import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          js: 'espree', // parser bawaan ESLint untuk JS
        },
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'warn',
      'vue/html-self-closing': 'warn',
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
    },
  }
]
