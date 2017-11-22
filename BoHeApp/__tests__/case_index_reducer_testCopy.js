import Promise from 'bluebird';
import React from 'react';
import {
    Provider,
    connect
} from 'react-redux';
import {
    Router,
    createMemoryHistory,
    match,
    Route,
    IndexRoute
} from 'react-router';

import {
    createStore,
    combineReducers
} from 'redux';
import { combineReducers as combineImmutableReducers } from 'redux-immutable';
import {
    mount,
    render
} from 'enzyme';
import { spy } from 'sinon';
import {
    default as Immutable } from 'immutable';

import routes from 'backend/routes.js'

import {
    configureStore,
    DevTools
} from 'backend/configure-store'

import ApiClient from 'backend/isomorphic-api/ApiClient'

import {
    auth_success,
    auth_is_not_valid,
    auth_response_error_500,
    auth_success_serverrender_openid,
    auth_failed_serverrender_openid,
    resetMock as resetMockAuth
} from '../__mocks__/backend/server_auth_mocker.js'

import {
    load,
    load_detail_baseinfo,
    load_detail_history,
    load_detail_oral,
    create_user,
    update_baseinfo,
    create_historyinfo,
    create_oralinfo,
    update_historyinfo,
    update_oralinfo,
    frontUserForInfo,
    historyEditADD
} from 'backend/redux/reducers/user_patient.js'

import {
    load_users_success,
    load_users_success_result,
    load_users_fail,
    load_history_success_result,
    load_history_success,
    load_history_fail,
    load_baseinfo_success,
    load_baseinfo_fail,
    load_oral_success,
    load_oral_success_result,
    load_oral_fail,
    create_user_success,
    create_history_success,
    create_oral_success,
    create_history_fail,
    create_oral_fail,
    resetMock
} from '../__mocks__/backend/server_user_patient_mocker.js'

import {
   load_success as load_cases_success,
   load_fail    as load_cases_fail,
   load_detail_success as load_case_detail_success,
   update_case_success as update_case_success,
   init_repo as init_case_repo,
   create_case_success as create_case_success,
   load_caselist_of_user_success
} from '../__mocks__/backend/server_case_patient_mocker.js'

import {
    load as load_cases,
    load_detail as load_case_detail,
    create_case,
    update_case,
    load_caselist_of_user,
    edit_normal_info,
    edit_meta_data
} from 'backend/redux/reducers/case_patient.js'

import {

   load_template,
   update_template,
   create_template,
   edit_template
} from 'backend/redux/reducers/case_template.js'

import {
  load_template_success,
  update_template_success,
  create_template_success
} from '../__mocks__/backend/server_case_template_patient_mocker.js'

import {
  load_success as load_case_index_success,
  create_project_success,
  create_category_success,
  create_subcategory_success,
  update_project_success,
  update_category_success,
  update_subcategory_success
} from '../__mocks__/backend/server_case_index_patient_mocker.js'

import {
  load as load_case_index,
  create_project,
  create_category,
  create_subcategory,
  update_project,
  update_category,
  update_subcategory,
  edit_project,
  edit_category,
  edit_subcate,
  pre_edit_project,
  pre_edit_category,
  pre_edit_subcate,
  pre_create_project,
  pre_create_category,
  pre_create_subcate
} from 'backend/redux/reducers/case_index.js'

import {
    endGlobalLoad,
    beginGlobalLoad
} from '../node_modules/redux-connect/lib/store';

import AsyncConnect from '../node_modules/redux-connect/lib/components/AsyncConnect';

import {
    mountToJson,
    renderToJson
} from 'enzyme-to-json';

import { loadOnServer } from 'redux-connect'

import { renderToString } from 'react-dom/server'

