import React, {Component} from 'react';

import {IndentyfailUi} from './view/indentyfail.js'
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'

@connect(state => {
  return {
    validatestate: state.getIn(['validate', 'validatestate'])
  }
}, {pushState: push})

export default class IndentyFail extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {};
  }
  newvalidateclickhandle() {
    this.props.pushState('/doctorcenter/validateone')
  }
  render() {
    var validatestate = this.props.validatestate? this.props.validatestate.toJS(): {};
    return IndentyfailUi({
      ...validatestate.data,
      newvalidateclickhandle: (:: this.newvalidateclickhandle)
    });
  }

}
