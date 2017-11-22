import React , { Component } from 'react';

import { WithdrawcashCodeUi } from './view/withdrawcashcode.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { setwithdrawcashsercet } from 'app/redux/reducers/withdrawcash.js'


@connect(
    state => {
        return {

        }
    }, { pushState: push,setwithdrawcashsercet:setwithdrawcashsercet})

export default class WithdrawCashCode extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {
          secretValue:'',
          secretagainValue:'',
        };
  	}

secretOkhandleclick(){
  console.log('secretOkhandleclick')
  this.props.setwithdrawcashsercet({pass:this.state.secretValue,status:0}).then(() =>{
    this.props.pushState('/doctorcenter/withdrawcash')

  },() =>{
      this.props.pushState('/doctorcenter/withdrawcash')
  })
}
secretInputChange(ev,type){
  console.log(ev)
  if(type=='secret'){
    this.setState({
      ...this.state,
      secretValue:ev
    })
  }else if(type=='againsecret'){
    this.setState({
      ...this.state,
      secretagainValue:ev
    })
  }

}


  	render(){
        return WithdrawcashCodeUi({
secretValue:(this.state.secretValue),
secretagainValue:(this.state.secretagainValue),
secretOkhandleclick:(::this.secretOkhandleclick),
secretInputChange:(::this.secretInputChange),
        });
  	}

}
