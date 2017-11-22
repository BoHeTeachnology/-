import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const _SubCategory_ = ({
	parentid,
    subcategorys,
    choose,
    popup
}) => {
        return (
				<ul>
                    {
                        subcategorys.map((subcategory)=>{
                             return (
                                    <li key={'subcategory'+subcategory.id} onClick={ (ev)=>{ choose(parentid,subcategory.id,subcategory.cat_name,ev) }}>
                                        <a href="javascript:;">{subcategory.cat_name}</a>
                                        <p className="list_bbtn_wrap">
                                            <span className="edit_list_btn icon-pencil" onClick={ (ev)=>{ popup(2,ev,subcategory,3) } } ></span>
                                            <span className="delete_list_btn icon-trash" onClick={ (ev)=>{ popup(3,ev,subcategory,3) } }></span>
                                        </p>
                                    </li>
                                )
                        })
                    }
                </ul>
	 		)
        }
