import Immutable from 'immutable'
import Promise from 'bluebird'


const SAVE_TOKEN = 'bohe/save_token/SAVE_TOKEN'
const LOAD_TEST = 'bohe/save_token/LOAD_TEST'
const LOAD_TEST_SUCCESS = 'bohe/save_token/LOAD_TEST_SUCCESS'
const LOAD_TEST_FAIL = 'bohe/save_token/LOAD_TEST_FAIL'



const initialState = Immutable.Map({
    loaded: false,
    loading: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_TOKEN:
            return state.merge({ token:action.result.token });
        case LOAD_TEST:
            return state;
        case LOAD_TEST_SUCCESS:
            return state;
        case LOAD_TEST_FAIL:
            return state;
        default:
            return state
    }
}


export function save_token({token}) {
    return {
        type: SAVE_TOKEN,
        result:{ token }
    }
}

export function test() {
    var params = {}
    let auth_type = 'token'
    console.log('QWER!!!@@@@@')
    return {
        types: [LOAD_TEST, LOAD_TEST_SUCCESS, LOAD_TEST_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/test', { params,auth_type }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);
                if (res.code == 1) {

                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject(res)
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}
