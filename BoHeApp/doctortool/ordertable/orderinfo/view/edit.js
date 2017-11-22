import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import Calendar from 'rc-calendar';

export const EditOrder = ({
  change,
  changeIsSelf,
  changeProject,
  relations,
  patient_name,
  doctors,
  companys,
  company_id,
  company_name,
  projects,
  chooseDoctor,
  chooseProject,
  clinic_name,
  service_id,
  handleSelectDate,
  visit_time,
  dateModal,
  showDateModal,
  ordertable,
  timeRange,
  click,
  is_self,
  save,
  chooseCompany,
  doctor_id
}) => {
       return (<div>
			          <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but" id="back">返回</a>
			                <a href="javascript:void(0)" className="save-but" onClick={ save }>保存</a>
			              </p>
			            </div>
			          </div>
			          <div className="add-box-container" style={{minHeight:'700px'}}>
			            <div className="add-h3 add-main-box1 mtop45">
			              <h3 className="box5-h3">基本信息<span></span></h3>
			                <div className="main-input" style={{overflow:'scroll'}}>
			                    <div className="input-box h30">
			                        <span><em className="emx">就诊人姓名：</em></span>
			                        <input type="text" onChange={(ev)=>{ change(ev,'patient_name') }} value={ patient_name } className="text-input"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">预约人姓名：</em></span>
			                        <div className="col-sm-8" id="PatInputbox">
			                            <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
			                              <button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
			                                <span className="placeholder" id="PatVal" data-val="">请选择</span>
			                                <span className="caret"></span>
			                              </button>
			                              <div className="dropdown-menu">
			                                <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
			                                  <label className="sr-only" htmlFor="input-bts-ex-5"></label>
			                                  <div className="search-box">
			                                    <div className="input-group">
			                                      <input type="text" placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search" aria-describedby="search-icon5" tabindex="1" />
			                                    </div>
			                                  </div>
			                                  <div className="list-to-filter">
			                                        <ul className="list-unstyled" id="patient_id">
			                                        </ul>
			                                    <div className="no-search-results">
			                                      <div className="alert alert-warning" role="alert"><i className="fa fa-warning margin-right-sm"></i>没有找到 <strong>'<span></span>'</strong>相关数据</div>
			                                    </div>
			                                  </div>
			                                </div>
			                              </div>
			                              <input type="hidden" name="bts-ex-5" value=""/>
			                            </div>
			                        </div>
			                        <p></p>
			                    </div>

			                    <div className="input-box h30">
			                        <span>联系方式：</span>
			                        <input type="text" className="text-input readonly" id="contact_tel" readonly/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">是否本人：</em></span>
			                        <div className="radio-box" id="is_self">
			                            <span><input type="radio" className="radio1" name="radio2" id="checkbox10" value="1" checked={is_self&&is_self=='1'?'checked':''}/><label for="checkbox10" style={{top:'6px'}} onClick={ ()=>{ changeIsSelf('1','is_self') }}>是</label></span>
			                            <span><input type="radio" className="radio1" name="radio2" id="checkbox11" value="2" checked={is_self&&is_self=='2'?'checked':''}/><label for="checkbox11" style={{top:'6px'}} onClick={ ()=>{ changeIsSelf('2','is_self') }}>否</label></span>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30" id="guanxi" style={{display:'none'}}>
			                        <span><em className="emx">与预约人关系：</em></span>
			                        <input value={ relations } type="text" className="text-input" id="relations"/>
			                        <p></p>
			                    </div>

			                    <div className="input-box h30">
			                        <span><em className="emx">所属公司：</em></span>
			                        <select name="" id="company_name" className="select-div" onChange={ chooseCompany }>
			                          <option value="">请选择</option>
			                          {companys?companys.map((company)=>{
			                          	   if(company.id == company_id)
                                              return <option selected='selected' value={ company.company_code }>{company.name}</option>
                                           else
                                              return <option value={ company.company_code }>{company.name}</option>
			                          }):''}
			                        </select>
			                        <label className="inviteCode"></label>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">选择项目：</em></span>
			                        <select onChange={ chooseProject } name="" id="service_id" className="select-div">
			                          {projects?projects.map((project) =>{
			                          	  if(service_id == project.id)
			                          	  	 return <option selected='selected' value={ project.id }>{ project.name }</option>
			                          	  else
                                             return <option value={ project.id }>{ project.name }</option>
			                            }):''
			                          }
			                        </select>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30" style={{position:'relative'}}>
			                        <span><em className="emx">预约日期：</em></span>
			                        <input type="text" className="text-input layicon" id="visit_time" onClick={ showDateModal } value={ visit_time?visit_time:'' } readonly="readonly"/>
			                        <p></p>
			                        <div className="calendarbox" id="inline-calendar"></div>
			                        <div style={ dateModal }>
                                      <Calendar format={'YYYY-MM-DD'} onChange={ handleSelectDate }/>
                                	</div>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">医生：</em></span>
			                        <select onChange={ chooseDoctor } name="" id="doctor_id" className="select-div">
			                          <option value="">请选择</option>
			                            { doctors?doctors.map((doctor)=>{
			                            	if(doctor.id == doctor_id)
			                          	       return <option selected='selected' value={ doctor.id } clinic_name={doctor.clinic_name} clinic_id={doctor.clinic_id}>{doctor.name}</option>
			                          	   	else
			                          	       return <option value={ doctor.id } clinic_name={doctor.clinic_name} clinic_id={doctor.clinic_id}>{doctor.name}</option>
			                             }):'' }
			                        </select>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>诊所：</span>
			                        <input value={ clinic_name } type="text" className="text-input readonly" id="clink" readonly="readonly"/>
			                    </div>
			                    <div className="input-box chuzhenTimebox">
			                      <span><em className="emx">选择出诊时间：</em></span>
			                      <ul id="timeArry">
			                      	<h2 className="timeh2">上午</h2>
			                      	{
			                      		ordertable?ordertable.map((tableitem)=>{
			                      			var color = 'gray';
			                      			if(parseInt(tableitem.time)<=12){
			                      				timeRange?timeRange.map((dataitem)=>{
			                      					if(dataitem.visit_time==tableitem.time){
			                      						color = '';
			                      						if(visit_time.indexOf(tableitem.time)>=0){
			                      							color = 'cur';
			                      						}
			                      					}
			                      				}):''
			                      				return <li className={ color } style={(color=='gray')?{pointerEvents:"none"}:{}}><span onClick={ (e)=>{click(e,'visit_time',visit_time) }}>{tableitem.time}</span></li>
			                      			}
			                      		}):''
			                      	}
			                    	<h2 className="timeh2">下午</h2>
			                    	{
			                      		ordertable?ordertable.map((tableitem)=>{
			                      			var color = 'gray';
			                      			if(parseInt(tableitem.time)>=13){
			                      				timeRange?timeRange.map((dataitem)=>{
			                      					if(dataitem.visit_time==tableitem.time){
			                      						color = '';

			                      						if(visit_time.indexOf(tableitem.time)>=0){
			                      							color = 'cur';
			                      						}
			                      					}

			                      				}):''
			                      				return <li className={ color } style={(color=='gray')?{pointerEvents:"none"}:{}}><span onClick={ (e)=>{click(e,'visit_time',visit_time) }}>{tableitem.time}</span></li>

			                      			}
			                      		}):''
			                      	}
			                      </ul>
			                      <p id="timeWrong"></p>
			                      <div className="clear"></div>
			                    </div>

			                    <div className="input-box h30">
			                        <span>备注：</span>
			                        <textarea onChange={(ev)=>{ change(ev,'remark') }} className="textarea" style={{maxWidth:'245px'}} id="remark"></textarea>
			                        <p></p>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>)

}