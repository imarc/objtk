const MiniCSS = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env']
    }
  }
};

const CSSLoader = {
  test: /\.css$/,
  use: [
    MiniCSS.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    }
  ]
};

module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader
};
