import React , { Component } from 'react';

import { InviteCodeUi } from './view/invitecode.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
        return {
          doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo'])
        }
    }, { pushState: push })

export default class InviteCode extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}
  	render(){
      let invitecode = '未获得邀请码';
      if (this.props.doctorbaseinfo.data && this.props.doctorbaseinfo.tojs().data.invitation) {
       invitecode =this.props.doctorbaseinfo.tojs().data.invitation;
    }

        return InviteCodeUi({
            invitecode:invitecode,
        });
  	}

}
