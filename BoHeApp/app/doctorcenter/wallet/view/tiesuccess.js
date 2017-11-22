import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Result,WingBlank,Button } from 'antd-mobile';

export const TieSuccessUi = ({
	next
}) => {
        return (
        	<div>
        		<Result
				    img={<img src={ require('app/common/images/validate_success.png') }  style={{width:'100%'}}/>}
				    title="添加成功"
				    message="所提交内容已成功完成验证"
			    />
			    <WingBlank size="lg">
						<Button className="btn" type='primary' onClick={ next } style={{marginTop:'0.4rem'}}>完成</Button>
					</WingBlank>
        	</div>
        );

}
