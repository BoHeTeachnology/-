import React , { Component } from 'react';

import { OrderSuccessUi } from './view/ordersuccess.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'


@connect(
    state => {
      var currentorderinfo=state.getIn(['wechathome', 'currentorderinfo']);
      if(currentorderinfo.toJS().srctype!='null'){
        var idx = state.getIn(['doctorlist', 'frontbill', 'idx']);
        // var doctorinfo = state.getIn(['wechathome', 'doctorinfo']);
        var doctorinfo= state.getIn(['doctorlist','doctors',idx]);
      }else{
          var doctorinfo= state.getIn(['doctorlist']);
      };
      return {
        currentorderinfo,
        doctorinfo
      }
    }, { pushState: push })

export default class OrderSuccess extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}

    ordersuccessbackhandle(){
   this.props.pushState('/firstpage')

    }

  	render(){
      var doctorinfo = this.props.doctorinfo
        ? this.props.doctorinfo.toJS()
        : {name:''};
      var currentorderinfo = this.props.currentorderinfo
        ? this.props.currentorderinfo.toJS()
        : {type:[]};
var height = window.innerHeight || document.documentElement.clientHeight;
        return OrderSuccessUi({
          height,
          ...doctorinfo,
          ...currentorderinfo,
          doctorname: (doctorinfo.name),
          ordersuccessbackhandle:(::this.ordersuccessbackhandle)
        });
  	}

}
