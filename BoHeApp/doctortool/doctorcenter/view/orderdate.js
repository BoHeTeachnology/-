import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

// import Calendar from 'rc-calendar';
// import locale from 'rc-calendar/lib/locale/zh_CN'
const format = ('YYYY-MM-DD');

import ErrorCenter from 'doctortool/errorcenter/user_doctor/errorcenter.js'

import DateBox  from 'doctortool/doctorcenter/datebox.js'

function smallLabel(label_arr){
  var i=0;
  return label_arr.map((label)=>{ i++; if( i<=2&&label!='默认'&&label!=''){ return <span>{label}</span> } })
}

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + month + strDate;
  return currentdate;
}

function dateRender(current,dates,width){
    let _date;
    let flag = 0;
    dates.map((date)=>{
      if(current.format(format) == date.visit_date){
        if(date.type == 2){
          flag = 1;
        }else{
          flag = 2;
        }
    	}
    })
    return <DateBox flag={flag} date={ current.date() } width={width}/>
    // if(flag == 1){
    // 	 	return (<div>
				//       <div className="rc-calendar-date rc-calendar-date-public" style={{lineHeight:(width-80)/7+'px',height:(width-80)/7+'px',width:(width-80)/7+'px'}}>
				//           { current.date() }
				//       </div>
				//     </div>)
  	 // }
    //  else if(flag == 2){
    //    return (<div>
    //      <div className="rc-calendar-date rc-calendar-date-private" style={{lineHeight:(width-80)/7+'px',height:(width-80)/7+'px',width:(width-80)/7+'px'}}>
    //          { current.date() }
    //      </div>
    //      </div>)
    //  }else{
    //    return (<div>
    //      <div className="rc-calendar-date" style={{lineHeight:(width-80)/7+'px',height:(width-80)/7+'px',width:(width-80)/7+'px'}}>
    //          { current.date() }
    //      </div>
    //      </div>)
    //  }
}

function disabledDate(current,dates){
    let _date;
    let today = getNowFormatDate();
    if (!current) {
    // allow empty select
      return false;
    }
    let disabled = true;
    dates.map((date)=>{
      if( today >= current.format('YYYYMMDD') ){
        disabled = true;
      }else{
        if(current.format(format) == date.visit_date){
          if(date.type == 2){
            disabled = true;
          }else{
            disabled = false;
          }
        }
      }
    })
    return disabled;
}


export const _OrderDate_ = ({
  dates,
  name,
  field,
  clinic_name,
  handleSelectDate,
  toTime,
  isShow,
  close,
  change,
  position,
  photo,
  label_arr,
  Calendar,
  locale
}) => {
  var width = window.innerWidth || document.documentElement.clientWidth
  return(<div>

    <div className="order_datebox">
      <dl>
        <dt><img src={photo?photo:''} alt="" /></dt>
        <dd>
          <h3>
              <b>{name}</b>
            <p>{smallLabel(label_arr)}</p>
          </h3>
          <h4>{position}</h4>
        </dd>
      </dl>

      <div className="chooseTimestape">
        <div className="stapebox">
          <label></label>
          <label></label>
          <ul>
            <li className="step1 cur"><span>预约日期</span></li>
            <li className="step2"><span>预约时段</span></li>
            <li className="step3"><span>预约诊所</span></li>
          </ul>
        </div>
      </div>

      <h6 className="tipspot"><p><span onClick={ close } style={{ color:'#00c5cc',textDecoration:'underline'}}>预约规则</span></p><p><span><i className="blues"></i>薄荷诊所出诊时间</span><span><i className="oranges"></i>公立医院出诊时间</span></p></h6>
      <div className="opacity_tipbox" onClick={ close } style={ isShow?{display:'block'}:{display:'none'} }>
        <div className="tip_main">
          <h3>注意事项</h3>
          <p>{'1.如需取消预约，请提前24小时在“薄荷牙医”公众号“我的预约”中取消预约，或拨打电话：400-9696791取消预约'}</p>
          <p>{'2.公立医院的出诊日期仅为展示，不可预约；'}</p>
          <p>{'3.预约完成后，可在“薄荷牙医”公众号的“用户中心”中查看您的预约信息和电子病历（永久建档）；'}</p>
        </div>
      </div>
    </div>

    {Calendar?<Calendar showToday={false} showDateInput={false}  format={format} locale={locale} onChange={change} onSelect={ handleSelectDate } dateRender={(cur)=>{ return dateRender(cur,dates,width) }} disabledDate={(cur) => { return disabledDate(cur,dates) }}/>:<div style={{width:'200px',height:'60px',position:'fixed',top:'50%',left:'50%',marginLeft:'-100px',marginTop:'-30px',fontSize:'20px',lineHeight:'60px',textAlign:'center',backgroundColor:'rgba(0,0,0,0.5)',color:'#fff',borderRadius:'4px'}}>正在加载日历</div>}
    <ErrorCenter/>

    <div className='default_btn' onClick={ (ev)=>{ toTime(ev) } }>确定</div>

  </div>

)}
