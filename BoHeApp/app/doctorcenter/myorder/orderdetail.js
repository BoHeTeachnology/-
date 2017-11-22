import React , { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { ListView,Toast } from 'antd-mobile';
import { OrderDetailUi } from './view/orderdetail';

const perpage = 10; //定义每一页数据量

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {

    }
}])
@connect(
    state => {
        return {
            orderlist:state.getIn(['doctorapp','orderlist']),
            saveid:state.getIn(['doctorapp','saveid'])
        }
    }, { pushState: push })

export default class OrderDetail extends Component {
  	constructor(props) {
    	  super(props);
        this.state = {

        };
  	}
    componentWillMount(){

    }
    componentDidMount(){
        let height = window.innerHeight || document.documentElement.clientHeight;
        let width = window.innerWidth || document.documentElement.clientWidth;
        this.setState({ height,width })
    }
    paylist(){

    }
  	render(){
        console.log('orderinfo-----');
        let id = this.props.saveid.toJS().id;
        let idx = this.props.saveid.toJS().idx;
        let orderlist = this.props.orderlist?this.props.orderlist.toJS():[];
        let orderinfo = orderlist[idx];
        return OrderDetailUi({
            ...orderinfo,
            paylist:(::this.paylist),
            height:this.state.height,
            width:this.state.width
        });
  	}
}
