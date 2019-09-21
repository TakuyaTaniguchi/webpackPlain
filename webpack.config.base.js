const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    //バンドルされる前にbabelを通す。
    module:{
        rules: [
            {
                test: /\.js$/,
                //babel-loaderはwebpackとbabelをつなぐ、初期設定としてpreset-envを使う。(optionなので無くても大丈夫)
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [['@babel/preset-env',{
                        targets: [
                            'last 2 versions',
                            'not dead',
                            'not < 2%',
                        ],
                        useBuiltIns: 'entry'
                    }],'@babel/preset-react'],
                    plugins: [
                        'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import'
                    ]
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}