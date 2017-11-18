module.exports = {
  'extends': ['eslint-config-airbnb',
              './base-changes',
              './react-changes'].map( require.resolve ),
};
