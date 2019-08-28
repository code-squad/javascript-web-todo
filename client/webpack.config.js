const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const environment =
  process.env.NODE_ENV === "development" ? "development" : "production";

const API_URL = {
  production: "https://react-web-todo.herokuapp.com/api/todos",
  development: "https://react-web-todo.herokuapp.com/api/todos"
};

const ACCESS_PATH = {
  production: "/javascript-web-todo/",
  development: "/"
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },

      {
        test: /\.(html)$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  },
  devtool: "source-map",

  resolve: {
    alias: {
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling"
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      API_URL: API_URL[environment],
      ACCESS_PATH: ACCESS_PATH[environment]
    })
  ]
};
