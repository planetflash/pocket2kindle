const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const sass = require("node-sass");
const sassUtils = require("node-sass-utils")(sass);

const DIST_DIR = "dist";
const DIST_PATH = path.join(__dirname, DIST_DIR);
const SRC_DIR = "src";
const SRC_PATH = path.join(__dirname, SRC_DIR);

const sassVars = require(`${SRC_PATH}/theme.js`);
const sassResources = require(`${SRC_PATH}/sass/utils.js`);
const convertToSassDimension = function(result) {
  const cssUnits = [
    "rem",
    "em",
    "vh",
    "vw",
    "vmin",
    "vmax",
    "ex",
    "%",
    "px",
    "cm",
    "mm",
    "in",
    "pt",
    "pc",
    "ch"
  ];
  const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
  const value = parts[0];
  const unit = parts[parts.length - 1];
  if (cssUnits.indexOf(unit) !== -1) {
    result = new sassUtils.SassDimension(parseInt(value, 10), unit);
  }

  return result;
};

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
                functions: {
                  // Convert theme.js into sass values
                  "get($keys)": function(keys) {
                    keys = keys.getValue().split(".");
                    let result = sassVars;
                    let i;
                    for (i = 0; i < keys.length; i++) {
                      result = result[keys[i]];
                      // Convert to SassDimension if dimenssion
                      if (typeof result === "string") {
                        result = convertToSassDimension(result);
                      } else if (typeof result === "object") {
                        Object.keys(result).forEach(function(key) {
                          const value = result[key];
                          if (typeof value === "string") {
                            result[key] = convertToSassDimension(value);
                          }
                        });
                      }
                    }
                    result = sassUtils.castToSass(result);
                    return result;
                  }
                }
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
