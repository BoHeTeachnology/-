import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {frontBill} from 'app/redux/reducers/doctorlist.js'
import {LoadMore} from 'app/common/js/partial/loadmore.js'
import {DoctorView} from './view/doctor.js'

@connect(state => ({

}), {
  pushState: push,
  toShow: frontBill
})
export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: ''
    }
  }
  // methods
  toDetail(docrorid) {
    console.log(100009);
    console.log(this.props.idx);
    console.log(this.props.id);
    console.log(this.props.is_login);
    let idx = this.props.idx;
    let id = this.props.id;
    let is_login = this.props.is_login;
    this.props.toShow({idx, id:docrorid});

    this.props.pushState('/doctorinfo/' + docrorid + '/' + idx + '/' + is_login);
  }
  componentDidMount() {
    if (typeof window == undefined) {
      return;
    }
    var width = window.innerWidth || document.documentElement.clientWidth;
    this.setState({
      ...this.state,
      width
    });
  }
  render() {
    if (this.props.flag) {
      return (LoadMore({loading: this.props.loading}))
    } else
      return (DoctorView({
        ...this.props,
        toDetail: (:: this.toDetail),
        width: this.state.width
      }))
  }

}
