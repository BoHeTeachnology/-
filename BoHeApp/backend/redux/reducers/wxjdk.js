import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/wxjdk/LOAD';
const LOAD_SUCCESS = 'bohe/wxjdk/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/wxjdk/LOAD_FAIL';


const initialState = Immutable.Map({
    loaded: false,
    loading: false
});


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
              return state.merge({ loading: false, loaded: true, orders: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        default:
            return state
    }
}

export function wxJdkLoad({ user, url }) {
    var params = { url }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/patient/getWsJsPackage?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.package)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject(res.err)
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}


