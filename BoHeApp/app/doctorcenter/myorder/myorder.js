import React , { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { ListView,Toast,List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import { load_order,saveid } from 'app/redux/reducers/doctorapp.js'
import { MyOrderUi } from './view/myorder';

const perpage = 10; //定义每一页数据量

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
        return dispatch(load_order({num:perpage,page:1}))
    }
}])
@connect(
    state => {
        return {
            orderlist:state.getIn(['doctorapp','orderlist']),
            is_have:state.getIn(['doctorapp','is_have']),
            refresh:state.getIn(['doctorapp','refresh'])
        }
    }, { pushState: push,load_order,saveid })

export default class MyOrder extends Component {
  	constructor(props) {
    	  super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        console.log('orderlist------');
        console.log(this.props.orderlist.toJS())
        this.state = {
            dataSource:this.props.orderlist?dataSource.cloneWithRows(this.props.orderlist.toJS()):dataSource.cloneWithRows([]),
            refreshing:false
        };
        this.toLoad = true;//防止第一个下拉数据还没有加载完，就又开始加载下一页
        this.page = 1;//从第一页开始
  	}
    componentWillReceiveProps(nextProps) {
        if ( nextProps.orderlist !== this.props.orderlist ) {
            let orderlist = nextProps.orderlist.toJS();
            console.log(1001);
            console.log(orderlist)
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(orderlist),
            });
        }
    }
    onEndReached(event){
        var that = this;
        if ( !this.toLoad ) {
            return;
        }
        if ( !this.props.is_have ){
            return;
        }
        if ( this.props.refresh ){
            this.page = 1;
        }
        this.toLoad = false;
        ++this.page;
        this.props.load_order({num:perpage,page:this.page}).then(()=>{
            that.toLoad = true;
        })
    }
    onRefresh(){
        console.log('onRefresh');
        var that = this;
        this.setState({refreshing:true});
        this.props.load_order({num:perpage,page:1,refresh:true}).then(()=>{
            that.setState({refreshing:false})
            Toast.info('已经是最新的了',1)
        })
    }
    row(rowData, sectionID, rowID){
        console.log('dehui22222')
        let id = rowData.id;
        let idx = rowID;
        return (
          <div key={rowID} style={{height:'150px'}} >
              <Item
                arrow="horizontal"
                multipleLine
                onClick={ ()=>{ }}
                platform="android"
              >
                {rowData.name}
                <Brief>{rowData.name}balabala</Brief>
              </Item>
          </div>
        );
    }
    orderinfo(id,idx){
      console.log(id);
      console.log(idx);
      this.props.saveid({id,idx})
      this.props.pushState('/doctorcenter/orderdetail');
    }
    componentWillMount(){

    }
    componentDidMount(){
        let height = window.innerHeight || document.documentElement.clientHeight;
        this.setState({ height })
    }
  	render(){
        console.log('1111111');
        let is_have = this.props.is_have;
        return MyOrderUi({
            dataSource:this.state.dataSource,
            onEndReached:(::this.onEndReached),
            row:(::this.row),
            refreshing:this.state.refreshing,
            onRefresh:(::this.onRefresh),
            is_have,
            height:this.state.height
        });
  	}
}
