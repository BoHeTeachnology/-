import Immutable from 'immutable'
import Promise from 'bluebird'
import  { getApiIp8007 }  from 'app/util/utils.js'

const LOAD = 'bohe/doctorlist/LOAD';
const LOAD_SUCCESS = 'bohe/doctorlist/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/doctorlist/LOAD_FAIL';

const LOAD_DETAIL = 'bohe/doctorlist/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/doctorlist/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/doctorlist/LOAD_DETAIL_FAIL';

const GET_FOLLOW_NUM = 'bohe/doctorlist/GET_FOLLOW_NUM';
const GET_FOLLOW_NUM_SUCCESS = 'bohe/doctorlist/GET_FOLLOW_NUM_SUCCESS';
const GET_FOLLOW_NUM_FAIL = 'bohe/doctorlist/GET_FOLLOW_NUM_FAIL';

const DOCTOR_PASSCASE = 'bohe/doctorlist/DOCTOR_PASSCASE';
const DOCTOR_PASSCASE_SUCCESS = 'bohe/doctorlist/DOCTOR_PASSCASE_SUCCESS';
const DOCTOR_PASSCASE_FAIL = 'bohe/doctorlist/DOCTOR_PASSCASE_FAIL';

const GETMESSAGE = 'bohe/doctorlist/GETMESSAGE';
const GETMESSAGE_SUCCESS = 'bohe/doctorlist/GETMESSAGE_SUCCESS';
const GETMESSAGE_FAIL = 'bohe/doctorlist/GETMESSAGE_FAIL';

const SET_BILL_TOSHOW = 'bohe/doctorlist/SHOW';
const CLEARLIST = 'bohe/doctorlist/CLEARLIST';

const DOCTORCARDINFO = 'bohe/doctorlist/DOCTORCARDINFO';
const DOCTORCARDINFO_SUCCESS = 'bohe/doctorlist/DOCTORCARDINFO_SUCCESS';
const DOCTORCARDINFO_FAIL = 'bohe/doctorlist/DOCTORCARDINFO_FAIL';

const FOLLOWDOCTOR = 'bohe/doctorlist/FOLLOWDOCTOR'
const FOLLOWDOCTOR_SUCCESS = 'bohe/doctorlist/FOLLOWDOCTOR_SUCCESS'
const FOLLOWDOCTOR_FAIL = 'bohe/doctorlist/FOLLOWDOCTOR_FAIL'

const DELFOLLOW = 'bohe/doctorlist/DELFOLLOW'
const DELFOLLOW_SUCCESS = 'bohe/doctorlist/DELFOLLOW_SUCCESS'
const DELFOLLOW_FAIL = 'bohe/doctorlist/DELFOLLOW_FAIL'

const ATTENTION_DOCTORLIST = 'bohe/doctorlist/ATTENTION_DOCTORLIST'
const ATTENTION_DOCTORLIST_SUCCESS = 'bohe/doctorlist/ATTENTION_DOCTORLIST_SUCCESS'
const ATTENTION_DOCTORLIST_FAIL = 'bohe/doctorlist/ATTENTION_DOCTORLIST_FAIL'

const IF_ATTENTION = 'bohe/doctorlist/IF_ATTENTION'
const IF_ATTENTION_SUCCESS = 'bohe/doctorlist/IF_ATTENTION_SUCCESS'
const IF_ATTENTION_FAIL = 'bohe/doctorlist/IF_ATTENTION_FAIL'

