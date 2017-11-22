import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'doctortool/util/apiinterface.js'

import { error_table } from './config/error_table.js'

const LOAD = 'bohe/user_doctor/LOAD';
const LOAD_SUCCESS = 'bohe/user_doctor/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_doctor/LOAD_FAIL';

const LOAD_DATE = 'bohe/user_doctor/LOAD_DATE';
const LOAD_DATE_SUCCESS = 'bohe/user_doctor/LOAD_DATE_SUCCESS';
const LOAD_DATE_FAIL = 'bohe/user_doctor/LOAD_DATE_FAIL';

const LOAD_TIME = 'bohe/user_doctor/LOAD_TIME';
const LOAD_TIME_SUCCESS = 'bohe/user_doctor/LOAD_TIME_SUCCESS';
const LOAD_TIME_FAIL = 'bohe/user_doctor/LOAD_TIME_FAIL';

const CREATE_ORDER = 'bohe/user_doctor/CREATE_ORDER';
const CREATE_ORDER_SUCCESS = 'bohe/user_doctor/CREATE_ORDER_SUCCESS';
const CREATE_ORDER_FAIL = 'bohe/user_doctor/CREATE_ORDER_FAIL';

const SELECT_DATE = 'bohe/user_doctor/SELECT_DATE';
const SELECT_TIME = 'bohe/user_doctor/SELECT_TIME';

const LOST_DATE_ERROR = 'bohe/user_doctor/LOST_DATE_ERROR';
const LOST_TIME_ERROR = 'bohe/user_doctor/LOST_TIME_ERROR';


const GET_VERIFY = 'bohe/user_doctor/GET_VERIFY';
const GET_VERIFY_SUCCESS = 'bohe/user_doctor/GET_VERIFY_SUCCESS';
const GET_VERIFY_FAIL = 'bohe/user_doctor/GET_VERIFY_FAIL';

const PHONE_ERROR = 'bohe/user_doctor/PHONE_ERROR';

const NAME_ERROR = 'bohe/user_doctor/NAME_ERROR';

const VERIFY_ERROR = 'bohe/user_doctor/VERIFY_ERROR';

const LOAD_WXJS = 'bohe/user_doctor/LOAD_WXJS'
const LOAD_WXJS_SUCCESS = 'bohe/user_doctor/LOAD_WXJS_SUCCESS'
const LOAD_WXJS_FAIL = 'bohe/user_doctor/LOAD_WXJS_FAIL'

const initialState = Immutable.Map({
    loaded: false,
    loading: false,
    error:Immutable.Map({})
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            return state.merge({ loading: false, loaded: true,  doctor: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DATE:
            return state.merge({ loading: true })
        case LOAD_DATE_SUCCESS:
            if(state.hasIn(['doctor'])&&state.get('loaded')){
                return state.setIn(['doctor','curdate'],action.date).setIn(['doctor','dates'],Immutable.List([]).merge(action.result))
            }
            return state;
        case LOAD_DATE_FAIL:
            return state.merge({ error:action.error })
        case LOAD_TIME:
            return state.merge({ loading: true })
        case LOAD_TIME_SUCCESS:
            if(state.hasIn(['doctor'])&&state.get('loaded')){
                let idx = state.getIn(['doctor','dates']).findIndex(value => value.get('visit_date') == action.date)
                if(idx>=0){
                     return state.setIn(['doctor','dates',idx,'times'],Immutable.Map({}).merge(action.result)).merge({ loading: false })
                }
            }
            return state.merge({ loading: false })
        case LOAD_TIME_FAIL:
            return state.merge({ error:action.error })
        case SELECT_DATE:
            return state.merge({ seldate:action.result })
        case SELECT_TIME:
            return state.merge({ seltime:action.result })
        case CREATE_ORDER:
            return state.merge({ qr_code:'' });
        case CREATE_ORDER_SUCCESS:
            return state.merge({ patient_name:action.result.patient_name, qr_code: action.result.qr_code,patient_phone:action.result.patient_phone ,error:{ post_success:action.post_success,msg:'预约进行中' }})
        case CREATE_ORDER_FAIL:
            return state.merge({ error:action.error })
        case LOST_DATE_ERROR:
            return state.merge({ error:action.result })
        case LOST_TIME_ERROR:
            return state.merge({ error:action.result })
        case GET_VERIFY:
            return state.merge({verify:false});
        case GET_VERIFY_SUCCESS:
            return state.merge({verify:true});
        case GET_VERIFY_FAIL:
            return state.merge({ error:action.error })
        case PHONE_ERROR:
            return state.merge({ error:action.result })
        case NAME_ERROR:
            return state.merge({ error:action.result })
        case VERIFY_ERROR:
            return state.merge({ error:action.result })
        case LOAD_WXJS:
            return state.merge({ wxjs:{}});
        case LOAD_WXJS_SUCCESS:
            return state.merge({ wxjs: action.result})
        case LOAD_WXJS_FAIL:
            return state.merge({ error: action.error})
        default:
            return state
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['user_doctor','loaded'])){
        loaded = state.getIn(['user_doctor','loaded'])
    }
    if(state.hasIn(['user_doctor','loading'])){
        loading = state.getIn(['user_doctor','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    req,
    doctorid
}) {
    var params = { };
    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side

        params.doctorid = 1//req.query.doctorid
    }else{
        if(doctorid == undefined){
            let url = window.location.href;
            params.id = url.split('?')[1].split('=')[1];
        }else
            params.id = doctorid;
    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Home/Doctor/getOne?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {
                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_doctor.load.msg = 'notvalid'
                    return Promise.reject({ pos: ['user_doctor','load'] })
                }
            },
            error: function(err) {
                    error_table.user_doctor.load.msg = 'wire'
                    return Promise.reject({ pos: ['user_doctor','load'] })
            }
        }),
        doctorid
    };

}


