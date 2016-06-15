var webpack = require('webpack');
var getWebpackConfig = require('./getWebpackConfig');

var webpackConfig = getWebpackConfig();
webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: "common",
        filename: "[name].js",
        minChunks: Infinity,
    })
);

module.exports = webpackConfig;
