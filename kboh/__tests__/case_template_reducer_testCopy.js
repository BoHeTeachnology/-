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


describe('case_template function test', function suite() {

    const endGlobalLoadSpy = spy(endGlobalLoad);
    const beginGlobalLoadSpy = spy(beginGlobalLoad);

    const ReduxAsyncConnect = connect(null, {
        beginGlobalLoad: beginGlobalLoadSpy,
        endGlobalLoad: endGlobalLoadSpy,
    })(AsyncConnect);

    pit('load a template > update a template > create a template' , function test() {

                window.__SERVER__ = false;

                var preloadstate = Immutable.fromJS({})


                var client = new ApiClient()

                const history = createMemoryHistory();

                var store = configureStore(history, client, preloadstate)
                let type = 0;
                let project = { id:0 };
                let category = { id:2 };
                let subcategory = { id:4 };
                load_template_success({ project, category, subcategory,type })
                    return store.dispatch(load_template({ project, category, subcategory,type })).then(()=>{
                    var state = store.getState().toJS();
                    console.log("kkkkkkkkkkkkk")
                    console.log(state.case_template.templates)
                    expect(state.case_template.templates['0_0_2_4'].edit.id).toBe('0_0_2_4');
                    expect(state.case_template.templates['0_0_2_4'].edit.index).toEqual({ type:0,project:{id:0},category:{id:2},subcategory:{id:4} });

                    store.dispatch(edit_template({ pairs:[{key:'main',val:'testssssss'},{key:'currentill',val:'testillssss'}] ,pos:{ identify:'0_0_2_4' } }))

                    state = store.getState().toJS();
                    expect(state.case_template.templates['0_0_2_4'].edit.main).toBe('testssssss');
                    expect(state.case_template.templates['0_0_2_4'].edit.currentill).toBe('testillssss');


                    update_template_success({ edit:state.case_template.templates['0_0_2_4'].edit })

                    return store.dispatch(update_template({ edit:state.case_template.templates['0_0_2_4'].edit }))
                }).then(() => {
                    let state = store.getState().toJS();
                    expect(state.case_template.templates['0_0_2_4'].template.main).toBe('testssssss');
                    expect(state.case_template.templates['0_0_2_4'].template.currentill).toBe('testillssss');
                    let type = 0;
                    let project =  {id:0};
                    let category = {id:2};
                    let subcategory =  {id:5};
                    load_template_success({ project, category, subcategory,type })
                    return store.dispatch(load_template({ project, category, subcategory,type }))
                  }).then(() => {
                    store.dispatch(edit_template({ pairs:[{ key:'index' , val:{ type:0,project:{id:0},category:{id:2},subcategory:{id:5} } },{key:'main',val:'newtestssssss'},{key:'currentill',val:'newtestillssss'}] ,pos:{ identify:'0_0_2_5' } }))

                    var state = store.getState().toJS();
                    expect(state.case_template.templates['0_0_2_5'].edit.main).toBe('newtestssssss');
                    expect(state.case_template.templates['0_0_2_5'].edit.currentill).toBe('newtestillssss');
                    expect(state.case_template.templates['0_0_2_5'].edit.index).toEqual({ type:0,project:{id:0},category:{id:2},subcategory:{id:5} })

                    create_template_success({ edit:state.case_template.templates['0_0_2_5'].edit})
                    return store.dispatch(create_template({ edit:state.case_template.templates['0_0_2_5'].edit}))
                }).then(()=>{
                    let state = store.getState().toJS();
                    expect(state.case_template.templates['0_0_2_5'].template).toEqual({"currentill": "newtestillssss", "index": {"category": {"id": 2}, "project": {"id": 0}, "subcategory": {"id": 5}, "type": 0}, "main": "newtestssssss"});

                })
    })

})
