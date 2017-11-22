import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Promise from 'bluebird'
import MyCase from './mycase.js'
import { isElementVisible } from 'app/util/utils.js'
import Hammer from 'react-hammerjs'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'

import { FrontPage } from './view/frontpage.js'

import { LoadedorLoading as successorLoading ,  load as loadCases } from 'app/redux/reducers/case_patient';

import { push } from 'react-router-redux';

import Immutable from 'immutable'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    console.log("mycases!!!!!!!!")
    console.log(this)
    if(!successorLoading(getState()))
      promises.push(dispatch(loadCases({num:15,begin:0})));
    return Promise.all(promises);
  }
}])
@connect(
    state => {
        return {
            loading: state.getIn(['case_patient', 'loading']),
            caseMetas: state.hasIn(['case_patient', 'cases']) ? state.getIn(['case_patient', 'cases']) : Immutable.List([])
        }
    }, { pushState: push, load: loadCases })
export default class MyCases extends Component {

	renderCase(index, key) {
		var caseMeta = this.props.caseMetas.get(index).toJS();
		caseMeta.idx = index;
		console.log("renderCase")
		console.log(this.props.caseMetas.size)
        console.log(index)
        if(this.props.caseMetas.size == (index+1)){
        	console.log("renderCase!!!!!!!!!")
        	caseMeta.loading = this.props.loading;
        	return <MyCase ref={(c) => this._last = c} key={key} {...caseMeta}></MyCase>;
        }
		return <MyCase  key={key} {...caseMeta}></MyCase>;
	}
	// methods
	handlePan(ev) {
	    //var range = this.refs.list.getVisibleRange();

	    var toLoad = isElementVisible(ReactDOM.findDOMNode(this._last))

        console.log(toLoad)
	    console.log("pan!!!!!!!!!!!!")
	    console.log(ev.isFinal)
	    if (ev.direction == 8) {
	        console.log("up!!!!!!!!!!!!")
            //console.log(range)
            console.log(this.props.caseMetas.size)
	        //if (((range[1] + 1) >= this.props.orderMetas.length) && (this.props.loading == false)) {
	        //    console.log("load new")

	       //     this.props.load({ num: 15, begin: 0 })
	        //}
	        if(toLoad){
	        	console.log("loading!!!!!!!!!!!!!!!!!")
	        	if(!this.props.loading)
	        	   this.props.load({ num: 15, begin: 0 })
	        }
	    } else if (ev.direction == 16) {
	        console.log("down")
	    }

	}
    render() {
    	var size = this.props.caseMetas.size;
        var nodata = (size == 0) ? true : false;
        var options = {
            touchAction: 'pan-y'
        };

        return FrontPage({ nodata, options, length: size, handlePan: (::this.handlePan), renderItem: (::this.renderCase) })



    }


}

