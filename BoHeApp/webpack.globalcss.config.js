require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        style: [path.resolve(__dirname, 'app/common/css/style.css')],
        'weui.min': [path.resolve(__dirname, 'app/common/css/weui.min.css')],
        'jquery-weui.min': [path.resolve(__dirname, 'app/common/css/jquery-weui.min.css')]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].css",
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style!css?modules&localIdentName=[local]!less' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]') },
            { test: /\.(woff)$/, loader: 'url?limit=100000' },
            { test: /\.(png|jpg|jpeg|svg)$/, loader: 'url?limit=25000' }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        alias: {
            app: path.join(__dirname, "./app")
        }
    }
}
