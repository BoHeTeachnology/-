import React , { Component } from 'react';

import { NoCardUi } from './view/nocard.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'

@connect(
    state => {
        return {

        }
    }, { pushState: push })

export default class NoCard extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}
    next(){
      this.props.pushState('/doctorcenter/tiecard')
    }
  	render(){
        return NoCardUi({
          next:(::this.next)
        });
  	}

}
