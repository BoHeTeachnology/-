import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/order_patient/LOAD';
const LOAD_SUCCESS = 'bohe/order_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/order_patient/LOAD_FAIL';

const LOAD_DETAIL = 'bohe/order_patient/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/order_patient/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/order_patient/LOAD_DETAIL_FAIL';

const SET_ORDER_TOSHOW = 'bohe/order_patient/SHOW'

const initialState = Immutable.Map({
    loaded: false,
    loading: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            var allres;
            if(Immutable.List.isList(state.get('orders'))){
                if(!action.refresh){

                    allres = state.get('orders').pop().toJS().concat(action.result)

                }else if(action.refresh.resolve){

                    action.refresh.resolve()

                }
            }
            if(allres){
              allres.push({flag:true})
              return state.merge({ loading: false, loaded: true, orders: allres })
            }
            else{
              action.result.push({ flag:true })
              return state.merge({ loading: false, loaded: true, orders: action.result })
            }
        case LOAD_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.id){
                      return order.merge({loading: true})
                    }
                    return order
            }))
        case LOAD_DETAIL_SUCCESS:
            return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.result.id){
                    return order.merge({loading:false,loaded:true, ...action.result})
                    }
                    return order
            }))


        case LOAD_DETAIL_FAIL:
            return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.error.id){
                    return order.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return order
            }))
        case SET_ORDER_TOSHOW:
            return state.merge({ frontorder: action.result } )
        default:
            return state
    }
}

export function frontOrder({ idx,id }){
     return {
        type: SET_ORDER_TOSHOW,
        result:{ idx,id }
     }

}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['order_patient','loaded'])){
        loaded = state.getIn(['order_patient','loaded'])
    }
    if(state.hasIn(['order_patient','loading'])){
        loading = state.getIn(['order_patient','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ user, num ,begin, req, refresh }) {
    var params = {};

    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {

            params = { num:req.query.num, begin:req.query.begin }
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }else{
        params = { num, begin }
    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/patient/orders/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.orders)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({ info: 'notvalid' })
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        }),
        refresh
    };

}


export function load_detail({ id }) {
    var params = {}
    params.id = id

    console.log('load_detail!!!!!!!!!!!')
    console.log(id)
    return {
        types: [ LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL ],
        promise: (client) => client.GET('http://192.168.10.10/patient/orderInfo/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                console.log('>>>>>>>>>>>>>>>>')
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.order)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({id, info:'notvalid'})
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG1')
                return Promise.reject({id, info: 'wire' })
            }
        }),
        id
    };

}
