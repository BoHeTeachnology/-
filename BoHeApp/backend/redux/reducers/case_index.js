import Immutable from 'immutable'
import Promise from 'bluebird'
import { error_table } from 'backend/redux/config/error_table.js'

import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/case_index/LOAD';
const LOAD_SUCCESS = 'bohe/case_index/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/case_index/LOAD_FAIL';

const UPDATE_PROJECT = 'bohe/case_index/UPDATE_PROJECT';
const UPDATE_PROJECT_SUCCESS = 'bohe/case_index/UPDATE_PROJECT_SUCCESS';
const UPDATE_PROJECT_FAIL = 'bohe/case_index/UPDATE_PROJECT_FAIL';

const UPDATE_CATEGORY = 'bohe/case_index/UPDATE_CATEGORY';
const UPDATE_CATEGORY_SUCCESS = 'bohe/case_index/UPDATE_CATEGORY_SUCCESS';
const UPDATE_CATEGORY_FAIL = 'bohe/case_index/UPDATE_CATEGORY_FAIL';

const UPDATE_SUBCATE = 'bohe/case_index/UPDATE_SUBCATE';
const UPDATE_SUBCATE_SUCCESS = 'bohe/case_index/UPDATE_SUBCATE_SUCCESS';
const UPDATE_SUBCATE_FAIL = 'bohe/case_index/UPDATE_SUBCATE_FAIL';

const CREATE_PROJECT = 'bohe/case_index/CREATE_PROJECT';
const CREATE_PROJECT_SUCCESS = 'bohe/case_index/CREATE_PROJECT_SUCCESS';
const CREATE_PROJECT_FAIL = 'bohe/case_index/CREATE_PROJECT_FAIL';

const CREATE_CATEGORY = 'bohe/case_index/CREATE_CATEGORY';
const CREATE_CATEGORY_SUCCESS = 'bohe/case_index/CREATE_CATEGORY_SUCCESS';
const CREATE_CATEGORY_FAIL = 'bohe/case_index/CREATE_CATEGORY_FAIL';

const CREATE_SUBCATE = 'bohe/case_index/CREATE_SUBCATE';
const CREATE_SUBCATE_SUCCESS = 'bohe/case_index/CREATE_SUBCATE_SUCCESS';
const CREATE_SUBCATE_FAIL = 'bohe/case_index/CREATE_SUBCATE_FAIL';

const EDIT_PROJECT  = 'bohe/case_index/EDIT_PROJECT';

const EDIT_CATEGORY  = 'bohe/case_index/EDIT_CATEGORY';

const EDIT_SUBCATE  = 'bohe/case_index/EDIT_SUBCATE';

const PRE_EDIT_PROJECT  = 'bohe/case_index/PRE_EDIT_PROJECT';

const PRE_EDIT_CATEGORY  = 'bohe/case_index/PRE_EDIT_CATEGORY';

const PRE_EDIT_SUBCATE  = 'bohe/case_index/PRE_EDIT_SUBCATE';

const PRE_CREATE_PROJECT  = 'bohe/case_index/PRE_CREATE_PROJECT';

const PRE_CREATE_CATEGORY  = 'bohe/case_index/PRE_CREATE_CATEGORY';

const PRE_CREATE_SUBCATE  = 'bohe/case_index/PRE_CREATE_SUBCATE';

const DELETE = 'bohe/case_index/DELETE';
const DELETE_SUCCESS = 'bohe/case_index/DELETE_SUCCESS';
const DELETE_FAIL = 'bohe/case_index/DELETE_FAIL';




