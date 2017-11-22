import React , { Component,PropTypes } from 'react';

import { PhoneConfirmUi } from './view/phoneconfirm.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { getverify } from 'app/redux/reducers/doctorapp.js'

import { phoneconfirm,getcity,finaltiecard } from 'app/redux/reducers/doctorapp.js'

import {Toast} from 'antd-mobile';



@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {

        return dispatch(getcity({citycode:0})).then(()=>{
          let state = getState();
          let citycode = state.getIn(['doctorapp','province']).toJS()[0].citycode;
            return dispatch(getcity({citycode:citycode}));
        })

    }
}])
@connect(
    state => {
        return {
            province:state.getIn(['doctorapp','province']),
            doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo']),
            phonebindres:state.getIn(['doctorapp','phonebindres']),

        }
    }, { pushState: push,getverify,phoneconfirm,getcity,finaltiecard })

export default class PhoneConfirm extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {
          phone:'',
          verify:'',
          modal:false,
          finallyTime:61,
          is_modal:false
        };
        this.sum = 0;
  	}

    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    input(ev,type){
      console.log(ev);
        if(type == 'phone'){
          this.setState({...this.state,phone:ev})
        }else if(type == 'verify'){
          this.setState({...this.state,verify:ev})
        }
    }
    changePick(ev){
      console.log('QQQQQQQ')
      console.log(ev[0]);
      if(ev[0] != this.state.province){
        console.log('province');
        this.props.getcity({citycode:ev[0]})
      }
      this.setState({...this.state,pickerValue:ev,province:ev[0],city:ev[1]})
    }
    next(){
      console.log(this.props.doctorbaseinfo.toJS())
        console.log(this.props.tiecardres.data)
      let _phone = this.state.phone;
      let phone = _phone.split(' ')[0]+_phone.split(' ')[1]+_phone.split(' ')[2];
      let verify = this.state.verify;
      let doctorbaseinfo = this.props.doctorbaseinfo.data?this.props.doctorbaseinfo.toJS().data:{};
      let province = this.props.province?this.props.province.toJS():[];
      let identity = doctorbaseinfo.identity;
      let bankname = doctorbaseinfo.tiecardres.data.bankname;
      let name = doctorbaseinfo.name;
      let bankcode = doctorbaseinfo.tiecardres.data.bankcode;
      let cardno = doctorbaseinfo.tiecardres.data.cardno;
      let card_type = doctorbaseinfo.tiecardres.data.cardtype;
      let bank_province = '';
      let bank_city = '';
      province.map((province)=>{
        if(province.citycode == this.state.province){
          bank_province = province.cityname;
          province.city.map((city)=>{
            if(city.citycode == this.state.city){
              bank_city = city.cityname;
            }
          })
        }
      })

      this.props.phoneconfirm({phone,verify}).then(()=>{


        var currentstateone=this.context.store.getState();
        var phonebindres =currentstateone.getIn(['doctorapp','phonebindres']).toJS();
if (phonebindres.success=='0') {
  Toast.info(phonebindres.message,1)
}else {

        this.props.finaltiecard({identity,bankname,name,cardno,bankcode,bank_province,bank_city,card_type }).then(()=>{

      var currentstate=this.context.store.getState();
      var tiecardres =currentstate.getIn(['doctorapp','tiecardres']).toJS();
      console.log(phonebindres)
        console.log('tiecardres')
      if(tiecardres.success=='0'){
        Toast.info(tiecardres.message,1)
      }else{
          this.props.pushState('/doctorcenter/tiesuccess');
      }

    },() =>{
        Toast.info('服务器繁忙~',1)
    })

}
},() =>{
      Toast.info('服务器繁忙~',1)
    })
}
    getVerify(showToast){
      let _phone = this.state.phone;
      let phone = _phone.split(' ')[0]+_phone.split(' ')[1]+_phone.split(' ')[2];
      this.props.getverify({ phone:phone });
      let phonereg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if(phonereg.test(phone)&&(phone!='')&&(!!phone)){
        if(this.sum == 1){
          return;
        }
        console.log('getVerifygetVerify')
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
        showToast();
      }
    }
    showModal(e){
      e.preventDefault();
      this.setState({
        modal: true,
      });
    }
    onClose(){
      this.setState({
        modal: false,
      });
    }
    componentDidMount(){
      this.setState({...this.state,is_modal:true})
    }
  	render(){
        let doctorbaseinfo = this.props.doctorbaseinfo?this.props.doctorbaseinfo.toJS():{};
        let province = this.props.province?this.props.province.toJS():[];

        let district = [];
        province.map((province)=>{
          let _children = [];
          province.city?province.city.map((city)=>{
            let _city = {
              label:city.cityname,
              value:city.citycode
            }
            _children.push(_city)
          }):''
          let _province = {
            label:province.cityname,
            value:province.citycode,
            children:_children
          }
          district.push(_province)
        })
        return PhoneConfirmUi({
            ...doctorbaseinfo.tiecardres.data,
            province,
            district,
            phone:this.state.phone,
            verify:this.state.verify,
            input:(::this.input),
            next:(::this.next),
            pickerValue:this.state.pickerValue,
            changePick:(::this.changePick),
            getVerify:(::this.getVerify),
            showModal:(::this.showModal),
            onClose:(::this.onClose),
            modal:this.state.modal,
            finallyTime:this.state.finallyTime,
            is_modal:this.state.is_modal
        });
  	}

}
