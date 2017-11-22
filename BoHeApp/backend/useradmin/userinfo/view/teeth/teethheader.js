import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
//import WebUploader from 'backend/modules/uploader/Components/WebUploader.jsx';

import {
    asyncConnect
} from 'redux-connect'

export const TeethHeader = ({
	  edit,
	  check,
	  add,
	  addTime,
    teeth_ui,
    toAdd,
    toEdit,
    toCheck,
    saveTeethGraph,
    addTeethGraph,
    changeCheckTime,
    changeEditTime,
    size
}) => { 
            console.log('ZZZZZVVVVVV');
            console.log(teeth_ui.timelist);
            if(check){
            	 var index=0;
                 return (<div className="time z_time_edit" style={{top:'215px'}}>
                          <div className="z_time_btn" style={{border:'none'}}>
                              <p>
                                <b>更新记录：</b>
                                  <select onChange={ changeCheckTime }>
                                     { teeth_ui.timelist.map((time)=>{
                                     	index++;
                                     	return (<option value={ index }>{ time }</option>)
                                     })}
                                  </select>
                              </p>

                              <label>
                                  <span onClick={ toAdd } className="default_inputbtn z_add_btn">添加</span>
                                  <span onClick={ toEdit } style={ size==0?{display:'none'}:{display:'block'}} className="default_inputbtn z_edit_btn">编辑</span>
                              </label>
                          </div>
                        </div>)
             }else if(edit){
                 return (<div className="time z_time_edit">
                          <div className="z_time_btn">

                            <p>
                                <b>更新记录：</b>
                                <select onChange={ changeEditTime }>
                                     { teeth_ui.timelist.map(( time )=>{
                                     	return (<option value={ index }>{ time }</option>)
                                     })}
                                </select>
                            </p>
                            <label>
                                <span onClick={ saveTeethGraph } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }else if(add){
             	return (<div className="time z_time_edit">
                          <div className="z_time_btn">
                            <p>
                            {
                               (function(){
                                 if(addTime)
                                   return (<em className="see_page_em">基于最新（<font className="new_time">{addTime}</font>）信息上进行添加</em>)
                                })()
                            }
                            </p>
                            <label>
                                <span onClick={ addTeethGraph } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }

}