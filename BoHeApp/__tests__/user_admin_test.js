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
import { spy } from 'sinon';
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
  load_users_success
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

import UserAdmin  from 'backend/index.js'

import { load as loadUsers } from 'backend/redux/reducers/user_patient.js'

describe('behavior', function suite() {

  const endGlobalLoadSpy = spy(endGlobalLoad);
  const beginGlobalLoadSpy = spy(beginGlobalLoad);

  const ReduxAsyncConnect = connect(null, {
    beginGlobalLoad: beginGlobalLoadSpy,
    endGlobalLoad: endGlobalLoadSpy,
  })(AsyncConnect);

  pit('auth success to index', function test(){

    window.__SERVER__ = false;

    var preloadstate = Immutable.fromJS({})

    var client = new ApiClient()

    const history = createMemoryHistory();

    var store = configureStore(history, client, preloadstate)

    const proto = ReduxAsyncConnect.WrappedComponent.prototype;



    spy(proto, 'loadAsyncData');
    spy(proto, 'componentDidMount');

    var reloadOnPropsChange = (props, nextProps) => {
        // reload only when path/route has changed
        return props.location.pathname !== nextProps.location.pathname;
    };
    var location = history.createLocation('/useradmin');

    history.push('/useradmin');

    auth_success();

    var wrapper = mount(
                  <Provider store={store} key="provider">
                      <Router routes={routes} location={location} render={(props) => {
                          return (<ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} reloadOnPropsChange={reloadOnPropsChange}/>)}
                      }  history={history}>
                      </Router>
                  </Provider>
                 );


    expect(proto.loadAsyncData.calledOnce).toBe(true);
    expect(proto.componentDidMount.calledOnce).toBe(true);



    expect(beginGlobalLoadSpy.called).toBe(true);
    beginGlobalLoadSpy.reset();

    return proto.loadAsyncData.returnValues[0].then(() => {
      expect(endGlobalLoadSpy.called).toBe(true);
      var state = store.getState().toJS();
      expect(!!state.auth.user).toBe(true)
      expect(mountToJson(wrapper.find('.container-left'))).toMatchSnapshot();
      endGlobalLoadSpy.reset();
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMockAuth();
    })

  });



})
