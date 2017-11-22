import Immutable from 'immutable'
import Promise from 'bluebird'
import { error_table } from 'backend/redux/config/error_table.js'

import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD_TEMPLATE = 'bohe/case_template/LOAD_TEMPLATE';
const LOAD_TEMPLATE_SUCCESS = 'bohe/case_template/LOAD_TEMPLATE_SUCCESS';
const LOAD_TEMPLATE_FAIL = 'bohe/case_template/LOAD_TEMPLATE_FAIL';

const UPDATE_TEMPLATE = 'bohe/case_template/UPDATE_TEMPLATE';
const UPDATE_TEMPLATE_SUCCESS = 'bohe/case_template/UPDATE_TEMPLATE_SUCCESS';
const UPDATE_TEMPLATE_FAIL = 'bohe/case_template/UPDATE_TEMPLATE_FAIL';

const CREATE_TEMPLATE = 'bohe/case_template/CREATE_TEMPLATE';
const CREATE_TEMPLATE_SUCCESS = 'bohe/case_template/CREATE_TEMPLATE_SUCCESS';
const CREATE_TEMPLATE_FAIL = 'bohe/case_template/CREATE_TEMPLATE_FAIL';


const EDIT_TEMPLATE = 'bohe/case_template/EDIT_TEMPLATE';



const initialState = Immutable.Map({
    loaded: false,
    loading: false,
}).merge({templates:{ }});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_TEMPLATE:
            {
              let identify = action.identify
              if(!state.hasIn(['templates',identify]))
              	 state = state.setIn(['templates',identify],Immutable.Map({}));
              return state.setIn(['templates',identify,'loading'],false).setIn(['templates',identify,'loaded'],true);
            }
        case LOAD_TEMPLATE_SUCCESS:
            {
              let identify = action.identify;
              console.log(action.index);
              let template = Immutable.Map({}).merge({index:action.index}).merge(action.result);
              let _tmp = template.toJS();
              console.log(_tmp)
              console.log('llllllll22211111')
              return state.setIn(['templates',identify,'edit'],template).setIn(['templates',identify,'template'],template).setIn(['templates',identify,'loading'],false).setIn(['templates',identify,'loaded'],true);
            }
        case LOAD_TEMPLATE_FAIL:
            {
              let identify = action.identify

              return state.setIn(['templates',identify,'loading'],false).setIn(['templates',identify,'loaded'],false);
            }
        case UPDATE_TEMPLATE:
            {
            	return state;
            }
        case UPDATE_TEMPLATE_SUCCESS:
           {
           	   let identify = action.identify;
           	   if(state.getIn(['templates',identify,'edit'])){
           	   	  let edit = state.getIn(['templates',identify,'edit']);
                  return state.setIn(['templates',identify,'template'],edit).setIn(['templates',identify,'loading'],false).setIn(['templates',identify,'loaded'],true).merge({
                                    error:{ post_success:action.post_success,msg:'修改模版成功' }});
           	   }else{
                  error_table.case_template.update[identify] = { name:identify, msg : '此病例信息还没有成功同步'};
                  return state.merge({ error: { pos:['case_template','update',identify] } })
           	   }
           }
        case UPDATE_TEMPLATE_FAIL:
           {
              return state.merge({ error:action.error })
           }
        case CREATE_TEMPLATE:
            {
            	return state;
            }
        case CREATE_TEMPLATE_SUCCESS:
           {
           	   let identify = action.identify;

           	   if(state.getIn(['templates',identify,'edit'])){
           	   	  let edit = state.getIn(['templates',identify,'edit']).merge({id:action.result});
                  console.log('TTTTTTUUUUU')
                  console.log(edit.toJS());
                  var mid = state.setIn(['templates',identify,'template'],edit).setIn(['templates',identify,'edit'],edit).setIn(['templates',identify,'loading'],false).setIn(['templates',identify,'loaded'],true).merge({
                                    error:{ post_success:action.post_success,msg:'创建模版成功' }});
                  console.log(mid.toJS());
                  return mid;
           	   }else{
                  error_table.case_template.update[identify] = { name:identify, msg : '此病例信息还没有成功同步'};
                  return state.merge({ error: { pos:['case_template','update',identify] } })
           	   }
           }
        case CREATE_TEMPLATE_FAIL:
           {
              return state.merge({ error:action.error })
           }
        case EDIT_TEMPLATE:
           {
           	  let pairs = action.result.pairs;
           	  let identify = action.result.pos.identify;
              console.log("999990000iiiiiii222")
              console.log(identify);
              console.log(state.getIn(['templates']).toJS())

              console.log(state.getIn(['templates',identify,'edit']).toJS());
              if(state.hasIn(['templates',identify,'edit'])&&state.getIn(['templates',identify,'loaded'])){
                pairs.forEach((pair) => {
                  if(pair.key == 'index')
                     state = state.setIn(['templates',identify,'edit',pair.key],Immutable.Map(pair.val));
                  else
                     state = state.setIn(['templates',identify,'edit',pair.key],pair.val);
                })
                console.log('XXXXXXXX')
                console.log(state.getIn(['templates',identify,'edit']).toJS());
                return state;
              }else{
                error_table.case_patient.edit[identify] = { name:identify, msg : '此病例信息还没有成功同步' };
                return state.merge({ error: { pos:['case_patient','edit',identify] } })
              }
           }
        default:
            return state
    }
}


