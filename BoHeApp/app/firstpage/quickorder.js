import React , { Component } from 'react';

import { QuickOrderUI } from './view/quickorderui.js'

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

@connect(
    state => {
        return {

        }
    }, { pushState: push })
export default class QuickOrder extends Component {
  	constructor(props) {
  	  super(props);
      this.state = {};
  	}
    call(){
      if(typeof window == undefined){
        return;
      }
      window.location.href = "tel:400-9696791";
    }
    toFirstPage(){
      this.props.pushState('/firstpage');
    }
    componentWillMount(){

    }
    componentDidMount() {
      window.document.title='快速预约';
    }
  	render(){
        if(typeof window == 'undefined'){
          return;
        }
        var height = window.innerHeight || document.documentElement.clientHeight;
        return QuickOrderUI({
            call:(::this.call),
            toFirstPage:(::this.toFirstPage),
            height
        });
  	}

}