const initialState = Immutable.Map({
    loaded: false,
    loading: false,
}).merge({ projectedit:{}, categoryedit:{}, subcateedit:{}, projects:[], categorys:[], subcategorys:[]});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
              return state.merge({ loading: true , not_delete:false })
        case LOAD_SUCCESS:
              return state.merge({ loading: false, loaded: true, projects: action.result.projects ,categorys: action.result.categorys ,subcategorys:action.result.subcategorys})
        case LOAD_FAIL:
              return state.merge({ loading: false, loaded: false, error: action.error });
        case UPDATE_PROJECT:
             return state;
        case UPDATE_PROJECT_SUCCESS:
             {
                let id = action.id;
                let projectedit = state.getIn(['projectedit']);
                return state.updateIn(['projects'],list => list.map(( project ) => {
                        if(project.get('id') == id){
                          return projectedit;
                        }
                      return project;
                  }));

             }
        case UPDATE_PROJECT_FAIL:
             return state.merge({ error:action.error })
        case UPDATE_CATEGORY:
             return state;
        case UPDATE_CATEGORY_SUCCESS:
             {
                let id = action.id;
                let categoryedit = state.getIn(['categoryedit']);
                return state.updateIn(['categorys'],list => list.map(( category ) => {
                        if(category.get('id') == id){
                          return categoryedit;
                        }
                      return category;
                  }));

             }
        case UPDATE_CATEGORY_FAIL:
             return state.merge({ error:action.error })
        case UPDATE_SUBCATE:
             return state;
        case UPDATE_SUBCATE_SUCCESS:
             {
                let id = action.id;
                let subcateedit = state.getIn(['subcateedit']);
                return state.updateIn(['subcategorys'],list => list.map(( subcate ) => {
                        if(subcate.get('id') == id){
                          return subcateedit;
                        }
                      return subcate;
                  }));

             }
        case UPDATE_SUBCATE_FAIL:
             return state.merge({ error:action.error })
        case CREATE_PROJECT:
             return state;
        case CREATE_PROJECT_SUCCESS:
             {
                let id = action.result;
                let projectedit = state.getIn(['projectedit']).setIn(['id'],id);
                return state.updateIn(['projects'],list => list.push(projectedit));

             }
        case CREATE_PROJECT_FAIL:
             return state.merge({ error:action.error })
        case CREATE_CATEGORY:
             return state;
        case CREATE_CATEGORY_SUCCESS:
             {
                let id = action.result;
                let parentid = action.parentid;
                let categoryedit = state.getIn(['categoryedit']).setIn(['id'],id);
                return state.updateIn(['categorys'],list => list.push(categoryedit)).updateIn(['projects'],list => list.map((project) => {
                       if(project.get('id') == parentid){
                          if(project.hasIn(['relations']))
                              return project.updateIn(['relations'],list => list.push(id))
                          else{
                              return project.setIn(['relations'],Immutable.List([])).updateIn(['relations'],list => list.push(id))
                          }
                       }else{
                          return project;
                       }
                } ));

             }
        case CREATE_CATEGORY_FAIL:
             return state.merge({ error:action.error })
        case CREATE_SUBCATE:
             return state;
        case CREATE_SUBCATE_SUCCESS:
             {
                let id = action.result;
                let parentid = action.parentid;
                let subcateedit = state.getIn(['subcateedit']).setIn(['id'],id);
                return state.updateIn(['subcategorys'],list => list.push(subcateedit)).updateIn(['categorys'],list => list.map((category) => {
                       if(category.get('id') == parentid){
                          if(category.hasIn(['relations']))
                            return category.updateIn(['relations'],list => list.push(id))
                          else
                            return category.setIn(['relations'],Immutable.List([])).updateIn(['relations'],list => list.push(id))
                       }else{
                          return category;
                       }
                } ));

             }
        case CREATE_SUBCATE_FAIL:
             return  state.merge({ error:action.error })
        case EDIT_PROJECT:
             {
               return  state.setIn(['projectedit','cat_name'], action.result.name);
             }
        case EDIT_CATEGORY:
               return  state.setIn(['categoryedit','cat_name'], action.result.name);
        case EDIT_SUBCATE:
               return  state.setIn(['subcateedit','cat_name'], action.result.name);
        case PRE_CREATE_PROJECT:
             {
               return  state.setIn(['projectedit'],Immutable.Map({}));
             }
        case PRE_CREATE_CATEGORY:
             {
               return  state.setIn(['categoryedit'],Immutable.Map({}));
             }
        case PRE_CREATE_SUBCATE:
             {
               return  state.setIn(['subcateedit'],Immutable.Map({}));
             }
        case PRE_EDIT_PROJECT:
               {
                 let id = action.result;
                 let idx = state.getIn(['projects']).findIndex((value) => value.get('id') == id)
                 if(idx>=0)
                   return  state.setIn(['projectedit'], state.getIn(['projects',idx]));
                 else
                   return state;
               }
        case PRE_EDIT_CATEGORY:
               {
                 let id = action.result;
                 let idx = state.getIn(['categorys']).findIndex((value) => value.get('id') == id)
                 if(idx>=0)
                   return  state.setIn(['categoryedit'], state.getIn(['categorys',idx]));
                 else
                   return state;
               }
        case PRE_EDIT_SUBCATE:
               {
                 let id = action.result;
                 let idx = state.getIn(['subcategorys']).findIndex((value) => value.get('id') == id)
                 if(idx>=0)
                   return  state.setIn(['subcateedit'], state.getIn(['subcategorys',idx]));
                 else
                   return state;
               }
        case DELETE:
            return state
        case DELETE_SUCCESS:
            let id = action.id;
            var indexPro = state.getIn(['projects']).findIndex(value => value.get('id') == id)
            var indexCat = state.getIn(['categorys']).findIndex(value => value.get('id') == id)
            var indexSub = state.getIn(['subcategorys']).findIndex(value => value.get('id') == id)

            state = state.updateIn(['projects'],list => list.map(( project ) => {
                   let delIndex = project.hasIn(['relations'])?project.get('relations').findIndex(value => value == id):-1;
                    if(delIndex >= 0)
                        return  project.updateIn(['relations'],list => list.remove(delIndex));
                    else
                        return project;
                  })).updateIn(['categorys'],list => list.map(( category ) => {
                   let delIndex = category.hasIn(['relations'])?category.get('relations').findIndex(value => value == id):-1;
                    if(delIndex >= 0){
                        console.log('#$%')
                        console.log(delIndex);
                        return  category.updateIn(['relations'],list => list.remove(delIndex));
                    }
                    else
                        return category;
                  })).updateIn(['subcategorys'],list => list.map(( subcategory ) => {
                   let delIndex = subcategory.hasIn(['relations'])?subcategory.get('relations').findIndex(value => value == id):-1;
                    if(delIndex >= 0){
                        console.log(delIndex);
                        return  subcategory.updateIn(['relations'],list => list.remove(delIndex));
                    }
                    else
                        return subcategory;
                  }));

            if (indexPro >= 0){
                return state.setIn(['projects'], state.getIn(['projects']).remove(indexPro));
            }else if(indexCat >= 0){
                return state.setIn(['categorys'], state.getIn(['categorys']).remove(indexCat));
            }else if(indexSub >= 0){
                return state.setIn(['subcategorys'], state.getIn(['subcategorys']).remove(indexSub));
            }else
                return state
        case DELETE_FAIL:
            return state.merge({ error:action.error })
        default:
            return state
    }
}



