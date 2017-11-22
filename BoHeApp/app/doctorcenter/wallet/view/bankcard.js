import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Result,WingBlank,Button,Modal,List } from 'antd-mobile';
const Item = List.Item;

export const BankCardUi = ({
  bankname,
  banknumber,
  cardtype,

}) => {
        return (
        	<div>
        		<List renderHeader={() => '如需修改绑定银行卡，请联系客服进行修改'}>

		        </List>
		        <div style={{width:'100%',padding:'0 0.2rem',position:'relative'}}>
		        	<img src={ require('app/common/images/chinabank.png') } style={{width:'100%'}}/>
		        	<div style={{position:'absolute',left:'1.4rem',top:'0.2rem',fontSize:'0.28rem',color:'#fff'}}>
		        		{bankname}
		        	</div>
		        	<div style={{position:'absolute',left:'1.4rem',top:'0.6rem',fontSize:'0.2rem',color:'#fff'}}>
		        		{cardtype==2?'储蓄卡':'借记卡'}
		        	</div>
		        	<div style={{position:'absolute',left:'1.4rem',top:'1.2rem',fontSize:'0.24rem',color:'#fff'}}>
		        		{banknumber}
		        	</div>
		        </div>
        	</div>
        );

}
