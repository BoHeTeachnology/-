import Immutable from 'immutable'
import Promise from 'bluebird'
import  { getApiIp8007 }  from 'app/util/utils.js'


const WITHDRAWCASH = 'bohe/withdrawcash/WITHDRAWCASH';
const WITHDRAWCASH_SUCCESS = 'bohe/withdrawcash/WITHDRAWCASH_SUCCESS';
const WITHDRAWCASH_FAIL = 'bohe/withdrawcash/WITHDRAWCASH_FAIL';

const WITHDRAWCASHCODE = 'bohe/withdrawcash/WITHDRAWCASHCODE';
const WITHDRAWCASHCODE_SUCCESS = 'bohe/withdrawcash/WITHDRAWCASHCODE_SUCCESS';
const WITHDRAWCASHCODE_FAIL = 'bohe/withdrawcash/WITHDRAWCASHCODE_FAIL';

const WITHDRAWVALIDATE = 'bohe/withdrawcash/WITHDRAWVALIDATE';
const WITHDRAWVALIDATE_SUCCESS = 'bohe/withdrawcash/WITHDRAWVALIDATE_SUCCESS';
const WITHDRAWVALIDATE_FAIL = 'bohe/withdrawcash/WITHDRAWVALIDATE_FAIL';


const WITHDRAWCASHSECRET = 'bohe/withdrawcash/WITHDRAWCASHSECRET';
const WITHDRAWCASHSECRET_SUCCESS = 'bohe/withdrawcash/WITHDRAWCASHSECRET_SUCCESS';
const WITHDRAWCASHSECRET_FAIL = 'bohe/withdrawcash/WITHDRAWCASHSECRET_FAIL';


const initialState = Immutable.Map({
    loaded: false,
    loading: false
})
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case WITHDRAWCASH:
            return state;
        case WITHDRAWCASH_SUCCESS:
            return state.merge({withdrawcashres:action.result});
        case WITHDRAWCASH_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case WITHDRAWCASHCODE:
            return state;
        case WITHDRAWCASHCODE_SUCCESS:
             return state.merge({withdrawcashcoderes:action.result});
        case WITHDRAWCASHCODE_FAIL:
             return state.merge({ loading: false, loaded: false, error: action.error })
        case WITHDRAWVALIDATE:
             return state;
        case WITHDRAWVALIDATE_SUCCESS:
            return state.merge({withdrawvalidateres:action.result});
        case WITHDRAWVALIDATE_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case WITHDRAWCASHSECRET:
                 return state;
        case WITHDRAWCASHSECRET_SUCCESS:
                return state.merge({withdrawcashsecretres:action.result});
        case WITHDRAWCASHSECRET_FAIL:
                return state.merge({ loading: false, loaded: false, error: action.error })
        default:
            return state
    }
}



export function setwithdrawcashsercet(params) {
    var params = params
    var auth_type = 'token'
    console.log(params)
    return {
        types: [WITHDRAWCASHSECRET, WITHDRAWCASHSECRET_SUCCESS, WITHDRAWCASHSECRET_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/bank/userpass?', { params,auth_type }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                // if (res.code == 1) {

                    return Promise.resolve(res)

                // } else {
                    //var err = { info: 'auth' }
                    // return Promise.reject(res.err)
                // }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}


export function withdrawcashcode(params) {
    var params = params
    var auth_type = 'token'
    console.log(params)
    return {
        types: [WITHDRAWCASHCODE, WITHDRAWCASHCODE_SUCCESS, WITHDRAWCASHCODE_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/bank/getphonepass?', { params,auth_type }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                // if (res.code == 1) {

                    return Promise.resolve(res)

                // } else {
                    //var err = { info: 'auth' }
                    // return Promise.reject(res.err)
                // }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}


export function withdrawcashvalidate(params) {
    var params = params
    var auth_type = 'token'
    console.log(params)
    return {
        types: [WITHDRAWVALIDATE, WITHDRAWVALIDATE_SUCCESS, WITHDRAWVALIDATE_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/bank/setphonepass?', { params,auth_type }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                // if (res.code == 1) {

                    return Promise.resolve(res)

                // } else {
                    //var err = { info: 'auth' }
                    // return Promise.reject(res.err)
                // }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}


export function userwithdrawcash(params) {
    var params = params
    var auth_type = 'token'
    console.log(params)
    return {
        types: [WITHDRAWCASH, WITHDRAWCASH_SUCCESS, WITHDRAWCASH_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/bank/userpass?', { params,auth_type }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                // if (res.success == 1) {

                    return Promise.resolve(res)

                // } else {
                //     var err = res.message
                //     return Promise.reject(err)
                // }
            },
            error: function(err) {
                return Promise.reject('服务器繁忙~')
            }
        })
    };

}