export function load_template({ project, category, subcategory, type }){

        var params = {};
	      var identify = type+'_'+((project&&(project.id!=undefined))?project.id:'')+'_'+((category&&(category.id!=undefined))?category.id:'')+'_'+((subcategory&&(subcategory.id!=undefined))?subcategory.id:'')
        params.template_id = identify;
        var index = {
          type,
          project:{
            id:project.id,
            name:project.name
          },
          category:category?{
            id:category.id,
            name:category.name
          }:{},
          subcategory:subcategory?{
            id:subcategory.id,
            name:subcategory.name
          }:{}
        }
        console.log('#$$$$$');
        console.log(index);
        return {
            types: [LOAD_TEMPLATE, LOAD_TEMPLATE_SUCCESS, LOAD_TEMPLATE_FAIL],
            promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/getOneTemplate?', { params }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                },
                done: function(res) {

                    if (res.code == 1) {

                        res.content.id = res.id;
                        return Promise.resolve(res.content)

                    }else if(res.code == 2){
                        let content={
                          main:'',
                          cure:'',
                          check:'',
                          currentill:''
                        }
                        return Promise.resolve(content);
                    } else {
                        error_table.case_template.load[identify] = { name:identify, msg : 'notvalid' };
                        return Promise.reject({ pos: ['case_template','load',identify] })
                    }
                },
                error: function(err) {
                    error_table.case_template.load[identify] = { name:identify, msg : 'wire' };
                    return Promise.reject({ pos: ['case_template','load',identify] })
                }
            }),
            identify,
            index
        };

}

export function update_template({ content,type,template_id,post_success }){
  var data = { content,type,template_id}
  var identify = data.template_id;

  return {
            types: [ UPDATE_TEMPLATE, UPDATE_TEMPLATE_SUCCESS, UPDATE_TEMPLATE_FAIL ],
            promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/saveTemplate?', { data }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                },
                done: function(res) {

                    if (res.code == 1) {

                        return Promise.resolve()

                    } else {
                        error_table.case_template.update[id] = { name:id, msg : 'notvalid' };
                        return Promise.reject({ pos: ['case_template','update',id] })
                    }
                },
                error: function(err) {
                    error_table.case_template.update[id] = { name:id, msg : 'wire' };
                    return Promise.reject({ pos: ['case_template','update',id] })
                }
            }),
            identify,
            post_success
        };
}

export function create_template({ content,type,template_id,post_success }){
  content.check?'':content.check = '';
  content.cure?'':content.cure='';
  content.currentill?'':content.currentill='';
  content.main?'':content.main='';
  var data = { content,type,template_id}
  var identify = data.template_id;
  return {
            types: [ CREATE_TEMPLATE, CREATE_TEMPLATE_SUCCESS, CREATE_TEMPLATE_FAIL ],
            promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/addTemplate', { data }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                },
                done: function(res) {

                    if (res.code == 1) {

                        return Promise.resolve(res.id)

                    } else {
                        error_table.case_template.create[identify] = { name:identify, msg : 'notvalid' };
                        return Promise.reject({ pos: ['case_index','create' ] })
                    }
                },
                error: function(err) {
                    error_table.case_template.create[identify] = { name:identify, msg : 'wire' };
                    return Promise.reject({ pos: ['case_index','create',identify] })
                }
            }),
            identify,
            post_success
        };
}

export function edit_template({ pairs,pos }){

    return {
        type:     EDIT_TEMPLATE,
        result:   { pairs, pos }
    }

}

export function LoadedorLoading(state,index){

    var { project,category,subcategory, type } = index
    var identify = type+'_'+(project?project:'')+'_'+(category?category:'')+'_'+(subcategory?subcategory:'')
    var loaded = false;

    if(state.hasIn(['case_template',identify,'edit'])&&state.getIn(['case_template',identify,'loaded'])){
        loaded = state.getIn(['case_index','loaded'])
    }
    return loaded;

}





