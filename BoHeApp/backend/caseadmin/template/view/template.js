import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import  ErrorCenter from 'backend/errorcenter/case_template/errorcenter.js';

export const _Template_ = ({
    edit,
    identify,
    choose,
    change,
    type,
    save,
    name,
    color,
    showTip,
    hideTip,
    confirmTip,
    cancel
}) => {
        return (
        		<div style={{overflow:'hidden'}}>
        		<div className="delete-tipbox" style={ showTip?{display:"block"}:{display:'none'}} >
			        <div className="new-create-bj new-create-bj2" style={{ height:'165px'}}>
					    <div className="new-create-box creat2">
		                  <h4 className="toph4 mb30"><span onClick={ cancel } className="close-dialog"></span></h4>
		                  <div className="wartip modal_wartip"><span>您已经修改了，还没有保存</span></div>
		                  <div className="new-creatbut-box Mtop10">
		                    <input type="button" className="but butgray" value="不保存" onClick={ ()=>{ hideTip() } } id="close-dialog"/>
		                    <input type="button" className="but butblue" value="保 存" onClick={ () => { confirmTip() } } id="deletetipBox"/>
		                  </div>
		                </div>
			        </div>
			    </div>
				<div className="modal_right_main" style={{ marginTop:'60px',position:'relative'}}>
					<ErrorCenter/>
		            <h4><span onClick={()=>{ choose(1) }} className={ type==1?"active":"" }>初诊病历模板</span><span onClick={()=>{ choose(2) }} className={ type==2?"active":"" }>复诊病历模板</span></h4>
		            <span style={{ position: 'absolute',width:'12px',height:'12px',borderRadius:'100%',background:(color=='green')?'rgb(0,255,0)':'rgb(255,0,0)',left: '279px',top:'11px'}}></span>

		            <article className="modal_container">
		                <h5 className="modal_right_title">
		                  <span>{name}</span>
		                  <input type="button" value="保存" className="default_inputbtn z_save_btn" id="save-but" onClick={ save }/>
		                </h5>
		                <div className="chu_zhen" style={ type==2?{display:"none"}:{display:"block" }}>
		                    <div className="modal_right_pre">
		                      <span className="pre_title">主诉：</span>
		                      <textarea value={(edit&&edit.main)?edit.main:''}  name="" id="" cols="30" rows="10" onChange={(e)=>{ change('main',e,identify) }}></textarea>
		                    </div>
		                    <div className="modal_right_pre">
		                      <span className="pre_title">现病史：</span>
		                      <textarea value={(edit&&edit.currentill)?edit.currentill:''} name="" id="" cols="30" rows="10" onChange={(e)=>{ change('currentill',e,identify) }}></textarea>
		                    </div>
		                    <div className="modal_right_pre">
		                      <span className="pre_title">既往史：</span>
		                      <div className="dont_add">无需添加</div>
		                    </div>
		                </div>
		                <div className="fu_zhen" style={ type==1?{display:"none"}:{display:"block" }}>
		                    <div className="modal_right_pre">
		                      <span className="pre_title">复诊：</span>
		                      <textarea value={(edit&&edit.reExamination)?edit.reExamination:''} name="" id="" cols="30" rows="10" onChange={(e)=>{ change('reExamination',e,identify) }}></textarea>
		                    </div>
		                </div>

		                <div className="modal_right_pre">
		                  <span className="pre_title">检查：</span>
		                  <textarea value={(edit&&edit.check)?edit.check:''} name="" id="" cols="30" rows="10" onChange={(e)=>{ change('check',e,identify) }}></textarea>
		                </div>
		                <div className="modal_right_pre">
		                  <span className="pre_title">诊断：</span>
		                  <div className="dont_add">无需添加</div>
		                </div>
		                <div className="modal_right_pre">
		                  <span className="pre_title">处置：</span>
		                  <textarea value={(edit&&edit.cure)?edit.cure:''} name="" id="" cols="30" rows="10" onChange={(e)=>{ change('cure',e,identify) }}></textarea>
		                </div>
		            </article>
		        </div>
		        <div className="clear"></div>
		        </div>

	 		)
        }

