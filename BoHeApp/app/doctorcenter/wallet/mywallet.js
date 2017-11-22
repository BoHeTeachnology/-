import React , { Component } from 'react';

import { MyWalletUi } from './view/mywallet.js'
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

export default class MyWallet extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {
          modal:false,
          is_modal:false
        };
  	}
    toUpCash(){
      let hasCard = this.props.doctorbaseinfo.toJS().hascard;
      console.log(hasCard)
      if(hasCard){
      var doctorbaseinfo =this.props.doctorbaseinfo.toJS().data;
      if (doctorbaseinfo.pass) {
        this.props.pushState('/doctorcenter/withdrawcash');
      }else {
        this.props.pushState('/doctorcenter/withdrawvalidate');
      }
      }else{
        this.props.pushState('/doctorcenter/nocard');
      }
    }
    toMyCard(){

      let hasCard = this.props.doctorbaseinfo.toJS().hascard;
      console.log(hasCard)
      if(hasCard){
        this.props.pushState('/doctorcenter/bankcard');
      }else{
        this.props.pushState('/doctorcenter/nocard');
      }
    }
    toDetail(){
      this.props.pushState('/doctorcenter/detail');
    }
    showModal(e){
      e.preventDefault();
      this.setState({
        modal: true,
      });
    }
    onClose(){
      this.setState({
        modal: false,
      });
    }
    componentDidMount(){
      this.setState({...this.state,is_modal:true})
    }
  	render(){
        let doctorbaseinfo = this.props.doctorbaseinfo?this.props.doctorbaseinfo.toJS():{};
        console.log(doctorbaseinfo)
        // let money = doctorbaseinfo.money;
        return MyWalletUi({
          ...doctorbaseinfo,
          toUpCash:(::this.toUpCash),
          toMyCard:(::this.toMyCard),
          showModal:(::this.showModal),
          onClose:(::this.onClose),
          modal:this.state.modal,
          is_modal:this.state.is_modal,
          toDetail:(::this.toDetail)
        });
  	}

}
