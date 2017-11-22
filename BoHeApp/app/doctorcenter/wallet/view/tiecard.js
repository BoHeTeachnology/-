import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { List, InputItem, WingBlank ,Button, Badge, Modal} from 'antd-mobile';

export const TieCardUi = ({
	bankcard,
	input,
	next,
	showModal,
	modal,
	onClose,
	is_modal,
	name,
	identity
}) => {
        return (
        	<div>
        		<List renderHeader={() => '请绑定账户本人的银行卡，方便分成资金的转入'}>
							<InputItem
								value={name}
								disabled
								extra={<Badge text="!" hot/>}
					            onExtraClick={showModal}
							>姓名
							</InputItem>
							<InputItem
								placeholder="请填写银行卡号"
								editable={true}
								clear={true}
								type="bankCard"
								disabled={false}
								autoFocus={true}
								value={bankcard}
								onChange={(ev)=>{input(ev)}}
							>卡号</InputItem>
							<InputItem
								value={identity}
								disabled
							>身份证
							</InputItem>
		        </List>
		        <List renderHeader={() => '请放心填写，薄荷保证你的信息安全'}>
		        	<WingBlank size="lg">
						<Button className="btn" disabled={(bankcard=='')?true:false}  type={(bankcard=='')?'':'primary'} onClick={ next }>下一步</Button>
					</WingBlank>
		        </List>
		        {
		        	is_modal?(
			        <Modal
						title="持卡人说明"
						transparent
						maskClosable={false}
						visible={ modal }
						onClose={ onClose }
						footer={[{ text: '知道了', onPress: () => { console.log('ok'); onClose() } }]}
			        >
						为了保证账户资金安全，只能绑定认证用户本人的银行卡<br />
			        </Modal>
			        ):(<div/>)
		    	}
        	</div>
        );

}
