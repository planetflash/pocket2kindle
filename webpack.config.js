const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR);
const SRC_DIR = 'src';
const SRC_PATH = path.join(__dirname, SRC_DIR);

module.exports = {
  context: SRC_PATH,
  entry: ['./main.js'],
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 3000,
    // Proxy to API backend
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  module: {
    loaders: [
      // Babel
      {
        loader: 'babel-loader',
        include: [path.resolve(__dirname, SRC_DIR)],
        test: /\.jsx?$/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    // Templating
    new HtmlWebpackPlugin({
      title: 'Pocket2Kindle',
      template: 'index.ejs'
    }),
    // Hot module reloading
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([DIST_DIR], {
      watch: true,
      exclude: ['bundle.js', 'index.html'] // permissions issues on windows without this
    })
  ]
};
