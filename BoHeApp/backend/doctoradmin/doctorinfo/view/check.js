import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import Calendar from 'rc-calendar';
const format = ('YYYY-MM-DD');

import { table as ordertable } from 'backend/ordertable/orderinfo/config/orderedittable.js';

function disabledDate(current,timeArr){
    let _date;
    if (!current) {
    // allow empty select
      return false;
    }
    for(_date in timeArr){
    	 if(current.format(format) ==_date)
    	   return false;
    }

    return true;
}

function dateRender(current,timeArr){

    return (<div>
		      <div className="rc-calendar-date">
		          { current.date() }
		      </div>
		    </div>)

}

export const CheckOrder = ({
	name,
	sex,
	is_show,
	birth,
	age,
	position,
	hospital,
	field,
	job_age,
	context,
	phone,
	account,
	photo,
	service_name_arr,
	label_arr,
	handleSelectDate,
	time_arr,
	toEdit,
    checkDutyInfo,
    detail,
    seldate,
    label,
    projects,
    birthdate
}) => {
       return (<div>
			        <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but" id="back">返回</a>
			                <a onClick={ toEdit } className="edit-but">编辑</a>
			              </p>
			            </div>
			        </div>
			        <div className="add-box-container">
			            <div className="add-h3 add-main-box1 mtop45">
			                <h3 className="box5-h3">基本信息<span></span></h3>
			                <div className="main-input">
			                    <div className="input-box h30 gray-span">
			                        <span>是否显示：</span>
			                        <div className="see-main">{is_show}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>账号：</span>
			                        <div className="see-main">{ account }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>医生姓名：</span>
			                        <div className="see-main">{ name }</div>
			                    </div>
			                    <div className="input-box h65 gray-span">
			                        <span>医生头像：</span>
			                        <div className="touxiang"><img src={ photo } alt=""/></div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>性别：</span>
			                        <div className="see-main">{ sex }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>出生年月：</span>
			                        <div className="see-main">{ birthdate }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>年龄：</span>
			                        <div className="see-main">{ age }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>职称：</span>
			                        <div className="see-main">{ position }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>所在医院：</span>
			                        <div className="see-main">{ hospital }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>服务项目：</span>
			                        <div className="see-main">
			                          {
			                          	projects?projects.map((project)=>{
			                          	  return <span style={{paddingRight:'20px'}}>{project.name}</span>
			                             }):''
			                          }
			                        </div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>擅长领域：</span>
			                        <div className="see-main">{ field }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>执业年限：</span>
			                        <div className="see-main">{ job_age }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>背景：</span>
			                        <div className="see-main">{ context }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>出诊时间：</span>
			                        <a href="javascript:;" onClick={ checkDutyInfo } className="timesethover">查看坐诊详情</a>
			                    </div>
			                    <div className="opacity-timetipbox" id="timeTipbox" style={{display:(detail?'block':'none')}}>
								  <div className="calendarboxmain Mtop225 width630">
								      <h4 className="toph4" style={{margin:'0'}}><b>查看坐诊详情</b><span onClick={ checkDutyInfo } className="close-dialog"></span></h4>
								      <div className="calendarboxmainIn">
								          <div className="canadar_main_box">
								              <div className="doc_clinic_address">
								                <span>出诊诊所：</span>
								                <select id="clinicList" disabled>
								                </select>
								              </div>
								              <div style={{borderBottom:'1px #ccc solid',margin:'auto'}}>
								              <Calendar format={format}  style={{margin:'auto'}} onSelect={ handleSelectDate } dateRender={(cur)=>{ return dateRender(cur,time_arr) }} disabledDate={(cur) => { return disabledDate(cur,time_arr) }}/>
								              </div>
								              <div className="timeboxmain-select">
								                <div className="timechoose" id="timechoose"></div>
								              </div>
								              <input id="date" type="text" style={{opacity:'0',position: 'absolute'}}/>
								          </div>
								          <div className="docto_desc_main chuzhenTimebox">
								              <ul id="timeArry">
						                      	<h2 className="timeh2">上午</h2>
						                      	{
						                      		ordertable?ordertable.map((tableitem)=>{
						                      			var color = 'gray';
						                      			var timeRange = [];
						                      			if(parseInt(tableitem.time)<=12){
						                      				timeRange = seldate?time_arr[seldate]:[];
						                      				timeRange?timeRange.map((time)=>{
						                      					if(time.visit_time==tableitem.time){
						                      						color = 'cur';
						                      					}
						                      				}):''
						                      				return <li className={ color } style={(color=='gray')?{pointerEvents:"none",height:'auto',background:'#fff',marginBottom:'0px'}:{height:'auto',background:'#fff',marginBottom:'0px'}}><span style={{paddingLeft:'0px'}}>{tableitem.time}</span></li>
						                      			}
						                      		}):''
						                      	}
						                    	<h2 className="timeh2">下午</h2>
						                    	{
						                      		ordertable?ordertable.map((tableitem)=>{
						                      			var color = 'gray';
						                      			var timeRange = [];
						                      			if(parseInt(tableitem.time)>=13){
						                      				timeRange = seldate?time_arr[seldate]:[];
						                      				timeRange?timeRange.map((time)=>{
						                      					if(time.visit_time==tableitem.time){
						                      						color = 'cur';
						                      					}
						                      				}):''
						                      				return <li className={ color } style={(color=='gray')?{pointerEvents:"none",height:'auto',background:'#fff',marginBottom:'0px'}:{height:'auto',background:'#fff',marginBottom:'0px'}}><span style={{paddingLeft:'0px'}}>{tableitem.time}</span></li>
						                      			}
						                      		}):''
						                      	}
						                      </ul>
								          </div>
								          <div className="clear"></div>
								      </div>
								  </div>
								</div>
			                    <div className="input-box h30 gray-span">
			                        <span>手机：</span>
			                        <div className="see-main">{ phone?phone:'' }</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>标签：</span>
			                        <div className="see-main">
			                          { label?label.map((label)=>{
			                          	  return <span style={{paddingRight:'20px'}}>{label.name}</span>
			                          }):''}
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
				</div>)

}
