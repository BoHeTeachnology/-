import React, { Component } from 'react';
import ReactDOM  from 'react-dom'



export const OrderData = ({
    id,
    reserve_number,
    patient_name,
    visit_time,
    create_time,
    doctor_name,
    clinic_name,
    project_name,
    status,
    contact_tel,
    company_name,
    remark,
    is_self,
    rowidx,
    toOrderInfo,
    getdeleteid,
    deleteid
}) => {
      var id = deleteid?'':id;
      return (    <tr>
                  <td>
                  <span className="radio-span">
                  <input type="radio" className="radio" checked={deleteid?'checked':''} name="radio" id={ 'radioInputa_' +rowidx } value={ id }/>
                  <label htmlFor={ 'radioInputa_' +rowidx } onClick={ ()=>{ getdeleteid(id); } } ></label>
                  </span>
                  </td>
                  <td>
                  <span style={{paddingRight:'5px'}}>{reserve_number}</span>
                  </td>
                  <td>
                  <span onClick={(ev)=>{ toOrderInfo(ev,rowidx,id) } } className="spanName" id="goSee" data-id={id}>{patient_name}</span>
                  </td>
                  <td className="W110">
                  <span>{visit_time}</span>
                  </td>
                  <td className="W110"><span>{create_time}</span>
                  </td>
                  <td className="W150"><span>{company_name}</span>
                  </td>
                  <td><span className="doctor_name">{doctor_name}</span></td>
                  <td className="W110"><span>{clinic_name}</span></td>
                  <td><span>{project_name}</span></td>
                    {
                      (function(){
                          if(status  == 1 ){
                              return <td><span>预约中</span></td>
                          }else if(status  == 2){
                              return <td><span>已完成</span></td>
                          }else if(status  == 3){
                              return <td><span>已过期</span></td>
                          }else if(status  == 4){
                              return <td><span>已取消</span></td>
                          }else{
                              return <td><span></span></td>
                          }
                      })()

                    }
                  <td><span>{contact_tel}</span></td>
                    {
                      (function(){
                            if(is_self == 1 ){
                                return <td><span>是</span></td>
                            }else if(is_self == 2){
                                return <td><span>否</span></td>
                            }else{
                                return <td><span></span></td>
                            }
                      })()
                    }
                  <td className="W100"><span>{remark}</span></td>
                  </tr>
            )
     }

