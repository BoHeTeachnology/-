import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

export const FrontPage = ({nodata,
   handlePan,
   options,
   renderItem,
   length
}) => {
        return (<div>
			    <div className="myorderNodatabox" style={nodata?{display:"block"}:{display:"none"}}>
			       <dl>
			       <dt><img src={require('app/common/images/icon13.png')} alt=""/></dt>
			       <dd>您的病历将会放到这里<br/>方便日后查询</dd>
			       </dl>
			       <img src={require('app/common/images/logo.png')} alt="" className="logobtom"/>
			    </div>
 				<Hammer direction={'DIRECTION_VERTICAL'} options={options}  onPan={ handlePan }>
				<div>
				<div className="myOrdermainbox" style={{ marginTop:'10px'}}>
            	<ReactList ref="list" axis='y'
							itemRenderer={ renderItem }
							length={ length }
							type='uniform'
				/>
				</div>
				</div>
				</Hammer>
				</div>)
    }

