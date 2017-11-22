import Immutable from 'immutable'
import Promise from 'bluebird'
import { getApiIp8007} from 'app/util/utils.js'

const UPLOAD_IMG_KEY = 'bohe/askquestion/UPLOAD_IMG_KEY'
const UPLOAD_IMG_KEY_SUCCESS = 'bohe/askquestion/UPLOAD_IMG_KEY_SUCCESS'
const UPLOAD_IMG_KEY_FAIL = 'bohe/askquestion/UPLOAD_IMG_KEY_FAIL'

const ASK_IMG_UPLOAD = 'bohe/askquestion/ASK_IMG_UPLOAD'
const ASK_IMG_UPLOAD_SUCCESS = 'bohe/askquestion/ASK_IMG_UPLOAD_SUCCESS'
const ASK_IMG_UPLOAD_FAIL = 'bohe/askquestion/ASK_IMG_UPLOAD_FAIL'

const initialState = Immutable.Map({})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case UPLOAD_IMG_KEY:
      return state;
    case UPLOAD_IMG_KEY_SUCCESS:
      return state.merge({imgkey: action.result})
    case UPLOAD_IMG_KEY_FAIL:
      return state.merge({error: action.error})

      case ASK_IMG_UPLOAD:
        return state;
      case ASK_IMG_UPLOAD_SUCCESS:
        return state.merge({askuploadres: action.result})
      case ASK_IMG_UPLOAD_FAIL:
        return state.merge({error: action.error})
    default:
      return state
  }
}

export function askquestionimgkey() {

  var params = {}
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
    types: [
      UPLOAD_IMG_KEY, UPLOAD_IMG_KEY_SUCCESS, UPLOAD_IMG_KEY_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/examine/getDiskName', {
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
export function askquestionimgupload(dataparam) {

  var data = dataparam;
  var auth_type = 'token'
  console.log('assss')
  console.log(data)
  return {
    types: [
      ASK_IMG_UPLOAD, ASK_IMG_UPLOAD_SUCCESS, ASK_IMG_UPLOAD_FAIL
    ],
    promise: (client) => client.POST('http://' + getApiIp8007() + '/doctor/addmessage', {
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
