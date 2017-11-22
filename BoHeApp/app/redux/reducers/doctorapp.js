import Immutable from 'immutable'
import Promise from 'bluebird'
import {getApiIp8007} from 'app/util/utils.js'

const LOAD = 'bohe/doctorapp/LOAD';
const LOAD_SUCCESS = 'bohe/doctorapp/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/doctorapp/LOAD_FAIL';

const HASCARD = 'bohe/doctorapp/HASCARD';
const HASCARD_SUCCESS = 'bohe/doctorapp/HASCARD_SUCCESS';
const HASCARD_FAIL = 'bohe/doctorapp/HASCARD_FAIL';

const TIECARD = 'bohe/doctorapp/TIECARD';
const TIECARD_SUCCESS = 'bohe/doctorapp/TIECARD_SUCCESS';
const TIECARD_FAIL = 'bohe/doctorapp/TIECARD_FAIL';

const GETVERIFY = 'bohe/doctorapp/GETVERIFY';
const GETVERIFY_SUCCESS = 'bohe/doctorapp/GETVERIFY_SUCCESS';
const GETVERIFY_FAIL = 'bohe/doctorapp/GETVERIFY_FAIL';

const PHONECONFIRM = 'bohe/doctorapp/PHONECONFIRM';
const PHONECONFIRM_SUCCESS = 'bohe/doctorapp/PHONECONFIRM_SUCCESS';
const PHONECONFIRM_FAIL = 'bohe/doctorapp/PHONECONFIRM_FAIL';

const GETCITY = 'bohe/doctorapp/GETCITY';
const GETCITY_SUCCESS = 'bohe/doctorapp/GETCITY_SUCCESS';
const GETCITY_FAIL = 'bohe/doctorapp/GETCITY_FAIL';

const LOAD_DETAIL = 'bohe/doctorapp/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/doctorapp/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/doctorapp/LOAD_DETAIL_FAIL';

const LOAD_ORDER = 'bohe/doctorapp/LOAD_ORDER';
const LOAD_ORDER_SUCCESS = 'bohe/doctorapp/LOAD_ORDER_SUCCESS';
const LOAD_ORDER_FAIL = 'bohe/doctorapp/LOAD_ORDER_FAIL';

const CLEARDETAIL = 'bohe/doctorapp/CLEARDETAIL';
const SAVEID = 'bohe/doctorapp/SAVEID';

const PRICELIST = 'bohe/doctorapp/PRICELIST';
const PRICELIST_SUCCESS = 'bohe/doctorapp/PRICELIST_SUCCESS';
const PRICELIST_FAIL = 'bohe/doctorapp/PRICELIST_FAIL';

const initialState = Immutable.Map({loaded: false, loading: false})
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return state.merge({loading: true})
    case LOAD_SUCCESS:
      return state.setIn(['doctorbaseinfo'], Immutable.Map({}).merge(action.result))
    case LOAD_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case HASCARD:
      return state;
    case HASCARD_SUCCESS:
      {
        let tomergedoctor = state.getIn(['doctorbaseinfo']).merge({hascard: action.result})
        return state.setIn(['doctorbaseinfo'], tomergedoctor);
      }
    case HASCARD_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case TIECARD:
      return state;
    case TIECARD_SUCCESS:
      console.log(action.result);
      let tomergedoctor = state.getIn(['doctorbaseinfo']).merge({tiecardres: action.result})
      console.log(tomergedoctor);
      return state.setIn(['doctorbaseinfo'], tomergedoctor);
    case TIECARD_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case GETVERIFY:
      return state;
    case GETVERIFY_SUCCESS:
      return state;
    case GETVERIFY_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case PHONECONFIRM:
      return state;
    case PHONECONFIRM_SUCCESS:
      return state.merge({phonebindres: action.result});
    case PHONECONFIRM_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case GETCITY:
      return state;
    case GETCITY_SUCCESS:
      if (action.result.citycode == 0) {

        return state.merge({province: action.result.citys});
      } else {

        return state.updateIn(['province'], list => list.map(province => {

          if (province.get('citycode') == action.result.citycode) {
            return province.merge({city: action.result.citys})
          }
          return province;
        }))
      }
    case GETCITY_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case LOAD_DETAIL:
      return state.merge({loading: true})
    case LOAD_DETAIL_SUCCESS:
      {
        var alldetails;
        let date = action.result.date + ' ';
        if (state.hasIn(['detaillist', date])) {
          alldetails = Immutable.List([]).merge(state.getIn(['detaillist', date]).toJS().concat(action.result.list));
        } else {
          if (action.result.count == 0) {
            alldetails = Immutable.List([]).merge([
              {
                nodata: true
              }
            ]);
          } else {
            alldetails = Immutable.List([]).merge(action.result.list);
          }
        }
        return state.setIn([
          'detaillist', date
        ], alldetails).setIn([
          'detailcount', date
        ], action.result.count)
      }

    case LOAD_DETAIL_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case CLEARDETAIL:
      return state.setIn(['detaillist'], Immutable.Map({})).setIn(['detailcount'], Immutable.Map({}))
    case LOAD_ORDER:
      return state;
    case LOAD_ORDER_SUCCESS:
      //下拉刷新，判断是否需要重新渲染
      if (action.refresh) {
        if (action.result.length == 0) {
          return state;
        } else {
          if (action.result[0].id == state.get('orderlist').first().toJS().id) {
            return state;
          } else {
            if (action.result.length < action.num) {
              return state.merge({orderlist: action.result, is_have: false, refresh: true})
            } else {
              return state.merge({orderlisrt: action.result, is_have: true, refresh: true})
            }
          }
        }
      }
      //上滑加载更多，判断是否小于num
      if (state.has('orderlist')) {
        if (action.result.length < action.num) {
          let newlist = state.getIn(['orderlist']).concat(action.result);
          return state.merge({orderlist: newlist, is_have: false})
        } else {
          let newlist = state.getIn(['orderlist']).concat(action.result);
          return state.merge({orderlist: newlist, is_have: true})
        }
      } else {
        if (action.result.length < action.num) {
          return state.merge({orderlist: action.result, is_have: false})
        } else {
          return state.merge({orderlist: action.result, is_have: true})
        }
      }
    case LOAD_ORDER_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    case SAVEID:
      return state.merge({saveid: action.result})
    case PRICELIST:
      return state;
    case PRICELIST_SUCCESS:
      if (action.result.success == '1') {

        for (var i = 0; i < action.result.data.length; i++) {
          if (action.result.data[i].subclass.length > 0) {
            for (var j = 0; j < action.result.data[i].subclass.length; j++) {
              action.result.data[i].subclass[j].stepVal = 1;
            }
          }
        }
        console.log(action.result)
        return state.merge({pricelist: action.result});
      } else {
        return state.merge({pricelist: action.result});
      }
    case PRICELIST_FAIL:
      return state.merge({loading: false, loaded: false, error: action.error})
    default:
      return state
  }
}

