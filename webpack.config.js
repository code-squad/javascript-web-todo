const path = require("path");

module.exports = {
  name: "todo-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
