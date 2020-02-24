module.exports = {
  'extends': [
    'airbnb-typescript', 
    require.resolve( './base-changes' ),
    require.resolve( './react-changes' ),
    'plugin:import/typescript',
    require.resolve( './typescript-changes' )
  ]
};
