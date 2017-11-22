import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

import Calendar from 'rc-calendar';
const format = ('YYYY-MM-DD');

export const Relation_ui = ({
    relations,
    add,
    tipShow,
    close,
    change,
    real_name,
    phone,
    birth,
    confirm,
    relation,
    chooseTime,
    calShow,
    click,
    edit_rel,
    delete_rel,
    tipShowWhere,
    tipDelShow,
    closeDel,
    confirmDel
}) => {

        return(
            <div>
            <div className="delete-tipbox" style={ tipDelShow?{display:"block"}:{display:'none'}}>
              <div className="new-create-bj new-create-bj2">
                <div className="new-create-box creat2">
                  <h4 className="toph4 mb30">删除<span class="close-dialog" onClick={ closeDel }></span></h4>
                    <div className="wartip"><span>确定要删除吗？</span></div>
                    <div className="new-creatbut-box">
                      <input type="button" className="but butgray" value="取 消" onClick={ closeDel } id="close-dialog"/>
                      <input type="button" className="but butblue" value="确 定" onClick={ confirmDel } id="deletetipBox"/>
                    </div>
                </div>
              </div>
            </div>

            <div className="new-create-opcity" id="family_tipbox" style={ tipShow?{display:'block'}:{display:'none'}}>
              <div className="new-create-bj" style={{marginTop: '-197px'}}>
                <div className="new-create-box">
                  <h4 className="toph4">添加关系成员<span className="close-dialog" onClick={ close } ></span></h4>
                  <div className="new-input">
                      <div className="new-input-box h50">
                          <span>姓名：</span>
                          <input onChange={ (ev)=>{ change(ev,'real_name') }} value={real_name} type="text" className="text-input" id="member_name" style={{ border: '1px solid rgb(204, 204, 204)' }}/>
                          <p className="errorTip"></p>
                      </div>
                      <div className="new-input-box h50">
                          <span>关系：</span>
                          <input onChange={ (ev)=>{ change(ev,'relation') }} value={relation} type="text" className="text-input" id="relation" style={{ border: '1px solid rgb(204, 204, 204)' }}/>
                          <p className="errorTip"></p>
                      </div>
                      <div className="new-input-box" id="quanX" style={{position:'relative'}}>
                          <span>出生年月：</span>
                          <input onClick={ click } value={birth} type="text" className="text-input layicon" readonly="" id="birth" style={{ border: '1px solid rgb(204, 204, 204)' }}/>
                          <div style={ calShow?{display:'block',position:'absolute',top:'31px',left:'109px'}:{display:'none' }}>
                            <Calendar format={'YYYY-MM-DD'} showDateInput={false} onSelect={ (ev)=>{ chooseTime(ev) } }/>
                          </div>
                          <p className="errorTip"></p>
                      </div>
                      <div className="new-input-box h50">
                          <span>联系方式：</span>
                          <input onChange={ (ev)=>{ change(ev,'phone') }} value={phone} type="text" className="text-input" id="phone" maxlength="11" style={{ border: '1px solid rgb(204, 204, 204)' }}/>
                          <p className="errorTip"></p>
                      </div>
                      <div className="new-creatbut-box">
                        <input type="button" className="but butgray" value="取 消" onClick={ close } id="close-dialog"/>
                        <input type="button" className="but butblue confirm-add" value="确 定" onClick={ ()=>{ confirm(tipShowWhere) } } id="confirm-but"/>
                      </div>
                  </div>
                </div>
              </div>
            </div>

                  <div className="time z_time_edit" style={{top:'215px'}}>
                    <div className="z_time_btn" style={{border:'none'}}>
                        <p></p>
                        <label>
                            <span className="default_inputbtn z_add_btn" onClick={ add }>添加</span>
                        </label>
                    </div>
                  </div>

                  <div className="userContain z_userContain_edit" id="change" style={{ height:'704px'}}>
                      <div className="z_userContainMain">
                          <div className="containb_right" style={{minHeight:'702px'}}>
                              <table className="table table-bordered table-hover table-height table-height4 Mbtom50 family_able">
                                  <thead>
                                      <tr>
                                          <th>姓名</th>
                                          <th>关系</th>
                                          <th>出生年月</th>
                                          <th>联系方式</th>
                                          <th style={{ textAlign:'center'}}>操作</th>
                                      </tr>
                                  </thead>
                                  <tbody id="family_able">

                                    {
                                      relations.map((item)=>{
                                        return(
                                          <tr data-id="950">
                                            <td className="memberName">{item.real_name}</td>
                                            <td className="relation">{item.relation}</td>
                                            <td className="birth">{item.birth}</td>
                                            <td className="phone">{item.phone}</td>
                                            <td>
                                              <span className="operate">
                                                <a href="javascript:;" className="edit_pre" onClick={ ()=>{ edit_rel(item) } }>编辑</a>
                                                <a href="javascript:;" className="delete_pre" onClick={ ()=>{ delete_rel(item.id) }}>删除</a>
                                                <a href="javascript:;" className="file_pre">档案</a>
                                                <a href="javascript:;" className="ill_pre">病历</a>
                                              </span>
                                            </td>
                                          </tr>
                                          )
                                      })

                                    }
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      <div className="clear"></div>
                  </div>
            </div>
            )
     }

