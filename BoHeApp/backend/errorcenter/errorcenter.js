import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import ErrorCenter_TEETH from 'backend/errorcenter/teeth/errorcenter.js'

import ErrorCenter_USERPATENT from 'backend/errorcenter/user_patient/errorcenter.js'

export default class ErrorCenter extends Component {
  constructor(props) {
    // code
    super(props);
  }
  componentDidUpdate(){

  }
  componentWillUpdate(){

  }
  render(){
     return <div>{<ErrorCenter_TEETH/>}{<ErrorCenter_USERPATENT/>}</div>
  }

}




