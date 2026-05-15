const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier/flat');
const eslintPluginPrettier = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

module.exports = defineConfig([
  {
    files: ['eslint.config.js', 'babel.config.js', 'prettier.config.js', 'tailwind.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    rules: {
      'react/display-name': 'off',
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    rules: {
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    },
  },
]);
