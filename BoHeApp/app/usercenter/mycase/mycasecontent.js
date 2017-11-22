import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import Promise from 'bluebird'

import { Content } from './view/content.js'

import { LoadedorLoading as successorLoading ,  loadContent as load } from 'app/redux/reducers/case_patient';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    console.log("casecontent!!!!!!")
    var state = getState();
    var id = state.getIn(['case_patient','frontcase','id']);

    promises.push(dispatch(load({id})))

    return Promise.all(promises);
  }
}])
@connect(
  state => {
    var idx = state.getIn(['case_patient','frontcase','idx'])
    var acase = state.getIn(['case_patient','cases']).get(idx)
    return { acase ,idx }
  },
  { pushState: push })
export default class MyCaseContent extends Component {
    static propTypes= {
        acase:React.PropTypes.object.isRequired,
        idx:React.PropTypes.number.isRequired

    };
    // methods
    toDesc(){
            this.props.pushState({
                pathname: '/usercenter/myCaseDesc'
            })
    }
    render() {
                var acase = this.props.acase.toJS()
                return  ( Content({...acase,toDesc:(::this.toDesc)}) )
                }    
    
}