import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom';


import Promise from 'bluebird'

import Immutable from 'immutable'

import { Provider } from 'react-redux'
import { Router, match, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { configureStore, DevTools } from 'app/configure-store'

import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'

import routes from 'app/routes.js'

import ApiClient from 'app/isomorphic-api/ApiClient'

import MyOrders from 'app/usercenter/myorder/myorders.js'

import { auth_success } from './mocker/server_mocker.js'

import UserCenter  from 'app/usercenter/main.js'

import TestUtils from 'react/lib/ReactTestUtils';

import createMockerMiddle from './mocker/mocker_middleware.js'

describe('myorders', function() {

    var store;

    var component;

    var fakelocation;
     
    var history;

    var ReactDom$ = ReactDom;
  
    var TestUtils$ = TestUtils;

    beforeEach(function() {
        //console.log("GGGG")
        //console.log(window.location)

        //window.onbeforeunload = () => 'Oh no!';
  

    });
    afterEach(function() {

    })

    it('main-page', function(done) {

        var preloadstate = Immutable.fromJS({})

        var client = new ApiClient()

        store = configureStore(browserHistory, client, preloadstate,createMockerMiddle(done))
 

        history = syncHistoryWithStore(browserHistory, store, {
            selectLocationState(state) {
                return state.get('routing').toJS();
            }
        })

        var reloadOnPropsChange = (props, nextProps) => {
            // reload only when path/route has changed
            return props.location.pathname !== nextProps.location.pathname;
        };
        location = history.createLocation('/usercenter');

        component = (
           <Router routes={routes} location={location} render={(props) => {
               return (<ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} reloadOnPropsChange={reloadOnPropsChange}/>)}
           }  history={history}>
           </Router>
        );



         history.push('/usercenter')
         auth_success();
         match({routes: routes, location:location}, () => {

         var usercenter = TestUtils.renderIntoDocument((<Provider store={store} key="provider">
                                                         {component}
                                                       </Provider>))
       
       /*
         var nest = Promise.resolve();


         for (var i = 20; i >= 0; i--) {
              nest = nest.then(function(){
              })
         };
         nest.then(function() {
              var state = store.getState().toJS();
              expect(state.auth.loaded).toBe(true);
              expect(state.auth.loading).toBe(false);
              expect(state.auth.user.username).toBe("king");
              expect(state.auth.user.valid).toBe(1);
              var UserCenterDOM = ReactDom$.findDOMNode(usercenter);
              const chuzhen = UserCenterDOM.querySelectorAll('div')[2]; 
                 
 
            done();
        })
*/

       console.log("ddddd")
     })

     


    });
});
