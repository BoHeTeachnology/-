import Immutable from 'immutable'
import Promise from 'bluebird'

import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD_LEFT = 'bohe/left_list/LOAD_LEFT';
const LOAD_LEFT_SUCCESS = 'bohe/left_list/LOAD_LEFT_SUCCESS';
const LOAD_LEFT_FAIL = 'bohe/left_list/LOAD_LEFT_FAIL';

const initialState = Immutable.Map({
    loaded: false,
    loading: false,
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    	case LOAD_LEFT:
            return state.merge({ leftlist:[] })
        case LOAD_LEFT_SUCCESS:
            if(action.where == 'adapt'){
                var list = [];
                console.log(action.result);
                action.result.map((item,index)=>{
                    var content = {
                        name: item.app_name,
                        classname: item.app_uri,
                        url: item.app_url,
                        id: index
                    };
                    if(item.children.length!=0){
                        var childlist = [];
                        item.children.map((child,idx)=>{
                            var _children = {
                                name: child.app_name,
                                classname: child.app_uri,
                                url: child.app_url,
                                id: index + '-' +idx
                            };
                            childlist.push({..._children});
                        })
                        content = {...content, children:childlist};
                        console.log(content);
                        list.push({...content});
                    }else{
                        list.push({...content});
                    }
                })
                return state.merge({ leftlist: list})
            }else{
                action.result = action.result.map((item)=>{
                    item.style = 0
                    return item;
                })
                return state.merge({ leftlist: action.result })
            }

        case LOAD_LEFT_FAIL:
            return state.merge({ error:action.error })
        default:
            return state;
    }
}

export function load_left_list(where){

    var data = { }
    console.log(where)
    return {
        types: [ LOAD_LEFT, LOAD_LEFT_SUCCESS, LOAD_LEFT_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Index/getUserInfo?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {

                    console.log(res.app);
                    return Promise.resolve(res.app)

                } else {
                    //var err = { info: 'auth' }
                    error_table.case_index.create.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_index','create' ] })
                }
            },
            error: function(err) {
                error_table.case_index.create.msg = 'wire';
                return Promise.reject({ pos: ['case_index','create' ] })
            }
        }),
        where
    };

}
