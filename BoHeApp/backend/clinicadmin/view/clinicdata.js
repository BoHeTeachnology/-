import React, { Component } from 'react';
import ReactDOM  from 'react-dom'



export const ClinicData = ({
    id,
    clinic_brand,
    clinic_name,
    clinic_address,
    chair_nums,
    clinic_head_name,
    clinic_head_phone,
    mint_head_name,
    rowidx,
    mint_head_phone,
    toUserInfo,
    is_show
}) => {
      return (      <tr>
                    <td><span className="radio-span">
                    <input type="radio" className="radio" name="radio" id={ 'radioInputa_'+id } value={ id }/><label htmlFor={ 'radioInputa_'+id }></label></span></td>
                    <td><span style={ {paddingLeft:'20px'} }>{ id }</span></td>
                    <td className="W150"><span className="spanName" id="goSee" data-id={id}>{ clinic_brand }</span></td>
                    <td className="W150"><span onClick={ (ev)=>{toUserInfo(ev,rowidx,id)} }>{ clinic_name }</span></td>
                    <td className="W200"><span>{ clinic_address }</span></td>
                    <td><span style={ {paddingLeft:'20px'} }>{ chair_nums }</span></td>
                    <td><span>{ clinic_head_name }</span></td>
                    <td><span>{ clinic_head_phone }</span></td>
                    <td><span>{ mint_head_name }</span></td>
                    <td><span>{ mint_head_phone }</span></td>
                    {
                        (function(){
                            if(is_show == 1)
                                return <td><span>是</span></td>
                            else if(is_show == 2)
                                return <td><span>否</span></td>
                        })()
                    }
                    </tr>
            )
     }

