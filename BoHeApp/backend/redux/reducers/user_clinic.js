import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/user_clinic/LOAD';
const LOAD_SUCCESS = 'bohe/user_clinic/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_clinic/LOAD_FAIL';

const LOAD_ONDUTY_DOCTORS = 'bohe/user_clinic/LOAD_ONDUTY_DOCTORS';
const LOAD_ONDUTY_DOCTORS_SUCCESS = 'bohe/user_clinic/LOAD_ONDUTY_DOCTORS_SUCCESS';
const LOAD_ONDUTY_DOCTORS_FAIL = 'bohe/user_clinic/LOAD_ONDUTY_DOCTORS_FAIL';

const LOAD_DETAIL = 'bohe/user_clinic/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/user_clinic/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/user_clinic/LOAD_DETAIL_FAIL';

const LOAD_ONDUTY_DETAIL = 'bohe/user_clinic/LOAD_ONDUTY_DETAIL';
const LOAD_ONDUTY_DETAIL_SUCCESS = 'bohe/user_clinic/LOAD_ONDUTY_DETAIL_SUCCESS';
const LOAD_ONDUTY_DETAIL_FAIL = 'bohe/user_clinic/LOAD_ONDUTY_DETAIL_FAIL';

const SET_USER_TOSHOWINFO = 'bohe/user_clinic/SHOWINFO'

const DETAILINFO_EDIT = 'bohe/user_clinic/DETAILINFO_EDIT'
const CLINICFLUSH = 'bohe/user_clinic/CLINICFLUSH'
const CLINICADD = 'bohe/user_clinic/CLINICADD'
const CLINICSAVE = 'bohe/user_clinic/CLINICSAVE'

const initialState = Immutable.Map({
    loaded: false,
    loading: false,
    showbegin:0
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
              if(action.showUsersBegin)
                return state.merge({showbegin:action.showUsersBegin , loading: false, loaded: true, clinics: action.result })
              else
                return state.merge({loading: false, loaded: true, clinics: action.result })
        case LOAD_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })

        case LOAD_ONDUTY_DOCTORS:
            return state.updateIn(['clinics'], list => list.map(clinic => {
                    if(clinic.get('id') == action.id){
                      return clinic.merge({loading: true})
                    }
                    return clinic
            }))
        case LOAD_ONDUTY_DOCTORS_SUCCESS:
            return state.updateIn(['clinics'], list => list.map(clinic => {
                    if(clinic.get('id') == action.id){
                      return clinic.merge({ loading: false, loaded: true, dutydoctors: action.result })
                    }
                    return clinic
            }))
        case LOAD_ONDUTY_DOCTORS_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })

        case LOAD_ONDUTY_DETAIL:
            var idx = state.getIn(['frontuserinfo','idx']);
            return state.updateIn(['clinics',idx,'dutydoctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.id){
                      return doctor.merge({loading: true})
                    }
                    return doctor
            }))
        case LOAD_ONDUTY_DETAIL_SUCCESS:
            var idx = state.getIn(['frontuserinfo','idx']);
            return state.updateIn(['clinics',idx,'dutydoctors'], list => list.map( doctor => {
                    if(doctor.get('id') == action.id){
                      return doctor.merge({loading: false,loaded:true, ...action.result})
                    }
                    return doctor
            }))
        case LOAD_ONDUTY_DETAIL_FAIL:
            var idx = state.getIn(['frontuserinfo','idx']);
            return state.updateIn(['clinics',idx,'dutydoctors'], list => list.map( doctor => {
                    if(doctor.get('id') == action.id){
                      return doctor.merge( { loading: false,loaded:false,error: action.error } )
                    }
                    return doctor
            }))
        case LOAD_DETAIL:
            return state.updateIn(['clinics'], list => list.map(clinic => {
                    if(clinic.get('id') == action.id){
                      return clinic.merge({loading: true})
                    }
                    return clinic
            }))
        case LOAD_DETAIL_SUCCESS:
            if( !action.extract )
              return state.updateIn(['clinics'], list => list.map(clinic => {
                    if(clinic.get('id') == action.result.id){
                        return clinic.merge({loading:false, loaded:true, ...action.result})
                    }
                        return clinic
              }))
           else
              return state.updateIn(['clinics'], list => list.map(clinic => {
                    if(clinic.get('id') == action.result.id){
                        return clinic.merge({loading:false, loaded:true, ...action.result, detailedit:{ idx:action.idx, data:action.result }})
                    }
                        return clinic
              }))
        case LOAD_DETAIL_FAIL:
            return state.updateIn(['clinics'], list => list.map(clinic => {
                    if(clinic.get('id') == action.error.id){
                    return clinic.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return clinic
            }))
        case SET_USER_TOSHOWINFO:
            return state.merge({ frontuserinfo: action.result } )
        case DETAILINFO_EDIT:
             var idx = state.getIn(['frontuserinfo','idx']);
             var pairs = action.result;
             var baseinfoedit = {};
             pairs.forEach((pair) => {
                 baseinfoedit[pair.key] = pair.val;
             })
             var meta_info = state.getIn(['clinics',idx,'detailedit','data']);
             return state.setIn(['clinics',idx,'detailedit','data'],meta_info.merge(baseinfoedit));
        case CLINICFLUSH:
             var idx = state.getIn(['frontuserinfo','idx']);
             var toclinic = state.getIn(['clinics',idx,'detailedit','data']);
             return state.setIn(['clinics',idx],state.getIn(['clinics',idx]).merge(toclinic));
        case CLINICADD:
             var pairs = action.result;
             var baseinfoedit = {};
             pairs.forEach((pair) => {
                 baseinfoedit[pair.key] = pair.val;
             })
             var meta_info = Immutable.Map({});
             console.log('爱沙发沙发沙发');
             console.log(baseinfoedit);
             console.log(state.hasIn(['newclinic']));
             if(state.hasIn(['newclinic'])){
                  meta_info = state.getIn(['newclinic']);
                  return state.setIn(['newclinic'],meta_info.merge(baseinfoedit));
             }
             else{
                  return state.merge( { newclinic: {} } ).setIn(['newclinic'],meta_info.merge(baseinfoedit));
             }
        case CLINICSAVE:
             var newclinic = state.getIn(['newclinic']);
             return state.updateIn(['clinics'], list => list.push(newclinic));
        default:
            return state
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['user_clinic','loaded'])){
        loaded = state.getIn(['user_clinic','loaded'])
    }
    if(state.hasIn(['user_clinic','loading'])){
        loading = state.getIn(['user_clinic','loading'])
    }
    return loaded || loading
}

