import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Content } from './view/content.js'

import { load_detail as load } from 'app/redux/reducers/bill_patient.js'

import { asyncConnect } from 'redux-connect'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    var state = getState();
    var id = state.getIn(['bill_patient','frontbill','id']);
    promises.push(dispatch(load({id})))
    return Promise.all(promises);
  }
}])
@connect(
    state => {
        var idx = state.getIn(['bill_patient','frontbill','idx'])
        var abill = state.getIn(['bill_patient','bills']).get(idx)
        return { abill ,idx }
    }, { pushState: push, })
export default class MyBillContent extends Component {
    static propTypes = {
        abill:React.PropTypes.object.isRequired,
        idx: React.PropTypes.number.isRequired
    };

    render() {
            return (Content(this.props.abill.toJS()))
    }

}