export function saveid({id, idx}) {
  return {
    type: SAVEID,
    result: {
      id,
      idx
    }
  }
}

export function loaddoctor({}) {
  var params = {}
  var auth_type = 'token'
  return {
    types: [
      LOAD, LOAD_SUCCESS, LOAD_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/userinformation', {
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

        // if (res.success == 1) {

        console.log('ASDFGHJKL-------')
        console.log(res);
        return Promise.resolve(res)

        // } else {
        //     var err = { info: 'auth' }
        //     return Promise.reject(res.err)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}

export function getpricelist() {
  console.log('kkkkk')
  var params = {}
  var auth_type = 'token'
  return {
    types: [
      PRICELIST, PRICELIST_SUCCESS, PRICELIST_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/doctor/projectlist', {
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

        // if (res.success == 1) {

        console.log('ASDFGHJKL-------')
        console.log(res);
        return Promise.resolve(res)

        // } else {
        //     var err = { info: 'auth' }
        //     return Promise.reject(res.err)
        // }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}

export function hascard({}) {
  console.log(22222)
  var params = {}
  var auth_type = 'token'
  return {
    types: [
      HASCARD, HASCARD_SUCCESS, HASCARD_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/cardinformation', {
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

export function tiecard({bankcard}) {
  var params = {
    cardno: bankcard
  }
  var auth_type = 'token'
  return {
    types: [
      TIECARD, TIECARD_SUCCESS, TIECARD_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/seebank?', {
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

export function getverify({phone}) {
  var params = {
    iphone: phone
  }
  var auth_type = 'token'
  return {
    types: [
      GETVERIFY, GETVERIFY_SUCCESS, GETVERIFY_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/getiphone?', {
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

        if (res.success == 1) {
          return Promise.resolve()
        } else {
          //var err = { info: 'auth' }
          return Promise.reject(res.err)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}

export function phoneconfirm({phone, verify}) {
  var params = {
    iphone: phone,
    verify: verify
  }
  var auth_type = 'token'
  return {
    types: [
      PHONECONFIRM, PHONECONFIRM_SUCCESS, PHONECONFIRM_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/setiphone?', {
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

export function getcity({citycode}) {
  var params = {
    citycode
  }

  var auth_type = 'token'
  return {
    types: [
      GETCITY, GETCITY_SUCCESS, GETCITY_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/seecity?', {
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
        console.log(citycode);
        if (citycode == 0) {
          let data = {
            citycode: 0,
            citys: res.citycodes.citycode
          }
          return Promise.resolve(data)
        } else {
          let data = {
            citycode: citycode,
            citys: res.citycodes.citycode
          }
          return Promise.resolve(data)
        }
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

export function finaltiecard({
  identity,
  bankname,
  name,
  cardno,
  bankcode,
  bank_province,
  bank_city
}) {
  var params = {
    identity,
    bankname,
    name,
    cardno,
    bankcode,
    bank_province,
    bank_city
  }
  var auth_type = 'token'
  return {
    types: [
      TIECARD, TIECARD_SUCCESS, TIECARD_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/useraccount?', {
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

export function cleardetail({}) {
  return {type: CLEARDETAIL}
}

export function loaddetail({thisyear, thismonth, page}) {
  var params = {
    thisyear,
    thismonth,
    page
  }
  console.log('LOAD______-----...')
  var auth_type = 'token'
  return {
    types: [
      LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL
    ],
    promise: (client) => client.GET('http://' + getApiIp8007() + '/bank/cash?', {
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

        let date = '' + thisyear + thismonth;

        if (res.success == 1) {
          let result = {
            ...res.data,
            date
          };
          return Promise.resolve(result);
        } else {
          //var err = { info: 'auth' }
          return Promise.reject(res.err)
        }
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    })
  };

}

export function load_order({num, page, refresh}) {
  var params = {
    num,
    page
  }
  return {
    types: [
      LOAD_ORDER, LOAD_ORDER_SUCCESS, LOAD_ORDER_FAIL
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
        console.log('res----')
        console.log(res)
        return Promise.resolve(res.data);
      },
      error: function(err) {
        return Promise.reject({info: 'wire'})
      }
    }),
    refresh,
    num
  };
}
