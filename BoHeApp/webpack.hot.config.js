require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: '#inline-source-map',
    // entry: [
    //     //'babel-polyfill',
    //     //'webpack/hot/dev-server',
    //     //'webpack-dev-server/client?http://localhost:8080',
    //     // 'eventsource-polyfill',
    //     'webpack-hot-middleware/client',
    //     './app/main.js'
    // ],
    entry: {
    app: [
        './app/main.js',
      'webpack-hot-middleware/client?noInfo=true&reload=true',
    ],
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'babel-polyfill',
      'redux',
      'react-redux',
      'react-ga',
      'react-document-meta',
      'react-cookie',
      'react-tabs',
      'draft-js',
      'webpack-hot-middleware/client?noInfo=true&reload=true',
    ]
  },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        new ExtractTextPlugin("[name].css")
        /*
        new HtmlwebpackPlugin({
        title: '选择预约项目',
        template: path.resolve(__dirname, 'app/index_template.html'),
        inject: 'body' // Inject all scripts into the body
    })*/
    ],

    module: {
        loaders: [

          // {
          //         'loader': 'babel-loader',
          //         exclude: [
          //             //在node_modules的文件不被babel理会
          //             path.resolve(__dirname, 'node_modules'),
          //         ],
          //         include: [
          //             //指定app这个文件里面的采用babel
          //             path.resolve(__dirname, 'app'),
          //         ],
          //         test: /\.jsx?$/,
          //         query: {
          //             plugins: ['transform-runtime', "transform-decorators-legacy"],
          //             presets: ['es2015', 'stage-0', 'react']
          //         }
          //
          //     },
          {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          plugins: ['transform-runtime', "transform-decorators-legacy"],
        }
      },
        { test: /\.less$/, loader: 'style!css?modules&localIdentName=[name]__[local]!less' },
        {
          test: /\.css$/,
          exclude:/(weui\.min\.css|jquery-weui\.min\.css|style\.css|pulldown_Refresh\.css)/,
          loader: ExtractTextPlugin.extract('style-loader','css?modules&localIdentName=[name]__[local]')
        },
        {
          test: /(weui\.min\.css|jquery-weui\.min\.css|style\.css|pulldown_Refresh\.css)/, loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]')
        },
        { test: /\.(woff)$/, loader: 'url?limit=100000' },
        { test: /\.(png|jpg|jpeg|svg|eot|ttf)$/, loader: 'url?limit=25000' }]
    },
    resolve: {
        alias: {
            app: path.join(__dirname, "./app")
        }
    }

};
