import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import MyOrder from './myorder.js'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import {
    FrontPage
} from './view/frontpage.js'

import {
    isElementVisible
} from 'app/util/utils.js'

import {
    asyncConnect
} from 'redux-connect'

import {
	isLoaded as isAuthLoaded,
	load as loadAuth,
	logout
} from 'app/redux/reducers/auth';

import {
	LoadedorLoading as successorLoading ,
	load as loadOrders
} from 'app/redux/reducers/order_patient';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {

        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())){
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(loadOrders( { user, num: 15, begin: 0, refresh:{flag:true} }));
                }
                else
                    return Promise.resolve();
            })
        }else{
             if (!successorLoading(getState())){
                   let state = getState();
                   let user = state.getIn(['auth','user']).toJS();
                   return dispatch(loadOrders( { user, num: 15, begin: 0, refresh:{flag:true}  }));
             }
             else
                   return Promise.resolve();
        }
    }
}])

@connect(
    state => {
        return {
        	auth : state.get('auth'),
            orderRepo: state.get('order_patient')
        }
    }, { pushState: push, load: loadOrders })
export default class MyOrders extends Component {
	// methods
	static propTypes = {
		orderRepo:React.PropTypes.object.isRequired,
	}

	renderOrder(index, key) {

        var orderMeta = this.props.orderRepo.get('orders').get(index).toJS()

		orderMeta.idx = index;

        if(this.props.orderRepo.get('orders').size == (index+1)){
        	orderMeta.loading = this.props.orderRepo.get('loading');
        	return <MyOrder ref={(c) => this._last = c} key={key} {...orderMeta}></MyOrder>;
        }
		return <MyOrder key={key} {...orderMeta}></MyOrder>;
	}

	handlePan(ev) {

	    var toLoad = isElementVisible(ReactDOM.findDOMNode(this._last))

	    if (ev.direction == 8) {
	        if(toLoad){
	        	if(!this.props.loading){
                   const size = this.props.orderRepo.get('orders').size;
	        	   this.props.load({ num: 15, begin: size,refresh:false })
                }
	        }
	    } else if (ev.direction == 16) {

	   }

	}

    handleRefresh(resolve, reject) {
        // do some async code here
        //let self = this;
        //setTimeout(function() {
        //   resolve()
        //}, 500);

        this.props.load( { num: 15, begin: 0, refresh:{ flag:true, resolve,reject } } )
    }


    componentWillMount() {
        if (this.props.auth.has('user')) {
            return;
        } else {
            if (this.props.auth.getIn(['error', 'info']) == 'auth') {
                this.props.pushState('/login');
            }
        }
        return;

    }

    componentDidMount() {

    }
	render() {

        if(this.props.auth.has('user')){

		 var size = this.props.orderRepo.get('orders').size;
	     var nodata = (size == 0) ? true : false;

	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
	    return FrontPage({ height, nodata, options, length: size, handlePan: (::this.handlePan), renderItem: (::this.renderOrder),handleRefresh:(::this.handleRefresh) })
	    }else{
	    return <div/>;
	    }
	}


}
