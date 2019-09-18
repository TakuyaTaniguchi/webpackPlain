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
                    presets: ['@babel/preset-env','@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
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