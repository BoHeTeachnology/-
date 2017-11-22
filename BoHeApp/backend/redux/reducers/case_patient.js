import Immutable from 'immutable'
import Promise from 'bluebird'
import { error_table } from 'backend/redux/config/error_table.js'

import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/case_patient/LOAD';
const LOAD_SUCCESS = 'bohe/case_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/case_patient/LOAD_FAIL';

const LOAD_DETAIL = 'bohe/case_patient/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/case_patient/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/case_patient/LOAD_DETAIL_FAIL';

const CREATE_CASE = 'bohe/case_patient/CREATE_CASE';
const CREATE_CASE_SUCCESS = 'bohe/case_patient/CREATE_CASE_SUCCESS';
const CREATE_CASE_FAIL = 'bohe/case_patient/CREATE_CASE_FAIL';

const UPDATE_CASE = 'bohe/case_patient/UPDATE_CASE';
const UPDATE_CASE_SUCCESS = 'bohe/case_patient/UPDATE_CASE_SUCCESS';
const UPDATE_CASE_FAIL = 'bohe/case_patient/UPDATE_CASE_FAIL';

const LOAD_TIMESEQ = 'bohe/case_patient/LOAD_TIMESEQ';
const LOAD_TIMESEQ_SUCCESS = 'bohe/case_patient/LOAD_TIMESEQ_SUCCESS';
const LOAD_TIMESEQ_FAIL = 'bohe/case_patient/LOAD_TIMESEQ_FAIL';

const EDIT_META_DATA = 'bohe/case_patient/EDIT_META_DATA'
const EDIT_NORMAL_INFO = 'bohe/case_patient/EDIT_NORMAL_INFO'

const SET_CASE_TOSHOW = 'bohe/case_patient/SHOW'

const LOAD_SEARCH = 'bohe/case_patient/LOAD_SEARCH';
const LOAD_SEARCH_SUCCESS = 'bohe/case_patient/LOAD_SEARCH_SUCCESS';
const LOAD_SEARCH_FAIL = 'bohe/case_patient/LOAD_SEARCH_FAIL';

const LOAD_HISTORY = 'bohe/case_patient/LOAD_HISTORY';
const LOAD_HISTORY_SUCCESS = 'bohe/case_patient/LOAD_HISTORY_SUCCESS';
const LOAD_HISTORY_FAIL = 'bohe/case_patient/LOAD_HISTORY_FAIL';

const DELETETEMPLATE = 'bohe/case_patient/DELETETEMPLATE';

const LOAD_DOCTOR = 'bohe/case_patient/LOAD_DOCTOR';
const LOAD_DOCTOR_SUCCESS = 'bohe/case_patient/LOAD_DOCTOR_SUCCESS';
const LOAD_DOCTOR_FAIL = 'bohe/case_patient/LOAD_DOCTOR_FAIL';

const LOAD_CLINIC = 'bohe/case_patient/LOAD_CLINIC';
const LOAD_CLINIC_SUCCESS = 'bohe/case_patient/LOAD_CLINIC_SUCCESS';
const LOAD_CLINIC_FAIL = 'bohe/case_patient/LOAD_CLINIC_FAIL';


const STATE_ERROR = 'bohe/case_patient/STATE_ERROR';
const CAT_ERROR = 'bohe/case_patient/CAT_ERROR';

const DELETE_CASE = 'bohe/case_patient/DELETE_CASE';
const DELETE_CASE_SUCCESS = 'bohe/case_patient/DELETE_CASE_SUCCESS';
const DELETE_CASE_FAIL = 'bohe/case_patient/DELETE_CASE_FAIL';

const SEND = 'bohe/case_patient/SEND';
const SEND_SUCCESS = 'bohe/case_patient/SEND_SUCCESS';
const SEND_FAIL = 'bohe/case_patient/SEND_FAIL';


