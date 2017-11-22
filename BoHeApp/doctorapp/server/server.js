/*eslint-disable no-console */
import express from 'express'
import serialize from 'serialize-javascript'
import path from 'path'
import compression from 'compression'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackConfig from '../../webpack.config'

import Immutable from 'immutable'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { ReduxAsyncConnect, loadOnServer } from 'redux-connect'

import { configureStore } from 'doctorapp/configure-store.js'

import routes from 'doctorapp/routes'

import { injectStore } from 'doctorapp/routes'

import jwt from 'jsonwebtoken'

import ApiClient from 'doctorapp/isomorphic-api/ApiClient'

//import { URLSearchParams } from 'url-search-params-polyfill'

import { URLSearchParams } from 'urlsearchparams'

import Promise from 'bluebird'

//导入proxy
var proxy = require('http-proxy-middleware')

var cookieParser = require('cookie-parser')

//var URLSearchParams = URLSearchParams || require('../urlsearchparams').URLSearchParams;

global.__CLIENT__ = false;
global.__SERVER__ = true;

const app = express()

app.use(compression())

app.use(cookieParser())

app.use(express.static(path.join(__dirname, '..', 'build_doctorapp')));




//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api
const context = [`/bank/*`,`/examine/*`,`/qiniu_token/*`,`/doctor/*`,`/date/*`,`/usercenter/*`,`/weixin/*`]

//options可选的配置参数请自行看readme.md文档，通常只需要配置target，也就是你的api所属的域名。
const options = {
    target: 'http://wxif.boheyayi.com',
    // target: 'http://test.zhenweitech.cn',
    changeOrigin: true,
    ws: true,
    router: {
         // when request.headers.host == 'dev.localhost:3000',
         // override target 'http://www.example.org' to 'http://localhost:8000'
         'dev.localhost:3000' : 'http://localhost:3000'
     }
}

//将options对象用proxy封装起来，作为参数传递
const apiProxy = proxy(options)



// 现在你只需要执行这一行代码，当你访问需要跨域的api资源时，就可以成功访问到了。
app.use(context, apiProxy)




// var compiler = webpack(webpackConfig);
// console.log(webpackConfig.output.publicPath)
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));


// 热更新中间件
// const compiler = webpack(webpackConfig);
//   const { publicPath } = webpackConfig.output;
//   const hasColor = process.env.NODE_ENV === 'development';
//   const options = {publicPath, stats: {colors: hasColor}};
//   app.use(require('webpack-dev-middleware')(compiler, options));
//   app.use(require('webpack-hot-middleware')(compiler));


const HTML = ({ content, store ,SRCIPT}) => (
  <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <title>薄荷牙医</title>
        <link rel="icon" href="data:;base64,="/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
        <link rel="stylesheet" href="/doctorapp.css"/>
        <script src='/rem.js'></script>
        <script src='/jquery-1.9.1.min.js'></script>
        <script type="text/javascript" src="https://cdn.staticfile.org/plupload/2.1.2/plupload.full.min.js"/>
        <script src='/qiniu.min.js'></script>
        <script src='/require.js'></script>

    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
      <div id="devtools"/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src="/vendor.js"/>
      <script src="/bundle.js"/>
    </body>
  </html>
)

app.get('/wxcallback/auth',function(req,res){  //wx interface type to decide which to route

    console.log('enter /wxcallback/auth !!!!!')
    /*
    var code = req.query.code
    var type = req.query.type
    */
    var code = 'haha'



    if (code === undefined || code === null) {


    } else {
        /// sync get openid
        let openid = 'asdaaaaa'

        let u = new URLSearchParams();

        console.log('KKKKKKKK'+u)

        u.append('openid', openid);
        res.redirect('/usercenter?'+u)//just sample use type to switch

    }


});

app.use(function (req, res, next) {
  const initialState = Immutable.Map();
  const memoryHistory = createMemoryHistory(req.url)
  const client = new ApiClient(req)
  const store = configureStore(memoryHistory,client,initialState)
  const history = syncHistoryWithStore(memoryHistory, store,{
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
  })

  injectStore(store);

  if(req.url.indexOf('/wxcallback')==0){ //wx just jump
      next();
      return;
  }

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      loadOnServer({ ...renderProps, store, params:{ req }}).then((ttt) => {
      // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps`
            console.log(ttt);
      console.log("JJJJJJ555$$$$");
      const content = renderToString(
        <Provider store={store} key="provider">
          <ReduxAsyncConnect {...renderProps} />
        </Provider>
      )
      console.log(33333333)
      //console.log("~~~~~~~~"+store.getState().auth.token)
      //res.setHeader("Set-Cookie", ['tokenbohe='+store.getState().auth.token]);
      res.send('<!doctype html>\n' +renderToString(<HTML content={content} store={store}/>))

    },(err)=>{
        console.log("HHHHHHHHHGGGGGGGG!!!!!!11");
    })
    }
  })
})

app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000, Ctrl+C to stop')
})


// var WebpackDevServer = require('webpack-dev-server');


// new WebpackDevServer(webpack(webpackConfig), {
//   publicPath: webpackConfig.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }
//
//   console.log('Listening at http://localhost:3000/')
// });
