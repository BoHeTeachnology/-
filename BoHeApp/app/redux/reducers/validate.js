import Immutable from 'immutable'
import Promise from 'bluebird'
import {getApiIp8007} from 'app/util/utils.js'


const VALIDATESTATE_CHECK = 'bohe/validate/VALIDATESTATE_CHECK'
const VALIDATESTATE_CHECK_SUCCESS = 'bohe/validate/VALIDATESTATE_CHECK_SUCCESS'
const VALIDATESTATE_CHECK_FAIL = 'bohe/validate/VALIDATESTATE_CHECK_FAIL'


const UPLOAD_IMG_KEY = 'bohe/validate/UPLOAD_IMG_KEY'
const UPLOAD_IMG_KEY_SUCCESS = 'bohe/validate/UPLOAD_IMG_KEY_SUCCESS'
const UPLOAD_IMG_KEY_FAIL = 'bohe/validate/UPLOAD_IMG_KEY_FAIL'


const VALIDATE_UPLOAD_ONE = 'bohe/validate/VALIDATE_UPLOAD_ONE'
const VALIDATE_UPLOAD_ONE_SUCCESS = 'bohe/validate/VALIDATE_UPLOAD_ONE_SUCCESS'
const VALIDATE_UPLOAD_ONE_FAIL = 'bohe/validate/VALIDATE_UPLOAD_ONE_FAIL'


const VALIDATE_UPLOAD_TWO = 'bohe/validate/VALIDATE_UPLOAD_TWO'
const VALIDATE_UPLOAD_TWO_SUCCESS = 'bohe/validate/VALIDATE_UPLOAD_TWO_SUCCESS'
const VALIDATE_UPLOAD_TWO_FAIL = 'bohe/validate/VALIDATE_UPLOAD_TWO_FAIL'

const VALIDATE_UPLOAD_THREE = 'bohe/validate/VALIDATE_UPLOAD_THREE'
const VALIDATE_UPLOAD_THREE_SUCCESS = 'bohe/validate/VALIDATE_UPLOAD_THREE_SUCCESS'
const VALIDATE_UPLOAD_THREE_FAIL = 'bohe/validate/VALIDATE_UPLOAD_THREE_FAIL'



const initialState = Immutable.Map({

})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
      case VALIDATESTATE_CHECK:
        return state;
      case VALIDATESTATE_CHECK_SUCCESS:
        return state.merge({ validatestate:action.result})
      case VALIDATESTATE_CHECK_FAIL:
        return state.merge({error:action.error})

        case UPLOAD_IMG_KEY:
          return state;
        case UPLOAD_IMG_KEY_SUCCESS:
        if(action.type_name=='avatar'){
        return state.merge({avatarimgkey:action.result})
      }else if (action.type_name=='indenty') {
        return state.merge({indentyimgkey:action.result})
      }else if (action.type_name=='zhiye') {
        return state.merge({zhiyeimgkey:action.result})
      }else if (action.type_name=='zige') {
        return state.merge({zigeimgkey:action.result})
      }


        case UPLOAD_IMG_KEY_FAIL:
          return state.merge({error:action.error})

      case VALIDATE_UPLOAD_ONE:
        return state;
      case VALIDATE_UPLOAD_ONE_SUCCESS:
        return state.merge({uploadoneres:action.result})
      case VALIDATE_UPLOAD_ONE_FAIL:
        return state.merge({error:action.error})
        case VALIDATE_UPLOAD_TWO:
          return state;
        case VALIDATE_UPLOAD_TWO_SUCCESS:
            return state.merge({uploadtwores:action.result})
        case VALIDATE_UPLOAD_TWO_FAIL:
          return state.merge({error:action.error})
      case VALIDATE_UPLOAD_THREE:
        return state;
      case VALIDATE_UPLOAD_THREE_SUCCESS:
          return state.merge({uploadthreeres:action.result})
      case VALIDATE_UPLOAD_THREE_FAIL:
        return state.merge({error:action.error})
      default:
      return state
  }
}