export function LoadedorLoading_clinic(state,idx,id){
    var loaded = false
    var loading = false

    let clinic = state.getIn(['user_clinic','clinics',idx])

    if(clinic){
            loading = clinic.get('loading');
            loaded = clinic.get('loaded');
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
        promise: (client) => client.GET('http://'+getApiIp()+'/user_clinic/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.clinics)

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

export function load_OndutyDoctors({
    user,
    clinic_id,
    req,
    extract
}) {
    var params = { clinic_id };

            return {
                types: [ LOAD_ONDUTY_DOCTORS, LOAD_ONDUTY_DOCTORS_SUCCESS, LOAD_ONDUTY_DOCTORS_FAIL ],
                promise: (client) => client.GET('http://'+getApiIp()+'/user_clinic/doctors/rest?', { params }, {
                    format: function(response) {
                        if (response.status >= 400) {
                            throw new Error("Bad response from server");
                        }
                        return response.json();
                    },
                    done: function(res) {

                        console.log(res);

                        if (res.valid == 1) {
                            return Promise.resolve(res.doctors)

                        } else {
                            //var err = { info: 'auth' }
                            return Promise.reject({id, info:'notvalid'})
                        }
                    },
                    error: function(err) {
                        console.log(err)
                        return Promise.reject({id, info: 'wire' })
                    }
                }),
                extract
            };

}

export function load_detail({
    id,
    idx,
    extract
}) {
    var params = {}
    params.id = id

    return {
        types: [ LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL ],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_clinic/detail/rest?', { params }, {
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

                    return Promise.resolve(res.clinic)

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
        id,
        idx,
        extract
    };

}

export function load_onduty_detail({
    id
}) {
    var params = {}
    params.id = id

    return {
        types: [ LOAD_ONDUTY_DETAIL, LOAD_ONDUTY_DETAIL_SUCCESS, LOAD_ONDUTY_DETAIL_FAIL ],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_clinic/detail/doctor/rest?', { params }, {
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

                    return Promise.resolve(res.doctor)

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

export function frontUserForInfo({ idx,id }){
     return {
        type: SET_USER_TOSHOWINFO,
        result:{ idx,id }
     }

}
export function detailEdit(pairs){

    return {
        type: DETAILINFO_EDIT,
        result: pairs
    }

}
export function clinicFlush(){

    return {
        type: CLINICFLUSH
    }

}
export function clinicAdd(pairs){

    return {
        type: CLINICADD,
        result:pairs
    }

}
export function clinicSave(){

    return {
        type: CLINICSAVE
    }

}







