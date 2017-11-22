import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const Content = ({
  patient_name,
  doctor_name,
  visit_time,
  clinic_name,
  record_content,
  type,
  toDesc
}) => {

        return (<div>
                <div className="CaseContentbox">
                <div className="orderDescContain CaseContent noborder">
                <h3><span>{patient_name}</span></h3>
                <p><b>问诊时间</b><span>{visit_time}</span><em className="clear"></em></p>
                <p><b>主治医生</b><span>{doctor_name}</span><em className="clear"></em></p>
                {function(){
                    if(clinic_name == '' || clinic_name == null)
                        return <p style={{display:"none"}}><b>诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所</b><span>{clinic_name}</span><em className="clear"></em></p>
                    else
                        return <p><b>诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所</b><span>{clinic_name}</span><em className="clear"></em></p>

                }()}
                
                <p><b>病历类型</b><span>{function(){
                          if(type == 1){
                            return '初诊建档'
                          }else if(type == 2){
                            return '牙体牙周'
                          }else{
                            return ''
                          }
                }()}</span><em className="clear"></em></p>
                <p style={{display:"block"}}><b>病历内容：</b><em className="clear"></em></p>
                <div className="caseText" style={{marginTop:"5px",display:"block"}}>
                <div className="record_content">
                { record_content.split("\n").join("<br />") }
                </div>
                </div>  
                </div>
                </div>
                <div className="caseFiletab" id="caseDetailtab" style={{marginTop:0,marginBottom:"10px"}}>
                <div className="weui_cells weui_cells_access">
                <div className="weui_cell">
                <div className="weui_cell_hd" onClick={ toDesc }>
                <p>病历详情</p>
                <span id="name"></span>
                </div>
                <span className="weui_cell_ft"></span>
                </div>
                </div>
                </div>
                <div className="caseFiletab" id="Filetab" style={{marginTop:0,marginBottom:"20px",display:"none"}} >
                <div className="weui_cells weui_cells_access">
                <a className="weui_cell" href="javascript:;">
                <div className="weui_cell_hd">
                <p>附件</p>
                <span id="name"></span>
                </div>
                <span className="weui_cell_ft"></span>
                </a>
                </div>
                </div>
                </div>) 
      }