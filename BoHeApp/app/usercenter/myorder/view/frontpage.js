import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import ReactHammer from 'app/modules/ReactPullToRefresh/HammerWithPullToPush.js'

export const FrontPage = ({height,
   nodata,
   handlePan,
   handleRefresh,
   options,
   renderItem,
   length
}) => {
        return (<div>
					<div className="myorderNodatabox" style={nodata?{display:"block"}:{display:"none"}}>
                        <dl>
                        <dt><img src={require('app/common/images/pro12.png')} alt=""/></dt>
						<dd>您目前还没有进行任何预约</dd>
						</dl>
						<div className="fotIcon">
						<img src={require('app/common/images/logo2.png')} alt=""/>
						<p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
						</div>
					</div>
					<ReactHammer  height={ height } onPan={ handlePan } onRefresh={ handleRefresh }>
					<div>
					<div className="myOrdermainbox" style={{marginTop:'10px'}}>
							<ReactList ref="list" axis='y'
							itemRenderer={ renderItem }
							length={ length }
							type='uniform'
							/>
					</div>
					</div>
					</ReactHammer>
		      </div>)
    }

