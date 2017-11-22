import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const _Project_ = ({
    projects,
    choose,
    categoryCom,
    projectid,
    popup
}) => {
        var category = function(project){
            if(project.relations&&(project.relations.length>0)){
                 return (<div>
                             <input type="checkbox" name="group-1" id={"group-"+project.id} />
                             <label htmlFor={"group-"+project.id}>{project.cat_name}</label>
                             { categoryCom(project.id,project.relations)/*(projectid == project.id)? categoryCom(project.id,project.relations):''*/ }
                         </div>)
            }else{
                return (
                        <div>
                            <a href="javascript:;">{project.cat_name}</a>
                            <p className="list_bbtn_wrap">
                                <span className="edit_list_btn icon-pencil"></span>
                                <span className="delete_list_btn icon-trash"></span>
                            </p>
                        </div>
                    )
            }

        }
        return (
				<div className="modal_left_main" style={{ marginTop:'60px',marginLeft:'190px'}}>
					<h6 className="modal_left_main_title"><b>病历分类</b><span onClick={(ev)=>{ popup(1,ev) }}>新建</span></h6>
					<article className="htmleaf-container">
					  <ul className="accordion-menu animated">
                         {
                            projects.map((project)=>{
                               return (<li key={'project'+project.id} className="has-child" onClick={(ev)=>{ choose(project.id,project.cat_name,ev) }}>
                                          <p className="list_bbtn_wrap">
                                            <span className="add_list_btn icon-plus" onClick={(ev)=>{ popup(1,ev,project,1) }} ></span>
                                            <span className="edit_list_btn icon-pencil" onClick={(ev)=>{ popup(2,ev,project,1) }}></span>
                                            <span className="delete_list_btn icon-trash" style={(project.relations&&project.relations.length!=0)?{display:'none'}:{display:'block'}} onClick={(ev)=>{ popup(3,ev,project,1) }}><i></i></span>
                                          </p>
                                          { category(project) }
                                      </li>)
                            })
                         }
					  </ul>
					</article>
				</div>
	 		)
        }

