import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const Bill = ({status,
  patient_name,
  project_name,
  pay_money,
  bill_number,
  toDetail
}) => {
          return (<div className="weui_cells weui_cells_access">
                     <div className="weui_cell" onClick={ toDetail }>
                        <div className="weui_cell_hd">
                          <p>
                            <b>{ patient_name } <em> { project_name } </em></b>
                            <label>预约单号：{ bill_number } </label>
                            <label><span className={(status ==1)?"colorzhifu":"colornozhifu"}>￥{ pay_money }</span></label>
                          </p>
                          <i className={(status == 1)?"zhifu":"nozhifu"}>{(status == 1)?'已支付':'待支付'}</i>
                        </div>
                        <span className="weui_cell_ft"></span>
                     </div>
                  </div>)
      }