export function load(){
    var params = {}
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/catList?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {

                    let result = {
                                   projects: res.projects,
                                   categorys:res.categorys,
                                   subcategorys:res.subcategorys
                                 };
                    return Promise.resolve(result)

                } else {
                    //var err = { info: 'auth' }
                    error_table.case_index.load.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_index','load' ] })
                }
            },
            error: function(err) {
                error_table.case_index.load.msg = 'wire';
                return Promise.reject({ pos: ['case_index','load' ] })
            }
        })
    };
}

export function create_project({ name,parentid }){

    var data = { cat_name: name,parent_id:parentid }
    return {
        types: [ CREATE_PROJECT, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/addCat?', { data }, {
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
                    //var err = { info: 'auth' }
                    error_table.case_index.create.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_index','create' ] })
                }
            },
            error: function(err) {
                error_table.case_index.create.project.msg = 'wire';
                return Promise.reject({ pos: ['case_index','create','project' ] })
            },
            parentid
        })
    };

}

export function update_project({ id,name,parent_id }){

    var data = { cat_name:name , id ,parent_id }
    return {
        types: [ UPDATE_PROJECT, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/saveCat?', { data }, {
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
                    //var err = { info: 'auth' }
                    error_table.case_index.update.project.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_index','update','project' ] })
                }
            },
            error: function(err) {
                error_table.case_index.update.project.msg = 'wire';
                return Promise.reject({ pos: ['case_index','update','project' ] })
            }
        }),
        id
    };

}

