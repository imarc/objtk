const MiniCSS     = require('mini-css-extract-plugin');
const BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
  MiniCSS: new MiniCSS({
      filename: '[name].css'
  }),
  BrowserSync: new BrowserSync({
    host: 'localhost',
    port: 3000,
    server: './public/',
    startPath: '/patterns/'
  })
};
