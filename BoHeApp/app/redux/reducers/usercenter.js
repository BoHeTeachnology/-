import Immutable from 'immutable'
import Promise from 'bluebird'
import { getApiIp8007} from 'app/util/utils.js'

const USERINFORMATION = 'bohe/usercenter/USERINFORMATION'
const USERINFORMATION_SUCCESS = 'bohe/usercenter/USERINFORMATION_SUCCESS'
const USERINFORMATION_FAIL = 'bohe/usercenter/USERINFORMATION_FAIL'

const MYORDERLIST = 'bohe/usercenter/MYORDERLIST'
const MYORDERLIST_SUCCESS = 'bohe/usercenter/MYORDERLIST_SUCCESS'
const MYORDERLIST_FAIL = 'bohe/usercenter/MYORDERLIST_FAIL'

const CHANGE_USERINFORMATION = 'bohe/usercenter/CHANGE_USERINFORMATION'
const CHANGE_USERINFORMATION_SUCCESS = 'bohe/usercenter/CHANGE_USERINFORMATION_SUCCESS'
const CHANGE_USERINFORMATION_FAIL = 'bohe/usercenter/CHANGE_USERINFORMATION_FAIL'

const ATTENTIONNUM = 'bohe/usercenter/ATTENTIONNUM'
const ATTENTIONNUM_SUCCESS = 'bohe/usercenter/ATTENTIONNUM_SUCCESS'
const ATTENTIONNUM_FAIL = 'bohe/usercenter/ATTENTIONNUM_FAIL'


const MYNOTENUM = 'bohe/usercenter/MYNOTENUM'
const MYNOTENUM_SUCCESS = 'bohe/usercenter/MYNOTENUM_SUCCESS'
const MYNOTENUM_FAIL = 'bohe/usercenter/MYNOTENUM_FAIL'

const CURRENTORDERITEMINFO = 'bohe/usercenter/CURRENTORDERITEMINFO'

const CANCELORDER = 'bohe/usercenter/CANCELORDER'
const CANCELORDER_SUCCESS = 'bohe/usercenter/CANCELORDER_SUCCESS'
const CANCELORDER_FAIL = 'bohe/usercenter/CANCELORDER_FAIL'

const initialState = Immutable.Map({})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {


    case USERINFORMATION:
      return state;
    case USERINFORMATION_SUCCESS:
      return state.merge({userinfo: action.result})
    case USERINFORMATION_FAIL:
      return state.merge({error: action.error})
      case MYORDERLIST:
        return state;
      case MYORDERLIST_SUCCESS:
        return state.merge({orderslist: action.result})
      case MYORDERLIST_FAIL:
        return state.merge({error: action.error})
        case CHANGE_USERINFORMATION:
          return state;
        case CHANGE_USERINFORMATION_SUCCESS:
          return state.merge({updateuserinfores: action.result})
        case CHANGE_USERINFORMATION_FAIL:
          return state.merge({error: action.error})
          case ATTENTIONNUM:
            return state;
          case ATTENTIONNUM_SUCCESS:
            return state.merge({attentionnum: action.result})
          case ATTENTIONNUM_FAIL:
            return state.merge({error: action.error})
            case MYNOTENUM:
              return state;
            case MYNOTENUM_SUCCESS:
              return state.merge({mynotenum: action.result})
            case MYNOTENUM_FAIL:
              return state.merge({error: action.error})
            case CURRENTORDERITEMINFO:
            console.log(action.currentorderiteminfo)
            console.log('action.currentorderiteminfo')
                return state.merge({currentorderiteminfo: action.currentorderiteminfo})
                case CANCELORDER:
                  return state;
                case CANCELORDER_SUCCESS:
                  return state.merge({cancelorderres: action.result})
                case CANCELORDER_FAIL:
                  return state.merge({error: action.error})

    default:
      return state
  }
}

export function store_currentorderiteminfo(currentorderiteminfo) {
  console.log(currentorderiteminfo)
  console.log('currentorderiteminfo')
  return {type: CURRENTORDERITEMINFO, currentorderiteminfo: currentorderiteminfo}
}


export function cancelorder(paramdata){

  var data = paramdata;
  var auth_type = 'token'

  return {
    types: [
      CANCELORDER, CANCELORDER_SUCCESS, CANCELORDER_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/date/undate', {
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

export function myorderslist() {

  var params = {};
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      MYORDERLIST, MYORDERLIST_SUCCESS, MYORDERLIST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/date/mydate', {
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
export function get_attentionnum() {

  var params = {};
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      ATTENTIONNUM, ATTENTIONNUM_SUCCESS, ATTENTIONNUM_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/usercenter/mydocnum', {
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
export function get_mynotenum() {

  var params = {};
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      MYNOTENUM, MYNOTENUM_SUCCESS, MYNOTENUM_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/usercenter/mymsgnum', {
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
export function change_userinformation(dataparam) {

  var data = dataparam;
  var auth_type = 'token'
  console.log('assss')
  return {
    types: [
      CHANGE_USERINFORMATION, CHANGE_USERINFORMATION_SUCCESS, CHANGE_USERINFORMATION_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/usercenter/updateuserinfo', {
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
