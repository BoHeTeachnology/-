import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'

import {RefreshControl, ListView,List} from 'antd-mobile';
const Item = List.Item;
import {asyncConnect} from 'redux-connect'

import {push} from 'react-router-redux';

import {connect} from 'react-redux';

@asyncConnect([
  {
    promise: ({
      store: {
        dispatch,
        getState
      },
      params
    }) => {}
  }
])
@connect(state => {
  return {
    transferingListArray: [
      {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒'
      }, {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒'
      }, {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒'
      }
    ],
    transferedListArray:[
      {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '所有的兼职汪都需要风吹日晒'
      }, {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '所有的兼职汪都需要风吹日晒'
      }, {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '所有的兼职汪都需要风吹日晒'
      }
    ]
  }
}, {pushState: push})

export default class TransferCenter extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource,
      refreshing: true,
      height: '',
      index: this.props.transferingListArray.length - 1,
      NUM_ROWS: 10,
      pageIndex: 0,
      //select
      transferingtypeName:'',
      taptype: 1,
      isTransferingExtend:false,
      isTransferedExtend:false,
    };

    // const NUM_ROWS = ;
    // let pageIndex = 0;

  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.transferingListArray !== this.props.transferingListArray) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.transferingListArray)
      });
    }
    if (nextProps.transferedListArray !== this.props.transferedListArray) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.transferedListArray)
      });
    }
  }

  componentWillMount() {
    if (typeof window == 'undefined') {
      return;
    }
    let height = window.innerHeight || document.documentElement.clientHeight;
    let width = window.innerWidth || document.documentElement.clientWidth;
    this.setState({width, height})
  }
  componentDidMount() {
    // Set the appropriate height
    setTimeout(() => this.setState({
      height: this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop
    }), 0);

    // handle https://github.com/ant-design/ant-design-mobile/issues/1588
    // this.lv.getInnerViewNode().addEventListener('touchstart', this.ts = (e) => {
    //   this.tsPageY = e.touches[0].pageY;
    // });
    // In chrome61 `document.body.scrollTop` is invalid
    // const scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
    // this.lv.getInnerViewNode().addEventListener('touchmove', this.tm = (e) => {
    //   this.tmPageY = e.touches[0].pageY;
    //   if (this.tmPageY > this.tsPageY && this.scrollerTop <= 0 && scrollNode.scrollTop > 0) {
    //     console.log('start pull to refresh');
    //     this.domScroller.options.preventDefaultOnTouchMove = false;
    //   } else {
    //     this.domScroller.options.preventDefaultOnTouchMove = undefined;
    //   }
    // });
  }

  componentWillUnmount() {
    // this.lv.getInnerViewNode().removeEventListener('touchstart', this.ts);
    // this.lv.getInnerViewNode().removeEventListener('touchmove', this.tm);
  }

  dropdown(taptype) {

    if(taptype==1){
      this.setState({
        taptype:taptype,
        isTransferingExtend:!this.state.isTransferingExtend,
        isTransferedExtend:false,
      })
    }else{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.transferedListArray),
        refreshing: false,
        showFinishTxt: true,
        isTransferingExtend:false,
        isTransferedExtend:false,
        taptype:taptype,
        isTransferingExtend:false,
        isTransferedExtend:!this.state.isTransferedExtend,
      })
    }
  }


  choose(where,id,name){
    if(where == 'ser'){
      console.log('choose')
      //选择出诊
      this.setState({
        transferingtypeName:name,
        dataSource: this.state.dataSource.cloneWithRows(this.props.transferingListArray),
        refreshing: false,
        showFinishTxt: true,
        isTransferingExtend:false,
        isTransferedExtend:false,
    })
  }
}

transferingItemClickHandle(){

  this.props.pushState('/doctorapp/ordersuccess')
}

