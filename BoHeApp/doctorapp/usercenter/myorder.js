import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import {MyorderUI} from './view/myorder.js'

import {get_orderlist} from 'doctorapp/redux/reducers/myorder'

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
    }) => {

      return dispatch(get_orderlist())

    }
  }
])
@connect(state => {
  return {
    orderlist: state.getIn(['myorder', 'orderlistres'])
  }
}, {pushState: push})
export default class Center extends Component {
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
  componentDidMount() {}

  render() {
    console.log(this.props.orderlist.toJS());
    var listArray = this.props.orderlist?this.props.orderlist.toJS().data:[];
    return MyorderUI({
      width: this.state.width,
      height: this.state.height,
      orderListArray: listArray,
      })
  }
}