if((window)&&(window.location.search)&&(window.location.search.split('&').length==2)){
    console.log('ENTER_______');
    console.log(window.location.search.split('&')[0].split('=')[0]);
    console.log(window.location.search.split('&')[0].split('=')[1]);
    var user_id = (window.location.search.split('&')[0].split('=')[0]=='?k_userid')?(window.location.search.split('&')[0].split('=')[1]):'';
    var id = (window.location.search.split('&')[1].split('=')[0]=='k_id')?(window.location.search.split('&')[1].split('=')[1]):'';
}
console.log('USERID_________ID');
console.log(user_id);
console.log(id);
const initialState = (user_id&&id)?(Immutable.Map({
    loaded: false,
    loading: false,
}).merge({ucases:{ },frontcase:{ user_id,id } })):(Immutable.Map({
    loaded: false,
    loading: false,
}).merge({ucases:{ }}));

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
              return state.merge({ loading: false, loaded: true, cases: action.result.data , allpages: action.result.count })
        case LOAD_FAIL:
              return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            if(!state.hasIn(['ucases',action.user_id,'repo']))
                 state = state.setIn(['ucases',action.user_id,'repo'],Immutable.Map({}));
            if(!state.hasIn(['ucases',action.user_id,'repo',action.id]))
                 return state.setIn(['ucases',action.user_id,'repo',action.id],Immutable.Map({loading:true,loaded:false}));
            else
                 return state.setIn(['ucases',action.user_id,'repo',action.id,'loading'],true).setIn(['ucases',action.user_id,'repo',action.id,'loaded'],false)
        case LOAD_DETAIL_SUCCESS:{
              let edit = action.result;

              edit.meta_data = edit.content;

              edit.advice = edit.content.advice

              edit.history = edit.content.history;

              delete edit.content;
              return state.setIn(['ucases',action.user_id,'repo',action.id,'edit'],Immutable.Map({}).merge(edit)).setIn(['ucases',action.user_id,'repo',action.id,'case_bak'],Immutable.Map({}).merge(edit)).setIn(['ucases',action.user_id,'repo',action.id,'loading'],false).setIn(['ucases',action.user_id,'repo',action.id,'loaded'],true)
        }
        case LOAD_DETAIL_FAIL:
            return state.merge({ error: action.error });
        case CREATE_CASE:
             if(!state.hasIn(['ucases',action.user_id,'repo']))
                state = state.state = state.setIn(['ucases',action.user_id,'repo'],Immutable.Map({}));
             if(!state.hasIn(['ucases',action.user_id,'repo','new']))
                 return state.setIn(['ucases',action.user_id,'repo','new'],Immutable.Map({loading:true,loaded:false}));
             else
                 return state.setIn(['ucases',action.user_id,'repo','new','loading'],true).setIn(['ucases',action.user_id,'repo','new','loaded'],false);
        case CREATE_CASE_SUCCESS:
             var id = action.result;
             var repo_case = state.getIn(['ucases',action.user_id,'repo','new','edit']).mergeDeep({id,meta_data:{ history:action.history }});
             state = state.updateIn(['ucases',action.user_id,'timeseq'], list => list.push(Immutable.Map({visit_time:action.time,id}))).setIn(['ucases',action.user_id,'repo','new','case_bak'],
                                    repo_case).setIn(['ucases',action.user_id,'repo','new','edit'],
                                    repo_case).setIn(['ucases',action.user_id,'repo','new','loading'],
                                    false).setIn(['ucases',action.user_id,'repo','new','loaded'],
                                    true);
             return state.setIn(['ucases',action.user_id,'repo',id],state.getIn(['ucases',action.user_id,'repo','new'])).merge({
                                    error:{ post_success:action.post_success,msg:'创建成功' }})
        case CREATE_CASE_FAIL:
             return state.merge({ error: action.error }).setIn(['ucases',action.user_id,'repo','new','loading'],false).setIn([action.user_id,'repo','new','loaded'],false);
        case UPDATE_CASE:
             return state;
        case UPDATE_CASE_SUCCESS:
             var    repo_case = state.getIn(['ucases',action.user_id,'repo',action.id,'edit']).mergeDeep({ meta_data:{advice:action.advice} });

             return state.setIn(['ucases',action.user_id,'repo',action.id,'case_bak'],repo_case).setIn([action.user_id,'repo',action.id,'loading'],false).setIn([action.user_id,'repo',action.id,'loaded'],true).merge({
                                error:{ post_success:action.post_success,msg:'修改成功' }});
        case UPDATE_CASE_FAIL:
             return state.merge({ error: action.error });
        case LOAD_TIMESEQ:
             if(state.hasIn(['ucases',action.user_id])){
                return state;
             }
             else{
                return state.setIn(['ucases',action.user_id],Immutable.Map({'new':{loading:false,loaded:false }}))
             }
        case LOAD_TIMESEQ_SUCCESS:{
               let repo = Immutable.Map({}).mergeDeep({'new':{loading:false,loaded:false,case_bak:{patient_id:action.user_id},edit:{patient_id:action.user_id} }});
               let timeseq = Immutable.List([]).merge(action.result);
               return state.setIn(['ucases',action.user_id,'timeseq'],timeseq).setIn(['ucases',action.user_id,'repo'],repo);
             }
        case LOAD_TIMESEQ_FAIL:
             return  state;
        case SET_CASE_TOSHOW:
            return state.merge( { frontcase: action.result } )
        case DELETETEMPLATE:
            {
                let user_id = action.result.pos.user_id;
                let id = action.result.pos.id;
                return state.setIn(['ucases',user_id,'repo',id,'edit','meta_data'],state.getIn(['ucases',user_id,'repo',id,'edit','meta_data']).remove(action.result.template_id));
            }
        case EDIT_META_DATA:{
             let user_id = action.result.pos.user_id;
             let id = action.result.pos.id;
             let template_id = action.result.template_id;
             let content = action.result.content?action.result.content:'';
             if(state.hasIn(['ucases',user_id,'repo',id,'edit'])){
                if(!state.hasIn(['ucases',user_id,'repo',id,'edit','meta_data'])){
                     state = state.setIn(['ucases',user_id,'repo',id,'edit','meta_data'],Immutable.Map({}))
                }
                if(!state.hasIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id])){
                       var _template_id;
                       let meta_data = state.getIn(['ucases',user_id,'repo',id,'edit','meta_data']);
                       if(action.result.where == 'main'){
                           meta_data.mapKeys(key => {
                              if(state.hasIn(['ucases',user_id,'repo',id,'edit','meta_data',key,'main'])){
                                _template_id = key;
                              }
                           })
                           console.log('MAINMAIN_______)))))MAIN_______');
                           if(_template_id){
                              state = state.setIn(['ucases',user_id,'repo',id,'edit','meta_data'],state.getIn(['ucases',user_id,'repo',id,'edit','meta_data']).remove(_template_id));
                           }
                     }
                     return state.setIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id],Immutable.Map(content));

                }else{
                     if(action.result.append){

                       for(var key in content){
                          if(!state.hasIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id,key]))
                              state = state.setIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id,key],Immutable.List([]))

                          var index = state.getIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id,key]).findIndex(value => value == content[key])
                          if (index >= 0)
                              state = state.setIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id,key], state.getIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id,key]).remove(index));
                          else
                              state = state.updateIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id,key],list => list.push(content[key]));
                       }
                       return state;
                     }else{
                       let _new_ = state.getIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id]).merge(content);
                       return state.setIn(['ucases',user_id,'repo',id,'edit','meta_data',template_id],_new_);
                     }
                }
             }else{
                console.log('ERROR_____')
                error_table.case_patient.edit[user_id] = { ...error_table.case_patient.edit[user_id],id:{ name:id, msg : '此病例信息还没有成功同步'},name:user_id  };
                return state.merge({ error: { pos:['case_patient','edit',user_id,id] } })
             }
         }
        case EDIT_NORMAL_INFO:{
             let user_id = action.result.pos.user_id;
             let id = action.result.pos.id;
             let pairs = action.result.pairs;
             console.log('USERr_____')
             console.log(user_id);
             console.log(id)
             if(state.hasIn(['ucases',user_id,'repo',id,'edit'])){
                let info = {};
                pairs.forEach((pair) => {
                  info[pair.key] = pair.val;
                })
                console.log("INFOINFO")
                console.log(info);
                var meta_info = state.getIn(['ucases',user_id,'repo',id,'edit'])
                return state.setIn(['ucases',user_id,'repo',id,'edit'],meta_info.merge(info));
             }else{
                error_table.case_patient.edit[user_id] = { ...error_table.case_patient.edit[user_id],id:{ name:id, msg : '此病例信息还没有成功同步'},name:user_id  };
                return state.merge({ error: { pos:['case_patient','edit',user_id,id] } })
             }
        }
        case LOAD_SEARCH:
            return state.merge({temp_users:[]})
        case LOAD_SEARCH_SUCCESS:
            return state.merge({ temp_users:action.result});
        case LOAD_SEARCH_FAIL:
             return state.merge({ error: action.error });
        case LOAD_HISTORY:
            return state
        case LOAD_HISTORY_SUCCESS:
            return state.merge({ history:action.result });
        case LOAD_HISTORY_FAIL:
             return state.merge({ error: action.error });
        case LOAD_DOCTOR:
             return state
        case LOAD_DOCTOR_SUCCESS:
             return state.merge({ doctors:action.result });
        case LOAD_DOCTOR_FAIL:
             return state.merge({ error: action.error });
        case LOAD_CLINIC:
             return state
        case LOAD_CLINIC_SUCCESS:
             return state.merge({ clinics:action.result });
        case LOAD_CLINIC_FAIL:
             return state.merge({ error: action.error });
        case STATE_ERROR:
             return state.merge({ error: action.result });
        case CAT_ERROR:
             return state.merge({ error: action.result });
        case DELETE_CASE:
             return state
        case DELETE_CASE_SUCCESS:
             return state
        case DELETE_CASE_FAIL:
             return state
        case SEND:
             return state;
        case SEND_SUCCESS:
             let user_id = action.pos.user_id;
             let id = action.pos.id;
             if(state.hasIn(['ucases',user_id,'repo',id,'edit'])){
                return state.setIn(['ucases',user_id,'repo',id,'edit','is_send'],'1').setIn(['ucases',user_id,'repo',id,'case_bak','is_send'],'1');
             }else{
                error_table.case_patient.edit[user_id] = { ...error_table.case_patient.edit[user_id],id:{ name:id, msg : '此病例信息还没有成功同步'},name:user_id  };
                return state.merge({ error: { pos:['case_patient','edit',user_id,id] } })
             }
        case SEND_FAIL:
            return state.merge({ error: action.result });
        default:
            return state


    }
}