export function load_date({
    user,
    req,
    doctorid,
    date
}) {
    var params = { };
    params.doctor_id = doctorid;
    params.visit_date = date;
    return {
        types: [LOAD_DATE, LOAD_DATE_SUCCESS, LOAD_DATE_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Home/Doctor/getDoctorDate?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {

                    return Promise.resolve(res.data)

                } else {
                    error_table.user_doctor.loaddate.msg = 'notvalid'
                    return Promise.reject({ pos: ['user_doctor','loaddate'] })
                }
            },
            error: function(err) {
                    error_table.user_doctor.loaddate.msg = 'wire'
                    return Promise.reject({ pos: ['user_doctor','loaddate'] })
            }
        }),
        doctorid,
        date
    };

}

export function load_time({
    user,
    req,
    doctorid,
    date
}) {
    var params = {};
    params.doctor_id = doctorid;
    params.visit_date = date;
    return {
        types: [LOAD_TIME, LOAD_TIME_SUCCESS, LOAD_TIME_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Home/Doctor/getDoctorTime?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {

                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_doctor.loadtime.msg = 'notvalid'
                    return Promise.reject({ pos: ['user_doctor','loadtime'] })
                }
            },
            error: function(err) {
                    error_table.user_doctor.loadtime.msg = 'wire'
                    return Promise.reject({ pos: ['user_doctor','loadtime'] })
            }
        }),
        date
    };

}

export function load_wxjs() {
    var params = {}
    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) {
    
    }else{
        var url=window.location.href.indexOf('#')<0?window.location.href:window.location.href.split('#')[0];
        params = { url };
    }
    return {
        types: [LOAD_WXJS, LOAD_WXJS_SUCCESS, LOAD_WXJS_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Home/Index/getPackage?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                if (1) {

                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_doctor.loadwxjs.msg = 'notvalid'
                    return Promise.reject({ pos: ['user_doctor','loadwxjs'] })
                }
            },
            error: function(err) {
                    error_table.user_doctor.loadwxjs.msg = 'wire'
                    return Promise.reject({ pos: ['user_doctor','loadwxjs'] })
            }
        })
    };

}






export function select_date(date){
   return {
      type:SELECT_DATE,
      result:date
   }
}
export function select_time(time){
   return {
      type:SELECT_TIME,
      result:time
   }
}

export function create_order({
    patient_name,
    patient_phone,
    verify,
    doctor_id,
    post_success,
    post_success_login,
    clinic_id,
    clinic_name,
    visit_time,
    service_id,
    date,
    time
}){
     var data={ doctor_id, clinic_id, clinic_name, service_id};
     if(patient_name&&patient_phone&&verify){
        data.patient_name = patient_name;
        data.patient_phone = patient_phone;
        data.verify = verify;
     }
     data.visit_time = date + ' ' +time;
     
     return {
            types: [CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL],
            promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Home/Doctor/newAdd', { data }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                },
                done: function(res) {

                    if (res.code == 1) {

                        return Promise.resolve({ qr_code:res.qr_code, patient_phone:res.patient_phone, patient_name:res.patient_name});

                    } else {
                        //var err = { info: 'auth' }
                        error_table.user_doctor.createorder.msg = res.msg;
                        return Promise.reject({ pos: ['user_doctor','createorder'] })
                    }
                },
                error: function(err) {
                        error_table.user_doctor.createorder.msg = 'wire'
                        return Promise.reject({ pos: ['user_doctor','createorder'] })
                }
            }),
            date,
            post_success,
            post_success_login
        };

}

export function  lost_date_error(){
   return {
      type:LOST_DATE_ERROR,
      result:{ pos: ['user_doctor','lostdate'] }
   }
}

export function  lost_time_error(){
   return {
      type:LOST_TIME_ERROR,
      result:{ pos: ['user_doctor','losttime'] }
   }
}

export function  phone_error(){
   return {
      type:PHONE_ERROR,
      result:{ pos: ['user_doctor','phone_error'] }
   }
}

export function  name_error(){
   return {
      type: NAME_ERROR,
      result:{ pos: ['user_doctor','name_error'] }
   }
}

export function verify_error(){
    return {
        type:VERIFY_ERROR,
        result:{ pos: ['user_doctor','verify_error'] }
    }
}


export function get_verify({
    user,
    req,
    phone
}) {
    var data = {};
    data.phone = phone;
    return {
        types: [GET_VERIFY, GET_VERIFY_SUCCESS, GET_VERIFY_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Home/Index/sendMsg', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {

                    return Promise.resolve()

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_doctor.get_verify.msg = 'notvalid'
                    return Promise.reject({ pos: ['user_doctor','get_verify'] })
                }
            },
            error: function(err) {
                    error_table.user_doctor.get_verify.msg = 'wire'
                    return Promise.reject({ pos: ['user_doctor','get_verify'] })
            }
        })
    };

}

