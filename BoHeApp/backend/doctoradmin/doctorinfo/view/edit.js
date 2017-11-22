import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import Calendar from 'rc-calendar';

import { table as ordertable } from 'backend/ordertable/orderinfo/config/orderedittable.js';

const format = ('YYYY-MM-DD');


function disabledDate(current,timeArr){

    return false;
}

function dateRender(current,timeArr){
    let _date;
    let flag = 0;
	console.log(timeArr);
    for(_date in timeArr){
    	if(current.format(format) ==_date){
    		flag = 1;
    	}
    }
    if(flag){
    	 	return (<div>
				      <div className="rc-calendar-date"  style={{background:'#3f7cfa'}}>
				          { current.date() }
				      </div>
				    </div>)
	 }
	 else{
		return (<div>
			      <div className="rc-calendar-date">
			          { current.date() }
			      </div>
			    </div>)
	 }
}

function photoBox(){
   return (<div className="new-create-opcity" style={{display:"none",position:'absolute'}}>
             <div className="new-uppic-bj">
                <div className="new-uppic-box">
                    <h4 className="toph4 nomargin">上传头像<span className="close_dialog"></span></h4>
                    <div className="imageBox">
                        <div className="thumbBox"></div>
                        <div className="spinner" style={{display:"none"}}>Loading...</div>
                    </div>

                    <div className="action">
                        <div className="filebut">
                         <input type="file" id="base_photo_rechoose" className="choose-file"/>重新选择</div>
                        <div className="zoom-box">
                            <span id="btnZoomOut" className="btnZoomOut"></span>
                            <span id="btnZoomIn" className="btnZoomIn"></span>
                        </div>
                        <input type="button" id="btnCrop" value="确认上传" className="btnCrop"/>
                    </div>
                </div>
          </div>
        </div>)
}

