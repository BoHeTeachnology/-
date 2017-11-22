var path = require('path')
var webpack = require('webpack')
var stats = require('./utils/stats.js')
var getNodeModules = require('./utils/getNodeModules.js')
var nodeModules = getNodeModules()

var buildFolder = path.join('build_doctorapp', 'main')
//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api

module.exports = {


  devtool: 'source-map',

  entry: [
    //'webpack/hot/signal.js',
     path.resolve(__dirname,'doctorapp/server/server.js'),
  ],
  target: 'node',
  node: {
    console: true,
    global: false,
    __dirname: false,
    __filename: false,
  },
  recordsPath: path.join(__dirname, '..', buildFolder, 'records.json'),
  output: {
    path: path.resolve(__dirname, 'build_doctorapp'),
    pathinfo: true,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  externals: nodeModules,
  module: {
      noParse: ['react', 'react-dom', 'moment'],
      loaders: [{
              'loader': 'babel-loader',
              exclude: [
                  //在node_modules的文件不被babel理会
                  path.resolve(__dirname, 'node_modules'),
              ],
              include: [
                  //指定app这个文件里面的采用babel
                  path.resolve(__dirname, 'doctorapp'),
              ],
              test: /\.jsx?$/,
              query: {
                  plugins: ['transform-runtime', "transform-decorators-legacy"],
                  presets: ['es2015', 'stage-0', 'react']
              }

          },{ test: /\.less$/, loader: 'fake-style!css?modules&localIdentName=[name]__[local]!less' },
          { test: /\.css$/, loader: 'fake-style!css?modules&localIdentName=[name]__[local]' },
          { test: /\.(woff)$/, loader: 'fake-url?limit=100000' },
          { test: /\.(png|jpg|jpeg|svg)$/, loader: 'fake-url?limit=25000' },
      ],
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true }),
    new webpack.DefinePlugin({
      CLIENT: false,
      SERVER: true,
      SERVER_API: false,
      DEVELOPMENT: true,
      PRODUCTION: false,
      'process.env.NODE_ENV': JSON.stringify('development'),
      API_SECRET: JSON.stringify(process.env.API_SECRET || 'MY_SUPER_API_SECRET'),
    }),
    new webpack.DefinePlugin({
      STATS: JSON.stringify(stats.load('memoryOnly')),
    }),
  ],
  resolve: {
      extensions: ['', '.web.js', '.js', '.json']
  }
}
