var webpack = require('webpack');
var getWebpackConfig = require('./getWebpackConfig');

var webpackConfig = getWebpackConfig();

webpackConfig.entry = {
    'bundle8': './demo/index.js',
    'common8': ['react', 'react-dom'],
    'vendor8': ['lodash', 'classnames']
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
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor8", "common8"],
        filename: "[name].js",
        minChunks: Infinity,
    })
);

module.exports = webpackConfig;
