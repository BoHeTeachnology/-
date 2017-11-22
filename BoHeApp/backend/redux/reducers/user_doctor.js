import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/user_doctor/LOAD';
const LOAD_SUCCESS = 'bohe/user_doctor/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_doctor/LOAD_FAIL';

const LOAD_DETAILS = 'bohe/user_doctor/LOAD_DETAILS';
const LOAD_DETAILS_SUCCESS = 'bohe/user_doctor/LOAD_DETAILS_SUCCESS';
const LOAD_DETAILS_FAIL = 'bohe/user_doctor/LOAD_DETAILS_FAIL';

const LOAD_ONDUTY_DOCTORS = 'bohe/user_doctor/LOAD_ONDUTY_DOCTORS';
const LOAD_ONDUTY_DOCTORS_SUCCESS = 'bohe/user_doctor/LOAD_ONDUTY_DOCTORS_SUCCESS';
const LOAD_ONDUTY_DOCTORS_FAIL = 'bohe/user_doctor/LOAD_ONDUTY_DOCTORS_FAIL';

const LOAD_DETAIL = 'bohe/user_doctor/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/user_doctor/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/user_doctor/LOAD_DETAIL_FAIL';

const LOAD_ONDUTY_DETAIL = 'bohe/user_doctor/LOAD_ONDUTY_DETAIL';
const LOAD_ONDUTY_DETAIL_SUCCESS = 'bohe/user_doctor/LOAD_ONDUTY_DETAIL_SUCCESS';
const LOAD_ONDUTY_DETAIL_FAIL = 'bohe/user_doctor/LOAD_ONDUTY_DETAIL_FAIL';

const SET_USER_TOSHOWINFO = 'bohe/user_doctor/SHOWINFO'

const DETAILINFO_EDIT = 'bohe/user_doctor/DETAILINFO_EDIT'
const DOCTORFLUSH = 'bohe/user_doctor/DOCTORFLUSH'

const NEWDOCTORINFO_EDIT = 'bohe/user_doctor/NEWDOCTORINFO_EDIT'
const NEWDOCTORADD = 'bohe/user_doctor/NEWDOCTORADD'
const PROJECTADD = 'bohe/user_doctor/PROJECTADD'
const PROJECTDEL = 'bohe/user_doctor/PROJECTDEL'

const LOAD_LABEL = 'bohe/user_doctor/LOAD_LABEL';
const LOAD_LABEL_SUCCESS = 'bohe/user_doctor/LOAD_LABEL_SUCCESS';
const LOAD_LABEL_FAIL = 'bohe/user_doctor/LOAD_LABEL_FAIL';

const LABELADD = 'bohe/user_doctor/LABELADD';
const DETAILINFO_LABEL_EDIT = 'bohe/user_doctor/DETAILINFO_LABEL_EDIT';

