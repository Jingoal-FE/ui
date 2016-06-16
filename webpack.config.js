var webpack = require('webpack');
var getWebpackConfig = require('./getWebpackConfig');

var webpackConfig = getWebpackConfig();
webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin(
        {
            names: ["vendor", "common"],
            filename: "[name].js",
            minChunks: Infinity,
        }
    )
);

module.exports = webpackConfig;
