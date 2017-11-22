import Immutable from 'immutable'
import Promise from 'bluebird'
import { getApiIp8007} from 'app/util/utils.js'

const HOME_DOCTORLIST = 'bohe/wechathome/HOME_DOCTORLIST'
const HOME_DOCTORLIST_SUCCESS = 'bohe/wechathome/HOME_DOCTORLIST_SUCCESS'
const HOME_DOCTORLIST_FAIL = 'bohe/wechathome/HOME_DOCTORLIST_FAIL'


const SERVICECATEGROY = 'bohe/wechathome/SERVICECATEGROY'
const SERVICECATEGROY_SUCCESS = 'bohe/wechathome/SERVICECATEGROY_SUCCESS'
const SERVICECATEGROY_FAIL = 'bohe/wechathome/SERVICECATEGROY_FAIL'

const DOCTORINFO = 'bohe/wechathome/DOCTORINFO'
const DOCTORINFO_SUCCESS = 'bohe/wechathome/DOCTORINFO_SUCCESS'
const DOCTORINFO_FAIL = 'bohe/wechathome/DOCTORINFO_FAIL'

const DOCTOR_PASSCASE = 'bohe/wechathome/DOCTOR_PASSCASE'
const DOCTOR_PASSCASE_SUCCESS = 'bohe/wechathome/DOCTOR_PASSCASE_SUCCESS'
const DOCTOR_PASSCASE_FAIL = 'bohe/wechathome/DOCTOR_PASSCASE_FAIL'

const DOCTOR_MESSAGELIST = 'bohe/wechathome/DOCTOR_MESSAGELIST'
const DOCTOR_MESSAGELIST_SUCCESS = 'bohe/wechathome/DOCTOR_MESSAGELIST_SUCCESS'
const DOCTOR_MESSAGELIST_FAIL = 'bohe/wechathome/DOCTOR_MESSAGELIST_FAIL'


const ORDER_INFO = 'bohe/wechathome/ORDER_INFO'
const ORDER_INFO_SUCCESS = 'bohe/wechathome/ORDER_INFO_SUCCESS'
const ORDER_INFO_FAIL = 'bohe/wechathome/ORDER_INFO_FAIL'

const CURRENTORDERINFO = 'bohe/wechathome/CURRENTORDERINFO'


const ADDORDER = 'bohe/wechathome/ADDORDER'
const ADDORDER_SUCCESS = 'bohe/wechathome/ADDORDER_SUCCESS'
const ADDORDER_FAIL = 'bohe/wechathome/ADDORDER_FAIL'

const MESSAGEGOOD = 'bohe/wechathome/MESSAGEGOOD'
const MESSAGEGOOD_SUCCESS = 'bohe/wechathome/MESSAGEGOOD_SUCCESS'
const MESSAGEGOOD_FAIL = 'bohe/wechathome/MESSAGEGOOD_FAIL'

const GET_BANNER = 'bohe/wechathome/GET_BANNER'
const GET_BANNER_SUCCESS = 'bohe/wechathome/GET_BANNER_SUCCESS'
const GET_BANNER_FAIL = 'bohe/wechathome/GET_BANNER_FAIL'


const FAMOUSDOCTOR = 'bohe/wechathome/FAMOUSDOCTOR'
const FAMOUSDOCTOR_SUCCESS = 'bohe/wechathome/FAMOUSDOCTOR_SUCCESS'
const FAMOUSDOCTOR_FAIL = 'bohe/wechathome/FAMOUSDOCTOR_FAIL'

const LOADNOTE = 'bohe/wechathome/LOADNOTE'
const LOADNOTE_SUCCESS = 'bohe/wechathome/LOADNOTE_SUCCESS'
const LOADNOTE_FAIL = 'bohe/wechathome/LOADNOTE_FAIL'

const SHAREADD = 'bohe/wechathome/SHAREADD'
const SHAREADD_SUCCESS = 'bohe/wechathome/SHAREADD_SUCCESS'
const SHAREADD_FAIL = 'bohe/wechathome/SHAREADD_FAIL'


