import React , { Component,PropTypes } from 'react';

import Promise from 'bluebird'

import {
    push
} from 'react-router-redux';

import { CheckOrder } from './view/check.js'

import  EditOrder,{ asyncEvent as asyncEventEdit } from './edit.js'

import {
   load_detail,
   LoadedorLoading,
   LoadedorLoading_doctor
} from 'backend/redux/reducers/user_doctor.js'

import {
  isLoaded as isAuthLoaded,
  load as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import {
    connect
} from 'react-redux';

import {
    asyncConnect
} from 'redux-connect'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        var state = getState();
        let id  = state.getIn(['user_doctor','frontuserinfo','id']);
        let idx = state.getIn(['user_doctor','frontuserinfo','idx']);
        if(!isAuthLoaded(state))
           return dispatch(loadAuth(params)).then(function(){
              if(!LoadedorLoading_doctor(state,idx,id))
                 return dispatch(load_detail({ id, idx, extract:true }))
              else
                 return Promise.resolve();
           })
        else {
              console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGG')
              if(!LoadedorLoading_doctor(state,idx,id))
                 return dispatch(load_detail({ id, idx, extract:true }))
              else
                 return Promise.resolve();
       }
    }
}]

@asyncConnect(asyncEvent)
@connect(
    state => {
        var idx = state.getIn(['user_doctor', 'frontuserinfo','idx']);
        return {
            auth : state.get('auth'),
            detailEdit: state.getIn(['user_doctor','doctors',idx,'detailedit'])
        }
    }, { pushState: push } )
export default  class Check extends Component{
    constructor(props) {
        // code
      super(props);
      this.state={ detail:false }
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
    handleSelectDate(selected){
       this.setState({...this.state,seldate:selected.format('YYYY-MM-DD')})
    }
    checkDutyInfo(){
       this.setState({...this.state,detail:!this.state.detail})
    }
    toEdit(){
        this.context.showRight({
            asyncProcess:asyncEventEdit,
            comCreater:function(){
               return <EditOrder/>
            }
        })
    }
    render(){
        let orderdata = this.props.detailEdit.get('data').toJS();
        let detail = this.state.detail;
        return CheckOrder({
          ...orderdata,
          handleSelectDate:(::this.handleSelectDate),
          toEdit:(::this.toEdit),
          checkDutyInfo:(::this.checkDutyInfo),
          detail,
          seldate:(this.state.seldate)
        })
    }

}


