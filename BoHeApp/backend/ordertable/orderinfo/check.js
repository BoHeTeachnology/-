import React , { Component,PropTypes } from 'react';

import Promise from 'bluebird'

import {
    push
} from 'react-router-redux';

import { CheckOrder } from './view/check.js'

import  EditOrder,{ asyncEvent as asyncEventCheck } from './edit.js'

import {
   load_detail,
   LoadedorLoading,
   LoadedorLoading_order
} from 'backend/redux/reducers/order_patient.js'

import {
   load_detail as user_doctor_detail
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
        let id  = state.getIn(['order_patient','frontorder','id']);
        let idx = state.getIn(['order_patient','frontorder','idx']);
        if(!isAuthLoaded(state))
           return dispatch(loadAuth(params)).then(function(){
              if(!LoadedorLoading_order(state,idx,id))
                 return dispatch(load_detail({ id, idx, extract:true }))
              else
                 return Promise.resolve();
           })
        else
              if(!LoadedorLoading_order(state,idx,id))
                 return dispatch(load_detail({ id, idx, extract:true }))
              else
                 return Promise.resolve();
    }
}]

@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
            auth : state.get('auth'),
            detailEdit: state.getIn(['order_patient','detailedit']),
            doctorId: state.getIn(['order_patient','detailedit','data','id'])
        }
    }, { pushState: push,user_doctor_detail } )
export default  class Check extends Component{
    constructor(props) {
        // code
      super(props);
      this.state = { detail:false }
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
    toEdit(){

        this.context.showRight({
            asyncProcess:asyncEventCheck,
            comCreater:function(){
               return <EditOrder/>
            }
        })
    }
    handleSelectDate(selected){
      console.log('!@#$!@#$');
      console.log(selected.format('YYYY-MM-DD'));
      this.setState({...this.state,seldate:selected.format('YYYY-MM-DD')})
    }
    checkDutyInfo(){
      var id = this.props.doctorId;
      this.props.user_doctor_detail({id}).then((doctor) => {  this.setState({ ...this.state,detail:true,doctor })});
    }
    closeDutyInfo(){
       this.setState({ ...this.state,detail:false })
    }
    render(){
        let orderdata = this.props.detailEdit.get('data').toJS();
        let seldate = this.state.seldate;
        let doctorId = this.props.doctorId;
        var time_arr = this.state.doctor?(this.state.doctor.time_arr?this.state.doctor.time_arr:{}):{};
        console.log('`````````````1111111');
        console.log(orderdata);
        return CheckOrder({
          ...orderdata,
          toEdit:(::this.toEdit),
          checkDutyInfo:(::this.checkDutyInfo),
          closeDutyInfo:(::this.closeDutyInfo),
          detail:(this.state.detail),
          handleSelectDate:(::this.handleSelectDate),
          seldate,
          time_arr
        })
    }

}