const initialState = Immutable.Map({
    loaded: false,
    loading: false
})
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            var allres;

            if(Immutable.List.isList(state.get('doctors'))){
                allres = state.get('doctors').pop().toJS().concat(action.result)
            }
            if(action.result.length == 0){
                return state.merge({ loading:true, doctors: allres })
            }

            console.log(allres)
            if(allres){
                allres.push({flag:true})
                return state.merge({ loading: false, loaded: true, doctors: allres })
            }else{
              if(action.result.length < action.num){
                  return state.merge({ loading:true, doctors: action.result })
              }
              action.result.push({flag:true})
              return state.merge({ loading: false, loaded: true ,doctors: action.result });
            }
        case LOAD_FAIL:
            console.log('ERROR-------.....')
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            return state;
        case LOAD_DETAIL_SUCCESS:
            if(action.firstpage){
                console.log('zhang111');
                return state.merge({...action.result })
            }
            if(state.hasIn(['doctors'])){
                return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.result.id){
                    return doctor.merge({loading:false,loaded:true, ...action.result})
                    }
                    return doctor
                }))
            }
        case LOAD_DETAIL_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case SET_BILL_TOSHOW:
            return state.merge({ frontbill: action.result } )
        case GET_FOLLOW_NUM:
            return state;
        case GET_FOLLOW_NUM_SUCCESS:
            if(action.firstpage){
              return state.merge({follownum:action.result.num })
            }
            if(state.hasIn(['doctors'])){
              return state.updateIn(['doctors'], list => list.map(doctor => {
                  if(doctor.get('id') == action.id){
                    return doctor.merge({follownum:action.result.num});
                  }
                  return doctor
              }))
            }
        case GET_FOLLOW_NUM_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case DOCTOR_PASSCASE:
            return state;
        case DOCTOR_PASSCASE_SUCCESS:
            if(action.firstpage){
              return state.merge({passcases:action.result })
            }
            if(state.hasIn(['doctors'])){
              return state.updateIn(['doctors'], list => list.map(doctor => {
                  if(doctor.get('id') == action.id){
                    return doctor.merge({passcases:action.result});
                  }
                  return doctor
              }))
            }else{
              return state.merge({ passcases:action.result })
            }
        case DOCTOR_PASSCASE_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case GETMESSAGE:
            return state;
        case GETMESSAGE_SUCCESS:
            if(action.firstpage){
              if(action.first){
                console.log('dehui')
                console.log(action.num)
                console.log(action.result.length)
                if(action.result.length < action.num){
                  return state.merge({messagelist:action.result})
                }else{
                  action.result.push({flag:true})
                  return state.merge({messagelist:action.result})
                }
              }
              if(action.result.length == 0){
                  if(state.has('messagelist')){
                    let _state = state.get('messagelist').pop().toJS()
                    return state.merge({ loading:true, messagelist: _state })
                  }else{
                    return state.merge({messagelist:action.result})
                  }
              }
              if(state.hasIn(['messagelist'])){
                let _state = state.get('messagelist').pop().toJS().concat(action.result)
                _state.push({flag:true})
                return state.merge({loading:false,messagelist:_state})
              }else{
                action.result.push({flag:true})
                return state.merge({loading:false,messagelist:action.result});
              }
              // return state.merge({messagelist:action.result })
            }

            if(state.hasIn(['doctors'])){
              return state.updateIn(['doctors'], list => list.map(doctor => {
                  if(doctor.get('id') == action.id){
                    if(action.result.length == 0){
                        if(doctor.has('messagelist')){
                          let _doctor = doctor.get('messagelist').pop().toJS().concat(action.result)
                          return doctor.merge({ loading:true, messagelist: _doctor })
                        }else{
                          return doctor.merge({ loading:true, messagelist:action.result})
                        }
                    }
                    if(doctor.hasIn(['messagelist'])){
                      let _doctor = doctor.get('messagelist').pop().toJS().concat(action.result)
                      _doctor.push({flag:true})
                      return doctor.merge({loading:false,messagelist:_doctor})
                    }else{
                      action.result.push({flag:true})
                      return doctor.merge({loading:false,messagelist:action.result});
                    }
                  }
                  return doctor
              }))
            }else{
              if(action.result.length == 0){
                  if(state.has('messagelist')){
                    let _state = state.get('messagelist').pop().toJS()
                    return state.merge({ loading:true, messagelist: _state })
                  }else{
                    return state.merge({messagelist:action.result})
                  }
              }
              if(state.hasIn(['messagelist'])){
                let _state = state.get('messagelist').pop().toJS().concat(action.result)
                _state.push({flag:true})
                return state.merge({loading:false,messagelist:_state})
              }else{
                action.result.push({flag:true})
                return state.merge({loading:false,messagelist:action.result});
              }
            }

        case GETMESSAGE_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case CLEARLIST:
            return state.setIn(['doctors'],Immutable.List([]));
        case DOCTORCARDINFO:
            return state;
        case DOCTORCARDINFO_SUCCESS:
            return state.merge({doctorcardinfo:action.result})
        case DOCTORCARDINFO_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case FOLLOWDOCTOR:
            return state;
        case FOLLOWDOCTOR_SUCCESS:{
            // var _attention = state.get('attention_doctorlist').toJS();
            var _num;
            // _attention.push({id:action.doctorid});
            console.log('fffffuck11111')
            console.log(action.doctorid);
            console.log(state.get('id'));
            if(state.get('id') == action.doctorid){
                console.log('ffffffuck22222');
                _num = state.get('follow_num')+1
                console.log(_num);
               return state.merge({follow_num:_num})
            }
            return state.updateIn(['doctors'], list => list.map(doctor => {
                if(doctor.get('id') == action.doctorid){
                   _num = doctor.get('follow_num')+1
                  return doctor.merge({follow_num:_num});
                }
                return doctor
            }))
          }
        case FOLLOWDOCTOR_FAIL:
            return state.merge({error: action.error})
        case DELFOLLOW:
          return state;
        case DELFOLLOW_SUCCESS:{
            // var _attention = state.get('attention_doctorlist').toJS();
            let idx;
            var _num;
            // _attention.map((item,index)=>{
            //   if(item.id == action.doctorid){
            //     idx = index;
            //   }
            // })
            console.log('1111111');
            console.log(idx)
            // _attention.splice(idx,1);
            // console.log(_attention)
            if(state.get('id') == action.doctorid){
                _num = state.get('follow_num')-1;
               return state.merge({follow_num:_num})
            }
            return state.updateIn(['doctors'], list => list.map(doctor => {
                if(doctor.get('id') == action.doctorid){
                   _num = doctor.get('follow_num')-1
                  return doctor.merge({follow_num:_num});
                }
                return doctor
            }))
          }
        case DELFOLLOW_FAIL:
          return state.merge({error: action.error})
        case ATTENTION_DOCTORLIST:
          return state;
        case ATTENTION_DOCTORLIST_SUCCESS:{
          console.log(987654321);
          console.log(action.result);
          return state.merge({attention_doctorlist: action.result})
        }
        case ATTENTION_DOCTORLIST_FAIL:
          return state.merge({error: action.error})
        case IF_ATTENTION:
          return state;
        case IF_ATTENTION_SUCCESS:
          return state.merge({if_attention:action.result})
        case IF_ATTENTION_FAIL:
          return state.merge({error: action.error})
        default:
            return state
    }
}

