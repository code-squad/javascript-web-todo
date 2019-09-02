const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV;
const url =
  mode === "dev"
    ? `http://localhost:3000/todos`
    : "https://michelle-todo.herokuapp.com/todos";

module.exports = {
  name: "todo-setting",
  mode: "production",
  devtool: "source-map", //eval
  resolve: {
    extensions: [".js", ".jsx"]
  },

  entry: "./src/index",
  module: {
    // loader 적용
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader", // js 코드에 주어진 preset을 적용하게 해줌
          options: {
            presets: [
              [
                "@babel/preset-env", // 최근 js 문법을 사용하게 해주는 preset
                {
                  modules: "false" // tree shaking 가능하게 함
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template의 html에 output에서 만들어진 bundle.js를 적용하여 html 파일 생성
      template: `./public/index.html`
    }),
    new webpack.DefinePlugin({
      URL: JSON.stringify(url)
    })
  ]
};
