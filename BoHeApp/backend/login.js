import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

var LoginPage = ({
  onSubmit,
  onPassword,
  onUsername
}) => {
  return (
       <div>
        <div className="login-bj"></div>
         <div className="login-wrap">
           <div className="login-box">
             <h3><span>薄荷口腔管理平台</span></h3>
             <div className="login-tab-box">
               <div className="login-input-box user-input">
                 <span className="icon-user"></span>
                 <input onChange={ onUsername } type="text" id="username" autocomplete="off" name="username"/>
               </div>

               <div className="login-input-box pwd-input">
                 <span className="icon-lock"></span>
                 <input onChange={ onPassword } type="password" id="pwd" autocomplete="off" name="password"/>
               </div>

               <div className="login-pwd-box">
                 <div className="checkbox-box-log">
                    <span><input type="checkbox" className="checkbox" id="ck_rmb"/>
                    <label htmlFor="ck_rmb"></label>记住密码</span>
                 </div>
                 <a href="#" className="findpwd">找回密码</a>
               </div>
               <div className="login-but-box"><input onClick={onSubmit} type="button" value="登 录" id="submit"/></div>
             </div>
           </div>
      </div>
     <div className="opacity-tip" style={{display:"none"}}><p></p></div>
     </div>);

}


@connect(
    state => {
        return {
            auth : state.get('auth')
        }
    }, { pushState: push, login: login })
export default class Login extends Component {
	constructor(props) {
		// code
	  super(props);
    this.state = {};
	}
  componentDidUpdate(){
    if(this.props.auth&&this.props.auth.get('user')){
          this.props.pushState('/useradmin')
          console.log("login succed")
    }
  }
  onSubmit(){
    if(this.state.username)
      this.props.login(this.state.username)
  }
  onPassword(event){
    this.setState({password:event.target.value})
  }
  onUsername(event){
    this.setState({username:event.target.value})
  }
	render(){

       return LoginPage({onSubmit:(::this.onSubmit),onPassword:(::this.onPassword),onUsername:(::this.onUsername)});
	}

}
