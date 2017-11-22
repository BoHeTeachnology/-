import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const Case = ({
  type,
  visit_time,
  toContent
}) => {

          return (<div className="weui_cells weui_cells_access">
                    <a className="weui_cell" onClick={ toContent }>
                    <div className="weui_cell_hd">
                    <p><b>{visit_time}</b></p>
                    {function(){
                    if(type == 1)
                    return <span>初诊建档</span>
                    else if(type == 2)
                    return <span>牙体牙周</span>
                    }()}
                    </div>
                    <span className="weui_cell_ft"></span>
                    </a>
                 </div>) 
      }