describe('case_index function test', function suite() {

    const endGlobalLoadSpy = spy(endGlobalLoad);
    const beginGlobalLoadSpy = spy(beginGlobalLoad);

    const ReduxAsyncConnect = connect(null, {
        beginGlobalLoad: beginGlobalLoadSpy,
        endGlobalLoad: endGlobalLoadSpy,
    })(AsyncConnect);

    pit('load all index > update a index > create a index > update project fail > create project fail' , function test() {

                window.__SERVER__ = false;

                var preloadstate = Immutable.fromJS({})


                var client = new ApiClient()

                const history = createMemoryHistory();

                var store = configureStore(history, client, preloadstate)
                load_case_index_success()
                    return store.dispatch(load_case_index()).then(()=>{
                    var state = store.getState().toJS();

                    expect(state.case_index.projects).toEqual([ { name:'洗牙',id:0,relations:[4,5] },{ name:'根管治疗',id:1, relations:[6,7] },{ name:'冠修复',id:2, relations:[8,9] },{ name:'拔牙',id:3 } ]);
                    expect(state.case_index.categorys).toEqual([ { name:'复杂冠折',id:4,relations:[10] }, { name:'牙髓炎',id:5, relations:[11] }, { name:'根尖牙周炎',id:6,relations:[12] },{ name:'复杂冠折虎',id:7,relations:[13,14] }, { name:'牙髓炎2',id:8, relations:[15,16] }, { name:'根尖牙周炎10',id:9,relations:[17] }  ])
                    expect(state.case_index.subcategorys).toEqual([ { name:'根尖囊肿',id:10 },{ name:'慢性根尖牙周炎',id:11 },{ name:'急性根尖牙周炎2',id:12 },{ name:'根尖囊肿3',id:13 },{ name:'慢性根尖牙周炎44',id:14 },{ name:'急性根尖牙周炎33',id:15 },{ name:'根尖囊肿112',id:16 },{ name:'慢性根尖牙周炎www',id:17 },{ name:'急性根尖牙周炎aa',id:18 }]);

                    store.dispatch(pre_edit_project({id:0}))
                    state = store.getState().toJS();
                    expect(state.case_index.projectedit).toEqual({ name:'洗牙',id:0,relations:[4,5] })
                    store.dispatch(edit_project({ name:'洗牙2',id:0}))
                    state = store.getState().toJS();
                    expect(state.case_index.projectedit).toEqual({ name:'洗牙2',id:0,relations:[4,5] })

                    update_project_success(state.case_index.projectedit)
                    return store.dispatch(update_project(state.case_index.projectedit))
                }).then(() => {
                    var state = store.getState().toJS();
                    expect(state.case_index.projects[0]).toEqual({ name:'洗牙2',id:0,relations:[4,5] })
                    store.dispatch(pre_create_project());
                    state = store.getState().toJS();
                    expect(state.case_index.projectedit).toEqual({});
                    store.dispatch(edit_project({ name:'洗牙3' }));
                    state = store.getState().toJS();
                    expect(state.case_index.projectedit).toEqual({ name:'洗牙3' })
                    expect(state.case_index.projects[0]).toEqual({ name:'洗牙2',id:0,relations:[4,5] })
                    expect(state.case_index.projects.length).toEqual(4)
                    create_project_success({ name: '洗牙3' });
                    return store.dispatch(create_project({ name: '洗牙3'  }))
                }).then(() => {
                    var state = store.getState().toJS();
                    expect(state.case_index.projects.length).toEqual(5)
                    expect(state.case_index.projects[4]).toEqual({ name:'洗牙3',id:19 })
                /////////////////////////////////////////////////////////

                }).then(()=>{
                    var state = store.getState().toJS();
                    expect(state.case_index.projects).toEqual([ { name:'洗牙2',id:0,relations:[4,5] },{ name:'根管治疗',id:1, relations:[6,7] },{ name:'冠修复',id:2, relations:[8,9] },{ name:'拔牙',id:3 },{ name:'洗牙3',id:19 } ]);
                    expect(state.case_index.categorys).toEqual([ { name:'复杂冠折',id:4,relations:[10] }, { name:'牙髓炎',id:5, relations:[11] }, { name:'根尖牙周炎',id:6,relations:[12] },{ name:'复杂冠折虎',id:7,relations:[13,14] }, { name:'牙髓炎2',id:8, relations:[15,16] }, { name:'根尖牙周炎10',id:9,relations:[17] }  ])
                    expect(state.case_index.subcategorys).toEqual([ { name:'根尖囊肿',id:10 },{ name:'慢性根尖牙周炎',id:11 },{ name:'急性根尖牙周炎2',id:12 },{ name:'根尖囊肿3',id:13 },{ name:'慢性根尖牙周炎44',id:14 },{ name:'急性根尖牙周炎33',id:15 },{ name:'根尖囊肿112',id:16 },{ name:'慢性根尖牙周炎www',id:17 },{ name:'急性根尖牙周炎aa',id:18 }]);

                    store.dispatch(pre_edit_category({id:4}))
                    state = store.getState().toJS();
                    expect(state.case_index.categoryedit).toEqual({ name:'复杂冠折',id:4,relations:[10] })
                    store.dispatch(edit_category({ name:'复杂冠折2' }))
                    state = store.getState().toJS();
                    expect(state.case_index.categoryedit).toEqual({ name:'复杂冠折2',id:4,relations:[10] })

                    update_category_success(state.case_index.categoryedit)
                    return store.dispatch(update_category(state.case_index.categoryedit))
                }).then(() => {
                    var state = store.getState().toJS();
                    expect(state.case_index.categorys[0]).toEqual({ name:'复杂冠折2',id:4,relations:[10] })
                    store.dispatch(pre_create_category());
                    state = store.getState().toJS();
                    expect(state.case_index.categoryedit).toEqual({});
                    store.dispatch(edit_category({ name:'复杂冠折3' }));
                    state = store.getState().toJS();
                    expect(state.case_index.categoryedit).toEqual({ name:'复杂冠折3' })
                    expect(state.case_index.categorys[0]).toEqual({ name:'复杂冠折2',id:4,relations:[10] })
                    expect(state.case_index.categorys.length).toEqual(6)
                    create_category_success({parentid:0  ,name: '复杂冠折3' });
                    return store.dispatch(create_category({parentid:0, name: '复杂冠折3'  }))
                }).then(() => {
                    var state = store.getState().toJS();
                    expect(state.case_index.categorys.length).toEqual(7)
                    expect(state.case_index.categorys[6]).toEqual({"id": 20, "name": "复杂冠折3"})

                }).then(() => {

                } )
    })

})
