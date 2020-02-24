module.exports = {
  'extends': [
    'eslint-config-airbnb',
    require.resolve( './base-changes' ),
    require.resolve( './react-changes' )
  ]
};
