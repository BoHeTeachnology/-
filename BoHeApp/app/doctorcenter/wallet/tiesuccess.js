import React , { Component } from 'react';

import { TieSuccessUi } from './view/tiesuccess.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
        return {

        }
    }, { pushState: push })

export default class TieSuccess extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}
    next(){
        this.props.pushState('/doctorcenter/bankcard');
    }
  	render(){
        return TieSuccessUi({
            next:(::this.next)
        });
  	}

}
