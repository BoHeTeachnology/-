import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import {CenterUI} from './view/center.js'

import {asyncConnect} from 'redux-connect'

import {push} from 'react-router-redux';

import {connect} from 'react-redux';

import { save_token } from 'doctorapp/redux/reducers/save_token';
import {
  isLoaded as isAuthLoaded,
  load as loadAuth,
  logout,
} from 'doctorapp/redux/reducers/auth';

import { getApiIp8007 } from 'doctorapp/util/utils.js'
import {get_orderlist,get_datelist} from 'doctorapp/redux/reducers/myorder'

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState }, params }) => {
     if(!isAuthLoaded(getState())){
        return dispatch(loadAuth(params));
       }
    }
  }
])

@connect(state => ({

  user: state.getIn(['auth','user']),
}), {
  pushState: push,
  save_token,
  get_datelist,

})

export default class Center extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {
    };
  }
  myorderBtnClickHandle() {
      this.props.pushState('/doctorapp/myorder')
  }

  transfercenterBtnClickHandle() {
      this.props.pushState('/doctorapp/transfercenter')
  }
  listitemClickHandle(itemIndex) {
    switch (itemIndex) {
      case 0:
        this.props.pushState('/doctorapp/outplan')
        break
      case 1:
        this.props.pushState('/doctorapp/wallet')
      break
      case 2:
        this.props.pushState('/doctorapp/notification')
        break
      case 3:
        this.props.pushState('/doctorapp/setting')
        break
      default:

    }
  }

  componentWillMount() {
    if (typeof window == 'undefined') {
      return;
    }
    let height = window.innerHeight || document.documentElement.clientHeight;
    let width = window.innerWidth || document.documentElement.clientWidth;
    this.setState({width, height})

    // if ((typeof window === 'undefined')) {
    //     return;
    // }
    let type = '';
    let token = '';
    console.log(this.props.user)
      console.log('this.props.user')
    if(this.props.user){
        type = true;
        console.log('1111')
        console.log(this.props.user);
        console.log(";;;;;;;;;;;;;;;");
    }else{
        type = false;
        console.log('22222')
    }
    if(type == false){

      this.is_login=false;

      window.location.href = 'http://'+getApiIp8007()+'/weixin/user?redirect=1';

    }else if(type == true){
      token = this.props.user.toJS().token;
      if(token){
        window.document.cookie = "khantoken="+token;
        this.props.save_token({token})
        this.is_login= true;
      }
    }
  }

  componentDidMount() {
this.props.get_datelist(1);
// this.props.get_userinfo();
  }

  render() {
    console.log(this.props.user);
    console.log(this.props.orderlist);
    var info =this.props.user?this.props.user.toJS().data:{}
console.log(info)
console.log('info')
    return CenterUI({
      userInfo:info,
      width: this.state.width,
      height: this.state.height,
      myorderBtnClickHandle: (:: this.myorderBtnClickHandle),
      transfercenterBtnClickHandle: (:: this.transfercenterBtnClickHandle),
      listitemClickHandle: (:: this.listitemClickHandle)
    })
  }
}
