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

describe('user_patient function test', function suite() {

    const endGlobalLoadSpy = spy(endGlobalLoad);
    const beginGlobalLoadSpy = spy(beginGlobalLoad);

    const ReduxAsyncConnect = connect(null, {
        beginGlobalLoad: beginGlobalLoadSpy,
        endGlobalLoad: endGlobalLoadSpy,
    })(AsyncConnect);

     pit('load patient fail', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_fail({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(()=>{},() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(false);
            expect(state.user_patient.error).toEqual({ pos: ['user_patient','load'] });
            resetMock()
        });
    });

    pit('load patient success > load baseinfo', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_success({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(true);
            expect(state.user_patient.users[0]).toEqual(load_users_success_result(0));
            load_baseinfo_success({id:state.user_patient.users[0].id})
            return store.dispatch(load_detail_baseinfo({ id:state.user_patient.users[0].id }))
        }).then(()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.users[0].baseinfo).toEqual( { id:state.user_patient.users[0].id,age:'666'  })
            resetMock()
        })
    });

    pit('load patient success > load baseinfo fail', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_success({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(true);
            expect(state.user_patient.users[0]).toEqual(load_users_success_result(0));
            load_baseinfo_fail({id:state.user_patient.users[0].id})
            return store.dispatch(load_detail_baseinfo({ id:state.user_patient.users[0].id }))
        }).then(()=>{},()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.error).toEqual( { pos: ['user_patient','loaddetail','baseinfo',state.user_patient.users[0].id]})
            resetMock()
        })
    });

    pit('load patient success > load historyinfo success', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_success({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(true);
            expect(state.user_patient.users[0]).toEqual(load_users_success_result(0));
            load_history_success({userid:state.user_patient.users[0].id})
            return store.dispatch(load_detail_history({ userid:state.user_patient.users[0].id }))
        }).then(()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.users[0].allhistory).toEqual( load_history_success_result({userid:state.user_patient.users[0].id}).allhistory)
            resetMock()
        })
    });

    pit('load patient success > load historyinfo fail', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_success({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(true);
            expect(state.user_patient.users[0]).toEqual(load_users_success_result(0));
            load_history_fail({userid:state.user_patient.users[0].id})
            return store.dispatch(load_detail_history({ userid:state.user_patient.users[0].id }))
        }).then(()=>{},()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.error).toEqual( { pos: ['user_patient','loaddetail','history',state.user_patient.users[0].id] })
            resetMock()
        })
    });


