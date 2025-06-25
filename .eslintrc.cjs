module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },

  ignorePatterns: ['.eslintrc.js', 'capacitor.config.ts', 'vite.config.ts', '*.css', '*.scss', '*.svg', '*.jpg', '*.png', '*.eot', '*.woff', '*.woff2'],

  plugins: [
    'react',
    '@typescript-eslint',
    'sonarjs',
    'editorconfig'
  ],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:sonarjs/recommended-warn',
    'plugin:editorconfig/all'
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },

  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'index-signature'],
    '@typescript-eslint/no-empty-function': 'off',

    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ],

    "require-await": "off",
    "@typescript-eslint/require-await": "off",

    'editorconfig/indent': ['warn', {
      ignoreComments: true
    }],

    'semi': ['warn', 'always'],

    // ANY
    '@typescript-eslint/no-unsafe-member-access': 'warn'
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
}
