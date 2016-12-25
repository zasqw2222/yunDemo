'use strict'
const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// css相关
const stripInlineComments = require('postcss-strip-inline-comments');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 路徑
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');


let extractCSS = new ExtractTextPlugin('css/[name].[contenthash].min.css');
// let extractSCSS = new ExtractTextPlugin('css/[name].[contenthash].min.css', {
//     allChunks: true
// });


module.exports = {
    entry: {
        app: [path.resolve(SRC_PATH, 'index.js')],
        vendor: ['react', 'react-dom','react-router','antd']
    },
    output: {
        path: DIST_PATH,
        filename: 'js/[name].[chunkhash:5].js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
        // publicPath: '/'
    },
    resolve: { // resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.jsx'],
        alias: {
            'publicComponents': path.resolve(__dirname, './src/components')//公共组件路径
        }
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap&importLoaders=1!postcss-loader?parser=postcss-scss", "sass-loader"],
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract("style-loader", "css-loader?sourceMa", "postcss-loader")
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },
    postcss: function (webpack) {
        return [
            autoprefixer,
            stripInlineComments
        ];
    },
    plugins: [
        new htmlPlugin({
            title: 'app',
            inject: 'body',
            template: './tpl/tpl.html'
        }),
        extractCSS,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        })
    ]

};
