import Immutable from 'immutable'
import Promise from 'bluebird'
import  {getApiIp8007}  from 'app/util/utils.js'


const LOAD_SERVICE = 'bohe/service/LOAD_SERVICE';
const LOAD_SERVICE_SUCCESS = 'bohe/service/LOAD_SERVICE_SUCCESS';
const LOAD_SERVICE_FAIL = 'bohe/service/LOAD_SERVICE_FAIL';



const initialState = Immutable.Map({
    loaded: false,
    loading: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_SERVICE:
            return state.merge({ loading: true });
        case LOAD_SERVICE_SUCCESS:
            return state.merge({ loading: false, loaded: true, service_list: action.result })
        case LOAD_SERVICE_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        default:
            return state
    }
}

export function serviceList() {
    var params = {}
    console.log('QWER')
    return {
        types: [LOAD_SERVICE, LOAD_SERVICE_SUCCESS, LOAD_SERVICE_FAIL],
        promise: (client) => client.GET('http://'+getApiIp8007()+'/doctor/doctorcat', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log('DOCTORCAT----_____cat')
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
        })
    };

}
