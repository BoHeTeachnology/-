import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import {Link, History} from 'react-router'
import {MineOrderUi} from './view/mineorder.js'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {asyncConnect} from 'redux-connect'
import { myorderslist,store_currentorderiteminfo } from 'app/redux/reducers/usercenter';
import { isElementVisible } from 'app/util/utils.js'
import { LoadedorLoading as successorLoading ,  load as loadDoctors,clearlist } from 'app/redux/reducers/doctorlist';


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {

      const promises = [];
      promises.push(dispatch(myorderslist()));
      return Promise.all(promises);

  }
}])

@connect(state => ({
  orderslist:state.getIn(['usercenter','orderslist']),
  user: state.getIn(['auth','user']),

}), {
  pushState: push,
  store_currentorderiteminfo,
})

export default class MineOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
orderitemclickhandle(index){
  console.log('dsadasdasd');
  console.log(index);
  var orderitem =this.props.orderslist.toJS().data[index];
  console.log(orderitem);
  this.props.store_currentorderiteminfo(orderitem)
 this.props.pushState('/usercenter/orderinfo');
}



  render() {

    console.log(this.props.orderslist.toJS().data)
  var orderslist = this.props.orderslist?this.props.orderslist.toJS().data:[];
    console.log(orderslist)
    console.log(this.props.user.toJS())
    console.log(this.props.user.toJS().data)
    return orderslist.length!=0?MineOrderUi({
      orderslist:orderslist,
      user:(this.props.user.toJS().data),
      orderitemclickhandle:(::this.orderitemclickhandle),


    }):(<div className="orderlistnonewrap" style={{textAlign:'center'}}>
      <img style={{ marginTop:'50%' }} src={require('app/common/images/noneorderlist.png')} alt=""/>
     <p style={{ marginTop:'0.2rem',color:' #888' }}>无预约数据</p>
    </div>
  )
  }
}
