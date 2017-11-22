import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ErrorCenter from 'doctortool/errorcenter/user_doctor/errorcenter.js'

function smallLabel(label_arr){
  var i=0;
  return label_arr.map((label)=>{ i++; if( i<=2&&label!='默认'&&label!=''){ return <span>{label}</span> } })

}

export const _OrderClinic_ = ({
    clinicaddress,
    clinic,
    createOrder,
    name,
    photo,
    phone,
    change,
    isShow,
    confirm,
    field,
    clinic_name,
    cancel,
    patientName,
    patientPhone,
    position,
    label_arr,
    verify,
    verifycode,
    finallyTime
}) => {

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
        <label className='blue'></label>
        <label className='blue'></label>
        <ul>
          <li className="step1 cur"><span>预约日期</span></li>
          <li className="step2 cur"><span>预约时段</span></li>
          <li className="step3 cur"><span>预约诊所</span></li>
        </ul>
      </div>
    </div>

    <h6 className="tipspot time_tipspot">
      <label>预约诊所</label>
    </h6>
    <div className="clinc_descbox">
      <p>
        <b className="name_icon">出诊诊所</b>
        <span>{clinic}</span>
      </p>
      <p>
        <b className="address_icon">诊所地址</b>
        <span>{clinicaddress}</span>
      </p>
    </div>
    <a href="javascript:;" className="default_btn" style={{ position:'fixed',bottom:'0px' }} onClick={ confirm }>确定</a>
    <div className="opacity_tipbox" style={isShow?{display:'block'}:{display:'none'}}>
      <div className="loginbj">
        <div className="loginInputbox">
          <b>请输入您的姓名</b>
          <p>
            <span className="username_icon"></span>
            <input type="text" value={patientName} onChange={ (ev)=>{ change('patientName',ev) }}/>
            <div className="clear"></div>
          </p>
        </div>
        <div className="loginInputbox">
          <b>请输入您的电话</b>
          <p>
            <span className="pwd_icon"></span>
            <input type="text" maxLength="11" value={patientPhone} onChange={ (ev)=>{ change('patientPhone',ev) }}/>
          </p>
        </div>
        <div className="loginInputbox">
          <p>
            <input className="float_left yzm" maxLength="6" type="text" onChange={ (ev)=>{change('verify',ev)} } />
            <input className="float_right getyzm" type="button" onClick={ verifycode } style={ (finallyTime==61)?{pointerEvent:''}:{pointerEvent:'none'} } value={ (finallyTime == 61)?'获取验证码':finallyTime+'s' } />
            <div className="clear"></div>
          </p>
        </div>
        <h6>未注册的用户点击提交后，自动注册薄荷牙医帐户</h6>
        <div className="btnboxs">
          <a href="javascript:;" className="float_left cancel" onClick={ cancel }>取消</a>
          <a href="javascript:;" className="float_right comit" onClick={()=>{ createOrder({patient_name:patientName,patient_phone:patientPhone,verify}) }}>提交</a>
        </div>
      </div>
    </div>
    </div>
      <ErrorCenter/>
  </div>
)}
