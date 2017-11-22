import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import {SettingUI} from './view/setting.js'

import {asyncConnect} from 'redux-connect'

import {push} from 'react-router-redux';

import {connect} from 'react-redux';

@asyncConnect([
  {
    promise: ({
      store: {
        dispatch,
        getState
      },
      params
    }) => {}
  }
])
@connect(state => {
  return {}
}, {pushState: push})
export default class Center extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {};
  }

  settinglistitemClickHandle(itemIndex) {
    switch (itemIndex) {
      case 0:
        console.log('klklkl')
        break
      case 1:
        this.props.pushState('/doctorapp/setnotification')
        break
      case 2:
        console.log('klklkl')
        break

      case 3:
        console.log('klklkl')
        break
      default:

    }
  }
 logoutBtnHandleClick(){
   console.log('')
  }
  componentWillMount() {
    if (typeof window == 'undefined') {
      return;
    }
    let height = window.innerHeight || document.documentElement.clientHeight;
    let width = window.innerWidth || document.documentElement.clientWidth;
    this.setState({width, height})
  }
  componentDidMount() {}

  render() {

    return SettingUI({
      width: this.state.width,
      height: this.state.height,
      settinglistitemClickHandle:(::this.settinglistitemClickHandle),
      logoutBtnHandleClick:(::this.logoutBtnHandleClick),
    })
  }
}