const initialState = Immutable.Map({})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HOME_DOCTORLIST:
      return state;
    case HOME_DOCTORLIST_SUCCESS:
      return state.merge({home_doctorlist: action.result})
    case HOME_DOCTORLIST_FAIL:
      return state.merge({error: action.error})
      case SERVICECATEGROY:
        return state;
      case SERVICECATEGROY_SUCCESS:
        return state.merge({servicecategroy: action.result})
      case SERVICECATEGROY_FAIL:
        return state.merge({error: action.error})
      case DOCTORINFO:
          return state;
      case DOCTORINFO_SUCCESS:
          return state.merge({doctorinfo:action.result})
      case DOCTORINFO_FAIL:
          return state.merge({error: action.error})
      // case DOCTOR_PASSCASE:
      //       return state;
      // case DOCTOR_PASSCASE_SUCCESS:
      //     console.log(action.result)
      //       return state.merge({passcaselist:action.result})
      // case DOCTOR_PASSCASE_FAIL:
      //       return state.merge({error: action.error})
      case DOCTOR_MESSAGELIST:
              return state;
      case DOCTOR_MESSAGELIST_SUCCESS:
            console.log(action.result)
            console.log('hjhjjhj')
              return state.merge({messagelist:action.result})
      case DOCTOR_MESSAGELIST_FAIL:
              return state.merge({error: action.error})
    case SERVICECATEGROY:
      return state;
    case SERVICECATEGROY_SUCCESS:
      return state.merge({servicecategroy: action.result})
    case SERVICECATEGROY_FAIL:
      return state.merge({error: action.error})
    case DOCTORINFO:
      return state;
    case DOCTORINFO_SUCCESS:
      return state.merge({doctorinfo: action.result})
    case DOCTORINFO_FAIL:
      return state.merge({error: action.error})
    // case DOCTOR_PASSCASE:
    //   return state;
    // case DOCTOR_PASSCASE_SUCCESS:
    //   console.log(action.result)
    //   return state.merge({passcaselist: action.result})
    // case DOCTOR_PASSCASE_FAIL:
    //   return state.merge({error: action.error})
    case DOCTOR_MESSAGELIST:
      return state;
    case DOCTOR_MESSAGELIST_SUCCESS:
      console.log(action.result)
      console.log('hjhjjhj')
      return state.merge({messagelist: action.result})
    case DOCTOR_MESSAGELIST_FAIL:
      return state.merge({error: action.error})
    case ORDER_INFO:
      return state;
    case ORDER_INFO_SUCCESS:
      console.log(action.result)
      console.log('hjhjjhj')
      return state.merge({orderinfo: action.result})
    case ORDER_INFO_FAIL:
      return state.merge({error: action.error})
    case CURRENTORDERINFO:
      console.log(action.currentorderinfo)
      console.log('CURRENTORDERINFO')
      return state.merge({currentorderinfo: action.currentorderinfo})
    case ADDORDER:
      return state;
    case ADDORDER_SUCCESS:
      console.log(action.result)
      console.log('hjhjjhj')
      return state.merge({addorderres: action.result})
    case ADDORDER_FAIL:
      return state.merge({error: action.error})
    case MESSAGEGOOD:
      return state;
    case MESSAGEGOOD_SUCCESS:
      return state;
    case MESSAGEGOOD_FAIL:
      return state.merge({error: action.error})
    case GET_BANNER:
      return state;
    case GET_BANNER_SUCCESS:
      return state.merge({banner:action.result})
    case GET_BANNER_FAIL:
      return state.merge({error: action.error})
    case FAMOUSDOCTOR:
      return state;
    case FAMOUSDOCTOR_SUCCESS:
      return state.merge({famous_doctor:action.result})
    case FAMOUSDOCTOR_FAIL:
      return state.merge({error: action.error})
    case LOADNOTE:
      return state;
    case LOADNOTE_SUCCESS:
          console.log('dehui')
          console.log(action.num)
          console.log(action.result.length)
          if(action.first){
            return state.merge({notelist:action.result})
          }
        if(action.result.length == 0){
            if(state.has('notelist')){
              let _state = state.get('notelist').toJS()
              return state.merge({ noteloading:true, notelist: _state })
            }else{
              return state.merge({notelist:action.result})
            }
        }
        if(action.result.length < action.num){
          if(state.hasIn(['notelist'])){
            let _state = state.get('notelist').toJS().concat(action.result)
            return state.merge({noteloading:true,notelist:_state})
          }else{
            return state.merge({noteloading:true,notelist:action.result});
          }
        }
        if(state.hasIn(['notelist'])){
          let _state = state.get('notelist').toJS().concat(action.result)
          return state.merge({noteloading:false,notelist:_state})
        }else{
          return state.merge({noteloading:false,notelist:action.result});
        }
      case LOADNOTE_FAIL:
          return state.merge({error: action.error})
      case SHAREADD:
          return state;
      case SHAREADD_SUCCESS:
          return state;
      case SHAREADD_FAIL:
          return state.merge({error: action.error})

    default:
      return state
  }
}

