const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const PROPER_PATH = {
  development: '/',
  production: '/javascript-web-todo/'
}

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html'
    }),
    new webpack.EnvironmentPlugin({
      PROPER_PATH: PROPER_PATH[ENV]
    }),
    new CleanWebpackPlugin()
  ]
}