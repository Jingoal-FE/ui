var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        'react': ['react'],
        'react-dom': ['react-dom'],
        'bundle': './demo/index.js',
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
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react-dom', 'react'],
            minChunk: Infinity
        }),
        new ExtractTextPlugin("[name].css"),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: {
        //         warnings: false,
        //         warning: false
        //     }
        // }),
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: [ path.join(__dirname, 'src'), path.join(__dirname, 'demo') ]
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: __dirname
            },
            {   test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
        // ,
        // postLoaders: [
        //     {
        //         test: /\.js$/,
        //         loaders: ['es3ify-loader']
        //     }
        // ]
    },

    // externals: [
    //     {
    //         'react': {
    //             root: 'React',
    //             commonjs2: 'react',
    //             commonjs: 'react',
    //             amd: 'react'
    //         }
    //     },
    //     {
    //         'react-dom': {
    //             root: 'ReactDOM',
    //             commonjs2: 'react-dom',
    //             commonjs: 'react-dom',
    //             amd: 'react-dom'
    //         }
    //     }
    // ],

    resolve: {
        alias: {
            'jingoal-ui-react': path.join(__dirname, 'src')
        }
    },

    devtool: 'source-map',
    debug: true
}
