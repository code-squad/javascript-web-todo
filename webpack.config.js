const path = require('path');

module.exports = {
    // 기본 정보 기술
    name: 'React_ToDo_Component',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 입력 설정
    entry: { 
        app: ['./app']
    },

    // 입력 받은 파일들에 적용할 모듈 설정
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
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
                        "@babel/plugin-transform-runtime",
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel',
                    ],
                }                
            },
            

        }]
    },

    // 출력 설정
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    }
}