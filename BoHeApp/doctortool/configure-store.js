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


import user_doctor from 'doctortool/redux/reducers/user_doctor'


import clientMiddleware from 'doctortool/redux/middleware/clientMiddleware'

import { routerMiddleware } from 'react-router-redux'

import routerReducer from 'doctortool/redux/reducers/routerReducer'

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
        user_doctor
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
           // ...devTools
        )
    )

    return store
}
