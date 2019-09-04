const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const port = process.env.PORT || 8080;

// NODE_ENV=development 를 script에서 적어주어야 한다. 
// production으로 하면 undefined여서 환경이 로컬것을 가져오게 될것  

var environment =
  process.env.NODE_ENV === "development" ? "development" : "production";
console.log(environment);
var API_URL = {
  production: JSON.stringify(
    "https://dxvinci.github.io/react-todo/todolist.json"
  ),
  development: JSON.stringify(
    "http://localhost:3001/todoApp/list"
  )
};

var ACCESS_PATH = {
  production: JSON.stringify("/react-todo/dist/"),
  development: JSON.stringify("/")
};


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(svg|jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new DefinePlugin({
      API_URL: API_URL[environment],
      ACCESS_PATH: ACCESS_PATH[environment]
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    inline: true
  }
};
