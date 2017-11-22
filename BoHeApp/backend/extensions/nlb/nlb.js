'use strict'
/**
 * 短信下发服务模块
 * 由于项目是使用node 5.0+，所以安装node-ffi模块需要依赖gcc 4.8+以上版本
 */
import { getExtensionPath } from 'backend/util/apiinterface.js'

var ffi = require('ffi');

var ref =  require('ref');

var refStruct = require('ref-struct');



var routetype = refStruct({
    ip: ref.types.uint32,
    port: ref.types.uint16,
    type: ref.types.uint32
});

var routetype_pointer = ref.refType(routetype);

var libnlb = ffi.Library(getExtensionPath()+'nlb/nlb.so', {
    'getroutebyname_wrapper': ['int32', ['string', routetype_pointer]]
});



export const nlb = {

     getroutebyname:function(service_name){

         let routeid = new routetype({ ip:0, port:0, type:1 });
         let result = libnlb.getroutebyname_wrapper(service_name,routeid.ref());
         let routeid_ret = { result };
         routeid_ret.ip = routeid.ip;
         routeid_ret.port = routeid.port;
         routeid_ret.type = routeid.type;


         return routeid_ret;

     }
}