const PROJECTEDIT = 'bohe/user_doctor/PROJECTEDIT';
const SELECTDAY = 'bohe/user_doctor/SELECTDAY';
const SELECTTIME = 'bohe/user_doctor/SELECTTIME';



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
                return state.merge({showbegin:action.showUsersBegin , loading: false, loaded: true, doctors: action.result })
              else
                return state.merge({loading: false, loaded: true, doctors: action.result })
        case LOAD_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_LABEL:
            return state.merge({ label_loading: true })
        case LOAD_LABEL_SUCCESS:
            console.log('RTRTREEEWWWWEEEEWWWWWaaaaaa')
            console.log(action.result)
            return state.merge({ label_loading: false, label_loaded: true, labels: action.result })
        case LOAD_LABEL_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ label_loading: false, label_loaded: false, error: action.error })

        case LOAD_ONDUTY_DOCTORS:
            return state.merge({ loading: true })
        case LOAD_ONDUTY_DOCTORS_SUCCESS:
            return state.merge({ loading: false, loaded: true, dutydoctors: action.result })
        case LOAD_ONDUTY_DOCTORS_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })

        case LOAD_ONDUTY_DETAIL:
            return state.updateIn(['dutydoctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.id){
                      return doctor.merge({loading: true})
                    }
                    return doctor
            }))
        case LOAD_ONDUTY_DETAIL_SUCCESS:
              return state.updateIn(['dutydoctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.result.id){
                        return doctor.merge({loading:false, loaded:true, ...action.result})
                    }
                        return doctor
              }))
        case LOAD_ONDUTY_DETAIL_FAIL:
            return state.updateIn(['dutydoctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.error.id){
                    return doctor.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return doctor
            }))
        case LOAD_DETAILS:
            return state.merge({ loading: true });
        case LOAD_DETAILS_SUCCESS:
            return state.updateIn(['doctors'], list => list.map(doctor => {
                    let _doctors_ = action.result;
                    _doctors_.map((_doctor_)=>{
                         if(doctor.get('id')==_doctor_.id)
                             doctor = doctor.merge(_doctor_);
                    })
                    return doctor;
              }))
        case LOAD_DETAILS_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.id){
                      return doctor.merge({loading: true})
                    }
                    return doctor
            }))
        case LOAD_DETAIL_SUCCESS:
            if( !action.extract ){
              if(state.getIn(['doctors']).findIndex(value => value.id == action.result.id)<0)
              return state.updateIn(['doctors'], list => list.push(Immutable.Map(({loading:false, loaded:true, ...action.result}))))
              else
              return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.result.id){
                        return doctor.merge({loading:false, loaded:true, ...action.result})
                    }
                        return doctor
              }))
           }
           else
              return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.result.id){
                        return doctor.merge({loading:false, loaded:true, ...action.result, detailedit:{ idx:action.idx, data:action.result }})
                    }
                        return doctor
              }))
        case LOAD_DETAIL_FAIL:
            return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.error.id){
                    return doctor.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return doctor
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
             var meta_info = state.getIn(['doctors',idx,'detailedit','data']);
             return state.setIn(['doctors',idx,'detailedit','data'],meta_info.merge(baseinfoedit));
        case DETAILINFO_LABEL_EDIT:
             var idx = state.getIn(['frontuserinfo','idx']);
             var pair = action.result;
             var meta_info = state.getIn(['doctors',idx,'detailedit','data','label']);
             console.log(pair);
             if(meta_info){
                var index;
                if((index = meta_info.findIndex(value => value.get('name') == pair.name))>=0){
                    meta_info = meta_info.remove(index);
                }else{
                    console.log(pair);
                    meta_info = meta_info.push(Immutable.Map(pair))
                }
             }else{
                let _pair = Immutable.Map(pair);
                meta_info = Immutable.List([]);
                meta_info = meta_info.push(_pair);
             }
             return state.setIn(['doctors',idx,'detailedit','data','label'],meta_info);
        case DOCTORFLUSH:
             var doctorId = state.getIn(['frontuserinfo','idx']);
             var doctoredit = state.getIn(['doctors',doctorId,'detailedit','data']);
             return state.setIn(['doctors',doctorId],state.getIn(['doctors',doctorId]).merge(doctoredit));
        case NEWDOCTORINFO_EDIT:
             var pairs = action.result;
             var baseinfoedit = {};
             pairs.forEach((pair) => {
                 baseinfoedit[pair.key] = pair.val;
             })
             var meta_info = Immutable.Map({});
             console.log('爱沙发沙发沙发');
             console.log(baseinfoedit);
             console.log(state.hasIn(['newdoctor']));
             if(state.hasIn(['newdoctor'])){
                  meta_info = state.getIn(['newdoctor']);
                  return state.setIn(['newdoctor'],meta_info.merge(baseinfoedit));
             }
             else{
                  return state.merge( { newdoctor: {} } ).setIn(['newdoctor'],meta_info.merge(baseinfoedit));
             }
        case NEWDOCTORADD:
             var newdoctor = state.getIn(['newdoctor']);
             return state.updateIn(['doctors'], list => list.push(newdoctor));
        case PROJECTADD:
             var pair = action.result;
             var projectadd = {};
             projectadd[pair.key] = pair.val;
             console.log(projectadd);
             if(state.hasIn(['newdoctor','service_name_arr'])){
                  return state.updateIn(['newdoctor','service_name_arr'],list => list.push(Immutable.Map(projectadd) ));
             }
             else{
                  return state.merge( { newdoctor: { 'service_name_arr':[] } } ).updateIn(['newdoctor','service_name_arr'],list => list.push(Immutable.Map(projectadd)));
             }
        case PROJECTEDIT:
             var idx = state.getIn(['frontuserinfo','idx']);
             var pair = action.result;
             var meta_info = state.getIn(['doctors',idx,'detailedit','data','projects']);
             console.log(pair);
             if(meta_info){
                var index;
                if((index = meta_info.findIndex(value => value.get('name') == pair.name))>=0){
                    meta_info = meta_info.remove(index);
                }else{
                    console.log(pair);
                    meta_info = meta_info.push(Immutable.Map(pair))
                    console.log(meta_info.toJS());
                }
             }else{
                let _pair = Immutable.Map(pair);
                meta_info = Immutable.List([]);
                meta_info = meta_info.push(_pair);
                console.log('TTTTTTTTYYYYYYYTTRRdddd!')
                console.log(meta_info)
             }
             return state.setIn(['doctors',idx,'detailedit','data','projects'],meta_info);
        case PROJECTDEL:
             var pair = action.result;
             var index = state.getIn(['newdoctor','service_name_arr']).findIndex( value => value.get(pair.key) == pair.val);
             return state.setIn(['newdoctor','service_name_arr'],state.getIn(['newdoctor','service_name_arr']).remove(index));
        case LABELADD:
             var pair = action.result;
             var label = {};
             label[pair.key] = pair.val;
             return state.updateIn(['labels'],list => list.push(Immutable.Map(label) ));
        case SELECTDAY:
             var idx = state.getIn(['frontuserinfo','idx']);
             var pair = action.result;
             if(state.getIn(['doctors',idx,'detailedit','data','time_arr',pair.key])){
                return state.setIn(['doctors',idx,'detailedit','data','curDate'],pair.key);
             }else{
                return state.setIn(['doctors',idx,'detailedit','data','time_arr',pair.key],Immutable.List([])).setIn(['doctors',idx,'detailedit','data','curDate'],pair.key);
             }
        case SELECTTIME:
             var idx = state.getIn(['frontuserinfo','idx']);
             var pair = action.result;
             var _pair = {};
             _pair[pair.key] = pair.val;
             console.log(_pair);
             return state.setIn(['doctors',idx,'detailedit','data','time_arr',pair.todate],state.getIn(['doctors',idx,'detailedit','data','time_arr',pair.todate]).push(Immutable.Map(_pair)));
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

export function LoadedorLoading_doctor(state,idx,id){
    var loaded = false
    var loading = false

    let doctor = state.getIn(['user_doctor','doctors',idx])

    if(doctor){
            loading = doctor.get('loading');
            loaded = doctor.get('loaded');
    }
    return loaded || loading
}


/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    num,
    begin,
    req,
    refresh,
    showUsersBegin
}) {
    var params = {};

    if ((typeof window === 'undefined') || (window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {

            params = { num: req.query.num, begin: req.query.begin }
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    } else {
        params = { num, begin }
    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_doctor/rest?', { params }, {
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
    visit_time,
    service_id,
    req,
    extract
}) {
    var params = {};
    visit_time?(params.visit_time = visit_time):undefined;
    service_id?(params.service_id = service_id):undefined;
    if(visit_time&&service_id)
            return {
                types: [ LOAD_ONDUTY_DOCTORS, LOAD_ONDUTY_DOCTORS_SUCCESS, LOAD_ONDUTY_DOCTORS_FAIL ],
                promise: (client) => client.GET('http://'+getApiIp()+'/user_doctor/details/rest?', { params }, {
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
        promise: (client) => client.GET('http://'+getApiIp()+'/user_doctor/detail/rest?', { params }, {
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
                    console.log(";;;;;;;;;;;;;;;;")
                    console.log(res.doctor)
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
        promise: (client) => client.GET('http://'+getApiIp()+'/user_doctor/detail/rest?', { params }, {
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

export function load_labels({
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
        types: [LOAD_LABEL, LOAD_LABEL_SUCCESS , LOAD_LABEL_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_doctor/label/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {
                    console.log('QWERQWER');
                    console.log(res.labels);
                    return Promise.resolve(res.labels)

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
export function doctorFlush(){

    return {
        type: DOCTORFLUSH
    }

}

export function newdoctorinfoedit(pairs){

    return {
        type: NEWDOCTORINFO_EDIT,
        result:pairs
    }

}

export function newdoctorAdd(){

    return {
        type: NEWDOCTORADD
    }

}

export function projectAdd(pairs){

    return {
        type: PROJECTADD,
        result: pairs
    }

}

export function projectDEL(pairs){

    return {
        type: PROJECTDEL,
        result: pairs
    }

}

export function labelAdd(pairs){

    return {
        type: LABELADD,
        result: pairs
    }

}

export function labelEdit(pair){

    return {
        type: DETAILINFO_LABEL_EDIT,
        result: pair
    }

}

export function projectEdit(pair){

    return {
        type: PROJECTEDIT,
        result: pair
    }

}

export function selectDay(pair){

    return {
        type: SELECTDAY,
        result: pair
    }

}

export function selectTime(pair){

    return {
        type: SELECTTIME,
        result: pair
    }

}



