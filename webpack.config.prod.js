const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack')
const path = require('path');

const ENV = process.env.NODE_ENV === 'dev' ? 'local' : 'heroku';
const URL = {
  local: 'http://localhost:3000/todos',
  heroku: 'https://allen-webtodo.herokuapp.com/todos'
}

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      FETCH_URL: JSON.stringify(URL[ENV])
    })
  ]
}