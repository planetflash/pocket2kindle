var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.join(__dirname, 'dist');
var CLIENT_DIR = path.join(__dirname, 'src');

module.exports = {
  context: CLIENT_DIR,
  entry: './main',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
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
