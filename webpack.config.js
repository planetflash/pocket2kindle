const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR);
const CLIENT_DIR = 'src';
const CLIENT_PATH = path.join(__dirname, CLIENT_DIR);

module.exports = {
  context: CLIENT_PATH,
  entry: ['./main.js'],
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 3000
  },
  module: {
    loaders: [
      // Babel
      {
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
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
