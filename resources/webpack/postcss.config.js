const path = require('path');

module.exports = {
  sourceMap: true,
  parser: require('postcss-comment'),
  plugins: {
    'postcss-easy-import': {
        extensions: ['.css', '.sss']
    },
    'postcss-css-variables': {

    },
    'postcss-mixins': {

    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: false
      }
    },
  },
};
