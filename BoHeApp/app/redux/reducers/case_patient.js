import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/case_patient/LOAD';
const LOAD_SUCCESS = 'bohe/case_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/case_patient/LOAD_FAIL';

const LOAD_CONTENT = 'bohe/case_patient/LOAD_CONTENT';
const LOAD_CONTENT_SUCCESS = 'bohe/case_patient/LOAD_CONTENT_SUCCESS';
const LOAD_CONTENT_FAIL = 'bohe/case_patient/LOAD_CONTENT_FAIL';

const LOAD_DESC = 'bohe/case_patient/LOAD_DESC';
const LOAD_DESC_SUCCESS = 'bohe/case_patient/LOAD_DESC_SUCCESS';
const LOAD_DESC_FAIL = 'bohe/case_patient/LOAD_DESC_FAIL';

const SET_CASE_TOSHOW = 'bohe/case_patient/SHOW'

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
            if(Immutable.List.isList(state.get('cases'))){

                allres = state.get('cases').pop().toJS().concat(action.result)
            }
            if(allres){
              allres.push({flag:true})
              return state.merge({ loading: false, loaded: true, cases: allres })
            }
            else{
              action.result.push({ flag:true })
              return state.merge({ loading: false, loaded: true, cases: action.result })
            }
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_CONTENT:
            return state.updateIn(['cases'], list => list.map(acase => {
                    if(acase.get('id') == action.id){
                    return acase.merge({loading: true})
                    }
                    return acase
            }))
        case LOAD_CONTENT_SUCCESS:
            return state.updateIn(['cases'], list => list.map(acase => {
                    if(acase.get('id') == action.result.id){
                    return acase.merge({loading:false,loaded:true, ...action.result})
                    }
                    return acase
            }))


        case LOAD_CONTENT_FAIL:
            return state.updateIn(['cases'], list => list.map(acase => {
                    if(acase.get('id') == action.result.id){
                    return acase.merge({loading:false,loaded:false, error: action.error})
                    }
                    return acase
            }))
        case LOAD_DESC:
            return state.updateIn(['cases'], list => list.map(acase => {
                    if(acase.get('id') == action.id){
                    return acase.merge({loading: true})
                    }
                    return acase
            }))
        case LOAD_DESC_SUCCESS:
            return state.updateIn(['cases'], list => list.map(acase => {
                    if(acase.get('id') == action.result.id){
                    return acase.merge({loading:false,loaded:true, ...action.result})
                    }
                    return acase
            }))
        case LOAD_DESC_FAIL:
            return state.updateIn(['cases'], list => list.map(acase => {
                    if(acase.get('id') == action.result.id){
                    return acase.merge({loading:false,loaded:false, error: action.error})
                    }
                    return acase
            }))
        case SET_CASE_TOSHOW:
            return state.merge({ frontcase: action.result } )
        default:
            return state
    }
}

export function frontCase({ idx,id }){
     return {
        type: SET_CASE_TOSHOW,
        result:{ idx,id }
     }

}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['case_patient','loaded'])){
        loaded = state.getIn(['case_patient','loaded'])
    }
    if(state.hasIn(['case_patient','loading'])){
        loading = state.getIn(['case_patient','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ user, num ,begin}) {
    var params = { num,begin }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/patient/cases/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.valid == 1) {

                    return Promise.resolve(res.cases)

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

export function loadContent({ id }) {
    var params = {}
    params.id = id

    console.log('load_content!!!!!!!!!!!')
    console.log(id)
    return {
        types: [LOAD_CONTENT, LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/patient/caseContent/rest?', { params }, {
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

                    return Promise.resolve(res.casecontent)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject(res.err)
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG1')
                return Promise.reject({ info: 'wire' })
            }
        }),
        id
    };

}

export function loadDesc({id}){
    var params = {}
    params.id = id

    console.log('load_content!!!!!!!!!!!')
    console.log(id)
    return {
        types: [LOAD_DESC, LOAD_DESC_SUCCESS, LOAD_DESC_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/patient/caseDesc/rest?', { params }, {
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

                    return Promise.resolve(res.casedesc)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject(res.err)
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG1')
                return Promise.reject({ info: 'wire' })
            }
        }),
        id
    };
}
