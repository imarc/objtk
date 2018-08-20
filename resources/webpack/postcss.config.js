module.exports = {
  sourceMap: true,
  plugins: {
    'postcss-easy-import': {

    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};