export function frontBill({ idx,id }){
     return {
        type: SET_BILL_TOSHOW,
        result:{ idx,id }
     }

}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['bill_patient','loaded'])){
        loaded = state.getIn(['doctorlist','loaded'])
        console.log('###33333-----')
        console.log(state.toJS())
    }
    if(state.hasIn(['bill_patient','loading'])){
        loading = state.getIn(['doctorlist','loading'])
        console.log('###44444-----')
        console.log(state.toJS())

    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ num,page,cat,name,have,week,famous }) {
    var params = {
        num,
        page
    }
    if(have == 1){
      params['have'] = have;
    }
    if (cat) {
      params['cat'] = cat;
    }
    if (name){
      params['name'] = name;
    }
    if (week) {
      params['week'] = week;
    }
    if (famous) {
      params['famous'] = famous;
    }
    console.log('LOAD______-----...')
    console.log(params);
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/doctor/doctorlist?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log('LISTLIST------');
                console.log(res);

                // if (res.code == 1) {

                    return Promise.resolve(res.data)

                // } else {
                    //var err = { info: 'auth' }
                    // return Promise.reject(res.err)
                // }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        }),
        num
    };

}



export function load_detail({ id,firstpage }) {
    var params = {
      id
    }
    return {
        types: [LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/doctor/doctorone?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);
                // if (res.code == 1) {

                    return Promise.resolve(res.data)

                // } else {
                    //var err = { info: 'auth' }
                    // return Promise.reject(res.msg)
                // }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        }),
        id,
        firstpage
    };

}


