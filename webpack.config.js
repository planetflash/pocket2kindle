const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR);
const CLIENT_DIR = 'src';
const CLIENT_PATH = path.join(__dirname, CLIENT_DIR);

module.exports = {
  context: CLIENT_PATH,
  entry: './main',
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  devServer: {
<<<<<<< HEAD
    publicPath: DIST_DIR,
    contentBase: DIST_PATH,
    port: 3000,
    hot: true
=======
    contentBase: DIST_PATH
>>>>>>> newbranch
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
