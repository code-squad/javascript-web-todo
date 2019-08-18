const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "todo-setting",
  mode: "development",
  devtool: "inline-source-map", //sourcemap
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
    compress: true,
    port: 8080
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
  plugins: [
    new HtmlWebpackPlugin({
      // template의 html에 output에서 만들어진 bundle.js를 적용하여 html 파일 생성
      template: `./public/index.html`
    })
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