export function get_follow_num({ id,firstpage }) {
    var params = {
      doc_id:id
    }
    return {
        types: [GET_FOLLOW_NUM, GET_FOLLOW_NUM_SUCCESS, GET_FOLLOW_NUM_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/doctor/follownum?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);
                // if (res.code == 1) {

                    return Promise.resolve(res)

                // } else {
                    //var err = { info: 'auth' }
                    // return Promise.reject(res.msg)
                // }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        }),
        id,
        firstpage
    };

}

export function get_passcase({id,firstpage}) {

  var params = {
    id
  }
  console.log('assss')
  console.log(params)
  return {
    types: [
      DOCTOR_PASSCASE, DOCTOR_PASSCASE_SUCCESS, DOCTOR_PASSCASE_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/passcase?', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {
        console.log('passcase--------');
        console.log(res);
        if (res.state == 'yes') {

          return Promise.resolve(res.data)

        } else {

          return Promise.reject(res.msg)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    }),
    id,
    firstpage
  };

}


export function get_message({id,num,page,first,firstpage}) {

  var params = {
    doc_id:id,
    num,
    page
  }
  var first = first?true:false;
  console.log('assss')
  console.log(params)
  return {
    types: [
      GETMESSAGE, GETMESSAGE_SUCCESS, GETMESSAGE_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/messagelist?', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {
        console.log('passcase--------');
        console.log(res);
        if (res.state == 'yes') {

          return Promise.resolve(res.data)

        } else {

          return Promise.reject(res.msg)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    }),
    id,
    num,
    first,
    firstpage
  };
}

export function clearlist() {
  return {
    type:CLEARLIST
  }
}



export function doctorcardinfo({id}) {

  console.log('lalalal');
  var params = {
    id
  }
  return {
    types: [
      DOCTORCARDINFO, DOCTORCARDINFO_SUCCESS, DOCTORCARDINFO_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/doctorone?', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {
        console.log('passcase--------');
        console.log(res);
        // if (res.state == 'yes') {

          return Promise.resolve(res.data)

        // } else {

          // return Promise.reject(res.msg)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };
}


export function followdoctor({doctorid}) {

  var data = {
    doc_id:doctorid
  }
  var auth_type = 'token'
  return {
    types: [
    FOLLOWDOCTOR, FOLLOWDOCTOR_SUCCESS, FOLLOWDOCTOR_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/doctor/addfollow', {
      data,
      auth_type
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {

        // if (res.code == 1) {
        console.log('fuckkkkk1123131')
        return Promise.resolve(res)

        // } else {
        //var err = { info: 'auth' }
        // return Promise.reject(res.err)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    }),
    doctorid
  };


}

export function delfollow({doctorid}) {

  var data = {
    doc_id:doctorid
  }
  var auth_type = 'token'
  return {
    types: [
      DELFOLLOW, DELFOLLOW_SUCCESS, DELFOLLOW_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/doctor/delfollow?', {
      data,
      auth_type
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {


        console.log(res);
        if (res.state == 'yes') {

          return Promise.resolve(res)

        } else {
        //var err = { info: 'auth' }
          return Promise.reject(res.msg)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    }),
    doctorid
  };

}


export function get_attention_doctorlist() {

  var params = {}
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      ATTENTION_DOCTORLIST, ATTENTION_DOCTORLIST_SUCCESS, ATTENTION_DOCTORLIST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/doctorfollow', {
      params,
      auth_type
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {

        // if (res.code == 1) {
        console.log('attention--------');
        console.log(res);
        return Promise.resolve(res.data)

        // } else {
        //var err = { info: 'auth' }
        // return Promise.reject(res.err)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}



export function if_attention({id}) {

  var params = {
    doc_id:id
  }
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      IF_ATTENTION, IF_ATTENTION_SUCCESS, IF_ATTENTION_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/iffollow?', {
      params,
      auth_type
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {

        // if (res.state == 1) {
        console.log('attention--------');
        console.log(res);
        return Promise.resolve(res.state)
        //
        // } else {
        // //var err = { info: 'auth' }
        // return Promise.resolve()
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}
