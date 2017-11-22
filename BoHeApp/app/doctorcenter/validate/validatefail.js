import React , { Component } from 'react';

import { ValidatefailUi } from './view/validatefail.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
        return {

        }
    }, { pushState: push })

export default class ValidateFail extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}
  	render(){
        return ValidatefailUi({

        });
  	}

}
