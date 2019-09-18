const marge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = marge(baseConfig,{
    mode: 'production',
})