export function frontCase({ user_id,id }){
     return {
        type: SET_CASE_TOSHOW,
        result:{ user_id,id }
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

export function LoadedorLoadingOfUser(state,user_id,id){
    var loaded = false
    var loading = false
    if(state.hasIn(['case_patient', user_id, 'repo', id, 'edit'])){
        loaded = state.getIn(['case_patient', user_id, 'repo', id, 'loaded']);
        loading = state.getIn(['case_patient', user_id, 'repo', id, 'loading']);
    }
    return loaded && loading


}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ user,
  p_len,
  p,
  patient_name,
  doctor_name,
  doctor_id,
  clinic_id,
  clinic_name,
  case_number,
  visit_time,
  account,
  showUsersBegin,
  casecat_id
}) {
    var params = {}
    p_len?(params.p_len = p_len):'';
    p?(params.p = p):'';
    patient_name?(params.patient_name = patient_name):'';
    doctor_name?(params.doctor_name = doctor_name):'';
    doctor_id?(params.doctor_id = doctor_id):'';
    clinic_id?(params.clinic_id = clinic_id):'';
    clinic_name?(params.clinic_name = clinic_name):'';
    case_number?(params.case_number = case_number):'';
    visit_time?(params.visit_time = visit_time):'';
    account?(params.account = account):'';
    casecat_id?(params.casecat_id = casecat_id):'';

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/index?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {

                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.case_patient.load.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_patient','load' ] })
                }
            },
            error: function(err) {
                error_table.case_patient.load.msg = 'wire';
                return Promise.reject({ pos: ['case_patient','load' ] })
            }
        }),
        showUsersBegin
    };

}

