import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import { LoadMore } from 'app/common/js/partial/loadmore.js'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { LoadedorLoading as successorLoading ,  load as loadOrders } from 'app/redux/reducers/order_patient';

import { Order } from './view/order.js'

import {
    frontOrder
} from 'app/redux/reducers/order_patient.js'

@connect(
  state => ({}),
  { pushState: push, load: loadOrders ,toShow: frontOrder})
export default class MyOrder extends Component {
    static propTypes = {
        is_return: React.PropTypes.number,
        patient_name: React.PropTypes.string,
        service_name: React.PropTypes.string,
        reserve_number: React.PropTypes.string,
        visit_time: React.PropTypes.string,
        status: React.PropTypes.number,
        id: React.PropTypes.number,
        idx: React.PropTypes.number

    };

    toDetail() {
            var idx = this.props.idx;
            var id = this.props.id;
            console.log(id)
            console.log(idx)
            this.props.toShow({ idx, id });
            this.props.pushState({
                pathname: '/usercenter/myOrderInfo',
                query: { id, idx }
            })


    }

    handleInview(){
    }

    componentDidMount(){
    }
    componentDidUpdate(){

    }
    render() {
        if (this.props.flag) {
            return (LoadMore({ loading: this.props.loading }))
        } else
            return (Order({...this.props, toDetail: (::this.toDetail) }))
    }


}
