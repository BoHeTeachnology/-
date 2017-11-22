import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';


import {
    connect
} from 'react-redux';


import { error_table } from 'doctortool/redux/reducers/config/error_table.js'

@connect(
    state => {
        return {
            user_doctor_error: state.getIn(['user_doctor','error'])
        }
    }, { pushState: push })
export default class ErrorCenter extends Component {
  constructor(props) {
		// code
	  super(props);
    this.state = {isShow : 'none'};
  }
  componentDidUpdate(){

  }
  componentWillUpdate(){
      this.state.isShow = 'block';
  }
  render(){

       if((!this.props.user_doctor_error)||(typeof window === 'undefined')||(window.__SERVER__ == true)){
            return <div/>
       }
       var height = window.innerHeight || document.documentElement.clientHeight;
       var width = window.innerWidth || document.documentElement.clientWidth;
       var msg = '';
       var msglength = 0;
       if(this.props.user_doctor_error&&this.props.user_doctor_error.hasIn(['post_success'])){
           msg = this.props.user_doctor_error.getIn(['msg']);
           this.props.user_doctor_error.getIn(['post_success'])();
       }else if(this.props.user_doctor_error&&this.props.user_doctor_error.hasIn(['pos'])){

           let pos = this.props.user_doctor_error.getIn(['pos']).toJS();
           if(pos[1] == 'loaddate'){
              this.props.pushState('/doctorasist');
           }
           if(pos[1] == 'loadtime'){
              this.props.pushState('/doctorasist/doctorcenter/toOrderDate');
           }
           let size = this.props.user_doctor_error.getIn(['pos']).size
           let path_obj;
           let path_name = '';
           let _error_table = error_table;
           for(let index=0;index<size;index++){
                path_obj = _error_table[pos[index]];
                path_name = path_obj.name + path_name;
                _error_table =  path_obj;
           }
           if(path_name == '加载出诊日期'){
             msg = path_name + '请重试!';
           }
           else if(path_name == '加载出诊时间'){
             msg = path_name + '失败请重试!';
           }else if(path_name == '手机号格式不正确'){
             msg = path_name;
           }else if(path_name == '姓名格式错误'){
             msg = path_name;
           }else{
             msg = path_name + '失败!';
           }
       }
       msglength = msg.length;
       if(msglength <=0 )
         return <div style={{display:'none'}}/>
       else{
           var that = this;
           if(that.state.isShow == 'block'){
              var timer = setTimeout(function(){
                that.setState({isShow:'none'});
                clearTimeout(timer);
              },2000)
           }
           return (
             <div style={{display:this.state.isShow,position:'fixed',top:height/2,left:width/2,padding:'20px',marginTop:'-27px',marginLeft:-(msglength*14+40)/2+'px',fontSize:'14px',background:'rgba(0,0,0,0.7)',color:'#fff',zIndex:'999',borderRadius:'4px'}}>{msg}</div>
           )
       }
  }

}
