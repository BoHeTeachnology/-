import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


export const _Category_ = ({
    categoryid,
	parentid,
    categorys,
    choose,
    subcateCom,
    popup
}) => {
        var subcate = function(category){

            if(category.relations&&(category.relations.length>0)){
                 return (<div>
                             <input type="checkbox" name="group-2" id={"group-"+category.id} />
                             <label htmlFor={"group-"+category.id}>{category.cat_name}</label>
                             { subcateCom(category.id,category.relations)/*(categoryid == category.id)?subcateCom(category.id,category.relations):''*/ }
                         </div>)
            }else{
                 return (
                        <div>
                            <a href="javascript:;">{category.cat_name}</a>
                            <p className="list_bbtn_wrap">
                                <span className="edit_list_btn icon-pencil"></span>
                                <span className="delete_list_btn icon-trash"></span>
                            </p>
                        </div>
                    )
            }

        }
        console.log('CAT))))))))');
        console.log(categorys);
        return (
			    <ul className="accordion-menu animated">
                  {
                     categorys.map((category)=>{
                         return (<li key={'category'+category.id} className="has-child" onClick={(ev)=>{ choose(parentid,category.id,category.cat_name,ev) }}>
                                    <p className="list_bbtn_wrap">
                                        <span className="add_list_btn icon-plus" onClick={(ev)=>{ popup(1,ev,category,2) }}></span>
                                        <span className="edit_list_btn icon-pencil" onClick={(ev)=>{ popup(2,ev,category,2) }}></span>
                                        <span className="delete_list_btn icon-trash" style={(category.relations&&category.relations.length!=0)?{display:'none'}:{display:'block'}} onClick={(ev)=>{ popup(3,ev,category,2) }}><i></i></span>
                                    </p>
                                    { subcate(category) }
                                </li>)
                     })
                  }
			    </ul>
	 		)
      }