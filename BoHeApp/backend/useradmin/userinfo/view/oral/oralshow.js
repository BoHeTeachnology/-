import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

function checkDom(val){
	console.log(val);
	let arr = [];
	for(let i in val){
		arr.push(<span className="H_content_list_item H_content_list_item_radio" style={{lineHeight:"19px"}}><span>{val[i]}</span></span>);
	}
	return arr;
}
export const OralShow = ({
	oraledit
}) => {
	var height = window.innerHeight || document.documentElement.clientHeight
	console.log('ZZZZZDDDDDDHHHHHHqqqqqqqq');
	console.log(oraledit);
      	return (
      		<div className="userContain z_userContain_edit z_userContain_see" style={{height : (height-260)+'px'}}>
                <div className="z_userContainMain">
                <div className="containb_right" style={{ minHeight: "520px;" }}>
		      		<div className="H_content">
			            <div className="H_content_title">
			                <span className="H_title_span H_title_color2">牙周</span>
			            </div>

			          <div className="H_content_list">
			          {
			          	(oraledit.oral&&oraledit.oral.teetharound)?oraledit.oral.teetharound.map((item)=>{
			          		console.log('ZZZZZDDDDDDHHHHHH')
			          		console.log(item);
			          		return (
			          			<div className="H_small_box H_margin_bottom20">
			                  	<span className="H_content_radio_title">{item.name}</span>
			                      {
			                       checkDom(item.val)
			                   	  }
								</div>
			          		)
			          	}):''
			          }
			          </div>
			        </div>

			        <div className="H_content">
			            <div className="H_content_title">
			                <span className="H_title_span H_title_color3">粘膜</span>
			            </div>

			          <div className="H_content_list">
			          {
			          	(oraledit.oral&&oraledit.oral.mucosa)?oraledit.oral.mucosa.map((item)=>{
			          		console.log('ZZZZZDDDDDDHHHHHH')
			          		console.log(item);
			          		return (
			          			<div className="H_small_box H_margin_bottom20">
			                      {
			                       checkDom(item.val)
			                   	  }
								</div>
			          		)
			          	}):''
			          }
			          </div>
			        </div>

			        <div className="H_content">
			            <div className="H_content_title">
			                <span className="H_title_span H_title_color4">外科</span>
			            </div>

			          <div className="H_content_list">
			          {
			          	(oraledit.oral&&oraledit.oral.surgery)?oraledit.oral.surgery.map((item)=>{
			          		console.log('ZZZZZDDDDDDHHHHHH')
			          		console.log(item);
			          		return (
			          			<div className="H_small_box H_margin_bottom20">
			          			<span className="H_content_radio_title">{item.name}</span>
			                      {
			                       checkDom(item.val)
			                   	  }
								</div>
			          		)
			          	}):''
			          }
			          </div>
			        </div>

			        <div className="H_content">
			            <div className="H_content_title">
			                <span className="H_title_span H_title_color5">牙病治疗及修复史</span>
			            </div>

			          <div className="H_content_list">
			          {
			          	(oraledit.oral&&oraledit.oral.repairhis)?oraledit.oral.repairhis.map((item)=>{
			          		console.log('ZZZZZDDDDDDHHHHHH')
			          		console.log(item);
			          		return (
			          			<div className="H_small_box H_margin_bottom20">
			          			<span className="H_content_radio_title">{item.name}</span>
			                      {
			                       checkDom(item.val)
			                   	  }
								</div>
			          		)
			          	}):''
			          }
			          </div>
			        </div>
		        </div>
		        </div>
	        </div>

      	)
}