const path = require('path');

module.exports = {
  sourceMap: true,
  plugins: {
    'postcss-easy-import': {},
    'postcss-css-variables': {},
    'postcss-mixins': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: false
      }
    },
  },
};
