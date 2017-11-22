import React , { Component } from 'react';

import Promise from 'bluebird'

import { asyncConnect } from 'redux-connect'

import { Link } from 'react-router'

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import { _OrderSuccess_ } from './view/ordersuccess.js'

import {
  load_date,
  select_date,
  create_order
} from 'doctortool/redux/reducers/user_doctor.js'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ doctorRepo : state.get('user_doctor')}),
  { pushState: push,select_date})
export default class OrderSuccess extends Component {

    componentDidMount(){
        if ((typeof window === 'undefined')||(window.__SERVER__ == true)) {

        }else{
          document.title = '预约成功';
        }
    }
    render() {

        var clinic = this.props.params.clinicname;
        var clinicaddress = this.props.params.clinicaddress;
        var visitdate = this.props.params.visitdate;
        var visittime = this.props.params.visittime;
        var week = this.props.params.week;
        var patientname = this.props.params.patientName;
        var patientphone = this.props.params.patientPhone;
        var name = this.props.doctorRepo.getIn(['doctor','name']);
        var doctor = this.props.doctorRepo.get('doctor').toJS();
        var qr_code = this.props.doctorRepo.get('qr_code');
        return _OrderSuccess_({
            clinicaddress,
            clinic,
            visittime,
            visitdate,
            week,
            patientname,
            patientphone,
            qr_code,
            ...doctor
        });
    }
	// methods
}
