import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/message/LOAD';
const LOAD_SUCCESS = 'bohe/message/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/message/LOAD_FAIL';



const initialState = Immutable.Map({
    loaded: false,
    loading: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            return state.merge({ messagelist: action.result.data , allpage: action.result.count })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        default:
            return state
    }
}


export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['message','loaded'])){
        loaded = state.getIn(['bill_patient','loaded'])
    }
    if(state.hasIn(['message','loading'])){
        loading = state.getIn(['message','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ num ,begin}) {
    var data = { p_len:num,p:begin,identity_id:1 }
    var datatype = 'formdata'
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.POST('http://182.254.213.207/mintAdmin/index.php/Admin/User/index', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.code == 1) {

                    return Promise.resolve(res)

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


