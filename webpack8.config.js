var webpackConfig = require('./webpack.config');
var webpack = require('webpack');

webpackConfig.entry = {
    'shim': './demo/shim.js',
    'bundle8': './demo/index.js'
};
webpackConfig.module.postLoaders.push(
    {
        test: /\.js$/,
        loaders: ['es3ify-loader']
    }
);
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);

module.exports = webpackConfig;
