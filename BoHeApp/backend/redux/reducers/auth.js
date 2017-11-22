import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp from 'backend/util/apiinterface.js'

const LOAD = 'bohe/auth/LOAD';
const LOAD_SUCCESS = 'bohe/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/auth/LOAD_FAIL';
const LOGIN = 'bohe/auth/LOGIN';
const LOGIN_SUCCESS = 'bohe/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'bohe/auth/LOGIN_FAIL';
const LOGOUT = 'bohe/auth/LOGOUT';
const LOGOUT_SUCCESS = 'bohe/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'bohe/auth/LOGOUT_FAIL';

const initialState =Immutable.Map({
  loaded: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            return state.merge({ loading: false, loaded: true, user: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOGIN:
            return state.merge({ loggingIn: true })
        case LOGIN_SUCCESS:
            return state.merge({ loaded: true,  loggingIn: false, user: action.result })
        case LOGIN_FAIL:
            return state.merge({ loaded: false, loggingIn: false, user: null, loginError: action.error })

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
        default:
            return state
    }
}


export function isLoaded(globalState) {
  return globalState.has('auth') && globalState.getIn(['auth','loaded']);
}

export function load({ req }) {
    var params = {}
    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
        if (req.query && req.query.openid) ///  微信的鉴权要素是openid
        {
            params.openid = req.query.openid;

        } else if (req.cookies.tokenbohe) { /// 浏览器访问的鉴权要素是 cookie token

            params.token = req.cookies.tokenbohe;

        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }/// client side use cookie token to auth

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/userinfo/rest?', { params }, {
            format: function(response){
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
            },
            done: function(user) {
                if (user.valid == 1) {
                    return Promise.resolve(user)

                } else {
                    return Promise.reject({ info: 'auth'})
                }
            },
            error: function(err) {
                return  Promise.reject({ info: 'wire' })
            }
        })
    };
}




export function login(name) {
    console.log("login!!!!!")
    console.log(getApiIp());
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/login', {
            data: {
                name: name
            }
        }, {
            format: function(response) {
              console.log("ttttttsss")
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(user) {
                if (user.valid == 1) {
                    return Promise.resolve(user)

                } else {
                    return Promise.reject({ info: 'auth' })
                }
            },
            error: function(err) {
                console.log(err)
                return Promise.reject({ info: 'wire' })
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
