// Karma configuration
// Generated on Mon Sep 12 2016 15:01:02 GMT+0800 (CST)
var path = require('path');
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine-ajax', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'utest/*.js'
        ],


        // list of files to exclude
        exclude: [
            'karma.conf.js',
            'utest/mocker/*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'utest/*.js': ['webpack']
        },
        webpack: {
            eslint: {
                configFile: './.eslintrc'
            },
            module: {
                'preLoaders': [{
                    test: /\.js$/,
                    exclude: [
                        //在node_modules的文件不被babel理会
                        path.resolve(__dirname, 'node_modules'),
                    ],
                    loader: 'eslint-loader',
                    include: [
                        //指定app这个文件里面的采用babel
                        path.resolve(__dirname, 'app'), path.resolve(__dirname, 'utest')
                    ],
                }],
                'loaders': [{
                    'loader': ['babel-loader'],
                    exclude: [
                        //在node_modules的文件不被babel理会
                        path.resolve(__dirname, 'node_modules'),
                    ],
                    include: [
                        //指定app这个文件里面的采用babel
                        path.resolve(__dirname, 'app'), path.resolve(__dirname, 'utest'), path.resolve(__dirname, 'app/order')
                    ],
                    test: /\.jsx?$/,
                    query: {
                        plugins: ['transform-runtime',"transform-decorators-legacy"],
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }, {
                    'loader': 'json-loader',
                    exclude: [],
                    include: [
                        path.resolve(__dirname, 'config'),
                    ],
                    test: /\.js$/,
                },{ test: /\.less$/, loader: 'style!css?modules&localIdentName=[name]__[local]!less' },
                 { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]__[local]' },
                 { test: /\.(woff)$/, loader: 'url?limit=100000' },
                 { test: /\.(png|jpg|jpeg|svg)$/, loader: 'url?limit=25000' }]
            },
            resolve: {
                alias: {
                    app: path.join(__dirname, "./app")
                }
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
