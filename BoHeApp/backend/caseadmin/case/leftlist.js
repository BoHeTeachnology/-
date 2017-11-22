import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    asyncConnect
} from 'redux-connect'


import { _Left_list_ } from 'backend/caseadmin/case/view/leftlist.js'

@connect(
  state => ({
     auth : state.get('auth'),
     leftlist: state.getIn(['left_list','leftlist'])
  }),
  { pushState: push })
export default class LeftList extends Component {

    constructor(props) {
      super(props);
      this.state = { clickid:'22' };
      this.item_styles={};
      this.roate_styles={};
    }
    updown(item){
        this.setState({...this.state,clickid:item.id})
    }
    render() {
         if(this.props.auth.has('user')){
                var height = window.innerHeight || document.documentElement.clientHeight
                var leftlist = this.props.leftlist?this.props.leftlist.toJS():'';
                if(window.location.href.indexOf('template')>=0){
                  var curId = 23;
                }else if(window.location.href.indexOf('caselist')>=0 || window.location.href.indexOf('caseinfo')>=0){
                  var curId = 24;
                }
                return _Left_list_({
                  leftlist:leftlist,
                  updown:(::this.updown),
                  clickid:(this.state.clickid),
                  item_styles:(this.item_styles),
                  roate_styles:(this.roate_styles),
                  curId
                })
        }else{
        return <div/>;
        }
    }

}

