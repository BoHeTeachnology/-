import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import  getApiIp from 'backend/util/apiinterface.js'

function secondChild(children,curId){
	var ui = [];
	children.map((child)=>{
		ui.push(
      			<li className={ (child.id == curId)?"cur":''}>
      				<a href={ 'http://'+getApiIp()+child.app_url }><b>{child.app_name}</b></a>
      			</li>
				)
	})
	return ui;
}

function item_chosen(item_styles,item,value){
	item_styles[item.id] = value;

	if(value === 0)
	 return {display:'none'}
	else
	 return {display:'block'}

}

function roate_chosen(roate_styles,item,value){
	roate_styles[item.id] = value;

	if(value === 0)
	 return ''
	else
	 return 'roate'
}

export const _Left_list_ = ({
	leftlist,
	updown,
	clickid,
	item_styles,
	roate_styles,
	curId
}) => {
	console.log('@@~~~~~~~')
	return(
		<div className="wrapper">
		    <div className="header">
		    	<div className="logo">
		    		<img src={ require('backend/common/images/logo2.png')} alt=""/>
		    		<span>薄荷口腔</span>
		    	</div>
		    	<div className="exit">
		    		<a href={'http://'+getApiIp()+'/mint/login.html'} className="exit-but">退出</a>
		    		<p>{'欢迎您！'}<span>admin</span></p>
		    	</div>
		    </div>
		    <div className="" style={{ zIndex:10 }}>
		        <div className="container-left">
		          <h3></h3>
		          <ul id="left-list" className="cd-accordion-menu animated">
		          	{
		          		leftlist.map((item)=>{
		          			return (<li className={ item.children.length==0?'':"has-children" }>
						          		<input type="checkbox" name={"group-"+item.id} id={"group-"+item.id} checked={ item.id==clickid?"checked":''}/>
						          		<label tooltipval="客户管理" htmlFor={"group-"+item.id} onClick={ ()=>{ updown(item) } }>
						          			<a className={item.app_uri?item.app_uri:''} href={item.app_url==''?'javascript:;':item.app_url}><b>{item.app_name}</b></a>
						          			<i className={ ((roate_styles[item.id] == 1)&&(clickid == item.id))?roate_chosen(roate_styles,item,0):((clickid == item.id)?roate_chosen(roate_styles,item,1):((roate_styles[item.id] == 1)?'roate':'' )) } style={ item.children.length==0?{display:'none'}:{display:'block'} }></i>
						          		</label>
						          		<ul className="secondChild" style={ ((item_styles[item.id] == 1)&&(clickid == item.id))?item_chosen(item_styles,item,0):((clickid == item.id)?item_chosen(item_styles,item,1):((item_styles[item.id] == 1)?{display:'block'}:{display:'none'} )) }>{ secondChild(item.children,curId) }</ul>
						          	</li>)
		          		})
		            }

		          </ul>
		        </div>
		    </div>
		</div>)

}















