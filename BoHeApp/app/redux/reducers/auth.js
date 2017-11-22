import Immutable from 'immutable'
import Promise from 'bluebird'

import { getApiIp8007 } from 'app/util/utils.js'

const LOAD = 'bohe/auth/LOAD';
const LOAD_SUCCESS = 'bohe/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/auth/LOAD_FAIL';
const LOGIN = 'bohe/auth/LOGIN';
const LOGIN_SUCCESS = 'bohe/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'bohe/auth/LOGIN_FAIL';
const LOGOUT = 'bohe/auth/LOGOUT';
const LOGOUT_SUCCESS = 'bohe/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'bohe/auth/LOGOUT_FAIL';
const LOAD_DOCTORSERVICELIST = 'bohe/auth/DOCTORSERVICELIST';
const LOAD_DOCTORSERVICELIST_SUCCESS = 'bohe/auth/DOCTORSERVICELIST_SUCCESS';
const LOAD_DOCTORSERVICELIST_FAIL = 'bohe/auth/DOCTORSERVICELIST_FAIL';
const LOAD_SHIYUECOUNT = 'bohe/auth/SHIYUECOUNT';
const LOAD_SHIYUECOUNT_SUCCESS = 'bohe/auth/SHIYUECOUNT_SUCCESS';
const LOAD_SHIYUECOUNT_FAIL = 'bohe/auth/SHIYUECOUNT_FAIL';
const LOAD_USERINFO = 'bohe/auth/USERINFO';
const LOAD_USERINFO_SUCCESS = 'bohe/auth/USERINFO_SUCCESS';
const LOAD_USERINFO_FAIL = 'bohe/auth/USERINFO_FAIL';

const initialState =Immutable.Map({
  loading: false,
  loaded: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            if(action.server_token){
              let user = action.result;
              user.token = action.server_token
              return state.merge({ loading: false, loaded: true, user})
            }else{
              let old_token = state.getIn(['user','token']);

              let user = action.result;

              if(old_token){
                  user.token = old_token;
              }
              return state.merge({ loading: false, loaded: true, user})
            }
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOGIN:
            return state.merge({ loggingIn: true })
        case LOGIN_SUCCESS:
            return state.merge({ loggingIn: false, user: action.result })
        case LOGIN_FAIL:
            return state.merge({ loggingIn: false, user: null, loginError: action.error })

        case LOGOUT:
            return state.merge({ loggingOut: true })
        case LOGOUT_SUCCESS:
            return state.merge({
                loggingOut: false,
                user: null
            })
        case LOGOUT_FAIL:
            return state.merge({
                loggingOut: false,
                logoutError: action.error
            })
            case LOAD_DOCTORSERVICELIST:
              console.log('LOAD_DOCTORSERVICELIST')
          return state.merge({loading: true})
        case LOAD_DOCTORSERVICELIST_SUCCESS:
          console.log(action.result + 'serviceList')
          return state.merge({loading: false, loaded: true, serviceList: action.result})
        case LOAD_DOCTORSERVICELIST_FAIL:
          console.log('LOAD_DOCTORSERVICELIST_FAIL')
          return state.merge({loading: false, logoutError: action.error})
         case LOAD_SHIYUECOUNT:
              console.log('LOAD_SHIYUECOUNT')
          return state.merge({loading: true})
        case LOAD_SHIYUECOUNT_SUCCESS:
          console.log(action.result + 'LOAD_SHIYUECOUNT_SUCCESS')
          return state.merge({loading: false, loaded: true, shiyueCount: action.result})
        case LOAD_SHIYUECOUNT_FAIL:
          console.log(action.error+'LOAD_SHIYUECOUNT_FAIL')
          return state.merge({loading: false, shiyueCountError: action.error})
          case LOAD_USERINFO:
               console.log('LOAD_SHIYUECOUNT')
           return state.merge({loading: true})
         case LOAD_USERINFO_SUCCESS:
           console.log(action.result + 'LOAD_SHIYUECOUNT_SUCCESS')
           return state.merge({loading: false, loaded: true, userInfo: action.result})
         case LOAD_USERINFO_FAIL:

           console.log(action.error + 'action.error')
           return state.merge({loading: false, userInfoError: action.error})


        default:
            return state
    }
}


export function isLoaded(globalState) {
  return globalState.has('auth') && globalState.getIn(['auth','loaded']);
}

export function load({ req }) {
    var params = {}
    var auth_type = 'token'
    var server_token;
    console.log("dehuidehui111");
    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
      console.log('e');
      console.log(req);
        if (req.query && req.query.token) ///  微信的鉴权要素是openid
        {
            server_token = req.query.token;
            console.log("HHHHHHHH");

        } else if (req.cookies.khantoken) { /// 浏览器访问的鉴权要素是 cookie token

            console.log('dehuidehui222');
            server_token = req.cookies.khantoken;
            console.log(server_token)

        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }/// client side use cookie token to auth
    console.log("OOOOO###111111");
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+ getApiIp8007()+'/usercenter/userinformation?', { params, auth_type, server_token }, {
            format: function(response){
                    if(response.status == 401){
                        return Promise.reject("Unauthorized")
                    }else if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
            },
            done: function(user) {
                    return Promise.resolve(user)
            },
            error: function(err) {
                if(err == 'Unauthorized')
                  return  Promise.reject({ info: 'auth' })
                else
                  return  Promise.reject({ info: 'wire' })
            }
        }),
        server_token
    };
}




export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.POST('http://192.168.10.10/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}

export function loadDoctorserviceList() {

    console.log('KKKK');
        return {
        types: [LOAD_DOCTORSERVICELIST, LOAD_DOCTORSERVICELIST_SUCCESS, LOAD_DOCTORSERVICELIST_FAIL],
        promise: (client) => client.GET('http://182.254.213.207/mintAdmin/index.php/Home/Doctor/serviceLst', { }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res+'res');
                if (res.code == 1) {

                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject(res.err)
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}

export function UsergetInfo(){
  return {
  types: [LOAD_USERINFO, LOAD_USERINFO_SUCCESS, LOAD_USERINFO_FAIL],
  promise: (client) => client.POST('http://182.254.213.207/mintAdmin/index.php/Home/User/getInfo', { }, {
      format: function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      },
      done: function(res) {

          console.log(res);
          if (res.code == 1) {

              return Promise.resolve(res.data)

          } else if(res.code == 0){
              // var err = { info: 'auth' }
              return Promise.reject({ info: res.msg })
              // return Promise.reject(res.err)

          }
      },
      error: function(err) {
          return Promise.reject({ info: 'wire' })
      }
  })
};

}

export function loadShiYueCount() {

        return {
        types: [LOAD_SHIYUECOUNT, LOAD_SHIYUECOUNT_SUCCESS, LOAD_SHIYUECOUNT_FAIL],
        promise: (client) => client.GET('http://182.254.213.207/mintAdmin/index.php/Home/Appointment/shiyueCount', { }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);
                if (res.code == 1) {

                    return Promise.resolve(res.data)

                } else if(res.code == 0){
                    // var err = { info: 'auth' }
                    return Promise.reject({ info: res.msg })

                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}
