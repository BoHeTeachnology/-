import React , { Component } from 'react';

export default class TimeBox extends Component {
    constructor(props){
      super(props);
    }

    chooseTime(time){
      this.props.chooseTime(time)
    }
    shouldComponentUpdate(nextProps,nextState){
      if(nextProps.color==this.props.color){
          return false;
      }else{
          return true;
      }
    }
    render() {
      let that = this;
      return <li onClick={ ()=>{ that.chooseTime(that.props.time) }} className={ this.props.color } style={(this.props.color=='gray')?{pointerEvents:"none",height:'auto',background:'#fff'}:{height:'auto',background:'#fff'}}><span style={{paddingLeft:'0px'}}>{this.props.time}</span></li>
    }

}
