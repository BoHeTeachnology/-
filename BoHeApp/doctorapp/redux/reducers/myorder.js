import Immutable from 'immutable'
import Promise from 'bluebird'

import { getApiIp8007 } from 'doctorapp/util/utils.js'

const ORDERLIST = 'bohe/myorder/ORDERLIST';
const ORDERLIST_SUCCESS = 'bohe/myorder/ORDERLIST_SUCCESS';
const ORDERLIST_FAIL = 'bohe/myorder/ORDERLIST_FAIL';
const DATELIST = 'bohe/myorder/DATELIST';
const DATELIST_SUCCESS = 'bohe/myorder/DATELIST_SUCCESS';
const DATELIST_FAIL = 'bohe/myorder/DATELIST_FAIL';

const initialState =Immutable.Map({
  loading: false,
  loaded: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ORDERLIST:
            return state.merge({ loading: true })
        case ORDERLIST_SUCCESS:
        return state.merge({ loading: false, loaded: true, orderlistres:action.result})
        case ORDERLIST_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case DATELIST:
            return state.merge({ loading: true })
        case DATELIST_SUCCESS:
            return state.merge({ loading: false, loaded: true, datelistres:action.result})
        case DATELIST_FAIL:
                return state.merge({ loading: false, loaded: false, error: action.error })


        default:
            return state
    }
}

export function get_orderlist() {

  var params = {}
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      ORDERLIST, ORDERLIST_SUCCESS, ORDERLIST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/date/doctordate', {
      params,
      auth_type,
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
export function get_datelist(doc_id) {

  var params = {doc_id:doc_id}
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      DATELIST, DATELIST_SUCCESS, DATELIST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/date/getdate?', {
      params,
      auth_type,
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
