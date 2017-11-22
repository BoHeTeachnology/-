import React, { Component } from 'react';
import ReactDOM  from 'react-dom'



export const _Popup_ = ({
  cancel,
  change,
  showPop,
  popType,
  name,
  create,
  parent_id,
  self_id,
  level,
  editName,
  update,
  update_id,
  kill
}) => {
        var poptype = function(){
            if(popType == 3){
              return (
                <div className="new-create-box creat2">
                  <h4 className="toph4 mb30">删除分类<span onClick={ cancel } className="close-dialog"></span></h4>
                  <div className="wartip modal_wartip"><span>您确定要删除该分类吗？分类中包含<br/>的模板也一并被删除，请慎重！</span></div>
                  <div className="new-creatbut-box Mtop10">
                    <input type="button" className="but butgray" value="取 消" onClick={ cancel } id="close-dialog"/>
                    <input type="button" className="but butblue" value="确 定" onClick={ ()=>{ kill(self_id) } } id="deletetipBox"/>
                  </div>
                </div>
                )
            }else if(popType == 2){
              return (
                <div className="new-create-box creat2">
                  <h4 className="toph4 mb30">编辑分类<span onClick={ cancel } className="close-dialog"></span></h4>
                  <input type='text' value={ name } onChange={ (ev)=>{ change(ev,level,popType) } } style={{width:"90%",margin:"20px auto",display: "block",height: "36px",outline: "none",border: "1px solid #ccc",borderRadius: "4px"}}/>
                  <div className="new-creatbut-box Mtop10">
                    <input type="button" className="but butgray" value="取 消" onClick={ cancel } id="close-dialog"/>
                    <input type="button" className="but butblue" value="确 定" onClick={ ()=>{ update(self_id,parent_id,level) } } id="deletetipBox"/>
                  </div>
                </div>
                )
            }else if(popType == 1){
              return (
                <div className="new-create-box creat2">
                  <h4 className="toph4 mb30">新增分类<span onClick={ cancel } className="close-dialog"></span></h4>
                  <input type='text' placeholder="请输入分类名称" value={ name } onChange={ (ev)=>{ change(ev,level,popType) }} style={{width:"90%",margin:"20px auto",display: "block",height: "36px",outline: "none",border: "1px solid #ccc",borderRadius: "4px"}}/>
                  <div className="new-creatbut-box Mtop10">
                    <input type="button" className="but butgray" value="取 消" onClick={ cancel } id="close-dialog"/>
                    <input type="button" className="but butblue" value="确 定" onClick={ (ev)=>{ create(self_id,level) } } id="deletetipBox"/>
                  </div>
                </div>
                )
            }
          }
        return (<div className="delete-tipbox" style={ showPop==1?{display:"block" }:{display:"none" }}>
          <div className="new-create-bj new-create-bj2">
              { poptype() }
          </div>
        </div>)

    }

