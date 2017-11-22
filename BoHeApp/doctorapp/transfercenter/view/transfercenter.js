import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactList from 'react-list';
import Hammer from 'react-hammerjs';
// import { List, Checkbox, Flex,Button,ListView } from 'antd-mobile';
import { RefreshControl, ListView } from 'antd-mobile';


export const TransferCenterUI = ({
  width,
  height,
  // handlePan,
  // options,
  // renderItem,
  // length,
  // onEndReached,
  // dataSource,
  // row,


}) => {


  const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  )
  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index--];
    return (
      <div key={rowID}
        style={{
          padding: '0 0.3rem',
          backgroundColor: 'white',
        }}
      >

        <Item arrow="horizontal" multipleLine  platform="android">
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            display: 'inline-block',
            marginRight: '0.4rem',
            width: '0.6rem',
            height: '0.6rem'
          }}/>
          <span style={{
            height: '0.6rem',
            lineHeight: '0.6 rem'
          }}>张春云</span>
          <span style={{
            position: 'absolute',
            right: '0.8rem',
            fontSize: '0.28rem',
            lineHeight: '0.6rem'
          }}>已预约</span>
        </Item>


      </div>
    );
  }

  return (
    <div className="tcenter_wrap">
      <div className="topwrap">
        <span>累计奖励（元）：</span>
        <h3>600.00</h3>
        <span>所得收入可在“我的钱包”中提现</span>
      </div>
      <div className="bottom_wrap">
        {/* <ListView ref="lv"
          dataSource={dataSource}
          renderRow={row}
          className="am-list"
          useBodyScroll
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          scrollEventThrottle={200}
          onEndReached={onEndReached}
          onEndReachedThreshold={10}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}></div>)}
        /> */}

        <ListView
               ref={el => this.lv = el}
               dataSource={this.state.dataSource}
               renderHeader={() => <span>Pull to refresh</span>}
               renderFooter={() => (<div style={{ padding: '0.3rem', textAlign: 'center' }}>
                 {this.state.isLoading ? 'Loading...' : 'Loaded'}
               </div>)}
               renderRow={row}
               renderSeparator={separator}
               initialListSize={5}
               pageSize={5}
               style={{
                 height: {height},
                 border: '1px solid #ddd',
                 margin: '0.1rem 0',
               }}
               scrollerOptions={{ scrollbars: true, scrollingComplete: this.scrollingComplete }}
               refreshControl={<RefreshControl
                 refreshing={this.state.refreshing}
                 onRefresh={this.onRefresh}
                 icon={this.renderCustomIcon()}
               />}
               onScroll={this.onScroll}
               scrollRenderAheadDistance={200}
               scrollEventThrottle={20}
               onEndReached={this.onEndReached}
               onEndReachedThreshold={10}
             />

      </div>
    </div>
  )
}
