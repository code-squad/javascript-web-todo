const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

}