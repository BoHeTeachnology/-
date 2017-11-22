import Promise from 'bluebird';
import React ,{ PropTypes }from 'react';
import {
  Provider,
  connect
} from 'react-redux';
import { Router,
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
import { default as Immutable } from 'immutable';

import routes from 'backend/routes.js'

import { load as loadAuth } from 'backend/redux/reducers/auth.js'

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

import CaseList,{ asyncEvent as caseListAsync }  from 'backend/caseadmin/case/caselist.js'

import CaseInfo,{ asyncEvent as caseInfoAsync }  from 'backend/caseadmin/case/caseinfo.js'


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
    edit_meta_data,
    frontCase
} from 'backend/redux/reducers/case_patient.js'

import {
  load_success as load_case_index_success,
  create_project_success,
  create_category_success,
  create_subcategory_success,
  update_project_success,
  update_category_success,
  update_subcategory_success
} from '../__mocks__/backend/server_case_index_patient_mocker.js'

describe('behavior', function suite() {

  const endGlobalLoadSpy = spy(endGlobalLoad);
  const beginGlobalLoadSpy = spy(beginGlobalLoad);

  const ReduxAsyncConnect = connect(null, {
    beginGlobalLoad: beginGlobalLoadSpy,
    endGlobalLoad: endGlobalLoadSpy,
  })(AsyncConnect);
  init_case_repo();
  pit('auth success to case list show', function test(){

            window.__SERVER__ = false;

            var preloadstate = Immutable.fromJS({})

            var client = new ApiClient()

            const history = createMemoryHistory();

            var store = configureStore(history, client, preloadstate)

            var template;
            var basicinfowrapper;
            var caseinfoui;
            var proto;
            auth_success();

            return store.dispatch( loadAuth({}) ).then(() => {

                const promises = [];

                load_cases_success({begin:0});

                caseListAsync.forEach(function(p){
                     promises.push(p.promise({store,params:{}}))
                })

                return Promise.all(promises)
            }).then(()=>{

                let state = store.getState().toJS();
                const context = {
                    store,
                    showRight: function({
                        asyncProcess,
                        comCreater
                      }){
                         expect(asyncProcess).toEqual([]);
                      }
                };
               const childContextTypes = {
                 showRight: React.PropTypes.func.isRequired,
               };

                console.log("LLLLSSS")
                console.log(state.case_patient);

                expect(state.case_patient.cases[0].id).toBe(0);
                expect(state.case_patient.cases[4].id).toBe(4);
                var caselistui = mount(<CaseList/>,{ context,childContextTypes })
                expect(mountToJson(caselistui)).toMatchSnapshot();
                load_caselist_of_user_success(state.case_patient.cases[0].userid)
                load_case_detail_success({id:state.case_patient.cases[0].id,userid:state.case_patient.cases[0].userid})
                load_case_index_success()
                const promises = [];
                caseInfoAsync.forEach(function(p){
                     promises.push(p.promise({store,params:{userid:state.case_patient.cases[0].userid,id:state.case_patient.cases[0].id}}))
                })
                store.dispatch(frontCase({userid:state.case_patient.cases[0].userid,id:state.case_patient.cases[0].id}));
                return Promise.all(promises)

            }).then(()=>{

                let state = store.getState().toJS();
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo[state.case_patient.cases[0].id].case_bak.id).toBe(0);
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo[state.case_patient.cases[0].id].case_bak.meta_data).toEqual([
                   { template_id:'0_0_2_4', main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                   { template_id:'0_0_1_2', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                   { template_id:'1_0_1_3', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'}
                   ]);
                const context = {
                    store,
                    showRight: function({
                        asyncProcess,
                        comCreater
                      }){
                         expect(asyncProcess).toEqual([]);
                      }
                };
                const childContextTypes = {
                 showRight: React.PropTypes.func.isRequired,
                };
                expect(state.case_patient.ucases[state.case_patient.cases[0].userid].repo[state.case_patient.cases[0].id].case_bak.meta_data.length).toBe(3);

                proto = CaseInfo.WrappedComponent.prototype;

                spy(proto,'addMainTemplate');
                spy(proto,'addCheckTemplate');
                spy(proto,'addCureTemplate');

                caseinfoui = mount(<CaseInfo/>,{ context,childContextTypes })

                expect(mountToJson(caseinfoui)).toMatchSnapshot();

                caseinfoui.find('.default_inputbtn .see-but3').at(0).simulate('click');

                caseinfoui.find('.select_case_top .W100px').at(0).simulate('change',{target:{value:0}})

                caseinfoui.find('.select_case_top .W100px').at(1).simulate('change',{target:{value:0}})

                caseinfoui.find('.select_case_top .W100px').at(2).simulate('change',{target:{value:4}})

                caseinfoui.find('.select_case_top .W100px').at(3).simulate('change',{target:{value:10}})


                load_template_success({ project:{id:0}, category:{id:4}, subcategory:{id:10},type:0 })

                caseinfoui.find('.addmaintemplate').simulate('click');
                return proto.addMainTemplate.returnValues[0];
            }).then(()=>{
                expect(mountToJson(caseinfoui.find('.case_container_main'))).toMatchSnapshot();

                caseinfoui.find('.select_case_top .W100px').at(4).simulate('change',{target:{value:0}})

                caseinfoui.find('.select_case_top .W100px').at(5).simulate('change',{target:{value:5}})

                caseinfoui.find('.select_case_top .W100px').at(6).simulate('change',{target:{value:11}})

                load_template_success({ project:{id:0}, category:{id:5}, subcategory:{id:11},type:0 })

                caseinfoui.find('.addchecktemplate').simulate('click');
                return proto.addCheckTemplate.returnValues[0];
            }).then(()=>{
               expect(mountToJson(caseinfoui.find('.case_container_main'))).toMatchSnapshot();

               caseinfoui.find('.select_case_top .W100px').at(7).simulate('change',{target:{value:0}})

               caseinfoui.find('.select_case_top .W100px').at(8).simulate('change',{target:{value:5}})

               caseinfoui.find('.select_case_top .W100px').at(9).simulate('change',{target:{value:11}})

               load_template_success({ project:{id:0}, category:{id:5}, subcategory:{id:11},type:0 })

               caseinfoui.find('.addcuretemplate').simulate('click');
               return proto.addCureTemplate.returnValues[0];
            }).then(()=>{
               expect(mountToJson(caseinfoui.find('.case_container_main'))).toMatchSnapshot();
            })
  });



})
