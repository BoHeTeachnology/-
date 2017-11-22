import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { RefreshControl, ListView } from 'antd-mobile';

export const MyOrderUi = ({
  dataSource,
  row,
  onEndReached,
  refreshing,
  onRefresh,
  is_have,
  height
}) => {
    console.log(1008);
    console.log(refreshing)
    return (
        <div>
          <ListView ref="lv"
            style={{height:height}}
            initialListSize={10}
            pageSize={10}
            scrollRenderAheadDistance={200}
            scrollEventThrottle={20}
            scrollerOptions={{ scrollbars: true }}
            dataSource={dataSource}
            renderRow={row}
            onScroll={() => { console.log('scroll'); }}
            onEndReached={onEndReached}
            onEndReachedThreshold={50}
            renderFooter={() => ( is_have?<div>加载更多</div>:<div>到底了兄弟</div>)}
            refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
          />
        </div>
    );
}