// export function get_doctor_passcase({id}) {
//
//   var params = {
//     id
//   }
//   var auth_type = 'token'
//   console.log('assss')
//   console.log(params)
//   return {
//     types: [
//       DOCTOR_PASSCASE, DOCTOR_PASSCASE_SUCCESS, DOCTOR_PASSCASE_FAIL
//     ],
//     promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/passcase?', {
//       params,
//       auth_type
//     }, {
//       format: function(response) {
//         if (response.status >= 400) {
//           throw new Error("Bad response from server");
//         }
//         return response.json();
//       },
//       done: function(res) {
//
//         // if (res.code == 1) {
//
//         return Promise.resolve(res)
//
//         // } else {
//         //var err = { info: 'auth' }
//         // return Promise.reject(res.err)
//         // }
//       },
//       error: function(err) {
//         return Promise.reject({info: 'wire'})
//       }
//     })
//   };
//
// }

export function get_orderinfo(doctorid) {

  var params = {
    doc_id: doctorid
  }
  console.log('assss')
  console.log(params)
  return {
    types: [
      ORDER_INFO, ORDER_INFO_SUCCESS, ORDER_INFO_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/date/getdate?', {
      params,
    }, {
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
        return Promise.reject({info: 'wire'})
      }
    })
  };

}

export function store_currentorderinfo(currentorderinfo) {
  return {type: CURRENTORDERINFO, currentorderinfo: currentorderinfo}
}

export function get_doctor_messagelist({id}) {

  var params = {
    id
  }
  console.log('assss')
  console.log(params)
  return {
    types: [
      DOCTOR_MESSAGELIST, DOCTOR_MESSAGELIST_SUCCESS, DOCTOR_MESSAGELIST_FAIL
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

        // if (res.code == 1) {

        return Promise.resolve(res)

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



export function get_doctorinfo(doctorid) {

  var params = {
    id: doctorid
  }
  console.log('assss')
  console.log(params)
  return {
    types: [
      DOCTORINFO, DOCTORINFO_SUCCESS, DOCTORINFO_FAIL
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

        // if (res.code == 1) {

        return Promise.resolve(res)

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

export function get_home_doctorlist(page, num) {

  var params = {
    page: page,
    num: num
  }
  console.log('assss')
  console.log(params)
  return {
    types: [
      HOME_DOCTORLIST, HOME_DOCTORLIST_SUCCESS, HOME_DOCTORLIST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/doctorlist?', {
      params
    }, {
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
        return Promise.reject({info: 'wire'})
      }
    })
  };

}

export function get_servicecategroy() {

  var params = {}
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      SERVICECATEGROY, SERVICECATEGROY_SUCCESS, SERVICECATEGROY_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/doctorcat?', {
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

        return Promise.resolve(res)

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






export function addorder(postdata) {

  var data = postdata
  var auth_type = 'token'
  console.log('assss')
  console.log(data)
  return {
    types: [
      ADDORDER, ADDORDER_SUCCESS, ADDORDER_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/date/makedate', {
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
        return Promise.resolve(res)

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

export function messagegood({id,type}) {

  var data = {
    msg_id:id,
    type
  }
  var auth_type = 'token'
  return {
    types: [
      MESSAGEGOOD, MESSAGEGOOD_SUCCESS, MESSAGEGOOD_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/doctor/messagegreat', {
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

        if (res.state == 'yes') {
          console.log('zanzan');
          console.log(res);
          return Promise.resolve(res)
        } else {
        //var err = { info: 'auth' }
          return Promise.reject(res.msg)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}


export function get_banner() {

  var params = {}
  return {
    types: [
      GET_BANNER, GET_BANNER_SUCCESS, GET_BANNER_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/banner?', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {

        console.log('BANNER------');
        console.log(res);
        // if (res.state == 'yes') {

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


export function famous_doctor() {

  var params = {

  }
  return {
    types: [
      FAMOUSDOCTOR, FAMOUSDOCTOR_SUCCESS, FAMOUSDOCTOR_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/famousdoctor', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {

        console.log('FAMOUS---------');
        console.log(res);
        // if (res.state == 'yes') {

          return Promise.resolve(res.data)

        // } else {
        //var err = { info: 'auth' }
          // return Promise.reject(res.msg)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}


export function load_note({page,num,first}) {

  var params = {
    page,
    num
  }
  var auth_type = 'token'

  return {
    types: [
      LOADNOTE, LOADNOTE_SUCCESS, LOADNOTE_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/usercenter/messagelist?', {
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

        console.log('note-------');
        console.log(res);
        // if (res.state == 'yes') {

          return Promise.resolve(res.data)

        // } else {
        //var err = { info: 'auth' }
          // return Promise.reject(res.msg)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    }),
    num,
    first
  };

}

export function shareadd({id}) {

  var data = {
    doc_id:id
  }
  var auth_type = 'token'

  return {
    types: [
      SHAREADD, SHAREADD_SUCCESS, SHAREADD_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/doctor/addturnnum?', {
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

        console.log('note-------');
        console.log(res);
        // if (res.state == 'yes') {

          return Promise.resolve(res)

        // } else {
        //var err = { info: 'auth' }
          // return Promise.reject(res.msg)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}
