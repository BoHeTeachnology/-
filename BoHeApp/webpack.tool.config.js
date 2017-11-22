require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //devtool: 'cheap-source-map',
    entry: {
        //'babel-polyfill',
        //'webpack/hot/dev-server',
        //'webpack-dev-server/client?http://localhost:8080',
        doctortool:[ path.resolve(__dirname,'doctortool/main.js') ],
        vendor: ['babel-polyfill','react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build_doctortool'),
        filename: 'bundle.js',
        publicPath: '/doctorasist/',
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        /*new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: "jquery"
        }),*/
        new ExtractTextPlugin("[name].css"),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
        /*
        new HtmlwebpackPlugin({
        title: '选择预约项目',
        template: path.resolve(__dirname, 'app/index_template.html'),
        inject: 'body' // Inject all scripts into the body
    })*/
    ],

    module: {
        loaders: [{
            'loader': 'babel-loader',
            exclude: [
                //在node_modules的文件不被babel理会
                path.resolve(__dirname, 'node_modules'),
            ],
            include: [
                //指定app这个文件里面的采用babel
                path.resolve(__dirname, 'doctortool'),
            ],
            test: /\.jsx?$/,
            query: {
                plugins: ['transform-runtime',"transform-decorators-legacy"],
                presets: ['es2015', 'stage-0', 'react'],
                compact: false
                //"env": {
                //    "development": {
                //        "presets": ["react-hmre"]
                //    }
                //}
            }
        },{ test: /\.scss$/, loader: 'style!css?modules&localIdentName=[local]!sass'},
        { test: /\.less$/, loader: 'style!css?modules&localIdentName=[name]__[local]!less' },
        {
          test: /\.css$/,
          exclude:/(common\.css|font-awesome\.min\.css|account\.css|table\.css|pagination\.css|z_user\.css|user\.css|H_user1\.css|index\.css|diyUpload\.css|time\.css|calendar\.css)/,
          loader: ExtractTextPlugin.extract('style-loader','css?modules&localIdentName=[name]__[local]')
        },
        {
          test: /(common\.css|font-awesome\.min\.css|account\.css|table\.css|pagination\.css|z_user\.css|user\.css|H_user1\.css|index\.css|diyUpload\.css|time\.css|calendar\.css)/, loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]')
        },

        { test: /\.(woff)([\?]?.*)$/, loader: 'url?limit=100000' },
        { test: /\.(png|jpg|jpeg|svg|eot|ttf)([\?]?.*)$/, loader: 'url?limit=25000' }]
    },
    resolve: {
        alias: {
            doctortool: path.join(__dirname, "./doctortool")
        }
    }

};
