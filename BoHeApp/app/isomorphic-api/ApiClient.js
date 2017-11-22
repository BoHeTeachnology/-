import 'babel-polyfill'
import Promise from 'bluebird'
//import fetch from 'isomorphic-fetch'
import 'isomorphic-fetch'
import 'url-search-params-polyfill'


var URLSearchParams = (typeof window !=="undefined")?window.URLSearchParams:require('urlsearchparams').URLSearchParams;
//import { URLSearchParams } from 'urlsearchparams'

const methods = ['GET', 'POST'];

export default class ApiClient {
    constructor(args) {
        // code
        methods.forEach((method) =>
            this[method] = (path, { params, data, datatype, auth_type, server_token} = {} ,{format,done,error}) => {
                ///////////////////////////////
                var u = new URLSearchParams();
                var req = {
                    method: method,
                    mode: 'cors',
                    cache: 'default',
                    credentials: 'include'
                }
                if ((method == 'GET') && params) {
                    for (var key of Object.keys(params)) {
                      u.append(key, params[key])
                    }
                    req.headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    }
                    if(auth_type == 'token'){
                        if( typeof window !== 'undefined'){
                          console.log('avavvvvvvvv22222222');
                            let token = (window.document.cookie&&window.document.cookie.split('khantoken=')[1])?window.document.cookie.split('khantoken=')[1].split(';')[0]:'';
                            req.headers = {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                                'Authorization': 'Bearer '+token
                            }
                        }else{
                          console.log('avavvvvvvvv');
                          console.log(server_token);
                          let token = server_token;
                          req.headers = {
                              'Accept': 'application/json',
                              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                              'Authorization': 'Bearer '+token
                          }
                        }
                    }
                } else if (method == 'POST' && data) {

                    if(auth_type == 'token'){
                        if( typeof window !== 'undefined'){
                            let token = (window.document.cookie&&window.document.cookie.split('khantoken=')[1])?window.document.cookie.split('khantoken=')[1].split(';')[0]:'';
                            var str = '';
                            for( var key in data){
                                str += key+'='+data[key]+'&';
                            }
                            str = str.length==0?'':str.substring(0,str.length-1);
                            req.body = str;
                            req.headers = {
                                ...req.headers,
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                                'Authorization': 'Bearer '+token
                            }
                        }else{
                            let token = server_token;
                            req.headers = {
                              'Accept': 'application/json',
                              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                              'Authorization': 'Bearer '+token
                          }
                        }
                    }

                    if(datatype == 'formdata'){
                        var str = '';
                        for( var key in data){
                            str += key+'='+data[key]+'&';
                        }
                        str = str.length==0?'':str.substring(0,str.length-1);
                        req.body = str;
                        req.headers = {
                            ...req.headers,
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                        };
                    }else{
                        req.body = JSON.stringify(data)
                        req.headers = {
                            ...req.headers,
                            'Content-Type': 'application/json'
                        }
                    }

                }
                return fetch(path + u, req).then(format).then(done,error)
            }
        )
    }

    // methods
}
