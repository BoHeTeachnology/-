import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { List, InputItem, WingBlank ,Button, Badge, Picker ,Modal,Toast} from 'antd-mobile';


export const PhoneConfirmUi = ({
	phone,
	verify,
	input,
	next,
	pickerValue,
	changePick,
	getVerify,
	showModal,
	onClose,
	modal,
	finallyTime,
	is_modal,
	bankname,
	district
}) => {
        return (
        	<div>
        		<List renderHeader={() => '请输入银行预留手机号'}>
					<InputItem
			            value={bankname}
			            disabled
			        >卡类型
			        </InputItem>
		        </List>
		        <List renderHeader={() => '开户行信息'}>
					<Picker
						data={district}
						title="选择开户地区"
						extra="请选择"
						value={pickerValue}
						cols={2}
						onPickerChange={(ev)=>changePick(ev)}
			        >
			            <CustomChildren>选择开户地区</CustomChildren>
			        </Picker>
		        </List>
		        <List renderHeader={() => '预留手机号'}>
					<InputItem
						value={phone}
			            type="phone"
			            clear={true}
			            placeholder="银行预留手机号"
			            onChange={(ev)=>{input(ev,'phone')}}
			            extra={<Badge text="!" hot/>}
			            onExtraClick={showModal}
					>手机号码</InputItem>
			        <InputItem
						clear={true}
			        	value={verify}
			            placeholder="请输入验证码"
			            extra={<span onClick={ ()=>{ getVerify(showToast) }}>{ (finallyTime == 61)?'获取验证码':finallyTime+'s' }</span>}
			            onChange={(ev)=>{input(ev,'verify')}}
		        	>验证码</InputItem>
		        </List>
		        <List renderHeader={() => ' '}>
		        	<WingBlank size="lg">
						<Button className="btn" disabled={(phone==''||verify=='')?true:false}  type={(phone==''||verify=='')?'':'primary'} onClick={ next }>下一步</Button>
					</WingBlank>
		        </List>
		        {
		        	is_modal?(
			        <Modal
						title="手机号说明"
						transparent
						maskClosable={false}
						visible={ modal }
						onClose={ onClose }
						footer={[{ text: '知道了', onPress: () => { console.log('ok'); onClose() } }]}
			        >
						银行预留的手机号是办理该银行卡时所填写的手机号码，没有预留、手机号忘记或者停用的，请联系银行客服更新处理。<br />
			        </Modal>
			        ):(<div/>)
		    	}

        	</div>
        );

}

//
// const district = [
//     {
//       label: '2013',
//       value: '2013',
//       children:[
//       	{
// 	      	label: '20133',
// 	      	value: '20133',
// 	    },
// 	    {
// 	      	label: '201333',
// 	      	value: '201333',
// 	    }
//       ]
//     },
//     {
//       label: '2012',
//       value: '2012',
//       children:[
//       	{
// 	      	label: '20122',
// 	      	value: '20122',
// 	    },
// 	    {
// 	      	label: '201222',
// 	      	value: '201222',
// 	    }
//       ]
//     }
// ];

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', padding: '0 0.3rem' }}
  >
    <div style={{ display: 'flex', height: '0.9rem', lineHeight: '0.9rem',fontSize:'0.34rem' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888' }}>{props.extra}</div>
    </div>
  </div>
);

function showToast() {
  Toast.info('手机号不正确', 1);
}
