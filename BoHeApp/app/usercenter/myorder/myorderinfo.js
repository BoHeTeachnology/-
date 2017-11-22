import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect'
import { load_detail as load } from 'app/redux/reducers/order_patient';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Promise from 'bluebird'
import { OrderInfo } from './view/orderinfo.js'

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
        const promises = [];
        var state = getState();

        var id = state.getIn(['order_patient','frontorder','id']);

        console.log(id)

        promises.push(dispatch(load({ id })))
        return Promise.all(promises);
    }
}])
@connect(
    state => {
        var idx = state.getIn(['order_patient','frontorder','idx'])
        var order = state.getIn(['order_patient','orders']).get(idx)
        return { order ,idx }
    }, { pushState: push })
export default class MyOrderInfo extends Component {
    static propTypes = {
        order:React.PropTypes.object.isRequired,
        idx:React.PropTypes.number.isRequired
    };
    constructor(props) {
      super(props);
      this.state = {cancelled:false};
      this.cancelanimateitem = [];
    }
    toCancelOrder(){
       console.log("sssss")
       this.setState({cancelled:true});
       var that = this;
       setTimeout(function(){
          that.setState({cancelled:false});
       },1000);
    }
    render() {
        var info = this.props.order.toJS();
        console.log("ggg")
        console.log(info)
        return (OrderInfo({...info,toCancelOrderHandler:(::this.toCancelOrder),cancelled:this.state.cancelled,cancelitem:this.cancelanimateitem}));
    }
}
