import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const _OrderTime_ = ({
   times,
   toClinic,
   chooseTime,
   name,
   field,
   clinic_name,
   clicktime
}) => {
  return(<div>
    <div className="order_datebox">
      <dl>
        <dt><img src={require("doctortool/common/images/pic.jpeg")} alt="" /></dt>
        <dd>
          <h3>
              <b>{name}</b>
            <p><span>{field}</span></p>
          </h3>
          <h4>{clinic_name}</h4>
        </dd>
      </dl>

      <div className="chooseTimestape">
        <div className="stapebox">
          <label className='blue'></label>
          <label></label>
          <ul>
            <li className="step1 cur"><span>预约日期</span></li>
            <li className="step2 cur"><span>预约时段</span></li>
            <li className="step3"><span>预约诊所</span></li>
          </ul>
        </div>
      </div>
      </div>
    <div className="docto_desc_main chuzhenTimebox">
        <ul>
          <h2 className="timeh2">上午</h2>
          {

            table.map((item)=>{
              if(parseInt(item.time)<=11){
                let flag = 0;
                times.map((time)=>{
                  if(time.visit_time == item.time){
                    if(time.status == 1){
                      flag = 0;
                    }else{
                      flag = 1;
                    }
                  }

                })

                if(flag == 1){
                  var color = ''
                }else if(flag == 0){
                  var color = 'gray'
                }else if(time.status == 1){
                  var color = ''
                }
                if(time.time == clicktime){
                  var color = 'cur';
                }
              return <li onClick={ ()=>{chooseTime(time.time) }} className={ color } style={(color=='gray')?{pointerEvents:"none",height:'auto',background:'#fff',marginBottom:'0px'}:{height:'auto',background:'#fff',marginBottom:'0px'}}><span style={{paddingLeft:'0px'}}>{time.time}</span></li>
              }
            })
          }
        <h2 className="timeh2">下午</h2>
          {
            times.map((time)=>{
              if(parseInt(time.time)>=13){
                if(time.status == 0){
                  var color = 'gray'
                }else if(time.status == 1){
                  var color = ''
                }
              return <li onClick={ ()=>{chooseTime(time.time)} } className={ color } style={(color=='gray')?{pointerEvents:"none",height:'auto',background:'#fff',marginBottom:'0px'}:{height:'auto',background:'#fff',marginBottom:'0px'}}><span style={{paddingLeft:'0px'}}>{time.time}</span></li>
              }
            })
          }
        </ul>
        <div style={{width:'100%',height:'48px',lineHeight:'48px',background:'#00c5cc',color:'#fff',textAlign:'center',fontSize:'24px',position:'fixed',bottom:'0px'}} onClick={ (ev)=>{ toClinic(ev) }}>确定</div>
        </div>
        </div>
      )}
