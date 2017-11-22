import React, {Component,PropTypes} from 'react'
import ReactDOM  from 'react-dom'
import {Link, History} from 'react-router'
import {MineOrderInfoUi} from './view/mineorderinfo.js'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {asyncConnect} from 'redux-connect'
import { myorderslist,cancelorder } from 'app/redux/reducers/usercenter';
import { isElementVisible } from 'app/util/utils.js'
import { LoadedorLoading as successorLoading ,  load as loadDoctors,clearlist } from 'app/redux/reducers/doctorlist';
import {Toast} from 'antd-mobile'


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {

      // const promises = [];
      // promises.push(dispatch(myorderslist()));
      // return Promise.all(promises);

  }
}])

@connect(state => ({
currentorderiteminfo:state.getIn(['usercenter','currentorderiteminfo']),
user: state.getIn(['auth','user']),
}), {
  pushState: push,
  cancelorder,
})

export default class MineOrderInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

cancelorderhandleclick(date_id){
console.log(date_id)
   Toast.loading('提交中...',0);
  this.props.cancelorder({date_id:date_id}).then(() =>{
  Toast.hide();
 var currentstate =this.context.store.getState();
 var cancelorderres = currentstate.getIn(['usercenter','cancelorderres']).toJS();
 Toast.info(cancelorderres.msg,1)
 if(cancelorderres.state=='no'){
   Toast.info(cancelorderres.msg,1)
 }else{
     this.props.pushState('/usercenter')
 }
},() =>{
  Toast.hide();
Toast.info('网络繁忙,稍后再试~',1)
});
}
 render() {

    return MineOrderInfoUi({
  currentorderitem:(this.props.currentorderiteminfo.toJS()),
  user:(this.props.user.toJS().data),
  cancelorderhandleclick:(::this.cancelorderhandleclick),
    })
  }

}
