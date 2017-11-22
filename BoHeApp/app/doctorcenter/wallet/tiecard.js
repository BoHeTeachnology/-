import React , { Component } from 'react';

import { TieCardUi } from './view/tiecard.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import {Toast} from 'antd-mobile';

import { tiecard } from 'app/redux/reducers/doctorapp.js'


@connect(
    state => {
        return {
          doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo'])
        }
    }, { pushState: push,tiecard })

export default class TieCard extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {
          bankcard:'',
          modal:false,
          is_modal:false
        };
  	}
    input(ev){
        this.setState({...this.state,bankcard:ev})
    }
    next(){
      console.log(this.props.doctorbaseinfo+'sdsd');
      console.log(this.props.doctorbaseinfo);
      let _bankcard = this.state.bankcard;
      let bankcard =  _bankcard.replace(/\s/g,'');
      console.log(bankcard);
      this.props.tiecard({bankcard}).then(()=>{
            console.log(this.props.doctorbaseinfo);
         let tiecardres = this.props.doctorbaseinfo.toJS().tiecardres;
         if(tiecardres.success=='0'){
           Toast.info(tiecardres.message,1);
         }else{
           this.props.pushState('/doctorcenter/phoneconfirm');
         }


      },() =>{
         Toast.info('服务器繁忙~',1);
      })
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
        let doctorbaseinfo = this.props.doctorbaseinfo?this.props.doctorbaseinfo.toJS():{}
        return TieCardUi({
            ...doctorbaseinfo.data,
            bankcard:this.state.bankcard,
            input:(::this.input),
            next:(::this.next),
            showModal:(::this.showModal),
            onClose:(::this.onClose),
            modal:this.state.modal,
            is_modal:this.state.is_modal
        });
  	}

}
