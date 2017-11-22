import 'babel-polyfill'
import Promise from 'bluebird'
//import fetch from 'isomorphic-fetch'
import 'isomorphic-fetch'
import 'url-search-params-polyfill'

var URLSearchParams = (typeof window !=="undefined")?window.URLSearchParams:require('urlsearchparams').URLSearchParams;
//import { URLSearchParams } from 'urlsearchparams'

const methods = ['GET', 'POST','PUT','DELETE'];
export default class ApiClient {
    constructor(args) {
        // code
        methods.forEach((method) =>
            this[method] = (path, { params, data } = {} ,{format,done,error}) => {
                ///////////////////////////////
                var u = new URLSearchParams();
                var req = {
                    method: method,
                    mode: 'cors',
                    cache: 'default',
                    credentials: 'include'
                }
                if (((method == 'GET') || (method == 'DELETE')) && params) {
                    for (var key of Object.keys(params)) {
                      u.append(key, params[key])
                    }
                } else if (((method == 'POST')||(method == 'PUT')) && data) {
                    req.body = JSON.stringify(data)
                    req.headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    };

                }
                return fetch(path + u, req).then(format).then(done,error)
            }
        )
    }

    // methods
}
