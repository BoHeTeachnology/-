import Immutable from 'immutable'
import Promise from 'bluebird'
import  { getApiIp8007 }  from 'app/util/utils.js'


const LOAD = 'bohe/wxjdk/LOAD';
const LOAD_SUCCESS = 'bohe/wxjdk/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/wxjdk/LOAD_FAIL';

const TEST = 'bohe/wxjdk/TEST';
const TEST_SUCCESS = 'bohe/wxjdk/TEST_SUCCESS';
const TEST_FAIL = 'bohe/wxjdk/TEST_FAIL';

const initialState = Immutable.Map({
    loaded: false,
    loading: false
});


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
              return state.merge({ loading: false, loaded: true, wxpackage: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case TEST:
          return state;
        case TEST_SUCCESS:
         return state;
        case TEST_FAIL:
         return state;
        default:
            return state
    }
}

export function wxJdkLoad(params) {

  console.log('lalalal');
  if ((typeof window === 'undefined')||(window.__SERVER__ == true)) {
    var url = 'http://' + params.req.hostname + params.req.originalUrl;
    url = url.indexOf('#')<0?url:url.split('#')[0];
    console.log(params.req.originalUrl)
    console.log(params.req.path)
    console.log(params.req.hostname)
  }else{
    var url=window.location.href.indexOf('#')<0?window.location.href:window.location.href.split('#')[0];
  }
  console.log('url-------');
  console.log(url);
  var params = {
     url
  }

  return {
    types: [
      LOAD, LOAD_SUCCESS, LOAD_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/weixin/getSignaturePackage?', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {
        console.log('wxjdk--------');
        console.log(res);
        if (res.success == 1) {

          return Promise.resolve(res.data)

        } else {

          return Promise.reject(res.message)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };
}

export function test() {

    var params = {

    }

  return {
    types: [
      TEST, TEST_SUCCESS, TEST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/weixin/demo', {
      params
    }, {
      format: function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      },
      done: function(res) {
        console.log('test----');
        console.log(res);
        // if (res.state == 'yes') {

          return Promise.resolve(res)

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
