import React , { Component } from 'react';

import { BankCardUi } from './view/bankcard.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import {  hascard } from 'app/redux/reducers/doctorapp.js'

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
      console.log('1111');
      return dispatch(hascard({}))

    }
}])

@connect(
    state => {
        return {
          doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo'])
        }
    }, { pushState: push })

export default class BankCard extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}
  	render(){
        let doctorbaseinfo = this.props.doctorbaseinfo?this.props.doctorbaseinfo.toJS().hascard:{}
        return BankCardUi({
          bankname: (hasCard.bank_name),
          banknumber: (hasCard.cardno),

        });
  	}

}
