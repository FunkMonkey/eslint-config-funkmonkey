module.exports = {
  rules: {
    '@typescript-eslint/semi': ['error'],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'mjs': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never',
    }]
  }
};