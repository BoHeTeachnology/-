import React, {Component,PropTypes} from 'react';

import {OrderInfoUi} from './view/orderinfo.js'
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'
import {addorder} from 'app/redux/reducers/wechathome';
import {Toast} from 'antd-mobile'

@connect(state => {
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
}, {pushState: push,addorder:addorder})

export default class OrderInfo extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {
      pickvalue: '',

    };
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  orderitemsurehandle(pickvalue) {
    this.setState({pickvalue: pickvalue})
  }
  go_orderhandle() {

var currentorderinfo =this.props.currentorderinfo.toJS();
var doctorinfo =this.props.doctorinfo.toJS();

if(this.state.pickvalue.length==0){
    Toast.info('请选择预约项目',1);
    return;
}
   Toast.loading('提交中...',0);
  this.props.addorder({doc_id:doctorinfo.id,type_id:this.state.pickvalue[0],event_id:currentorderinfo.id}).then(() =>{

   Toast.hide();
  var currentstate =this.context.store.getState();
  var addorderres = currentstate.getIn(['wechathome','addorderres']).toJS();
  if(addorderres.state=='no'){
    Toast.info(addorderres.msg,1)
  }else{
    this.props.pushState('/ordersuccess')
  }

},() =>{
  Toast.hide();
Toast.info('网络繁忙,稍后再试~',1)
})
}



  render() {

    var doctorinfo = this.props.doctorinfo
      ? this.props.doctorinfo.toJS()
      : {name:''};
    var currentorderinfo = this.props.currentorderinfo
      ? this.props.currentorderinfo.toJS()
      : {type:[]};
      console.log(doctorinfo)
      console.log('doctorinfo')
    var district = [];
    currentorderinfo.type.map((item) => {
      return (district.push({label: item.name, value: item.id}))
    })

    return OrderInfoUi({
      ...doctorinfo,
      ...currentorderinfo,
      doctorname: (doctorinfo.name),
      district: district,
      pickvalue: (this.state.pickvalue),
      orderitemsurehandle: (:: this.orderitemsurehandle),
      go_orderhandle: (:: this.go_orderhandle),
    });
  }

}
