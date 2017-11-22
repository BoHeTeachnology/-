import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import {OrderSuccessUI} from './view/ordersuccess.js'

import {asyncConnect} from 'redux-connect'

import {push} from 'react-router-redux';

import {connect} from 'react-redux';

@asyncConnect([
  {
    promise: ({
      store: {
        dispatch,
        getState
      },
      params
    }) => {}
  }
])
@connect(state => {
  return {}
}, {pushState: push})
export default class OrderSuccess extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {};
  }


  componentWillMount() {
    if (typeof window == 'undefined') {
      return;
    }
    let height = window.innerHeight || document.documentElement.clientHeight;
    let width = window.innerWidth || document.documentElement.clientWidth;
    this.setState({width, height})
  }
  componentDidMount() {

  }

  render() {

    return OrderSuccessUI({
      width: this.state.width,
      height: this.state.height,

    })
  }
}
