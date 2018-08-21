const path = require('path');

module.exports = {
  sourceMap: true,
  plugins: {
    'postcss-easy-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};
