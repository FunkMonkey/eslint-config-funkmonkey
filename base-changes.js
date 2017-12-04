module.exports = {
  'rules': {
    'array-bracket-spacing': [
      'off'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'curly': 'off',
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    'computed-property-spacing': [
      'off'
    ],
    'function-paren-newline': ['error', 'consistent'],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: "first",
        body: 1
      },
      FunctionExpression: {
        parameters: "first",
        body: 1
      },
      CallExpression: {
        arguments: "off"
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *']
    }],
    'linebreak-style': [
      'off'
    ],
    'no-console': 'warn',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'space-in-parens': [
      'error',
      'always'
    ]
  }
};
