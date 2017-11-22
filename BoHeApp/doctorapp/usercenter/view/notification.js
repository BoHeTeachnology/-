import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import { ListView } from 'antd-mobile';

export const NotificationUI = ({
  width,
  height,
  dataSource,
  row,
  onEndReached

}) => {

  return (
    <div className="notification_wrap">
      {
        2 != 0?(
          <ListView ref="lv"
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
          />):(<div style={{textAlign:'center',marginTop:'1rem'}}><img src={require('doctorapp/common/images/nomessage.png')}/></div>)
      }



    </div>
  )
}
