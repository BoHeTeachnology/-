import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Promise from 'bluebird'
import MyBill from './mybill.js'
import { isElementVisible } from 'app/util/utils.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'

import { LoadedorLoading as successorLoading ,  load as loadBills } from 'app/redux/reducers/bill_patient';

import { push } from 'react-router-redux';

import { FrontPage } from './view/frontpage.js'

import Immutable from 'immutable'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    if(!successorLoading(getState()))
      promises.push(dispatch(loadBills({num:15,begin:0})));
    return Promise.all(promises);
  }
}])
@connect(
    state => {
        return {
            loading: state.getIn(['bill_patient', 'loading']),
            billMetas: state.hasIn(['bill_patient', 'bills']) ? state.getIn(['bill_patient', 'bills']) : []
        }
    }, { pushState: push, load: loadBills })
export default class MyBills extends Component {

	renderBill(index, key) {
		var billMeta = this.props.billMetas.get(index).toJS();
		billMeta.idx = index;
        if(this.props.billMetas.size == (index+1)){
        	billMeta.loading = this.props.loading;
        	return <MyBill ref={(c) => this._last = c} key={key} {...billMeta}></MyBill>;
        }
		return <MyBill key={key} {...billMeta}></MyBill>;
	}

	handlePan(ev) {

	    var toLoad = isElementVisible(ReactDOM.findDOMNode(this._last))

	    if (ev.direction == 8) {

	        if (toLoad) {
	            if (!this.props.loading)
	                this.props.load({ num: 15, begin: 0 })
	        }
	    } else if (ev.direction == 16) {
	    }

	}
	render() {
		var size = this.props.billMetas.size;
	    var nodata = (size == 0) ? true : false;
	    var options = {
	        touchAction: 'pan-y'
	    };
	    return FrontPage({ nodata, options, length: size, handlePan: (::this.handlePan), renderItem: (::this.renderBill) })

	}


}

