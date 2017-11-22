import React, {Component} from 'react';

import {WithdrawsuccessUi} from './view/withdrawsuccess.js'
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'

@connect(state => {
  return {}
}, {pushState: push})

export default class WithdrawSuccess extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {};
  }
  getCookie(name){
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
    }
  backtohomeclickhandle() {
    var token =this.getCookie('token');
    this.props.pushState('/doctormain')
  }

  render() {
    return WithdrawsuccessUi({
      backtohomeclickhandle: (:: this.backtohomeclickhandle)
    });
  }

}
