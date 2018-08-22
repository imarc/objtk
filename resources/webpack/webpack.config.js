const path    = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const entries = require('./entries');

module.exports = {
  entry: entries,
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader
    ]
  },
  plugins: [
      plugins.BrowserSync,
      plugins.MiniCSS
  ],
  output: {
    path: path.resolve('./public'),
    filename: 'scripts/[name].js'
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  }
};

if (process.env.npm_lifecycle_event == 'serve') {
    module.exports.plugins.push(plugins.BrowserSync);
}
