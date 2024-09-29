import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    rules: {
      'prettier/prettier': ['error'],
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
];