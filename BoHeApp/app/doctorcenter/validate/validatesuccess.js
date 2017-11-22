import React , { Component } from 'react';

import { ValidatesuccessUi } from './view/validatesuccess.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
        return {

        }
    }, { pushState: push })

export default class ValidateSuccess extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}
  	render(){
        return ValidatesuccessUi({

        });
  	}

}
