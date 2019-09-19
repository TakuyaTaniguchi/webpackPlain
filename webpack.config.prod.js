const marge = require('webpack-merge')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

module.exports = marge(baseConfig,{
    mode: 'production',
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle_sizes.html'
    })]
})