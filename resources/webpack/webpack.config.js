const path     = require('path');
const loaders  = require('./loaders');
const plugins  = require('./plugins');

module.exports = {
  entry: [
      './resources/assets/scripts/main.js',
      './resources/assets/styles/main.css'
  ],
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader
    ]
  },
  plugins: [
      plugins.MiniCSS
  ],
  output: {
    path: path.resolve('./public'),
    filename: '[name].js'
  },
};

if (process.env.npm_lifecycle_event == 'serve') {
    module.exports.plugins.push(plugins.BrowserSync);
}
