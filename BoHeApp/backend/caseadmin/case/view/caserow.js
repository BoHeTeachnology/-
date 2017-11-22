import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


function stop(ev){
    console.log('#######!!!!!!!!!')
    ev.stopPropagation();
}
export const CaseRow = ({
    id,
    patient_name,
    phone,
    visit_date,
    service_name,
    doctor_name,
    clinic_name,
    doctor_phone,
    type,
    status,
    deleteid,
    getdeleteid,
    patient_id,
    rowidx,
    toCaseInfo,
    patient_phone,
    cat_name,
    visit_time,
    is_send,
    account,
    case_number
}) => {
      var id = deleteid?deleteid:id;
      console.log('准备点击掉用toCaseInfo,查看patient_id.....');
      console.log(id);
      console.log(deleteid);
      return (<tr key={id} onClick={ (ev)=>{ stop(ev) } }>
                <td><span className="radio-span">
                <input type="radio" className="radio" checked={deleteid?'checked':''} name="radio" id={ 'radioInput1_' +id } value={ id }/>
                <label htmlFor={ 'radioInput1_' +id } onClick={ (ev)=>{ getdeleteid(id,ev); } } >
                </label>
                </span>
                </td>
                <td><span className="spanName" onClick={(ev)=>{ toCaseInfo({patient_id,id}) } }>{case_number}</span></td>
                <td><span>{patient_name?patient_name:''}</span></td>
                <td><span>{account?account:''}</span></td>
                <td><span>{visit_time?visit_time:''}</span></td>
                <td><span>{cat_name?cat_name:''}</span></td>
                <td><span>{doctor_name?doctor_name:''}</span></td>
                <td><span>{clinic_name?clinic_name:''}</span></td>
                <td><span>{patient_phone?patient_phone:''}</span></td>
                <td><span>{type==1?'初诊':type==2?'复诊':''}</span></td>
                <td><span>{is_send==0?'未发送':'已发送'}</span></td>
              </tr>
            )
     }

