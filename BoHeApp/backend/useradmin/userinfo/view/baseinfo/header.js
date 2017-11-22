import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const Header = ({
    backToUsers,
    toMedRecord,
    photo,
    real_name,
    phone,
    age,
    isRelation,
    toMainUser
}) => {
      return (
                <div className="rtop rtop_edit">
                    <div className="but-box bj-none">
                      <p>
                        <a onClick={ (ev)=>{ backToUsers(ev) }} className="back-but">返回</a>
                      </p>
                    </div>
                    <div className="userInfobox">
                        <dl>
                            <dt><img src={(!photo)?require('backend/common/images/user_default.png'):photo} alt=""/></dt>
                            <dd>
                                <h3>
                                    <span>{real_name?real_name:'未填写真实姓名'}</span>
                                    <span style={ isRelation?{display:'inline'}:{display:'none'}}>
                                        <span>（与 </span>
                                        <span onClick={ (ev)=>{ toMainUser(ev,isRelation.id) } }>{isRelation.real_name}</span>
                                        <span>的关系</span>
                                        <span>{isRelation.relation}</span>
                                    </span>
                                    <span>{age?age:''} 岁</span>
                                </h3>
                                <p>{phone?phone:''}</p>
                            </dd>
                        </dl>
                        <a onClick={toMedRecord} className="default_inputbtn see-but">查看病历</a>
                    </div>
                </div>
            )
     }

