import React , { Component } from 'react';

import { AskQuestionSuccessUi } from './view/askquestionsuccess.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
        return {
        }
    }, { pushState: push })

export default class AskQuestionSuccess extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}

    asksuccessbackhandle(){
   this.props.pushState('/firstpage')

    }

  	render(){


        return AskQuestionSuccessUi({
          asksuccessbackhandle:(::this.asksuccessbackhandle)
        });
  	}

}
