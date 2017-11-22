import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { LoadedorLoading as successorLoading ,  load as loadUsers } from 'backend/redux/reducers/user_patient';

import { Userdata } from './view/userdata.js'

import {
    frontUser
} from 'backend/redux/reducers/user_patient.js'

@connect(
  state => ({}),
  { pushState: push, load: loadUsers ,toShow: frontUser})
export default class UserCom extends Component {

    toDetail() {
            var idx = this.props.idx;
            var id = this.props.id;
            console.log(id)
            console.log(idx)
            this.props.toShow({ idx, id });
            this.props.pushState({
                pathname: '/usercenter/myOrderInfo',
                query: { id, idx }
            })


    }

    handleInview(){
    }

    componentDidMount(){
    }
    componentDidUpdate(){

    }
    render() {
            return (Userdata({...this.props, toDetail: (::this.toDetail) }))
    }


}
