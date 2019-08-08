const path = require('path');

module.exports = {
    // 기본 정보 기술
    name: 'React_ToDo_Component',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        // 파일 확장자명을 자동으로 찾아줌
        extensions: ['.js', '.jsx']
    },

    // 입력 설정
    entry: { 
        // 번들 파일을 구성할 파일들의 목록을 지정한다.
        app: ['./app']
    },

    // 입력 받은 파일들에 적용할 모듈 설정
    module: {
        rules: [{
            // 모듈을 적용할 대상 확장자 지정 (.js / .jsx)
            test: /\.jsx?/,

            // 적용할 모듈은 babel이다.
            loader: 'babel-loader',

            // 해당 모듈의 옵션이 있다면 설정한다.
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR']
                        }
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }]
    },

    // 출력 설정
    output: { 
        // 완성된 번들 파일을 저장할 경로를 지정한다.
        path: path.join(__dirname, 'dist'),
        // 최종 완성될 번들 파일의 이름을 설정한다.
        filename: 'app.js',
        publicPath: '/dist/'
    }
}