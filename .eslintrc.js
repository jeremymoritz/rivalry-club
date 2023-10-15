module.exports = {
  env: {
    browser: true,
  },
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'metro.config.js',
    'node_modules/',
    'package*.json',
    'public/',
    'src/API.ts',
    'src/aws*',
    'src/graphql/**/*',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['off'],
    curly: ['error', 'multi'],
    'global-require': ['off'],
    'import/first': ['error'],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.*'] },
    ],
    'import/prefer-default-export': ['off'],
    'newline-before-return': ['error'],
    'no-nested-ternary': ['off'],
    'no-param-reassign': ['error'],
    'no-restricted-globals': [
      'error',
      'document',
      {
        name: 'document',
        message: 'Do not use document.',
      },
    ],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error'],
    'padding-line-between-statements': [
      'error',
      // https://denar90.github.io/eslint.github.io/docs/rules/padding-line-between-statements
      {
        blankLine: 'always',
        prev: [
          'block',
          'function',
          'if',
          'multiline-block-like',
          'return',
          'throw',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'function',
          'if',
          'multiline-block-like',
          'return',
          'throw',
        ],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },

      // EXCEPTIONS...
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'any', prev: 'export', next: 'export' }, // fn overload
      { blankLine: 'any', prev: 'function', next: 'function' }, // fn overload
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: true,
        endOfLine: 'auto',
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/display-name': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-unused-prop-types': ['off'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': ['off'],
    'simple-import-sort/exports': ['error'],
    'simple-import-sort/imports': ['error'],
  },
};
