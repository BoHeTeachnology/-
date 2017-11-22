import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Result,WingBlank,Button,Modal,List } from 'antd-mobile';
const Item = List.Item;

export const InviteCodeUi = ({
	invitecode
}) => {
        return (
        	<div>
        		<div style={{margin:'2rem auto',width:invitecode.length*1.2+'rem'}}>
        			{
        				codeUi(invitecode)
        			}
        			<div style={{clear:'both'}}></div>
        		</div>
        		<div style={{marginTop:'2rem',padding:'0 0.4rem',fontSize:'0.24rem'}}>
        			<span>分享您的优惠码给您的客户，客户会获得相应的优惠劵，用户使用该卷后，你将获得相应的分成</span>
        		</div>
        	</div>
        );

}

function codeUi(invitecode){
	let code = [];
	for(var i = 0;i<invitecode.length;i++){
		code.push(<div style={{float:'left',width:'0.8rem',height:'0.8rem',textAlign:'center',lineHeight:'0.8rem',fontSize:'0.5rem',border:'1px solid #ccc',margin:'0 0.2rem'}}>{invitecode[i]}</div>);
	}
	return code;
}
