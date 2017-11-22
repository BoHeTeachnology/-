import React, { Component } from 'react';
import ReactDOM  from 'react-dom'



export const UserData = ({
    id,
    account,
    real_name,
    photo,
    birth,
    age,
    card_id,
    sex,
    phone,
    email,
    company_name,
    create_time,
    rowidx,
    toUserInfo,
    mint_name,
    chooseUser
}) => {
      console.log('///??????');
      return ( <tr key={id}>
                  <td><span className="radio-span">
                  <input type="radio" className="radio" name="radio" id={'userlist_row_'+rowidx}/>
                  <label htmlFor={'userlist_row_'+rowidx} onClick={ ()=>{ chooseUser(id)} } ></label></span></td>
                  <td className="W100">
                      <span onClick={(ev)=>{toUserInfo(ev,rowidx,id)}} className='spanName'>{mint_name}</span>
                  </td>
                  <td><span>{real_name}</span></td>
                  <td><span>{account}</span></td>
                  <td><span className="user-pic"><img src={(!photo)?require('backend/common/images/user_default.png'):photo} alt/></span></td>
                  <td><span>{age}</span></td>
                  <td><span>{(sex==1)?'男':(sex==2)?'女':''}</span></td>
                  <td className="W150"><span>{company_name}</span></td>
                  <td><span>{phone}</span></td>
                  <td className="W100"><span>{create_time}</span></td>
                </tr>
            )
     }

