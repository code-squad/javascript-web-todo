const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const port = process.env.PORT || 3000;

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

var API_URL = {
  production: JSON.stringify('prod-url'),
  development: JSON.stringify('https://dxvinci.github.io/react-todo/todolist.json')
}


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new DefinePlugin({
      'API_URL': API_URL[environment]
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    inline: true
  }
};