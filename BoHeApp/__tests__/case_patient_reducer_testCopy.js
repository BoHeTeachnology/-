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

describe('case_patient function test', function suite() {

    const endGlobalLoadSpy = spy(endGlobalLoad);
    const beginGlobalLoadSpy = spy(beginGlobalLoad);

    const ReduxAsyncConnect = connect(null, {
        beginGlobalLoad: beginGlobalLoadSpy,
        endGlobalLoad: endGlobalLoadSpy,
    })(AsyncConnect);
    init_case_repo();
    pit('load cases for you to click > load timelist for user of case[0] > load case[0] detail > create > update' , function test() {

                window.__SERVER__ = false;

                var preloadstate = Immutable.fromJS({})


                var client = new ApiClient()

                const history = createMemoryHistory();

                var store = configureStore(history, client, preloadstate)

                load_cases_success({begin:0})

                return store.dispatch(load_cases({begin:0,num:10})).then(()=>{
                var state = store.getState().toJS();
                expect(state.case_patient.cases[0].id).toBe(0);
                expect(state.case_patient.cases[4].id).toBe(4);
                load_caselist_of_user_success(state.case_patient.cases[0].userid)

                return store.dispatch(load_caselist_of_user({userid:state.case_patient.cases[0].userid}))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].timeseq.length).toBe(5);
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo).toEqual({"new": {"case_bak": {}, "edit": {}, "loaded": false, "loading": false}});
                load_case_detail_success({id:state.case_patient.cases[0].id,userid:state.case_patient.cases[0].userid})
                return store.dispatch(load_case_detail({id:state.case_patient.cases[0].id,userid:state.case_patient.cases[0].userid}))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo[state.case_patient.cases[0].id].case_bak.id).toBe(0);
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo[state.case_patient.cases[0].id].case_bak.meta_data).toEqual([
                   { template_id:'0_0_2_4', main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                   { template_id:'0_0_1_2', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                   { template_id:'1_0_1_3', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'}
                   ]);

                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo[state.case_patient.cases[0].id].case_bak.meta_data.length).toBe(3);

                let userid = state.case_patient.cases[0].userid;
                store.dispatch(edit_normal_info({ pairs:[{key:'clinicname',val:'欢乐口腔'},
                                                         {key:'userid',val:userid },
                                                         {key:'phone',val:'13520104532'},
                                                         {key:'doctorname',val:'nanzhe'},
                                                         {key:'contact',val:'18920104532'},
                                                         {key:'time',val:'newadd'}],
                                                  pos:{userid,id:'new'}
                                                }))
                let content = { main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。' }
                store.dispatch(edit_meta_data({template_id:'0_0_2_4',
                                  content,
                                  pos:{userid,id:'new'}
                                }))

                state = store.getState().toJS();
                expect(state.case_patient.ucases[userid].repo['new'].edit.meta_data['0_0_2_4']).toEqual(content);
                let case_edit = state.case_patient.ucases[userid].repo['new'].edit;
                create_case_success({ case_edit })

                return store.dispatch(create_case({ case_edit }))
                }).then(()=>{
                  let state = store.getState().toJS();
                  let userid = state.case_patient.cases[0].userid;
                  expect(state.case_patient.ucases[userid].timeseq.length).toBe(6);
                  var id = state.case_patient.ucases[userid].timeseq[5].id;
                  var time = state.case_patient.ucases[userid].timeseq[5].time;
                  expect(state.case_patient.ucases[userid].repo[id].edit.time).toBe(time);

                  store.dispatch(edit_normal_info({ pairs:[{key:'clinicname',val:'updatedclinic'}], pos:{userid,id}}))
                  state = store.getState().toJS();
                  expect(state.case_patient.ucases[userid].repo[id].edit.clinicname).toBe('updatedclinic');
                  let content = { check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。' }
                  store.dispatch(edit_meta_data({ template_id:'0_0_2_5', content  , pos:{userid,id}}))
                  state = store.getState().toJS();
                  let case_edit = state.case_patient.ucases[userid].repo[id].edit;
                  expect(case_edit.meta_data['0_0_2_5']).toEqual(content);

                  update_case_success({ case_edit })
                  return store.dispatch(update_case({ case_edit }))
               }).then(()=>{
                  let state = store.getState().toJS();
                  var id = state.case_patient.ucases[state.case_patient.cases[0].userid].timeseq[5].id;
                  var acase = state.case_patient.ucases[state.case_patient.cases[0].userid].repo[id].case_bak;
                  expect(acase.clinicname).toBe('updatedclinic')
               })
    })

})
