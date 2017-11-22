var path = require('path');
var webpack = require("webpack")
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      // necessary for hot reloading with IE:
      'eventsource-polyfill',
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client',
      // your code:
      './app/main'
        //'webpack/hot/dev-server',
        //'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'..','app/main.js')
    ],
    output: {
        path: path.resolve(__dirname,'..','build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
        new HtmlwebpackPlugin({
        filename: 'index.html',
        title: '选择预约项目',
        template: path.resolve(__dirname,'..','app/index_template.html'),
        inject: 'body' // Inject all scripts into the body
    })/*,new webpack.HotModuleReplacementPlugin()*/],
    module: {
        loaders: [
          {
              test: /\.js$/,
              loaders: ['react-hot-loader/webpack', 'babel'],
              include: path.join(__dirname,'..','app')
          },
          {
            'loader': 'babel-loader',
            exclude: [
                //在node_modules的文件不被babel理会
                path.resolve(__dirname,'..','node_modules'),
            ],
            include: [
                //指定app这个文件里面的采用babel
                path.resolve(__dirname,'..','app'),
            ],
            test: /\.jsx?$/,
            query: {
                plugins: ['transform-runtime',"transform-decorators-legacy"],
                presets: ['es2015', 'stage-0', 'react'],
                "env": {
                    "development": {
                        "presets": ["react-hmre"]
                    }
                }
            }
        },
        { test: /\.less$/, loader: 'style!css?modules&localIdentName=[name]__[local]!less' },
        { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]__[local]' },
        // {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file'},
        { test: /\.woff$/, loader: 'url?limit=100000' },
        { test: /\.ttf$/,loader: 'file'},
        { test: /\.(png|jpg|jpeg|svg|eot|)$/, loader: 'url?limit=25000' },
      ]
    },
    resolve: {
        alias: {
            app: path.join(__dirname,'..', "./app")
        }
    }

};
