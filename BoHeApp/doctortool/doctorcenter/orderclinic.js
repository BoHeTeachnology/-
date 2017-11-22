import React , { Component } from 'react';

import Promise from 'bluebird'

import { asyncConnect } from 'redux-connect'

import { Link } from 'react-router'

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import { _OrderClinic_ } from './view/orderclinic.js'

import {
  load_date,
  select_date,
  create_order,
  get_verify,
  phone_error,
  name_error,
  verify_error
} from 'doctortool/redux/reducers/user_doctor.js'

import ErrorCenter from 'doctortool/errorcenter/user_doctor/errorcenter.js'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ doctorRepo : state.get('user_doctor')}),
  { pushState: push,select_date,create_order,get_verify,phone_error,name_error,verify_error})
export default class OrderClinic extends Component {

    constructor(props){
      super(props);
      this.state={ isShow:false };
    }
    toSuccess(){
      this.setState({...this.state,isShow:false})
    	this.props.pushState('/doctorcenter/toOrderSuccess')
    }
    createOrder({ patient_name, patient_phone ,verify}){
      var name_test_regex = /^[A-z]+$|^[\u4E00-\u9FA5]+$/;
      let phonereg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if(!name_test_regex.test(patient_name)||(!patient_name)){
          this.props.name_error();
          return;
      }
      if(!(phonereg.test(patient_phone)&&(patient_phone!='')&&(!!patient_phone))){
          this.props.phone_error();
          return;
      }
      if(!verify||(verify=='')){
          this.props.verify_error();
          return;
      }
      var date = this.props.doctorRepo.get('seldate');
      var time = this.props.doctorRepo.get('seltime');
      var doctor_id = this.props.doctorRepo.getIn(['doctor','id']);
      let clinic_name = this.props.params.clinicname;
      let clinic_id = this.props.params.clinicid;
      let service_id = 11;
        this.props.create_order({
          patient_name,
          patient_phone,
          date,
          time,
          clinic_name,
          doctor_id,
          clinic_id,
          service_id,
          verify,
          post_success:(::this.toSuccess)
        });


    }
    componentDidMount(){

    }
    change(key,ev){
      if(key=='name'){
         this.setState({...this.state,name:ev.target.value})
      }else{
         this.setState({...this.state,phone:ev.target.value})
      }
    }
    confirm(){
      let doctor = this.props.doctorRepo.get('doctor').toJS();
      //if(doctor.is_login == 0){
      this.setState({...this.state,isShow:!this.state.isShow})
      //}
      // }else{
      //   var date = this.props.doctorRepo.get('seldate');
      //   var time = this.props.doctorRepo.get('seltime');
      //   var doctor_id = this.props.doctorRepo.getIn(['doctor','id']);
      //   let clinic_name = this.props.params.clinicname;
      //   let clinic_id = this.props.params.clinicid;
      //   let service_id = 11;

      //   this.props.create_order({
      //     date,
      //     time,
      //     clinic_name,
      //     doctor_id,
      //     clinic_id,
      //     service_id,
      //     post_success:(::this.toSuccess)
      //   });
      // }

    }
    cancel(){
      this.setState({isShow:!this.state.isShow,patient_name:'',patient_phone:''})
    }
    verify(){
      let patient_phone = this.state.patient_phone;
      let phonereg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if(phonereg.test(patient_phone)&&(patient_phone!='')&&(!!patient_phone)){
        if(this.sum == 1){
          return;
        }
        this.props.get_verify({ phone:this.state.patient_phone});
        var that = this;
          var finallyTime;
          var timer = setInterval(function(){
            finallyTime = that.state.finallyTime - 1;
            that.setState({...that.state,finallyTime:finallyTime})
            if(that.state.finallyTime >0 ){
              that.sum = 1;
            }else{
              that.sum = 0;
              clearInterval(timer);
              that.setState({...that.state,finallyTime:61 })
            }
          },1000)
      }else{
        this.props.phone_error();
      }


    }
    render() {
        var clinic = this.props.doctorRepo.getIn(['doctor','clinic'])
        var clinicaddress = this.props.doctorRepo.getIn(['doctor','clinicaddress'])
        var doctor = this.props.doctorRepo.get('doctor')
        console.log(clinic);
        console.log(clinicaddress);
        return _OrderClinic_({
            clinicaddress,
            clinic,
            ...doctor,
            createOrder:(::this.createOrder),
            change:(::this.change),
            confirm:(::this.confirm),
            isShow:(this.state.isShow),
            name:(this.state.name),
            phone:(this.state.phone)
        });
    }
	// methods
}
