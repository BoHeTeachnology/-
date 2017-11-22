import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Result,WingBlank,Button,DatePicker,ListView,RefreshControl,Icon,Grid } from 'antd-mobile';

export const DetailUi = ({
	onEndReached,
	dpValue,
	dataSource,
	isLoading,
	choosemonth,
	height,
	maxDate
}) => {
        return (
        	<div>
						<ListView ref="lv"
							dataSource={dataSource}
							renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
								{isLoading ? 'Loading...!!!!!6^^^^^' : 'Loaded'}
							</div>)}
							renderSectionHeader={(sectionData, sectionID)=>{
								console.log('______');
								console.log(sectionID);
								console.log(sectionData);
								return (<div style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.45rem', padding: '0 0.3rem' }}>
										<span style={{ float: 'left', color: '#888' }}>{ (sectionID.split('-')[0]?sectionID.split('-')[0]:'')+(sectionID.split('-')[1]?sectionID.split('-')[1]:'') }</span>
										<br/>
										<span style={{ fontSize: '0.24rem',color:'rgb(136,136,136)'}}>{'收入:￥'+0}&nbsp;&nbsp;{'提现:￥'}{0}</span>
										<DatePicker
											mode="date"
											title="选择日期"
											value={dpValue}
											onChange={ (v) => { choosemonth(v) }}
											maxDate={maxDate}
										>
											<CustomChildren></CustomChildren>
										</DatePicker>
								</div>)
							}}
							renderRow={row}
							renderSeparator={separator}
							className="am-list"
							scrollEventThrottle={20}
							onScroll={() => { console.log('scroll'); }}
							onEndReached={onEndReached}
							onEndReachedThreshold={20}
							stickyHeader
							stickyProps={{
								stickyStyle: { zIndex: 999, WebkitTransform: 'none', transform: 'none' },
								// topOffset: -43,
								// isActive: false,
							}}
							stickyContainerProps={{
								className: 'for-stickyContainer-demo',
							}}
						/>
        	</div>
        );

}

const CustomChildren = (props) => {
  console.log(props)
  return(
      <img style={{ position: 'absolute',right: '0.1rem',top: '0.45rem'}} onClick={props.onClick} src={ require('app/common/images/rili2.png') }/>
);}

const separator = (sectionID, rowID) => (
	<div key={`${sectionID}-${rowID}`}
		style={{
			backgroundColor: '#F5F5F9',
			height: 8,
			borderTop: '1px solid #ECECED',
			borderBottom: '1px solid #ECECED',
		}}
	/>
);

const row = (rowData, sectionID, rowID) => {
	console.log('ROW------');
	console.log(rowData);
	const obj = rowData;
	if(obj.nodata){
		return (
			<div style={{height:'300px'}}>本月没有数据呦！！</div>
		)
	}else{
		return (
			<div key={rowID} className="row" style={{padding:'0.3rem',margin:'0'}}>
				<div className="row-title" style={{height:'0.6rem',lineHeight:'0.6rem',fontSize:'0.28rem',border:'none'}}>
					<span style={{float:'left',fontSize: '0.36rem',color:'#000'}}>{obj.state}</span>
					<span style={{float:'right',fontSize: '0.36rem', color: '#FF6E27'}}>{obj.state == '1'?'-':'+'}{obj.outcash}</span>
					<div className="clear"></div>
				</div>
				<div style={{ display: '-webkit-box', display: 'flex' }}>
					<span style={{float:'left',fontSize: '0.28rem',color:'#ccc'}}>{obj.created_at}</span>
				</div>
			 </div>
		);
	}
};