export function load_detail({ id, user_id }) {
    var params = {}
    params.case_id = id
    return {
        types: [LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/getOne?', { params }, {
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
                    return Promise.reject(res.err)
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        }),
        id,
        user_id
    };

}
export function create_case({ case_edit,post_success,history }){

    var data = case_edit;

    var content = case_edit.meta_data;
    content.advice = case_edit.advice;
    content.history = history;
    data.content = content;

    delete data.meta_data;
    delete data.advice;

    var user_id = case_edit.patient_id;
    var time = case_edit.visit_time;

    console.log("create>>>>>")
    console.log(case_edit);
    console.log(case_edit.patient_id);

    return {
        types: [CREATE_CASE, CREATE_CASE_SUCCESS, CREATE_CASE_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/add?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {

                    return Promise.resolve(res.case_id)

                } else {
                    error_table.case_patient.create.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_patient','create' ] })
                }
            },
            error: function(err) {
                error_table.case_patient.create.msg = 'wire'
                return Promise.reject({ pos: ['case_patient','create' ] })
            }
        }),
        user_id,
        time,
        history,
        post_success
    };
}

export function update_case({ case_edit,post_success }){

    var data = case_edit;

    var content = case_edit.meta_data;
    content.advice = case_edit.advice;
    var advice = content.advice;
    data.content = content;

    var user_id = case_edit.patient_id;
    var id = case_edit.id;
    delete data.meta_data;
    delete data.advice

        return {
            types: [UPDATE_CASE, UPDATE_CASE_SUCCESS, UPDATE_CASE_FAIL],
            promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/edit?', { data }, {
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
                        error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'notvalid'},name:user_id  };
                        return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'wire'},name:user_id  };
                    return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                }
            }),
            id,
            user_id,
            advice,
            post_success
        };

}

