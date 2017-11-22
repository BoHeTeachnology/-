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
            this[method] = (path, { params, data, datatype } = {} ,{format,done,error,postprocess}) => {
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
                    if(datatype == 'formdata'){
                        var str = '';
                        for( var key in data){
                            str += key+'='+data[key]+'&';
                        }
                        str = str.length==0?'':str.substring(0,str.length-1);
                        req.body = str;
                        req.headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                        };
                    }else{
                        req.body = JSON.stringify(data)
                        console.log(req.body);
                        req.headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        };
                    }
                }
                let result =  fetch(path + u, req).then(format).then(done,error)

                if(postprocess){
                    postprocess.map((func)=>{
                        result = result.then(func)
                    })
                }

                return result;
            }
        )
    }

    // methods
}
