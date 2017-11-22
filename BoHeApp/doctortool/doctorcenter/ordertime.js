import React , { Component } from 'react';

import Promise from 'bluebird'

import { asyncConnect } from 'redux-connect'

import { Link } from 'react-router'

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import { _OrderTime_ } from './view/ordertime.js'

import {
  load_time,
  select_time
} from 'doctortool/redux/reducers/user_doctor.js'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    let state = getState()
    let doctorid = state.getIn(['user_doctor','doctor','id'])
    let date = state.getIn(['user_doctor','seldate'])
    promises.push(dispatch(load_time({ doctorid,date })));
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ doctorRepo : state.get('user_doctor')}),
  { pushState: push, select_time})
export default class OrderTime extends Component {
    constructor(props){
      super(props);
      this.clicktime = '';
    }
    toClinic(event){
    	event.preventDefault();
    	this.props.pushState('/doctorcenter/toOrderClinic')
    }
    chooseTime(time){
      this.clicktime = time;
      this.props.select_time(time)
    }
    componentDidMount(){

    }

    render() {
        var date  = this.props.doctorRepo.get('seldate');
        var doctor = this.props.doctorRepo.get('doctor').toJS();
        var idx = this.props.doctorRepo.getIn(['doctor','dates']).findIndex(value =>  value.get('date') == date)
        var times = [];
        if(idx>=0){
            if(this.props.doctorRepo.hasIn(['doctor','dates',idx,'times']))
               times = this.props.doctorRepo.getIn(['doctor','dates',idx,'times']).toJS()
        }
        return _OrderTime_({
            times,
            ...doctor,
            date,
            toClinic:(::this.toClinic),
            chooseTime:(::this.chooseTime),
            clicktime:(this.clicktime)
        });
    }
	// methods
}