export function load_caselist_of_user({  user_id  }){

        var params = { user_id:user_id };
        return {
            types: [LOAD_TIMESEQ, LOAD_TIMESEQ_SUCCESS, LOAD_TIMESEQ_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/timeLst?', { params }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                },
                done: function(res) {

                    //code=000000000
                    if (res.code == 1||res.code == 0 ) {

                        return Promise.resolve(res.data)

                    } else {
                        error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'notvalid'},name:user_id  };
                        return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'wire'},name:user_id  };
                    return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                }
            }),
            user_id
        };

}

export function edit_normal_info({ pairs, pos }){

    return {
        type:     EDIT_NORMAL_INFO,
        result:   { pairs, pos }
    }
}

export function edit_meta_data({ append,template_id, content, pos,where }){

    return {
         type:   EDIT_META_DATA,
         result: { append,template_id, content, pos, where }
    }
}


export function searchUser({  account  }){

        var params = { identity_id:1, account };
        return {
            types: [LOAD_SEARCH, LOAD_SEARCH_SUCCESS, LOAD_SEARCH_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Index/userLst?', { params }, {
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
                        error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'notvalid'},name:user_id  };
                        return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'wire'},name:user_id  };
                    return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                }
            })
        };

}


export function loadhistory({  user_id  }){

        var params = { user_id };
        return {
            types: [LOAD_HISTORY, LOAD_HISTORY_SUCCESS, LOAD_HISTORY_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/queryHistory?', { params }, {
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
                        //error_table.case_patient.loadhistory[user_id] = { ...error_table.case_patient.loadhistory[user_id], msg : 'notvalid',name:user_id  };
                        return Promise.reject({ pos: ['case_patient','loadhistory'] })
                    }
                },
                error: function(err) {
                        //error_table.case_patient.loadhistory[user_id] = { ...error_table.case_patient.loadhistory[user_id], msg : 'notvalid',name:user_id  };
                        return Promise.reject({ pos: ['case_patient','loadhistory'] })
                }
            })
        };

}

export function deleteTemplate({ template_id,pos }){

    return {
         type:   DELETETEMPLATE,
         result: { template_id,pos }
    }
}


export function loaddoctor(){

        var params = { identity_id: 2 };
        return {
            types: [LOAD_DOCTOR, LOAD_DOCTOR_SUCCESS, LOAD_DOCTOR_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Index/userLst?', { params }, {
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
                        error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'notvalid'},name:user_id  };
                        return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'wire'},name:user_id  };
                    return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                }
            })
        };

}

export function loadclinic(){

        var params = {};
        return {
            types: [LOAD_CLINIC, LOAD_CLINIC_SUCCESS, LOAD_CLINIC_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Index/clinicLst?', { params }, {
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
                        error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'notvalid'},name:user_id  };
                        return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.update[user_id] = { ...error_table.case_patient.update[user_id],id:{ name:id, msg : 'wire'},name:user_id  };
                    return Promise.reject({ pos: ['case_patient','update',user_id,id] })
                }
            })
        };

}


export function state_error(){
    return {
        type:STATE_ERROR,
        result:{ pos: ['case_patient','state_error'] }
    }
}

export function cat_error(){
    return {
        type:CAT_ERROR,
        result:{ pos: ['case_patient','cat_error'] }
    }
}


export function delete_case({ case_id }){

    var params = {
        case_id
    };

        return {
            types: [DELETE_CASE, DELETE_CASE_SUCCESS, DELETE_CASE_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/delete?', { params }, {
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
                        error_table.case_patient.delete = { ...error_table.case_patient.delete,msg:'删除' };
                        return Promise.reject({ pos: ['case_patient','update'] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.delete = { ...error_table.case_patient.delete,msg:'删除' };
                        return Promise.reject({ pos: ['case_patient','update'] })
                }
            })
        };

}

export function send({ case_id,pos }){

        var params = {
           case_ids:case_id
        };

        return {
            types: [SEND, SEND_SUCCESS, SEND_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Case/sendWeixinMsg?', { params }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                },
                done: function(res) {

                    console.log(res);
                    if (res.code == 1) {

                        return Promise.resolve()

                    } else {
                        error_table.case_patient.delete = { ...error_table.case_patient.delete,msg:'删除' };
                        return Promise.reject({ pos: ['case_patient','update'] })
                    }
                },
                error: function(err) {
                    error_table.case_patient.delete = { ...error_table.case_patient.delete,msg:'删除' };
                        return Promise.reject({ pos: ['case_patient','update'] })
                }
            }),
            pos
        };

}




