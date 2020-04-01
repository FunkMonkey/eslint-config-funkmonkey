module.exports = {
  'extends': [
    'airbnb-typescript/base', 
    'plugin:import/typescript',
    require.resolve( './base-changes' ),
    require.resolve( './typescript-changes' )
  ]
};
