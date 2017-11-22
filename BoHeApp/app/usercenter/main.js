import React, {Component,PropTypes} from 'react';

import Promise from 'bluebird'

import {asyncConnect} from 'redux-connect'
import Immutable from 'immutable'

import {
  isLoaded as isAuthLoaded,
  load as loadAuth,
  logout,
} from 'app/redux/reducers/auth';

import { get_userinformation,get_attentionnum,get_mynotenum } from 'app/redux/reducers/usercenter';


import {Link} from 'react-router'

import {push} from 'react-router-redux';

import {connect} from 'react-redux';

import {UCenter} from './view/mainpage.js'

import { save_token } from 'app/redux/reducers/save_token';

import { getApiIp8007 } from 'app/util/utils.js'

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState }, params }) => {
    //  if(!isAuthLoaded(getState())){
          return dispatch(loadAuth(params))
      //  }
    }
  }
])
@connect(state => ({
  user: state.getIn(['auth','user']),
}), {
  logout,
  pushState: push,
  save_token,
  get_attentionnum,
  get_mynotenum,

})
export default class UserCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attentionnum:'',
      mynotenum:'',
      height:'',
    };
  }

    static contextTypes = {
      store: PropTypes.object.isRequired
    };
  toOrders(event) {
    this.props.pushState('/usercenter/orderlist')

  }

  toMySetting() {
 console.log('kkkkk')
    this.props.pushState('/usercenter/userinfo')
  }

toSettingCenter(){
  this.props.pushState('/usercenter/setting')
}
  toMyDoctor(event) {
    console.log('ssss')

    this.props.pushState('/usercenter/mydoctor')

  }
  toMyNote(event) {
    this.props.pushState('/usercenter/mynote')
  }

  // toMyCenter(){
  //   console.log('我就是当前页了')
  // }
  // toFindDoctor(){
  //
  //   this.props.pushState('/firstPage')
  // }
  logouthandleclick(){

   console.log('logouthandleclick')
   window.document.cookie = "khantoken="+'eee';
   window.location.href = 'http://www.boheyayi.com/mobile/logout'
  }

  componentWillMount() {

  //   this.props.get_attentionnum().then(() =>{
  //     var currentstate =this.context.store.getState();
  //     var attentionnum = currentstate.getIn(['usercenter','attentionnum']).toJS();
  //
  //   this.setState({attentionnum:attentionnum.num})
  // },() =>{
  //
  // });
  //   this.props.get_mynotenum().then(() =>{
  //     var currentstate =this.context.store.getState();
  //     var mynotenum = currentstate.getIn(['usercenter','mynotenum']).toJS();
  //
  //   this.setState({mynotenum:mynotenum.num})
  //   },() =>{
  //
  //   })

    if ((typeof window === 'undefined')) {
        return;
    }
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

      var height = window.innerHeight || document.documentElement.clientHeight;
      this.setState({...this.state,height});

  }
  render() {
      console.log("HHHHUUUUUU");
      console.log(this.props.user);
      if(!this.props.user){
         return <div/>
      }
      console.log("HHHYYYTTTTTT");
      var userinfo =this.props.user?this.props.user.toJS().data:{}
      return UCenter({
        height:this.state.height,
        attentionnum:(this.state.attentionnum),
        mynotenum:(this.state.mynotenum),
        userinfo,
        logouthandleclick: (::this.logouthandleclick),
        toOrders: (:: this.toOrders),
        toMySetting: (:: this.toMySetting),
        toMyDoctor: (:: this.toMyDoctor),
        toMyNote: (:: this.toMyNote),
        toMyCenter:(::this.toMyCenter),
        // toFindDoctor:(::this.toFindDoctor),
        // toSettingCenter:(::this.toSettingCenter),
      });
    }
  // methods
}
