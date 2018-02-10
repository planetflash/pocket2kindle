const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = 'dist';
const DIST_PATH = path.join(__dirname, DIST_DIR);

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: DIST_PATH,
    port: 3000,
    // Proxy to API backend
    proxy: {
      '/api': 'http://localhost:8080'
    },
		hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin({
      disable: true
    })
  ]
});
