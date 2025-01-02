import pluginJest from 'eslint-plugin-jest'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import globals from 'globals'

/**
 * @type { import('eslint').Linter.Config[] }
 */
export default
[
  {
    ignores: ['dist']
  },
  {
    files: ['**/*.test.ts'],
    plugins:
    {
      jest: pluginJest,
    },
    languageOptions:
    {
      globals: pluginJest.environments.globals.globals,
    },
    rules:
    {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  {
    languageOptions:
    {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/*.js'],
    rules:
    {
      'arrow-spacing': ['warn', { 'before': true, 'after': true }],
      'brace-style': ['error', 'allman', { 'allowSingleLine': true }],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'curly': ['error', 'multi-line', 'consistent'],
      'dot-location': ['error', 'property'],
      'handle-callback-err': 'off',
      'indent': ['error', 2],
      'keyword-spacing': 'error',
      'max-nested-callbacks': ['error', { 'max': 4 }],
      'max-statements-per-line': ['error', { 'max': 2 }],
      'no-console': ['off'],
      'no-empty-function': 'off',
      'no-floating-decimal': 'error',
      'no-inline-comments': 'error',
      'eol-last': ['error', 'always'],
      'no-lonely-if': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1, 'maxBOF': 0 }],
      'no-shadow': ['error', { 'allow': ['err', 'resolve', 'reject'] }],
      'no-trailing-spaces': ['error'],
      'no-var': 'error',
      'object-curly-spacing': ['error', 'always'],
      'prefer-const': 'error',
      'quotes': ['error', 'single'],
      'semi': 'off',
      'space-before-blocks': 'error',
      'space-before-function-paren':
      [ 'error',
        {
          'anonymous': 'never',
          'named': 'never',
          'asyncArrow': 'always',
        },
      ],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': 'error',
    },
  },
]