export function create_category({ parentid ,name }){

    var data = { cat_name:name, parent_id:parentid }
    return {
        types: [ CREATE_CATEGORY, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/addCat?', { data }, {
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
        parentid
    };

}

export function update_category({ name,id,parent_id }){

    var data = { cat_name:name , id ,parent_id }
    return {
        types: [ UPDATE_CATEGORY, UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/saveCat?', { data }, {
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
        id
    };

}


export function create_subcate({ parentid ,name }){

    var data = { cat_name:name, parent_id:parentid }
    return {
        types: [ CREATE_SUBCATE, CREATE_SUBCATE_SUCCESS, CREATE_SUBCATE_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/addCat?', { data }, {
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
        parentid
    };

}

export function update_subcate({ name,id,parent_id }){

    var data = { cat_name:name , id ,parent_id }
    return {
        types: [ UPDATE_SUBCATE, UPDATE_SUBCATE_SUCCESS, UPDATE_SUBCATE_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/saveCat?', { data }, {
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
        id
    };

}

export function delete_cat({ id }){

    var data = { id }
    return {
        types: [ DELETE, DELETE_SUCCESS, DELETE_FAIL],
        promise: (client) => client.POST('http://'+getApiIp()+'/mintAdmin/index.php/Admin/Template/deleteCat?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {

                    return Promise.resolve()

                }else if( res.code == 0){
                    error_table.case_index.delete.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_index','delete' ] })

                }else {
                    //var err = { info: 'auth' }
                    error_table.case_index.update.project.msg = 'notvalid';
                    return Promise.reject({ pos: ['case_index','update','project' ] })
                }
            },
            error: function(err) {
                error_table.case_index.update.project.msg = 'wire';
                return Promise.reject({ pos: ['case_index','update','project' ] })
            }
        }),
        id
    };

}

export function  edit_project({ name }){

    return {
        type:   EDIT_PROJECT,
        result: { name }
    }
}

export function  edit_category({ name }){

    return {
        type:   EDIT_CATEGORY,
        result: { name }
    }
}

export function  edit_subcate({ name }){

    return {
        type:   EDIT_SUBCATE,
        result: { name }
    }
}

export function  pre_edit_project({ id }){

    return {
        type:   PRE_EDIT_PROJECT,
        result: id
    }
}

export function  pre_edit_category({ id }){

    return {
        type:   PRE_EDIT_CATEGORY,
        result: id
    }
}

export function  pre_edit_subcate({ id }){

    return {
        type:   PRE_EDIT_SUBCATE,
        result: id
    }
}

export function  pre_create_project(){

    return {
        type:   PRE_CREATE_PROJECT,
    }
}

export function  pre_create_category(){

    return {
        type:   PRE_CREATE_CATEGORY,
    }
}

export function  pre_create_subcate(){

    return {
        type:   PRE_CREATE_SUBCATE,
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['case_index','loaded'])){
        loaded = state.getIn(['case_index','loaded'])
    }
    if(state.hasIn(['case_index','loading'])){
        loading = state.getIn(['case_index','loading'])
    }
    return loaded || loading
}