export const EditDoctor = ({
    change,
	name,
	sex,
	is_show,
	birthdate,
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
    chooseBirth,
	handleSelectDate,
	toEdit,
    click,
    detail,
    allprojects,
    showBirthCalendar,
    dateModal,
    save,
    labels,
    labelclick,
    label,
    password,
    projects,
    proClick,
    checkDutyInfo,
    time_arr,
    selecttime,
    curDate
}) => {
		var count = 0;
       return (<div>
			        <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but">返回</a>
			                <a href="javascript:void(0)" className="save-but" onClick={ save }>保存</a>
			              </p>
			            </div>
			        </div>
			        <div className="add-box-container">
			            <div className="add-h3 add-main-box1 mtop45">
			                <h3 className="box5-h3">基本信息<span></span></h3>
			                <div className="main-input">
			                    <div className="input-box h30">
			                        <span>是否显示：</span>
			                        <div className="radio-box">
			                            <span><input type="radio" className="radio1" name="radiov" id="checkboxvv" value="1" checked={is_show=='1'?'checked':''}/><label htmlFor="checkboxvv" style={{top:'5px'}} onClick={ (e)=>{ click(e,'is_show','1') } } ></label>是</span>
			                            <span><input type="radio" className="radio1" name="radiov" id="checkboxww" value="2" checked={is_show=='2'?'checked':''}/><label htmlFor="checkboxww" style={{top:'5px'}} onClick={ (e)=>{ click(e,'is_show','2') } }></label>否</span>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">账号：</em></span>
			                        <input type="text" value={phone} className="text-input"  onChange={(ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'phone')}} maxLength="11" />
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">医生姓名：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'name')} }  value={name?name:''} type="text" className="text-input" id="name"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h65">
			                        <span>医生头像：</span>
			                        <div className="touxiang" id="logo"><img src={photo?photo:require('backend/common/images/userPic.png')} alt=""/></div>
			                        <div className="but-input uppic-input"><input type="file" id="base_doctor_photo_choose" className="but-input upfile-butt"/>上传头像</div>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>性别：</span>
			                        <div className="radio-box" id="sex">
			                            <span><input type="radio" className="radio1" name="radio2" id="doctor_checkbox10" value="1" checked={sex=='1'?'checked':''}/><label htmlFor="checkbox10" style={{top:'5px'}} onClick={(e)=>{ click(e,'sex','1')}}></label>男</span>
			                            <span><input type="radio" className="radio1" name="radio2" id="doctor_checkbox11" value="2" checked={sex=='2'?'checked':''}/><label htmlFor="checkbox11" style={{top:'5px'}} onClick={(e)=>{ click(e,'sex','2')}}></label>女</span>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>出生年月：</span>
			                        <input value={ birthdate } type="text" className="text-input layicon" readonly="readonly" onClick={ showBirthCalendar }/>
			                        <p></p>
			                    </div>
			                    <div style={{position:'relative'}}>
			                    	<div style={ {...dateModal,marginLeft:'150px'} }>
                                      <Calendar format={'YYYY-MM-DD'} onSelect={ chooseBirth }/>
                                    </div>
			                    </div>
			                    <div className="input-box h30">
			                        <span>年龄：</span>
			                        <input value={ age?age:'' } type="text" className="text-input" readonly="readonly"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">职称：</em></span>
			                        <input onChange={(ev)=>{ change(ev,'position') }}  value={position?position:''} type="text" className="text-input" id="position"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">所在医院：</em></span>
			                        <input onChange={(ev)=>{ change(ev,'hospital') }} type="text" value={hospital?hospital:''} className="text-input" id="hospital"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">服务项目：</em></span>
			                        <div className="checkbox-box" style={ { maxWidth:'900px',marginBottom:'10px' } }>
			                          <div className="checkBone" id="service_ids">
			                            {
			                            	allprojects?allprojects.map((project)=>{
			                            		    var projectshow = '';
				                          			projects?projects.map((meta_project)=>{
				                          				if(meta_project.name == project.name){
				                          					projectshow = '1';
				                          				}
				                          			}):'';
		                                           return (<span onClick={ ()=>{ proClick(project.name) } } style={{float:'left',paddingRight: '15px',paddingLeft: '15px',position: 'relative',lineHeight:'30px',fontSize:'12px'}}>
			                                                <input type="checkbox" checked={ (projectshow=='1')?'checked':'' } className="checkbox" id={ 'checkbox_n_' + project.id  }/>
			                                                <label onClick={(e)=>{e.preventDefault()}} htmlFor={ 'checkbox_n_' + project.id  } style={{backgroundPositionY:'1px',lineHeight:'30px',paddingLeft:'19px',width: '16px',display: 'block',borderRadius: '2px',position:'absolute',top:'6px',left: '0'}}>
			                                                </label>
			                                                {project.name}
			                                              </span>)
			                                        }):''
			                            }
			                          </div>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">擅长领域：</em></span>
			                        <input onChange={(ev)=>{change(ev,'field') }} value={field?field:''} type="text" className="text-input" id="field"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>执业年限：</span>
			                        <input onChange={ (ev)=>{ change(ev,'job_age')} } value={job_age?job_age:''} type="text" className="text-input" id="job_age"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">背景：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'context') }} value={context?context:''} type="text" className="text-input" id="context"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">出诊时间：</em></span>
			                        <a href="javascript:;" className="timesethover"  onClick={ checkDutyInfo }>坐诊时间安排</a>
			                        <p className="errorTip"></p>
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
						                      			var color = '';
						                      			var timeRange = [];
						                      			console.log('ABCDEFG');
						                      			console.log(curDate);
						                      			console.log(time_arr);
						                      			if(parseInt(tableitem.time)<=12){
						                      				timeRange = curDate?time_arr[curDate]:[];
						                      				timeRange?timeRange.map((time)=>{
						                      					if(time.visit_time==tableitem.time){
						                      						color = 'cur';
						                      					}
						                      				}):''
						                      				return <li className={ color } onClick={()=>{ selecttime(tableitem.time,curDate)}} style={(color=='')?{height:'auto',background:'#fff',marginBottom:'0px'}:{height:'auto',background:'#fff',marginBottom:'0px'}}><span style={{paddingLeft:'0px'}}>{tableitem.time}</span></li>
						                      			}
						                      		}):''
						                      	}
						                    	<h2 className="timeh2">下午</h2>
						                    	{
						                      		ordertable?ordertable.map((tableitem)=>{
						                      			var color = '';
						                      			var timeRange = [];
						                      			if(parseInt(tableitem.time)>=13){
						                      				timeRange = curDate?time_arr[curDate]:[];
						                      				timeRange?timeRange.map((time)=>{
						                      					if(time.visit_time==tableitem.time){
						                      						color = 'cur';
						                      					}
						                      				}):''
						                      				return <li className={ color } onClick={()=>{ selecttime(tableitem.time,curDate)}} style={(color=='')?{height:'auto',background:'#fff',marginBottom:'0px'}:{height:'auto',background:'#fff',marginBottom:'0px'}}><span style={{paddingLeft:'0px'}}>{tableitem.time}</span></li>
						                      			}
						                      		}):''
						                      	}
						                      </ul>
								          </div>
								          <div className="clear"></div>
								      </div>
								  </div>
								</div>
			                    <div className="input-box h30">
			                        <span><em className="emx">手机：</em></span>
			                        <input type="text" value={phone?phone:''} className="text-input"  onChange={(ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'phone')}} maxLength="11" />
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>密码：</span>
			                        <input onChange={(ev)=>{ change(ev,'password')}} type="password" value={password?password:''} className="text-input" id="password" placeholder="6～20个字符"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>标签：</span>
			                        <div className="checkbox-box" style={{width:'900px',marginBottom:'10px'}}>
			                          <div className="checkBone" id="tag_name">
			                          	<span>
			                          	{
			                          		labels?labels.map((labelall)=>{
			                          			count++;
			                          			var labelshow = '';
			                          			label?label.map((labelcheck)=>{
			                          				if(labelcheck.name == labelall.name){
			                          					labelshow = '1';
			                          				}
			                          			}):'';
			                          			return (<span onClick={ ()=>{ labelclick(labelall.name)} } style={{float:'left',paddingRight: '15px',paddingLeft: '15px',position: 'relative',lineHeight:'30px',fontSize:'12px'}}>
			                          				<input type="checkbox" checked={ (labelshow=='1')?'checked':'' } class="checkbox" id={"checkboxa_"+count}/>
			                          				<label  onClick={ (e)=>{e.preventDefault()}} htmlFor={"checkboxa_"+count} style={{backgroundPositionY:'1px',lineHeight:'30px',paddingLeft:'19px',width: '16px',display: 'block',borderRadius: '2px',position:'absolute',top:'6px',left: '0'}}></label>
			                          				<i>{labelall.name}</i>
			                          				</span>
		                          				)
			                          		}):''
			                          	}
		                          		</span>
			                          </div>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>邀请码：</span>
			                        <input type="text" className="text-input" id="invite_code" readonly="" value="" disabled="" style={ {cursor:'notAllowed',textAlign:'center',padding:'0px'} }/>
			                        <p></p>
			                    </div>
			                </div>
			            </div>
			        </div>
					{ photoBox() }
			    </div>)

}