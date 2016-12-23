const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: path.resolve(SRC_PATH, 'index.js')
    },
    output: {
        path: DIST_PATH,
        filename: 'js/index.js'
    },
    resolve: { // resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: SRC_PATH
        
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
                test: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    },
    plugins: [
        new htmlPlugin(
            {
                title: 'app', 
                inject: 'body', 
                template: './tpl/tpl.html'
            }
        )
    ]
};