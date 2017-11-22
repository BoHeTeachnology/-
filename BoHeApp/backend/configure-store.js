import React from 'react'
import thunk from 'redux-thunk'
import Immutable from 'immutable'

import { createStore, compose, applyMiddleware } from 'redux'
// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

import {
    combineReducers
} from 'redux-immutable';



import auth from 'backend/redux/reducers/auth'

import order_patient from 'backend/redux/reducers/order_patient'

import bill_patient from 'backend/redux/reducers/bill_patient'

import case_patient from 'backend/redux/reducers/case_patient'

import case_template from 'backend/redux/reducers/case_template'

import case_index from 'backend/redux/reducers/case_index'

import wxjdk from 'backend/redux/reducers/wxjdk'

import user_patient from  'backend/redux/reducers/user_patient'

import mteeth_status from 'backend/redux/reducers/mteeth_status'

import cteeth_status from 'backend/redux/reducers/cteeth_status'

import user_doctor from 'backend/redux/reducers/user_doctor'

import user_clinic from 'backend/redux/reducers/user_clinic'

import user_company from 'backend/redux/reducers/user_company'

import service_project from 'backend/redux/reducers/service_project'

import clientMiddleware from 'backend/redux/middleware/clientMiddleware'

import left_list from 'backend/redux/reducers/left_list'

import message from 'backend/redux/reducers/message'

import ask from 'backend/redux/reducers/ask'




import { routerMiddleware } from 'react-router-redux'

import routerReducer from 'backend/redux/reducers/routerReducer'

import { setToImmutableStateFunc, setToMutableStateFunc, immutableReducer as reduxAsyncConnect } from 'redux-connect';

// Set the mutability/immutability functions
setToImmutableStateFunc((mutableState) => Immutable.fromJS(mutableState));
setToMutableStateFunc((immutableState) => immutableState.toJS());


// export const DevTools = createDevTools( <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
//                                            <LogMonitor theme="tomorrow" preserveScrollTop={ false } />
//                                         </DockMonitor>)

export function configureStore(history, client, initialState = {},mocker) {
    const reducer = combineReducers({
        routing: routerReducer,
        reduxAsyncConnect,
        auth,
        order_patient,
        case_patient,
        case_template,
        case_index,
        bill_patient,
        wxjdk,
        user_patient,
        user_doctor,
        user_clinic,
        user_company,
        service_project,
        mteeth_status,
        cteeth_status,
        left_list,
        message,
        ask
    })

    //let devTools = []
    if (typeof document !== 'undefined') {
        //devTools = [DevTools.instrument()]
    }

    const store = mocker ? createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                mocker(), clientMiddleware(client), routerMiddleware(history)
            )
            //...devTools
        )
    ) : createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                clientMiddleware(client), routerMiddleware(history)
            )
            //...devTools
        )
    )

    return store
}
