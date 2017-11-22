import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Result,WingBlank,Button,Modal,List } from 'antd-mobile';
const Item = List.Item;

export const MyWalletUi = ({
	toUpCash,
	toMyCard,
	showModal,
	onClose,
	modal,
	is_modal,
	toDetail,
	blance
}) => {
        return (
        	<div>
        		<div style={{marginTop:'0.2rem'}}>
        			<span style={{fontSize:'0.28rem',float:'left',marginLeft:'0.2rem'}}>余额（元）</span>
        			<span style={{fontSize:'0.28rem',float:'right',marginRight:'0.2rem'}} onClick={ toDetail }>明细</span>
        			<div style={{clear:'both'}}></div>
        		</div>
        		<div style={{height:'2rem',lineHeight:'2rem',textAlign:'center'}}>
        			<span style={{fontSize:'0.9rem'}}>{blance?blance:'0.00'}</span>
        		</div>
        		<List renderHeader={() => ' '}>
			        <Item
				        thumb={require('app/common/images/clearbtn.png')}
				        arrow="horizontal"
				        onClick={ toUpCash }
			        >提现</Item>
			        <Item
			        	thumb={require('app/common/images/clearbtn.png')}
			        	arrow="horizontal"
			        	onClick={ toMyCard }
		        	>我的银行卡</Item>
	            </List>
	            <div style={{position: 'fixed',bottom: '0.2rem',textAlign:'center',width:'100%'}}>
	            	<span style={{fontSize:'0.25rem'}} onClick={ showModal }>提现规则</span>
	            </div>
	            {
		        	is_modal?(
			        <Modal
						title="提现规则"
						transparent
						maskClosable={false}
						visible={ modal }
						onClose={ onClose }
						footer={[{ text: '知道了', onPress: () => { console.log('ok'); onClose() } }]}
			        >
						1.患者支付后立即到账，发起提现后2个工作日内到账；<br />
						2.每次提现金额不低于¥1000，不高于¥100，000；<br />
						3.个人年收入超过12W时，需要您主动申办个人所得税.<br />
			        </Modal>
			        ):(<div/>)
		    	}
        	</div>
        );

}
