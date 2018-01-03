const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR);
const SRC_DIR = 'src';
const SRC_PATH = path.join(__dirname, SRC_DIR);

const extractSass = new ExtractTextPlugin({
  filename: '[name].css'
});

module.exports = {
  context: SRC_PATH,
  entry: ['./main.js'],
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // Babel
      {
        loader: 'babel-loader',
        include: [path.resolve(__dirname, SRC_DIR)],
        test: /\.js[x]?$/,
        query: {
          presets: ['es2015']
        }
      },
      // SASS / CSS
      {
        test: /\.[s]css$/,
        include: [path.resolve(__dirname, SRC_DIR)],
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  return [require('autoprefixer')];
                },
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
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
    }),
    // Extract CSS file
    extractSass
  ]
};
