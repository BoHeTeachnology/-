import React , { Component } from 'react';

import { LoginPage } from './view/loginpage.js'


import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'

import { push } from 'react-router-redux';

import Immutable from 'immutable'


@connect(
    state => {
        return {
            
        }
    }, { pushState: push })

export default class Login extends Component {
	constructor(props) {
		// code
	  super(props);
    this.state = {bullet:0};
	}

	// methods
	  next() {
        this.refs.reactSwipe.prev();
        this.setState({...this.state,bullet:0});
    }
    prev() {
        this.refs.reactSwipe.next();
        this.setState({...this.state,bullet:1});
    }
    handleSwipe(ev) {
       	if(ev.direction ==4){
            this.next();
      	}else{
            this.prev();
      	}
    }
    change(where,ev){
      if(where == 'username'){
        this.setState({...this.state,username:ev.target.value})
      }else if(where == 'password'){
        this.setState({...this.state,password:ev.target.value})
      }

    }
    _login(){

    }
    clickTab(tab){
      if(tab==0){
        this.refs.reactSwipe.prev();
        this.setState({bullet:0});
      }else{
        this.refs.reactSwipe.next();
        this.setState({bullet:1});
      }
    }
  	render(){
         return LoginPage({
          bullet:this.state.bullet,
          handleSwipe:(::this.handleSwipe),
          change:(::this.change),
          _login:(::this._login),
          clickTab:(::this.clickTab)
        });
  	}

}
