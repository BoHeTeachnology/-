import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';


import {
    connect
} from 'react-redux';


import { error_table } from 'doctorcenter/redux/reducers/config/error_table.js'

@connect(
    state => {
        return {
            doctorapp_error: state.getIn(['doctorapp','error'])
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

       if((!this.props.doctorapp_error)||(typeof window === 'undefined')||(window.__SERVER__ == true)){
            return <div/>
       }
       var height = window.innerHeight || document.documentElement.clientHeight;
       var width = window.innerWidth || document.documentElement.clientWidth;
       var msg = '';
       var msglength = 0;
       msg = this.props.doctorapp_error.getIn(['msg']);
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
