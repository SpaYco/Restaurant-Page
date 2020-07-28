const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "src/js/index.js") },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    optimization: {
      splitChunks: { chunks: "all" }
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
      ]
  };