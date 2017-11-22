import React from 'react'
import thunk from 'redux-thunk'
import Immutable from 'immutable'

import { createStore, compose, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import {
    combineReducers
} from 'redux-immutable';

import doctorapp from 'app/redux/reducers/doctorapp'

import auth from 'app/redux/reducers/auth'

import order_patient from 'app/redux/reducers/order_patient'

import bill_patient from 'app/redux/reducers/bill_patient'

import doctorlist from 'app/redux/reducers/doctorlist'

import save_token from 'app/redux/reducers/save_token'

import service from 'app/redux/reducers/service'

import case_patient from 'app/redux/reducers/case_patient'

import wxjdk from 'app/redux/reducers/wxjdk'

import wechathome from 'app/redux/reducers/wechathome'

import validate from 'app/redux/reducers/validate'

import askquestion from 'app/redux/reducers/askquestion'

import usercenter from 'app/redux/reducers/usercenter'

import withdrawcash from 'app/redux/reducers/withdrawcash'

import clientMiddleware from 'app/redux/middleware/clientMiddleware'

import { routerMiddleware } from 'react-router-redux'

import routerReducer from 'app/redux/reducers/routerReducer'

import { setToImmutableStateFunc, setToMutableStateFunc, immutableReducer as reduxAsyncConnect } from 'redux-connect';

// Set the mutability/immutability functions
setToImmutableStateFunc((mutableState) => Immutable.fromJS(mutableState));
setToMutableStateFunc((immutableState) => immutableState.toJS());


export const DevTools = createDevTools( <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
                                           <LogMonitor theme="tomorrow" preserveScrollTop={ false } />
                                        </DockMonitor>)

export function configureStore(history, client, initialState = {},mocker) {
    const reducer = combineReducers({
        routing: routerReducer,
        reduxAsyncConnect,
        auth,
        order_patient,
        case_patient,
        bill_patient,
        wxjdk,
        doctorlist,
        save_token,
        service,
        doctorapp,
        validate,
        withdrawcash,
        wechathome,
        askquestion,
        usercenter,
    })

    let devTools = []
    if (typeof document !== 'undefined') {
        devTools = [DevTools.instrument()]
    }

    const store = mocker ? createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                mocker(), clientMiddleware(client), routerMiddleware(history)
            ),
            ...devTools
        )
    ) : createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                clientMiddleware(client), routerMiddleware(history)
            ),
            ...devTools
        )
    )

    return store
}
