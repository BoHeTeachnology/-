import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'
import {PriceListUi} from './view/pricelist';
import {getpricelist} from 'app/redux/reducers/doctorapp.js'
import {Toast} from 'antd-mobile'
@asyncConnect([
  {
    promise: ({store: {dispatch,getState},params}) => {
        return dispatch(getpricelist())
    }
  }
])
@connect(state => {
  return {
pricelist:state.getIn(['doctorapp','pricelist'])
  }
}, {pushState: push,})

export default class PriceList extends Component {
  constructor(props) {
    super(props);
      var pricelist =this.props.pricelist?this.props.pricelist.toJS().data:[]
    this.state = {
      currentpricelist:pricelist.length>0?pricelist[0]:[],
      selectitemidx:[],
      typeidx:0,
    }
  }
removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
      if(arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  }

  checkboxChange(value, event) {
    console.log(value)
    console.log(event.target.checked)
if(event.target.checked==true){
this.state.selectitemidx.push(value)
  this.setState({
    selectitemidx:this.state.selectitemidx
  })
}else{
this.removeByValue(this.state.selectitemidx,value)
  this.setState({
    selectitemidx:this.state.selectitemidx,
  })
}
  }
  stepperChange(val, index) {
   this.state.currentpricelist.subclass[index].stepVal=val;
   this.setState({currentpricelist:this.state.currentpricelist})
  }
  leftitemclickhandele(typeidx) {
    console.log(typeidx)
    if(this.state.typeidx==typeidx){
      return;
    }else{


      var pricelist =this.props.pricelist.toJS().data;
          console.log(pricelist[typeidx])
    this.setState({
      currentpricelist:pricelist[typeidx],
      selectitemidx:[],
      typeidx:typeidx
    })
    console.log('leftitemclickhandele')
      }
  }
gopayClickhandle(){
  if(this.state.selectitemidx.length==0){

    Toast.info('不能为空~',1)

  }else{
    console.log('gopayClickhandle')
  }
}
  componentWillMount() {

  }
componentDidMount() {

console.log('lllll')

}
  render() {
    console.log('1111111');
    var pricelist =this.props.pricelist?this.props.pricelist.toJS().data:[];
    var totalmoney =0.00;
    if(this.state.selectitemidx.length>0){
      console.log(this.state.selectitemidx)
      console.log('this.state.selectitemidx')
      for(var i=0;i<this.state.selectitemidx.length;i++){
        totalmoney=totalmoney+300*this.state.currentpricelist.subclass[this.state.selectitemidx[i]].stepVal;
      }
    }
    return PriceListUi({
      pricelist:pricelist,
      totalmoney:totalmoney,
      typeidx:this.state.typeidx,
      currentpricelist: this.state.currentpricelist,
      checkboxChange: (:: this.checkboxChange),
      stepperChange: (:: this.stepperChange),
      leftitemclickhandele: (:: this.leftitemclickhandele),
      gopayClickhandle:(::this.gopayClickhandle),
    });
  }
}
