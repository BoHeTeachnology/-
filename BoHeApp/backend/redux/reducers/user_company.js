import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/user_company/LOAD';
const LOAD_SUCCESS = 'bohe/user_company/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_company/LOAD_FAIL';

const initialState = Immutable.Map({
    loaded: false,
    loading: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            return state.merge({ loading: false, loaded: true,  companys: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        default:
            return state
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['user_company','loaded'])){
        loaded = state.getIn(['user_company','loaded'])
    }
    if(state.hasIn(['user_company','loading'])){
        loading = state.getIn(['user_company','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    req
}) {
    var params = {};

    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }else{

    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_company/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.companys)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({ info: 'notvalid' })
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}
