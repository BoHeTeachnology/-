import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { List, InputItem, WingBlank ,Button, Badge, Modal} from 'antd-mobile';

export const NoCardUi = ({
	next
}) => {
        return (
        	<div>
        		<div style={{width:'100%',height:'2rem',textAlign:'center',lineHeight:'2rem',margin:'0.6rem 0'}}>
        			<img src={require('app/common/images/nocard.png')}/>
	        	</div>
						<div style={{margin:'0.4rem 0',width:'100%',textAlign:'center'}}>
							<span style={{fontSize:'0.28rem'}}>暂无银行卡</span>
						</div>
	        	<WingBlank size="lg">
					<Button className="btn" type='primary' onClick={ next }>绑定银行卡</Button>
				</WingBlank>

        	</div>
        );

}
