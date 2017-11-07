import Promise from 'bluebird';
import React from 'react';
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
import { spy,stub } from 'sinon';
import { default as Immutable } from 'immutable';

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
  load_users_success,
  resetMock as resetMockUp
} from '../__mocks__/backend/server_user_patient_mocker.js'

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

import  UserListCom,{ asyncEvent as userListAsync } from  'backend/useradmin/userlist.js'

import { load as loadAuth } from 'backend/redux/reducers/auth.js'

import {
  load as loadUsers,
  frontUserForInfo as toShowUserInfo
} from 'backend/redux/reducers/user_patient.js'

import ReactPaginate from 'react-paginate';

describe('behavior', function suite() {

   pit('auth fail ', function test(){

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})

        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        var userlist;

        auth_is_not_valid();

        return store.dispatch( loadAuth({}) ).then(()=>{},()=>{
            const context = {
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

           userlist = mount(<UserListCom store={store}/>,{ context,childContextTypes })
           expect(mountToJson(userlist)).toMatchSnapshot();
           resetMockAuth();
        })

   })

    pit('auth success > users load success', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})

        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        var userlist;

        auth_success();

        return store.dispatch( loadAuth({}) ).then(() => {

            const promises = [];

            load_users_success({begin:0})

            userListAsync.forEach(function(p){
                 promises.push(p.promise({store,params:{}}))
            })

            return Promise.all(promises)
        }).then(()=>{
            const context = {
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
            var proto = UserListCom.WrappedComponent.prototype;
            //stub(proto,'handlePageClick',function(){ console.log("lklklklklklklk........")});
            spy(proto,'handlePageClick');
            userlist = mount(<UserListCom store={store}/>,{ context,childContextTypes })
            expect(mountToJson(userlist)).toMatchSnapshot();
            let state = store.getState().toJS();
            expect(state.user_patient.users.length).toEqual(10);
            let pageginate = userlist.find(ReactPaginate);
            expect(state.user_patient.users[0].id).toBe(0);
            load_users_success({begin:10})
            pageginate.find('a').at(2).simulate('click');
            expect(proto.handlePageClick.calledOnce).toBe(true);
            return proto.handlePageClick.returnValues[0];
        }).then(()=>{
           let state = store.getState().toJS();
           expect(state.user_patient.users[0].id).toBe(10);
           expect(mountToJson(userlist)).toMatchSnapshot();
           userlist.find('#accountTbody .W100 > span').at(0).simulate('click')
           state = store.getState().toJS();
           expect(state.user_patient.frontuserinfo.id).toBe(10);
           expect(state.user_patient.frontuserinfo.idx).toBe(0);
           userlist.find('.add-but').simulate('click');
           state = store.getState().toJS();
           expect(state.user_patient.frontuserinfo.id).toBe('add');
           expect(state.user_patient.frontuserinfo.idx).toBe('add');
           resetMockAuth();
           resetMockUp();
        })

    });




})