transferedItemClickHandle(){

  this.props.pushState('/doctorapp/transfersuccess')
}


  onScroll = (e) => {
    this.scrollerTop = e.scroller.getValues().top;
    this.domScroller = e;
  };

  onRefresh = () => {
    console.log('onRefresh');
    if (!this.manuallyRefresh) {
      this.setState({refreshing: true});
    } else {
      this.manuallyRefresh = false;
    }

    // simulate initial Ajax
    setTimeout(() => {
      if(this.state.taptype==1){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.props.transferingListArray),
          refreshing: false,
          showFinishTxt: true,
          isLoading: false,
        });
      }else{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.props.transferedListArray),
          refreshing: false,
          showFinishTxt: true,
          isLoading: false,
        });
      }

      if (this.domScroller) {
        this.domScroller.scroller.options.animationDuration = 500;
      }
    }, 600);
  };

//   onEndReached = (event) => {
//     // load new data
//     // hasMore: from backend data, indicates whether it is the last page, here is false
//     if (this.state.isLoading) {
//       return;
//     }
//   console.log('this.state.isLoading',this.state.isLoading);
//     console.log('reach end', event);
//     this.setState({isLoading: true});
// if(this.state.taptype==1){
//   setTimeout(() => {
// var data =this.props.transferingListArray.concat(this.props.transferingListArray)
//     this.setState({
//       dataSource: this.state.dataSource.cloneWithRows(data),
//       isLoading:false
//     });
//   }, 1000);
// }else{
//
//
//   setTimeout(() => {
//     var data =this.props.transferedListArray.concat(this.props.transferedListArray)
//     this.setState({
//       dataSource: this.state.dataSource.cloneWithRows(data),
//       isLoading: false,
//     });
//   }, 1000);
// }
// };
//
//   scrollingComplete = () => {
//     // In general, this.scrollerTop should be 0 at the end, but it may be -0.000051 in chrome61.
//     if (this.scrollerTop >= -1) {
//       this.setState({showFinishTxt: false});
//     }
//   }

  renderCustomIcon() {
    return [<div key = "0" className = "am-refresh-control-pull">
     <span>{this.state.showFinishTxt? '刷新完毕': '下拉可以刷新'}</span>
     </div>,
      <div key="1" className="am-refresh-control-release">
        <span>松开立即刷新</span > </div>];
  }

  render() {
    const separator = (sectionID, rowID) => (<div key={`${sectionID}-${rowID}`} style={{
      backgroundColor: '#F5F5F9',
      height: 8,
      borderTop: '1px solid #ECECED',
      borderBottom: '1px solid #ECECED'
    }}/>);
    const row = (rowData, sectionID, rowID) => {
      // if (this.state.index < 0) {
      //   this.state.index = this.props.transferingListArray.length - 1;
      // }
      console.log(rowID)
      console.log(rowData)
      console.log('rowData')
      // const obj = this.props.transferingListArray[this.state.index--];
      return (
         this.state.taptype==1?
         <Item arrow="horizontal" multipleLine  platform="ios" onClick={()=>{this.transferingItemClickHandle()}}>
           <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
             display: 'inline-block',
             marginRight: '0.4rem',
             width: '0.6rem',
             height: '0.6rem'
           }}/>
           <span style={{
             height: '0.6rem',
             lineHeight: '0.6 rem'
           }}>{rowData.title}</span>
           <span style={{
             position: 'absolute',
             right: '0.8rem',
             fontSize: '0.28rem',
             lineHeight: '0.6rem'
           }}>已预约</span>
         </Item>
      :
          <div key={'transfered'+rowID} style={{
            padding: '0 0.3rem',
            backgroundColor: 'white'
          }}>

            <Item arrow="horizontal" multipleLine  platform="ios" onClick={()=>{this.transferedItemClickHandle()}}>
              <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
                display: 'inline-block',
                marginRight: '0.4rem',
                width: '0.6rem',
                height: '0.6rem'
              }}/>
              <span style={{
                height: '0.6rem',
                lineHeight: '0.6 rem'
              }}>{rowData.title}</span>
              <span style={{
                position: 'absolute',
                right: '0.8rem',
                fontSize: '0.28rem',
                lineHeight: '0.6rem'
              }}>+1200.00</span>
            </Item>
          </div>
      );
    };
    return (
<div className="transfercenter_wrap">
<div className="topWrap">
  <p style={{
    fontSize: '0.28rem',
    padding: '0.2rem',
    paddingLeft: '0.4rem',
  }}>累计奖励（元）：</p>
  <h3 style={{
    fontSize: '0.8rem',
    padding: '0.2rem',
    paddingLeft: '0.4rem',
  }}>600.00</h3>
  <p style={{
    fontSize: '0.28rem',
    padding: '0.2rem',
    paddingLeft: '0.4rem',
  }}>所得收入可在“我的钱包”中提现</p>
</div>
      <div className="selectWrap">
      <div style={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '0.2rem 0',
        zIndex: '9',
        borderBottom: '1px solid #eee'
      }}>
        <div onClick={() => {
          this.dropdown(1)
        }} style={{
          width: '50%',
          float: 'left',
          textAlign: 'center',
          fontSize: '0.28rem',
          borderRight: '1px solid #d5dbe0',
          position:'relative',
        }}>
          {this.state.transferingtypeName
            ? this.state.transferingtypeName
            : '转诊中'
          }<img src={require('doctorapp/common/images/icon_triangle_down.png')} className={(this.state.tap == 1)
      ? 'arrow_transfrom'
      : ''} style={{
      marginLeft: '0.1rem',
      marginTop: '-0.02rem',
      position: 'absolute',
      top: '18px',
      right: '19%',
    }}/>
        </div>
        <div onClick={() => {
          this.dropdown(2)
        }} style={{
          width: '50%',
          float: 'left',
          textAlign: 'center',
          fontSize: '0.28rem',
          borderRight: '1px solid #d5dbe0',
          position:'relative',
        }}> 转诊成功
      {/* <img src={require('app/common/images/icon_triangle_down.png')} className={(this.state.tap == 2)
      ? 'arrow_transfrom'
      : ''} style={{
      marginLeft: '0.1rem',
      marginTop: '-0.02rem',
      position: 'absolute',
      top: '18px',
      right: '19%',
    }} /> */}
        </div>
        <div className='clear'></div>
      </div>
      <div style={{
        width: '100%',
        display: (this.state.isTransferingExtend == true)
          ? 'block'
          : 'none',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        height: (this.state.height / 50 - 0.82) + 'rem',
        zIndex: '9'
      }}>
        <ul style={{
          width: '100%',
          listStyle: 'none',
          backgroundColor: '#fff'
        }}>
          <li value='all' onClick={() => {
            this.choose('ser','all')
          }} style={{
            color: (this.state.transferingtypeName == 'all')
              ? '#04b9c0'
              : '#454545',
            width: '100%',
            textAlign: 'center',
            fontSize: '0.24rem',
            height: '0.85rem',
            lineHeight: '0.8rem',

          }}>全部</li>
          {
            [1, 2, 3, 4, 5].map((item, index) => {
            return (
              <li key={index} value={'serviceitem.name'} onClick={() => {
                this.choose('ser', '12', '已扫码')
              }} style={{
                color: ('已扫码' == this.state.transferingtypeName
                  ? '#04b9c0'
                  : '#454545'),
                width: '100%',
                textAlign: 'center',
                fontSize: '0.24rem',
                height: '0.85rem',
                lineHeight: '0.85rem'
              }}>lalala</li>
            )
          })
}
        </ul>

      </div>

    </div>
    <div className="listviewWrap">

    <ListView
       ref={el => this.lv = el}
       dataSource={this.state.dataSource}
       renderFooter={() => (<div style={{ padding:'0.3rem', textAlign: 'center' }}>
         {this.state.isLoading ? 'Loading...' : 'Loaded'}
       </div>)}
       renderRow={row}
       renderSeparator={separator}
       initialListSize={3}
       pageSize={3}
       style={{
         height: this.state.height,
         border: '1px solid #ddd',
         margin: '0.1rem 0',
       }}
       scrollerOptions={{ scrollbars: true, scrollingComplete: this.scrollingComplete }}
       refreshControl={<RefreshControl
         refreshing={this.state.refreshing}
         onRefresh={this.onRefresh}
         icon={this.renderCustomIcon()}
       />}
      //  useBodyScroll={true}
       onScroll={this.onScroll}
       scrollRenderAheadDistance={200}
       scrollEventThrottle={20}
      //  onEndReached={this.onEndReached}
       onEndReachedThreshold={10}
     />

   </div>
   </div>
 )
  }
}
