import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const AskRow = ({
    id,
    patient_name,
    ask_time,
    answer_time,
    status,
    deleteid,
    getdeleteid,
    account,
    detail,
    idx
}) => {
        console.log(deleteid)
      var id = deleteid?deleteid:id;
      return (<tr key={id} >
                <td><span className="radio-span">
                <input type="radio" className="radio" checked={(deleteid!=undefined)?'checked':''} name="radio" id={ 'radioInput1_' +id } value={ id }/>
                <label htmlFor={ 'radioInput1_'+id } onClick={ (ev)=>{ getdeleteid(id,ev) } } >
                </label>
                </span>
                </td>
                <td><span>{patient_name?patient_name:''}</span></td>
                <td><span>{account?account:''}</span></td>
                <td><span>{ask_time?ask_time:''}</span></td>
                <td><span>{answer_time?answer_time:''}</span></td>
                <td><span>{(status==0)?'未回答':(status==1)?'已回答':(status==2)?'不回答':''}</span></td>
                <td><span className="spanName" onClick={ ()=>{ detail(idx) }}>详情</span></td>
              </tr>
            )
     }

