var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './index.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: __dirname
            }
        ]
      //,

        // postLoaders: [
        //     {
        //         test: /\.js$/,
        //         loaders: ['es3ify-loader']
        //     }
        // ]
    },

    devtool: 'source-map',
    debug: true
}
