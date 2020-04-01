module.exports = {
  'plugins': [
    'eslint-plugin-modules-newline'
  ],
  'rules': {
    // formatting conventions
    'array-bracket-spacing': ['off'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'computed-property-spacing': ['off'],
    'function-paren-newline': ['error', 'consistent'],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
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
    'lines-between-class-members': 'off', // TODO: wait for typescript fix
    'linebreak-style': ['off'],
    'max-len': ['error', { 'code': 120 }],
    'object-curly-newline': ['error', {
        'ObjectExpression': { 'multiline': true },
        'ObjectPattern': { 'multiline': true },
        'ImportDeclaration': { 'multiline': true, 'minProperties': 2 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 2 }
    }],
    'space-in-parens': ['error', 'always' ],

    // language conventions
    'arrow-parens': ['error', 'as-needed'],
    'curly': ['error', 'all'],
    'comma-dangle': ['error','only-multiline'],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': ['error', 3],
    'no-console': 'warn',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn'
    
  }
};
