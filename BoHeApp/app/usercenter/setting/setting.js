import React, {Component} from 'react';

import {SettingUI} from './view/setting.js'

import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'

import {push} from 'react-router-redux';

import Immutable from 'immutable'

@connect(state => {
  return {}
}, {pushState: push})

export default class Setting extends Component {
  constructor(props) {
    // code
    super(props);
  }

  logouthandleclick() {

    console.log('logouthandleclick')
    window.document.cookie = "khantoken=" +
      'eee';
    window.location.href = 'http://www.boheyayi.com/mobile/logout'
  }

  render() {
    return SettingUI({
      logouthandleclick: (:: this.logouthandleclick)
    });
  }

}
