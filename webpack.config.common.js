const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./index.html",
    }),
    new WebpackManifestPlugin({
      template: "./public/manifest.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.(ttf|eot|otf)$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
        use: ["file-loader?name=[name].[ext]"],
      },
    ],
  },
};
