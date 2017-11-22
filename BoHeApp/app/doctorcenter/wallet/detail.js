
import React , { Component,PropTypes } from 'react';

import { DetailUi } from './view/detail.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { ListView,DatePicker,RefreshControl } from 'antd-mobile';
import { loaddetail,cleardetail } from 'app/redux/reducers/doctorapp.js'
import moment from 'moment';

const p_len = 10;
const year = new Date().getFullYear();
const month = (new Date().getMonth()+1)<=9?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1)
const maxDate = moment(year+'-'+month, 'YYYY-MM').utcOffset(8);

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
      console.log('1111');
      return dispatch(loaddetail({thisyear:year,thismonth:month,page:1}))
    }
}])
@connect(
    state => {
        return {
          doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo']),
          detaillist:state.getIn(['doctorapp','detaillist']),
          detailcount:state.getIn(['doctorapp','detailcount'])
        }
    }, { pushState: push,loaddetail,cleardetail })
export default class Detail extends Component {

  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this.props.detaillist.toJS()),
      dpValue:maxDate,
      isLoading:false,
      refreshing:false
    };
    this.month = new Date().getMonth()+1;
    this.year = new Date().getFullYear();
    this.page = 1;
  }

  componentDidMount() {
    console.log(20000);
    if(typeof window == undefined ){
        return;
    }
    var height = window.innerHeight || document.documentElement.clientHeight;
    this.setState({...this.state,height});
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.detaillist !== this.props.detaillist) {
      let data = nextProps.detaillist.toJS();
      let key = [];
      for( let i in data){
        key.push(i);
      }
      let _obj = {};
      key.sort(function(a,b){return b-a});
      console.log(key);
      for(var j=0;j<key.length;j++){
        _obj[key[j]] = data[key[j]]
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(_obj),
      });
    }
  }

  onEndReached = (event) => {
    var that = this;
    if (this.state.isLoading) {
      return;
    }
    this.page = this.page + 1;
    let month = this.month<=9?'0'+this.month:this.month;
    let date = '' + this.year + month + ' ';
    if( Math.ceil(this.props.detailcount.get(date)/p_len) < this.page){
      this.page = 1;
      this.month = this.month - 1;
      if(this.month == 0){
        this.month = 12;
        this.year = this.year - 1;
      }
      let month = this.month<=9?'0'+this.month:this.month;
      this.setState({isLoading:true})
      this.props.loaddetail({thisyear:this.year,thismonth:month,page:this.page}).then(()=>{
        let dpValue = moment(that.year+'-'+month, 'YYYY-MM').utcOffset(8);
        that.setState({isLoading:false,dpValue})
      });
    }else{
      this.setState({isLoading:true});
      this.props.loaddetail({thisyear:this.year,thismonth:month,page:this.page}).then(()=>{
        let dpValue = moment(that.year+'-'+month, 'YYYY-MM').utcOffset(8);
        that.setState({isLoading:false,dpValue})
      });
    }
  }
  choosemonth(v){
    var that = this;
    let months = ((v.toObject().months+1)<=9)?'0'+(v.toObject().months+1):(v.toObject().months+1);
    this.page = 1;
    this.month = v.toObject().months+1;
    this.year = v.toObject().years;
    this.props.cleardetail({});
    this.setState({isLoading:true})
    this.props.loaddetail({thisyear:v.toObject().years,thismonth:months,page:this.page}).then(()=>{
      that.setState({isLoading:false,dpValue:v})
    });
  }
  render() {
    let detaillist = this.props.detaillist?this.props.detaillist.toJS():{};
    console.log(detaillist);
    return DetailUi({
      onEndReached:(::this.onEndReached),
      dpValue:this.state.dpValue,
      dataSource:this.state.dataSource,
      isLoading:this.state.isLoading,
      choosemonth:(::this.choosemonth),
      height:(this.state.height),
      maxDate:maxDate
    });
  }
}
