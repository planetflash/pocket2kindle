const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DIST_DIR = "dist";
const DIST_PATH = path.join(__dirname, DIST_DIR);
const SRC_DIR = "src";
const SRC_PATH = path.join(__dirname, SRC_DIR);

const sassResources = require(`${SRC_PATH}/sass/utils.js`);
const sassLoaderFunctions = require(`${SRC_PATH}/utils/convertThemeToSass`)
  .sassLoaderFunctions;

const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css"
});

module.exports = {
  entry: `${SRC_PATH}/index.js`,
  output: {
    path: DIST_PATH,
    publicPath: "/",
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      // Babel
      {
        test: /\.js[x]?$/,
        include: [path.resolve(__dirname, SRC_DIR)],
        loaders: ["babel-loader"]
      },
      // CSS
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, SRC_DIR)],
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, SRC_DIR)],
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
                importLoaders: 3
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => {
                  return [require("autoprefixer")];
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                functions: sassLoaderFunctions
              }
            },
            {
              loader: "sass-resources-loader",
              options: {
                resources: sassResources
              }
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    // Templating
    new HtmlWebpackPlugin({
      title: "Pocket2Kindle",
      template: `${SRC_PATH}/index.ejs`
    }),
    // Hot module reloading
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([DIST_DIR], {
      watch: true,
      exclude: ["index.html"] // permissions issues on windows without this
    }),
    // Extract CSS file
    extractSass
  ],
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".css", ".scss"]
  }
};
