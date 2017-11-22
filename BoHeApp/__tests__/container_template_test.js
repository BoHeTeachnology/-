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
  load_users_success
} from '../__mocks__/backend/server_user_patient_mocker.js'

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

import Template,{ asyncEvent as templateAsync }  from 'backend/caseadmin/container_template.js'

import Panel from 'backend/caseadmin/template/template_panel.js'

import {
  load_success as load_case_index_success,
  create_project_success,
  create_category_success,
  create_subcategory_success,
  update_project_success,
  update_category_success,
  update_subcategory_success
} from '../__mocks__/backend/server_case_index_patient_mocker.js'

import Project from 'backend/caseadmin/template/project.js'

import Category from 'backend/caseadmin/template/category.js'

import Subcategory from 'backend/caseadmin/template/subcategory.js'

describe('behavior', function suite() {

  const endGlobalLoadSpy = spy(endGlobalLoad);
  const beginGlobalLoadSpy = spy(beginGlobalLoad);

  const ReduxAsyncConnect = connect(null, {
    beginGlobalLoad: beginGlobalLoadSpy,
    endGlobalLoad: endGlobalLoadSpy,
  })(AsyncConnect);

  pit('auth success to template show', function test(){

            window.__SERVER__ = false;

            var preloadstate = Immutable.fromJS({})

            var client = new ApiClient()

            const history = createMemoryHistory();

            var store = configureStore(history, client, preloadstate)

            var template;
            var basicinfowrapper;

            auth_success();

            return store.dispatch( loadAuth({}) ).then(() => {

                const promises = [];

                load_case_index_success();

                templateAsync.forEach(function(p){
                     promises.push(p.promise({store,params:{}}))
                })

                return Promise.all(promises)
            }).then(()=>{
                var proto = Template.WrappedComponent.prototype;
                spy(proto,'showUserData');

                let state = store.getState().toJS();
                const context = {
                    store
                };
                expect(state.case_index.projects).toEqual([ { name:'洗牙',id:0,relations:[4,5] },{ name:'根管治疗',id:1, relations:[6,7] },{ name:'冠修复',id:2, relations:[8,9] },{ name:'拔牙',id:3 } ]);
                expect(state.case_index.categorys).toEqual([ { name:'复杂冠折',id:4,relations:[10] }, { name:'牙髓炎',id:5, relations:[11] }, { name:'根尖牙周炎',id:6,relations:[12] },{ name:'复杂冠折虎',id:7,relations:[13,14] }, { name:'牙髓炎2',id:8, relations:[15,16] }, { name:'根尖牙周炎10',id:9,relations:[17] }  ])
                expect(state.case_index.subcategorys).toEqual([ { name:'根尖囊肿',id:10 },{ name:'慢性根尖牙周炎',id:11 },{ name:'急性根尖牙周炎2',id:12 },{ name:'根尖囊肿3',id:13 },{ name:'慢性根尖牙周炎44',id:14 },{ name:'急性根尖牙周炎33',id:15 },{ name:'根尖囊肿112',id:16 },{ name:'慢性根尖牙周炎www',id:17 },{ name:'急性根尖牙周炎aa',id:18 }]);
                template = mount(<Template/>,{ context })
                expect(mountToJson(template.find(Project))).toMatchSnapshot();

                expect(mountToJson(template.find(Category))).toMatchSnapshot();

                expect(mountToJson(template.find(Subcategory))).toMatchSnapshot();

                var projectui = template.find(Project);

                expect(mountToJson(projectui.find('li'))).toMatchSnapshot();

                projectui.find('li').at(0).simulate('click')

                expect(mountToJson(template.find(Category))).toMatchSnapshot();

                var categoryui = template.find(Category)

                expect(mountToJson(categoryui.find('li'))).toMatchSnapshot();

                categoryui.find('li').at(0).simulate('click');

                expect(mountToJson(template.find(Subcategory))).toMatchSnapshot();

                var subcate = template.find(Subcategory);

                load_template_success({ project:{id:0}, category:{id:4}, subcategory:{id:10},type:0})

                subcate.find('li').at(0).simulate('click');

                expect(mountToJson(template.find(Panel))).toMatchSnapshot();

                
                return proto.showUserData.returnValues[0];
            }).then(( ) => {

                let state = store.getState().toJS();
                expect(state.case_template.templates['0_0_4_10'].template).toEqual({ id:'0_0_4_10',index:{ type:0,project:{id:0},category:{id:4},subcategory:{id:10} }, main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'});
                expect(mountToJson(template.find(Panel))).toMatchSnapshot();
      


            })
  });



})
