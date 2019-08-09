const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 프로세스 시작 지점 (entry point of application)
  output: { // 번들링 파일이 저장될 경로와 번들 파일 이름
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js' // bundle.[hash].js는 어플리케이션이 수정되어 다시 컴파일 될 때마다 바꿔주어 캐싱에 도움.
  },
  module: { // 번들링과정에서의 규칙
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [ // 웹팩 번들과정에 적용할 플러긴
    new HtmlWebPackPlugin({ // 생성된 .html파일과 .favicon 파일을 번들링 과정에 포함시키는 플러그인.
      template: 'public/index.html'
    })
  ]
}