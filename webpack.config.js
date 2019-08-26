var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    port: 5500,
    contentBase: path.resolve(__dirname, "dist")
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
