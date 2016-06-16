var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function getWebpackConfig() {
    var webpackConfig = {
        entry: {
            'bundle': './demo/index.js',
            'common': ['react', 'react-dom']
        },

        output: {
            path: path.join(__dirname, 'demo/dist'),
            filename: '[name].js',
            publicPath: '/static/'
        },

        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin("[name].css"),
        ],

        module: {
            preLoaders: [],
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel'],
                    include: [
                        path.join(__dirname, 'src'),
                        path.join(__dirname, 'demo')
                    ]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
                    include: __dirname
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader", "autoprefixer-loader")
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&minetype=application/font-woff"
                },
                {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
            ],
            postLoaders: []
        }
        ,

        resolve: {
            alias: {
                'jgui': path.join(__dirname, 'src')
            }
        }
        ,

        devtool: false
    };

    return webpackConfig;
}