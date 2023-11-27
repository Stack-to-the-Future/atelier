module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/extensions': 'off',
    'no-console': 0,
    'react/prop-types': 0,
    'no-alert': 'off',
    'react/jsx-filename-extension': [0],
  },
  plugins: ['react', 'jsx-a11y', 'import', 'jest'],
};
