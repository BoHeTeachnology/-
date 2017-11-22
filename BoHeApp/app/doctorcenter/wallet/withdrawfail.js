import React , { Component } from 'react';

import { WithdrawfailUi } from './view/withdrawfail.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
        return {

        }
    }, { pushState: push })

export default class WithdrawFail extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {};
  	}
  	render(){
        return WithdrawfailUi({

        });
  	}

}
