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
	patient_name,
	appointment_name,
	contact_tel,
	is_self,
	company_name,
	project_name,
	service_name,
	visit_time,
	doctor_name,
	doctor_phone,
	clinic_name,
	remark,
	toEdit,
	seldate,
	checkDutyInfo,
	closeDutyInfo,
	detail,
	handleSelectDate,
	time_arr
}) => {
       return (<div>
			        <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but" id="back">返回</a>
			                <a onClick={toEdit} className="edit-but" id="edit-but">编辑</a>
			              </p>
			            </div>
			        </div>
			          <div className="add-box-container" style={{minHeight:'500px'}}>
			            <div className="add-h3 add-main-box1 mtop45">
			              <h3 className="box5-h3">基本信息<span></span></h3>
			                <div className="main-input">
			                    <div className="input-box h30 gray-span">
			                        <span>就诊人姓名：</span>
			                        <div className="see-main">{patient_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>预约人姓名：</span>
			                        <div className="see-main">{appointment_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>联系方式：</span>
			                        <div className="see-main">{contact_tel}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>是否本人：</span>
			                        <div className="see-main">{ is_self=='1'?'是':is_self=='2'?'否':''}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>所属公司：</span>
			                        <div className="see-main">{company_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>服务项目：</span>
			                        <div className="see-main">{service_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>预约日期：</span>
			                        <div className="see-main">{visit_time}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>医生：</span>
			                        <div className="see-main"><label>{doctor_name+'('+(doctor_phone?doctor_phone:'')+')'}</label><a href="javascript:;" className="checktimea" onClick={ checkDutyInfo } >查看医生的出诊时间</a></div>
			                    </div>
			                    <div className="opacity-timetipbox" id="timeTipbox" style={{display:(detail?'block':'none')}}>
								  <div className="calendarboxmain Mtop225 width630">
								      <h4 className="toph4" style={{margin:'0'}}><b>查看坐诊详情</b><span onClick={ closeDutyInfo } className="close-dialog"></span></h4>
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
			                        <span>诊所：</span>
			                        <div className="see-main">{clinic_name}</div>
			                    </div>


			                    <div className="input-box h30 gray-span">
			                        <span>备注：</span>
			                        <div className="see-main">{remark}</div>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>)

}