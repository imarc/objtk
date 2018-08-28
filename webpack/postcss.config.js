const path = require('path');

module.exports = {
  sourceMap: true,
  parser: require('postcss-comment'),
  plugins: {
    'postcss-easy-import': {
        extensions: ['.css', '.sss']
    },
    'postcss-mixins': {

    },
    'postcss-preset-env': {
        stage: 0,
        browsers: ['last 2 versions', '> 5%'],
    },
  },
};
