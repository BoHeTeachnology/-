import React , { Component,PropTypes } from 'react';

import { WithdrawvalidateUi } from './view/withdrawvalidate.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { withdrawcashcode,withdrawcashvalidate } from 'app/redux/reducers/withdrawcash.js'
import { Toast } from 'antd-mobile';


@connect(
    state => {
        return {

        }
    }, { pushState: push,withdrawcashcode:withdrawcashcode,withdrawcashvalidate:withdrawcashvalidate })

export default class WithdrawValidate extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {
          validatephone:'',
          validatecode:'',
          validatindenty:'',
          codetext:'获取验证码',
          isclick:true,
          iscanclick:true,

        };
  	}
    static contextTypes = {
      store: PropTypes.object.isRequired
    };


validateInputChange(ev,type){
  console.log(ev);
    if(type == 'phone'){
      this.setState({...this.state,validatephone:ev})
    }else if(type == 'code'){
      this.setState({...this.state,validatecode:ev})
    }else if(type == 'indenty'){
      this.setState({...this.state,validatindenty:ev})
    }
}


codebtnclickhandle(){

  if(this.state.iscanclick){
    this.setState({
      iscanclick:false,
    })
  this.props.withdrawcashcode({iphone:this.state.validatephone.replace(/\s/g,'')}).then(() =>{
 var currentstate =this.context.store.getState();
 var withdrawcashcoderes =currentstate.getIn(['validate','withdrawcashcoderes']).toJS();
 if (withdrawcashcoderes.success=='0') {
   Toast.info(withdrawcashcoderes.message,1)
 }else {
   Toast.info('发送成功',1)
 }
  },() =>{
     Toast.info('服务器繁忙~',1)
  })
  var waitTime, currTime = 59;
  var that =this;
  var interval = setInterval(function() {
    that.setState({
    codetext:currTime+'s后重试',
    isclick:false,
    })
    currTime--;
    if (currTime < 0) {
      clearInterval(interval);
      currTime = waitTime;

      that.setState({
      codetext:'获取验证码',
      isclick:true,
      iscanclick:true,
      })
    }
  }, 1000);
}
}

validateNexthandle(){
  console.log('validatenext');
this.props.withdrawcashvalidate({
  iphone:this.state.validatephone.replace(/\s/g,''),
  verify:this.state.validatecode,
  identity:this.state.validatindenty
}).then(() =>{
  var currentstate =this.context.store.getState();
  var withdrawvalidateres =currentstate.getIn(['validate','withdrawvalidateres']).toJS();
  if(withdrawvalidateres.success=='0'){

  }else {
     this.props.pushState('/doctorcenter/withdrawcashcode');
  }

},() =>{
  this.props.pushState('/doctorcenter/withdrawcashcode');
})

}
  	render(){
        return WithdrawvalidateUi({
          validatephone:(this.state.validatephone),
          validatecode:(this.state.validatecode),
          validatindenty:(this.state.validatindenty),
          codetext:(this.state.codetext),
          isclick:(this.state.isclick),
          codebtnclickhandle:(::this.codebtnclickhandle),
          validateInputChange:(::this.validateInputChange),
          validateNexthandle:(::this.validateNexthandle),
        });
  	}

}
