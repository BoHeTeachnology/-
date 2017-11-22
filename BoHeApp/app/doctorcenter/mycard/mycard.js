import React , { Component,PropTypes } from 'react';

import { MycardUi } from './view/mycard.js'
import ReactDOM from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { load_detail,frontBill as front } from 'app/redux/reducers/doctorlist.js'

import { asyncConnect } from 'redux-connect'

@connect(
    state => {
      return{
        doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo']),
      }
    }, { pushState: push })

export default class Mycard extends Component {
  	constructor(props) {
  	  super(props);
      this.state = {
        height:''
      }
  	}
    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    componentDidMount(){
      if(typeof window == undefined ){
          return;
      }
      let height = window.innerHeight || document.documentElement.clientHeight;
      let width = window.innerWidth || document.documentElement.clientWidth;
      this.setState({height})
    }
  	render(){
      let doctorbaseinfo = this.props.doctorbaseinfo?this.props.doctorbaseinfo.toJS():{};

        return MycardUi({
          ...doctorbaseinfo.data,
            height:this.state.height,
        });
  	}

}
