import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'

import {RefreshControl, ListView, List} from 'antd-mobile';
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
    notificationListArray: [
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
      index: this.props.notificationListArray.length - 1,
      NUM_ROWS: 10,
      pageIndex: 0,
      //select

    };

    // const NUM_ROWS = ;
    // let pageIndex = 0;

  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.notificationListArray !== this.props.notificationListArray) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.notificationListArray)
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

  choose(where, id, name) {
    if (where == 'ser') {
      console.log('choose')
      //选择出诊
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.notificationListArray),
        refreshing: false,
        showFinishTxt: true
      })
    }
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
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.notificationListArray),
        refreshing: false,
        showFinishTxt: true,
        isLoading: false
      });

      if (this.domScroller) {
        this.domScroller.scroller.options.animationDuration = 500;
      }
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading) {
      return;
    }
    console.log('this.state.isLoading', this.state.isLoading);
    console.log('reach end', event);
    this.setState({isLoading: true});

    setTimeout(() => {
      var data = this.props.notificationListArray.concat(this.props.notificationListArray)
      this.setState({dataSource: this.state.dataSource.cloneWithRows(data), isLoading: false});
    }, 1000);

  };

  scrollingComplete = () => {
    // In general, this.scrollerTop should be 0 at the end, but it may be -0.000051 in chrome61.
    if (this.scrollerTop >= -1) {
      this.setState({showFinishTxt: false});
    }
  }

  renderCustomIcon() {
    return [< div key = "0" className = "am-refresh-control-pull" > <span>{this.state.showFinishTxt
        ? '刷新完毕'
        : '下拉可以刷新'}</span> < /div>,
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
      //   this.state.index = this.props.notificationListArray.length - 1;
      // }
      console.log(rowID)
      console.log(rowData)
      console.log('rowData')
      // const obj = this.props.notificationListArray[this.state.index--];
      return (

        <div key={'notiication' + rowID} style={{
          padding: '0 0.3rem',
          backgroundColor: 'white',
          position:'relative',
        }}>

          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            marginRight: '0.2rem',
            float: 'left',
            width: '0.8rem',
            height: '0.8rem'
          }}/>
          <p style={{
            marginTop: '0.2rem'
          }}>{rowData.title}</p>
          <p style={{
            fontSize: '0.28rem',
            marginBottom: '0.2rem'
          }}>已经扫描你的二维码</p>
          <span style={{
            position: 'absolute',
            top: '0',
            right: '0.2rem',
          }}>
            12:30
          </span>

        </div>
      );
    };
    return (
      <div className="transfercenter_wrap">

        <div className="listviewWrap">

          <ListView ref={el => this.lv = el} dataSource={this.state.dataSource} renderFooter={() => (
            <div style={{
              padding: '0.3rem',
              textAlign: 'center'
            }}>
              {this.state.isLoading
                ? 'Loading...'
                : 'Loaded'}
            </div>
          )} renderRow={row} renderSeparator={separator} initialListSize={3} pageSize={3} style={{
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '0.1rem 0'
          }} scrollerOptions={{
            scrollbars: true,
            scrollingComplete: this.scrollingComplete
          }} refreshControl={< RefreshControl refreshing = {
            this.state.refreshing
          }
          onRefresh = {
            this.onRefresh
          }
          icon = {
            this.renderCustomIcon()
          } />}
          onScroll={this.onScroll}
           scrollRenderAheadDistance={200}
           scrollEventThrottle={20}
      />

        </div>
      </div>
    )
  }
}
