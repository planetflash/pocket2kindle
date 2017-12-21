var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = '/dist/';
var DIST_PATH = path.join(__dirname, DIST_DIR);
var CLIENT_DIR = '/src/';
var CLIENT_PATH = path.join(__dirname, CLIENT_DIR);

module.exports = {
  context: CLIENT_PATH,
  entry: './main',
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: DIST_DIR,
    contentBase: DIST_PATH,
    port: 3000,
    hot: true
  },
  resolve: {
    extensions: [' ', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'index.ejs'
    })
  ]
};
