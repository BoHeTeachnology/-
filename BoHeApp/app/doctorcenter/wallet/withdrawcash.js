import React, {Component, PropTypes} from 'react';

import {WithdrawcashUi} from './view/withdrawcash.js'
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'
import {Toast} from 'antd-mobile';
import {userwithdrawcash} from 'app/redux/reducers/withdrawcash.js'

import {hascard} from 'app/redux/reducers/doctorapp.js'

@asyncConnect([
  {
    promise: ({
      store: {
        dispatch,
        getState
      },
      params
    }) => {
      console.log('1111');
      return dispatch(hascard({}))

    }
  }
])

@connect(state => {
  return {
    doctorbaseinfo: state.getIn(['doctorapp', 'doctorbaseinfo']),
    withdrawcashres: state.getIn(['withdrawcash', 'withdrawcashres'])
  }
}, {
  pushState: push,
  userwithdrawcash: userwithdrawcash
})

export default class WithdrawCash extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {
      cashValue: '',
      secretValue: ''
    };
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  withdrawInputChange(ev, type) {
    console.log(ev)
    if (type == 'cash') {
      this.setState({
        ...this.state,
        cashValue: ev
      })
    } else if (type == 'withdrawsecret') {
      this.setState({
        ...this.state,
        secretValue: ev
      })
    }
  }
  withdrawConfirmhandle() {
    console.log('withdrawConfirmhandle')

    this.props.userwithdrawcash({pass: this.state.secretValue, status: 1, amount: this.state.cashValue}).then(() => {
      var currentstate = this.context.store.getState();

      var withdrawcashres = currentstate.getIn(['withdrawcash', 'withdrawcashres']).toJS();
      if (withdrawcashres.success == '0') {
        Toast.info(withdrawcashres.message, 1);
      } else {
        this.props.pushState('/doctorcenter/withdrawsuccess');
      }
      // console.log(this.props.withdrawcashres.toJS());
      // console.log((currentstate.getIn(['withdrawcash','withdrawcashres']).toJS()))
    }, () => {
      Toast.info('服务器繁忙~', 1)
    })

  }
  forgetpasswordhandleclick() {

    this.props.pushState('/doctorcenter/withdrawvalidate');
  }

  withdrawcashAllhandle() {
    this.setState({cashValue: this.props.doctorbaseinfo.toJS().data.balance})
  }
  render() {

    var doctorbaseinfo = this.props.doctorbaseinfo? this.props.doctorbaseinfo.toJS():{};
    return WithdrawcashUi({
      cashValue: (this.state.cashValue),
      secretValue: (this.state.secretValue),
      bankname: (doctorbaseinfo.hascard.data.bank_name),
      banknumber: (doctorbaseinfo.hascard.data.cardno),
      withdrawInputChange: (:: this.withdrawInputChange),
      withdrawcashAllhandle: (:: this.withdrawcashAllhandle),
      withdrawConfirmhandle: (:: this.withdrawConfirmhandle),
      forgetpasswordhandleclick: (:: this.forgetpasswordhandleclick)
    });
  }

}
