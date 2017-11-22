import React, { Component } from 'react';
import ReactDOM  from 'react-dom'



export const DoctorData = ({
    id,
    account,
    name,
    photo,
    birth,
    age,
    sex,
    phone,
    rowidx,
    invite_code,
    toUserInfo,
    position,
    field,
    job_age,
    hospital,
    is_show
}) => {
      return (  <tr>
                    <td>
                    <span className="radio-span">
                    <input type="radio" className="radio" name="radio" id={"radioInputc_"+rowidx} value={ id }/>
                    <label htmlFor={"radioInputc_"+rowidx}></label>
                    </span></td>
                    <td>
                    <span onClick={(ev)=>{toUserInfo(ev,rowidx,id)}}  className="spanName">{ account }</span>
                    </td>
                    <td>{ name }</td>
                    <td><span className="user-pic" ><img src={ photo?photo:require('backend/common/images/user_default.png') }/></span></td>
                    <td><span>{ birth }</span></td>
                    <td><span>{ age }</span></td>
                    <td><span>{ sex }</span></td>
                    <td><span>{ phone }</span></td>
                    <td className="W100"><span>{ position }</span></td>
                    <td className="W100"><span>{ field }</span></td>
                    <td><span>{ job_age }</span></td>
                    <td className="W100"><span>{ hospital }</span></td>
                    <td><span>{ invite_code }</span></td>
                        {
                           (function(){
                              if(is_show == 1)
                                 return <td><span>是</span></td>
                              else if(is_show == 2){
                                 return <td><span>否</span></td>
                              }
                           })()
                        }
                </tr>
            )
     }

