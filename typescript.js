module.exports = {
  'extends': [
    'airbnb-typescript/base', 
    require.resolve( './base-changes' ),
    'plugin:import/typescript',
    require.resolve( './typescript-changes' )
  ]
};