pit('load patient success > load oralinfo success', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_success({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(true);
            expect(state.user_patient.users[0]).toEqual(load_users_success_result(0));
            load_oral_success({userid:state.user_patient.users[0].id})
            return store.dispatch(load_detail_oral({ userid:state.user_patient.users[0].id }))
        }).then(()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.users[0].alloral).toEqual( load_oral_success_result({userid:state.user_patient.users[0].id}).alloral)
            resetMock()
        })
    });

    pit('load patient success > load oralinfo fail', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        load_users_success({begin:0})

        return store.dispatch(load({
            num: 10,
            begin: 0
        })).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.loading).toBe(false);
            expect(state.user_patient.loaded).toBe(true);
            expect(state.user_patient.users[0]).toEqual(load_users_success_result(0));
            load_oral_fail({userid:state.user_patient.users[0].id})
            return store.dispatch(load_detail_oral({ userid:state.user_patient.users[0].id }))
        }).then(()=>{},()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.error).toEqual( { pos: ['user_patient','loaddetail','oral',state.user_patient.users[0].id] })
            resetMock()
        })
    });

    pit('create user > load history success  > load oral success ', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        create_user_success()
        store.dispatch(frontUserForInfo({idx:'add',id:'add'}));

        return store.dispatch(create_user({})).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            load_history_success({ userid:state.user_patient.newuser.id })
            return store.dispatch(load_detail_history({ userid:state.user_patient.newuser.id }))
        }).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.newuser.allhistory).toEqual( load_history_success_result({userid:state.user_patient.newuser.id}).allhistory)
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            load_oral_success({ userid:state.user_patient.newuser.id })
            return store.dispatch(load_detail_oral({ userid:state.user_patient.newuser.id }))
        }).then(()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            expect(state.user_patient.newuser.alloral).toEqual( load_oral_success_result({userid:state.user_patient.newuser.id}).alloral)
            resetMock()
        })
    });

    pit('create user > load history fail  > load oral fail ', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        create_user_success()
        store.dispatch(frontUserForInfo({idx:'add',id:'add'}));

        return store.dispatch(create_user({})).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            load_history_fail({ userid:state.user_patient.newuser.id })
            return store.dispatch(load_detail_history({ userid:state.user_patient.newuser.id }))
        }).then(() => {},() => {
            let state = store.getState().toJS();
            expect(state.user_patient.error).toEqual({ pos: ['user_patient','loaddetail','history',state.user_patient.newuser.id] } )
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            load_oral_fail({ userid:state.user_patient.newuser.id })
            return store.dispatch(load_detail_oral({ userid:state.user_patient.newuser.id }))
        }).then(()=>{},()=>{
            let state = store.getState().toJS();
            expect(state.user_patient.error).toEqual({ pos: ['user_patient','loaddetail','oral',state.user_patient.newuser.id] } )
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            resetMock()
        })
    });

    pit('create user  >  create history success  > create oral success', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        create_user_success()
        store.dispatch(frontUserForInfo({idx:'add',id:'add'}));
        var historyinfosize=0;
        return store.dispatch(create_user({})).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            load_history_success({ userid:state.user_patient.newuser.id })
            return store.dispatch(load_detail_history({ userid:state.user_patient.newuser.id }))
            }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999)
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                store.dispatch(historyEditADD({key:'surgery',val:{ name: 'test1'}}));
                store.dispatch(historyEditADD({key:'allergy',val:{ name: 'test2'}}));
                store.dispatch(historyEditADD({key:'infection',val:{ name: 'test3'}}));

                expect(state.user_patient.newuser.allhistory.length).toBe(2);

                let historyedit = state.user_patient.newuser.historyedit;
                expect(historyedit.userid).toBe(state.user_patient.newuser.id);
                create_history_success({historyedit})
                return store.dispatch(create_historyinfo({ historyedit }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999)
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                expect(state.user_patient.newuser.allhistory.length).toBe(3)
                load_oral_success({ userid:state.user_patient.newuser.id })
                return store.dispatch(load_detail_oral({ userid:state.user_patient.newuser.id }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.error).toEqual({ msg:'创建成功' } )
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999);
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                var oraledit = state.user_patient.newuser.oraledit;
                expect(state.user_patient.newuser.oraledit.userid).toBe(state.user_patient.newuser.id)
                create_oral_success({userid:state.user_patient.newuser.id});
                return store.dispatch(create_oralinfo({oraledit}))
                }).then(()=>{
                let state = store.getState().toJS();
                expect(state.user_patient.error).toEqual({ msg:'创建成功' } )
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999);
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                expect(state.user_patient.newuser.alloral.length).toBe(3)
                resetMock()
           })
    })

    pit('create user  >  create history fail  > create oral fail', function test() {

        window.__SERVER__ = false;

        var preloadstate = Immutable.fromJS({})


        var client = new ApiClient()

        const history = createMemoryHistory();

        var store = configureStore(history, client, preloadstate)

        create_user_success()
        store.dispatch(frontUserForInfo({idx:'add',id:'add'}));
        var historyinfosize=0;
        return store.dispatch(create_user({})).then(() => {
            let state = store.getState().toJS();
            expect(state.user_patient.newuser.id).toBe(999);
            expect(state.user_patient.frontuserinfo.id).toBe(999)
            expect(state.user_patient.frontuserinfo.idx).toBe('add');
            load_history_success({ userid:state.user_patient.newuser.id })
            return store.dispatch(load_detail_history({ userid:state.user_patient.newuser.id }))
            }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999)
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                store.dispatch(historyEditADD({key:'surgery',val:{ name: 'test1'}}));
                store.dispatch(historyEditADD({key:'allergy',val:{ name: 'test2'}}));
                store.dispatch(historyEditADD({key:'infection',val:{ name: 'test3'}}));

                expect(state.user_patient.newuser.allhistory.length).toBe(2);

                let historyedit = state.user_patient.newuser.historyedit;
                expect(historyedit.userid).toBe(state.user_patient.newuser.id);
                create_history_fail({historyedit})
                return store.dispatch(create_historyinfo({ historyedit }))
                }).then(()=>{},() => {
                let state = store.getState().toJS();
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999)
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                expect(state.user_patient.newuser.allhistory.length).toBe(2)
                load_oral_success({ userid:state.user_patient.newuser.id })
                return store.dispatch(load_detail_oral({ userid:state.user_patient.newuser.id }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.error).toEqual({"pos": ["user_patient", "create", "history"]} )
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999);
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                var oraledit = state.user_patient.newuser.oraledit;
                expect(state.user_patient.newuser.oraledit.userid).toBe(state.user_patient.newuser.id)
                create_oral_fail({userid:state.user_patient.newuser.id});
                return store.dispatch(create_oralinfo({oraledit}))
                }).then(()=>{},()=>{
                let state = store.getState().toJS();
                expect(state.user_patient.error).toEqual({"pos": ["user_patient", "create", "oral"]} )
                expect(state.user_patient.newuser.id).toBe(999);
                expect(state.user_patient.frontuserinfo.id).toBe(999);
                expect(state.user_patient.frontuserinfo.idx).toBe('add');
                expect(state.user_patient.newuser.alloral.length).toBe(2)
                resetMock()
                })
    })

    pit('current user  >  create history fail  > create oral fail', function test() {

                window.__SERVER__ = false;

                var preloadstate = Immutable.fromJS({})


                var client = new ApiClient()

                const history = createMemoryHistory();

                var store = configureStore(history, client, preloadstate)

                var historyinfosize=0;
                load_users_success({begin:0})

                return store.dispatch(load({
                    num: 10,
                    begin: 0
                })).then(() => {
                let state = store.getState().toJS();
                store.dispatch(frontUserForInfo({idx:0,id:state.user_patient.users[0].id}));
                state = store.getState().toJS();
                expect(state.user_patient.frontuserinfo.id).toBe(state.user_patient.users[0].id)
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                load_history_success({ userid:state.user_patient.users[0].id })
                return store.dispatch(load_detail_history({ userid:state.user_patient.users[0].id }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0)
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                store.dispatch(historyEditADD({key:'surgery',val:{ name: 'test1'}}));
                store.dispatch(historyEditADD({key:'allergy',val:{ name: 'test2'}}));
                store.dispatch(historyEditADD({key:'infection',val:{ name: 'test3'}}));

                expect(state.user_patient.users[0].allhistory.length).toBe(2);

                let historyedit = state.user_patient.users[0].historyedit;
                expect(historyedit.userid).toBe(state.user_patient.users[0].id);
                create_history_fail({historyedit})
                return store.dispatch(create_historyinfo({ historyedit }))
                }).then(()=>{},() => {
                let state = store.getState().toJS();
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0)
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                expect(state.user_patient.users[0].allhistory.length).toBe(2)
                expect(state.user_patient.error).toEqual({"pos": ["user_patient", "create", "history"]} )
                load_oral_success({ userid:state.user_patient.users[0].id })
                return store.dispatch(load_detail_oral({ userid:state.user_patient.users[0].id }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0);
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                var oraledit = state.user_patient.users[0].oraledit;
                expect(state.user_patient.users[0].oraledit.userid).toBe(state.user_patient.users[0].id)
                create_oral_fail({userid:state.user_patient.users[0].id});
                return store.dispatch(create_oralinfo({ oraledit }))
                }).then(()=>{},()=>{
                let state = store.getState().toJS();
                expect(state.user_patient.error).toEqual({"pos": ["user_patient", "create", "oral"]} )
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0);
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                expect(state.user_patient.users[0].alloral.length).toBe(2)
                resetMock()
                })
    })
    pit('current user  >  create history success  > create oral success', function test() {

                window.__SERVER__ = false;

                var preloadstate = Immutable.fromJS({})


                var client = new ApiClient()

                const history = createMemoryHistory();

                var store = configureStore(history, client, preloadstate)

                var historyinfosize=0;
                load_users_success({begin:0})

                return store.dispatch(load({
                    num: 10,
                    begin: 0
                })).then(() => {
                let state = store.getState().toJS();
                store.dispatch(frontUserForInfo({idx:0,id:state.user_patient.users[0].id}));
                state = store.getState().toJS();
                expect(state.user_patient.frontuserinfo.id).toBe(state.user_patient.users[0].id)
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                load_history_success({ userid:state.user_patient.users[0].id })
                return store.dispatch(load_detail_history({ userid:state.user_patient.users[0].id }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0)
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                store.dispatch(historyEditADD({key:'surgery',val:{ name: 'test1'}}));
                store.dispatch(historyEditADD({key:'allergy',val:{ name: 'test2'}}));
                store.dispatch(historyEditADD({key:'infection',val:{ name: 'test3'}}));

                expect(state.user_patient.users[0].allhistory.length).toBe(2);

                let historyedit = state.user_patient.users[0].historyedit;
                expect(historyedit.userid).toBe(state.user_patient.users[0].id);
                create_history_success({historyedit})
                return store.dispatch(create_historyinfo({ historyedit }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0)
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                expect(state.user_patient.users[0].allhistory.length).toBe(3)
                expect(state.user_patient.error).toEqual({ msg:'创建成功' } )
                load_oral_success({ userid:state.user_patient.users[0].id })
                return store.dispatch(load_detail_oral({ userid:state.user_patient.users[0].id }))
                }).then(() => {
                let state = store.getState().toJS();
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0);
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                var oraledit = state.user_patient.users[0].oraledit;
                expect(state.user_patient.users[0].oraledit.userid).toBe(state.user_patient.users[0].id)
                create_oral_success({userid:state.user_patient.users[0].id});
                return store.dispatch(create_oralinfo({ oraledit }))
                }).then(()=>{
                let state = store.getState().toJS();
                expect(state.user_patient.error).toEqual({ msg:'创建成功' } )
                expect(state.user_patient.users[0].id).toBe(0);
                expect(state.user_patient.frontuserinfo.id).toBe(0);
                expect(state.user_patient.frontuserinfo.idx).toBe(0);
                expect(state.user_patient.users[0].alloral.length).toBe(3)
                resetMock()
                })
    })





})