export function validateimgkey(type_name){

  var params = {
  }
  var auth_type = 'token'
  console.log('assss')
  console.log(params)
  return {
      types: [UPLOAD_IMG_KEY, UPLOAD_IMG_KEY_SUCCESS, UPLOAD_IMG_KEY_FAIL],
      promise: (client) => client.GET('http://'+getApiIp8007()+'/examine/getDiskName', { params,auth_type }, {
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
              return Promise.reject({ info: 'wire' })
          }
      }),
      type_name
  };

}




export function validatestatecheck(server_token){

  var params = {}
  var auth_type = 'token'
  console.log('dsd')
  console.log(params)
  return {
      types: [VALIDATESTATE_CHECK, VALIDATESTATE_CHECK_SUCCESS, VALIDATESTATE_CHECK_FAIL],
      promise: (client) => client.GET('http://'+getApiIp8007()+'/examine/doctorstate', { params,auth_type,server_token}, {
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
              return Promise.reject({ info: 'wire' })
          }
      })
  };

}


export function validateuploadone(status,avatardata,identity,username,avatarimg,sex,city,phone){

  var data = {
    status:status,
    photo:{
      disk_name:avatarimg,
      file_name:avatardata.file_name,
      file_size:avatardata.file_size,
      content_type:avatardata.content_type,
      created_at:avatardata.created_at
    },
    userone:{
      name:username,
      phone:phone,
      sex:sex,
      city:city,
      identity:identity
    }

    }
  var auth_type = 'token'
  console.log('dsd')
  console.log(data)
  return {
      types: [VALIDATE_UPLOAD_ONE, VALIDATE_UPLOAD_ONE_SUCCESS, VALIDATE_UPLOAD_ONE_FAIL],
      promise: (client) => client.POST('http://'+getApiIp8007()+'/examine/doctoradd', { data,auth_type }, {
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
              return Promise.reject({ info: 'wire' })
          }
      })
  };

}

export function validateuploadtwo(status,address,office,jobtitle,skilledin,introduce){

  var data = {
    status:1,
    userone:{
institution:address,
office :office,
jobtitle :jobtitle,
skilledin:skilledin,
introduce :introduce
}
  }
  var auth_type = 'token'
  console.log('dsd')
  console.log(data)
  return {
      types: [VALIDATE_UPLOAD_TWO, VALIDATE_UPLOAD_TWO_SUCCESS, VALIDATE_UPLOAD_TWO_FAIL],
      promise: (client) => client.POST('http://'+getApiIp8007()+'/examine/doctoradd', { data,auth_type }, {
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
              return Promise.reject({ info: 'wire' })
          }
      })
  };

}


export function validateuploadthree(status,indentydata,zhiyedata,zigedata,indentyid,zhiyeid,zigeid,stateid) {
    var data = {
      status:2,
      certificate_one:{
        disk_name:indentyid,
        file_name:indentydata.file_name,
        file_size:indentydata.file_size,
        content_type:indentydata.content_type,
        created_at:indentydata.created_at
      },
      certificate_two:{
          disk_name:zhiyeid,
          file_name:zhiyedata.file_name,
          file_size:zhiyedata.file_size,
          content_type:zhiyedata.content_type,
          created_at:zhiyedata.created_at
        },
      certificate_three:{
            disk_name:zigeid,
            file_name:zigedata.file_name,
            file_size:zigedata.file_size,
            content_type:zigedata.content_type,
            created_at:zigedata.created_at
          },
         state:stateid
    }
    var auth_type = 'token'
    console.log('dsd')
    console.log(data)
    return {
        types: [VALIDATE_UPLOAD_THREE, VALIDATE_UPLOAD_THREE_SUCCESS, VALIDATE_UPLOAD_THREE_FAIL],
        promise: (client) => client.POST('http://'+getApiIp8007()+'/examine/doctoradd', { data,auth_type }, {
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
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}
