import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


export const Content = ({
    patient_name,
    bill_number,
    visit_time,
    doctor_name,
    pay_method,
    project_name,
    clinic_name,
    clinic_address,
    status,
    subbills
}) =>
{

  var zhifu_style={};
  var nozhifu_style={}
  var footButposition_style={}

  if(status == 1){

     zhifu_style = {display:"block"}
     nozhifu_style = {display:"none"}
     footButposition_style = {display:"none"}

     
  }else if(status == 0){

     zhifu_style = {display:"none"}
     nozhifu_style = {display:"block"}
     footButposition_style = {display:"block"}

  }

  return (<div>
          <div className="billwrapper">
           <div className="myOrderdescbox">
             <div className="myOrdermainbox">
               <div className="weui_cells">
                 <a className="weui_cell" href="#">
                   <div className="weui_cell_hd">
                    <p><b id="patient_name">{patient_name}</b><span>账单号&nbsp;&nbsp;&nbsp;&nbsp; <font id="bill_number">{ bill_number }</font></span></p>
                    <div className="billstatus"><label className="zhifu" style={zhifu_style}>已支付</label><label className="nozhifu" style={nozhifu_style}>待支付</label></div>
                   </div>
                 </a>
               </div>
              </div>
             </div>
            <div className="orderDescContain" style={{borderTop:"none"}}>
              <p><b>就诊时间：</b><span id="visit_time">{visit_time}</span><em className="clear"></em></p>
              <p><b>就诊项目：</b><span id="project_name">{project_name}</span><em className="clear"></em></p>
              <p><b>预约医生：</b><span id="doctor_name">{doctor_name}</span><em className="clear"></em></p>
              <p style={(clinic_name =='' || clinic_name == null)?{display:"none"}:{display:"block"}} id="clinicDiv" ><b>预约诊所：</b><span id="clinic_name">{clinic_name}</span><em className="clear"></em></p>
              <p style={(clinic_name =='' || clinic_name == null)?{display:"none"}:{display:"block"}} id="clinicDiv2" ><b>出诊地址：</b><span id="clinic_address">{clinic_address}</span><em className="clear"></em></p>
            </div>
            <div className="orderDescContain" id="pay_method" style={{marginTop:"10px",display:(status == 1)?"block":"none"}}>
              <p style={{padding:0}}><b>支付方式：</b><span id="pay_way">{pay_method}</span><em className="clear"></em></p>
            </div>
  
            <div className="billDescDetail" style={{marginTop:"10px", marginBottom:"60px"}}>
              <h4>账单明细</h4>
              <div className="billDescList" style={{paddingBottom:0}}>
                <ul id="AllbillTotal">
                  {
                      subbills.items.map(function(item, i) {
                           return (<li key={i}>
                                    <p><b>{item.project_name}</b><span>数量：{item.number}</span></p>
                                    <label>￥ {item.count_price}</label>
                                  </li>)
                      })
                  }

                </ul>
                <div className="Allhejibox">合计：<span><b id="Alltotal">{subbills.total}</b></span></div>
              </div>
            </div>

          </div>

          <div className="footButposition" style={footButposition_style}><input type="button" value="微信支付" className="price_confirm" id="confirmBut" style={{marginBottom:"20px"}}/></div>
          <div className="opcitybox" style={{display:"none"}}><span></span></div>
          </div>)
}
