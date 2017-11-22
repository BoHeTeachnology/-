import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { frontBill } from 'app/redux/reducers/bill_patient.js'
import { LoadMore } from 'app/common/js/partial/loadmore.js'
import { Bill } from './view/bill.js'

@connect(
    state => ({}), { pushState: push, toShow: frontBill })
export default class MyBill extends Component {
    static propTypes = {
        status: React.PropTypes.number.isRequired,
        patient_name: React.PropTypes.string.isRequired,
        project_name: React.PropTypes.string.isRequired,
        pay_money: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
        idx: React.PropTypes.number.isRequired,
        bill_number: React.PropTypes.string.isRequired

    };
    // methods
    toDetail() {
        var idx = this.props.idx;
        var id = this.props.id;
        this.props.toShow({ idx, id });

        this.props.pushState({
            pathname: '/usercenter/myBillContent'
        });
    }

    render() {
        if (this.props.flag) {
            return (LoadMore({ loading: this.props.loading }))
        } else
            return (Bill({...this.props, toDetail: (::this.toDetail) }))
    }

}
