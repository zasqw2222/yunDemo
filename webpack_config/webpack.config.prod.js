/**
 * 生产配置文件
 */
'use strict'
const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// css相关
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const stripInlineComments = require('postcss-strip-inline-comments');
// 路徑
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, '../src');
const DIST_PATH = path.resolve(ROOT_PATH, '../dist');

// 配置信息
let config = require('../config/config.base');

let extractCSS = new ExtractTextPlugin(`css/[name].${config.ver}.min.css`);
let extractSCSS = new ExtractTextPlugin(`css/[name].${config.ver}.min.css`);

module.exports = {
    entry: {
        app: [path.resolve(SRC_PATH, 'index.js')],
        vendor: ['react', 'react-dom', 'react-router', 'antd']
    },
    output: {
        path: DIST_PATH,
        filename: `js/[name].${config.ver}.[chunkhash:5].js`,
        chunkFilename: `js/[name].${config.ver}.[chunkhash:5].js`,
        publicPath: '/'
    },
    resolve: {
        extensions: [
            '', '.js', '.jsx'
        ],
        alias: {
            'components': path.resolve(__dirname, './src/components'), //公共组件路径
            'lib': path.resolve(__dirname, '../lib'),
            'theme': path.resolve(__dirname, '../src/theme')
        }
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loader: extractSCSS.extract('style-loader', 'css-loader?sourceMap&importLoaders=1!postcss-loader?parser=postcss-scss!sass-loader')
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract("style-loader", "css-loader?sourceMap", "postcss-loader" )
            }, 
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 8192,
                    name: `images/[name].${config.ver}.[hash:7].[ext]`
                }
            }
        ]
    },
    postcss: function (webpack) {
        return [stripInlineComments,autoprefixer];
    },
    plugins: [
        new htmlPlugin({title: 'app', inject: 'body', template: './src/tpl.html'}),
        extractCSS,
        extractSCSS,
        new webpack
            .optimize
            .UglifyJsPlugin({
                output: {
                    comments: false, // 移除注释
                },
                compress: {
                    warnings: false
                }
            }),
        new webpack.NoErrorsPlugin(),
        new webpack
            .optimize
            .MinChunkSizePlugin({
                minChunkSize: 51200, // ~50kb
            }),
        new webpack
            .optimize
            .DedupePlugin(),
        new webpack
            .optimize
            .CommonsChunkPlugin({
                names: ["vendor", "common"]
            }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]

};
