const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');


const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [path.resolve(SRC_PATH, 'index.js')]
    },
    output: {
        path: DIST_PATH,
        filename: 'js/index.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    resolve: { // resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.jsx']
    },
    
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap", "postcss-loader"]
            }, {
                test: /\.json$/,
                loaders: ['json-loader']
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=/images/[name].[ext]'
            }, {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?sourceMap", "postcss-loader"]
            }
        ]
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
    plugins: [new htmlPlugin({ title: 'app', inject: 'body', template: './tpl/tpl.html' }), new webpack.HotModuleReplacementPlugin()]
};