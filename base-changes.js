module.exports = {
  'rules': {
    // formatting conventions
    'array-bracket-spacing': ['off'],
    'computed-property-spacing': ['off'],
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
    'linebreak-style': ['off'],
    'space-in-parens': ['error', 'always' ],

    // language conventions
    'arrow-parens': ['error', 'as-needed'],
    'curly': 'off',
    'comma-dangle': ['error','only-multiline'],

    'no-console': 'warn',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn'
  }
};
