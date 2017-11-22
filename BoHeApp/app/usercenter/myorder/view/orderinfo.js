import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export const OrderInfo = ({status,
  patient_name,
  visit_time,
  reserve_number,
  service_name,
  doctor_name,
  relations,
  clinic_name,
  contact_tel,
  company_name,
  appointment_name,
  clinic_address,
  is_self,
  toCancelOrderHandler,
  cancelled,
  cancelitem
}) => {
        var status_class;
        var status_html;
        var cancel_button = '';
        (function(){
        if(status == 1){
        status_class ="yuyuehzong";
        status_html = '已预约'
        cancel_button =  (<div className="demos-content-padded btnbox">
                             <div className="price_confirm" id="confirm"  onClick={toCancelOrderHandler} style={{marginTop:"20px"}}>取消预约</div>
                          </div>)
        }else if(status == 2){
        status_class = "wancheng";
        status_html = '已完成'
        }else if(status == 3){
        status_class = "guoqi"
        status_html = '已过期'
        }else if(status == 4){
        status_class = "quxiao"
        status_html = '已取消'
        }else if(status == 5){
        status_class = "queren"
        status_html = '已确认'
        }
        }());
        if(cancelled)
          cancelitem.push((<div key={12}>
                        <div className="weui_mask_transparent"></div>
                        <div className="weui_toast">
                        <i className="weui_icon_toast"></i>
                        <p className="weui_toast_content">取消成功</p>
                        </div>
                      </div>));
        else
          cancelitem.pop()

        return (<div>
                            <div className="myOrderdescbox">
                            <div className="weui_cells" style={{borderTop:"1px #e5e5e5 solid"}}>
                            <a className="weui_cell" href="javascript:;">
                            <div className="weui_cell_hd">
                            <p><span>就诊时间：</span><font id="visit_time">{visit_time}</font></p>
                            <em id="status" className={status_class}>{status_html}</em>
                            </div>
                            </a>
                            </div>
                            </div>

                            <div className="orderDescContain" style={{borderTop:"none"}}>
                            <p><b>预约项目：</b><span id="project_name">{service_name}</span><em className="clear"></em></p>
                            <p><b>预约编号：</b><span id="reserve_number">{reserve_number}</span><em className="clear"></em></p>
                            <p><b>预约医生：</b><span id="doctor_name">{doctor_name}</span><em className="clear"></em></p>
                            <p><b>预约诊所：</b><span id="clinic_name">{clinic_name}</span><em className="clear"></em></p>
                            <p><b>诊所地址：</b><span id="clinic_address">{clinic_address}</span><em className="clear"></em></p>
                            </div>

                            <div className="orderDescContain" id="isselfDiv" style={{marginTop:"10px",display:"none"}}>
                            <p><b>就&nbsp;&nbsp;诊&nbsp;人：</b><span id="patient_name">{patient_name}</span><em className="clear"></em></p>
                            <p><b>与我关系：</b><span id="relations">{relations}</span><em className="clear"></em></p>
                            </div>
                            <div className="orderDescContain" style={{marginTop:"10px"}}>
                            <p id="apBox">
                            {(is_self==1)?<b>就&nbsp;&nbsp;诊&nbsp;人：</b>:<b>预&nbsp;&nbsp;约&nbsp;人：</b>}
                            <span id="appointment_name">{appointment_name}</span>
                            <em className="clear"></em>
                            </p>
                            <p><b>联系电话：</b><span id="contact_tel">{contact_tel}</span><em className="clear"></em></p>
                            <p><b>所属公司：</b><span id="company_name">{company_name}</span><em className="clear"></em></p>
                            </div>
                            {cancel_button}
                            <div className="opcitybox" style={{display:"none"}}><span></span></div>
                            <ReactCSSTransitionGroup
                              transitionName="cancelorder"
                              transitionEnterTimeout={500}
                              transitionLeaveTimeout={300}>
                              {cancelitem}
                            </ReactCSSTransitionGroup>
                            </div>

                            );
      }