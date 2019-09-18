const marge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = marge(baseConfig,{
    mode: 'development',
    //webpackDevserverのoption
    devServer:{
        port: 8000
    },
    devtool:'source-map'
})