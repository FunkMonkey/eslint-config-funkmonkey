module.exports = {
  rules: {
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 'first',
        body: 1
      },
      FunctionExpression: {
        parameters: 'first',
        body: 1
      },
      CallExpression: {
        arguments: 'off'
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *']
    }],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'mjs': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never',
    }]
  }
};