import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'


export const BaseInfoShow = ({
  photo,
  account,
  phone,
  name,
  real_name,
  birth,
  race,
  card_type,
  card_id,
  sex,
  age,
  married,
  have_child,
  company_name,
  job,
  email,
  society_number,
  post_address,
  remark,
  birthdate,
  mint_name,
  birthyear,
  birthmonth,
  birthday

}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      return (
              <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
              <div className='z_userContainMain'>
              <div className="containb_right">
                                    <div className="z_left_box">
                                        <div className="z_headerPic">
                                            <div className="z_touxiang"><img src={photo?photo:require('backend/common/images/userPic.png')} alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="z_right_rbox">
                                        <div className="z_main_contain">
                                            <div className="z_main_left">
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>薄荷号：</span>
                                                    <div className="z_textinfo">{mint_name?mint_name:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>登录手机号：</span>
                                                    <div className="z_textinfo">{account?account:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="z_main_right">
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>用户名：</span>
                                                    <div className="z_textinfo">{name?name:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>

                                        <div className="z_main_contain">
                                            <div className="z_main_left">
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>真实姓名：</span>
                                                    <div className="z_textinfo" >{real_name?real_name:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>出生年月：</span>
                                                    <div className="z_textinfo" >{ (birthyear&&birthmonth&&birthday)?(birthyear+'-'+birthmonth+'-'+birthday):''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>民族：</span>
                                                    <div className="z_textinfo" >{race?race:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>证件种类：</span>
                                                    <div className="z_textinfo" >{card_type=='3'?'护照':card_type=='1'?'身份证':''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>证件号码：</span>
                                                    <div className="z_textinfo">{card_id?card_id:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="z_main_right">
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>联系电话：</span>
                                                    <div className="z_textinfo">{phone?phone:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>性别：</span>
                                                    <div className="z_textinfo">{sex=='1'?'男':sex=='2'?'女':''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>年龄：</span>
                                                    <div className="z_textinfo">{age?age:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>婚姻状况：</span>
                                                    <div className="z_textinfo">{married=='1'?'已婚':married=='0'?'未婚':''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>有无子女：</span>
                                                    <div className="z_textinfo">{have_child=='1'?'有':have_child=='0'?'无':''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="z_main_contain no_border">
                                            <div className="z_main_left">
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>工作单位：</span>
                                                    <div className="z_textinfo">{company_name?company_name:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>职业：</span>
                                                    <div className="z_textinfo">{job?job:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="z_main_right">
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>Email：</span>
                                                    <div className="z_textinfo">{email?email:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                                <div className="input-box h25 chakanspan"> 
                                                    <span>社保号：</span>
                                                    <div className="z_textinfo">{society_number?society_number:''}</div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                            <div className="input-box h25 chakanspan"> 
                                                <span>邮寄地址：</span>
                                                <div className="z_textinfo W520">{post_address?post_address:''}</div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="input-box h25 chakanspan"> 
                                                <span>备注：</span>
                                                <div className="z_textinfo W520">{remark?remark:''}</div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
             )
     }

