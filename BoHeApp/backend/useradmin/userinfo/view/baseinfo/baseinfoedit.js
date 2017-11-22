import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

import Calendar from 'rc-calendar';

import moment from 'moment';

function photoBox(){
   return (<div className="new-create-opcity" style={{display:"none",position:'absolute'}}>
             <div className="new-uppic-bj">
                <div className="new-uppic-box">
                    <h4 className="toph4 nomargin">上传头像<span className="close_dialog"></span></h4>
                    <div className="imageBox">
                        <div className="thumbBox"></div>
                        <div className="spinner" style={{display:"none"}}>Loading...</div>
                    </div>

                    <div className="action">
                        <div className="filebut">
                         <input type="file" id="base_photo_rechoose" className="choose-file"/>重新选择</div>
                        <div className="zoom-box">
                            <span id="btnZoomOut" className="btnZoomOut"></span>
                            <span id="btnZoomIn" className="btnZoomIn"></span>
                        </div>
                        <input type="button" id="btnCrop" value="确认上传" className="btnCrop"/>
                    </div>
                </div>
          </div>
        </div>)
}

export const BaseInfoEdit = ({
  photo,
  password,
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
  change,
  click,
  handleSelectDate,
  showDateModal,
  dateModal,
  birthdate,
  mint_name,
  birthyear,
  birthmonth,
  birthday,
  id

}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      return (
              <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
              <div className='z_userContainMain'>
                                  <div className="containb_right">
                                    <div className="z_left_box">
                                        <div className="z_headerPic">
                                            <div id="base_photo_show" className="z_touxiang"><img src={photo?photo:require('backend/common/images/userPic.png')} alt=""/></div>
                                            <div className="z_but-input"><input id="base_photo_choose" type="file" className="but-input upfile-butt"/>上传头像</div>
                                        </div>

                                    </div>
                                    <div className="z_right_rbox">
                                        <div className="z_main_contain">
                                            <div className="z_main_left">
                                                <div className="input-box h25">
                                                    <span><em className="emx">薄荷名：</em></span>
                                                    <input type="text" value={mint_name?mint_name:''} className="text-input"  onChange={(ev)=>{ change(ev,'mint_name')}} maxLength="11" />
                                                    <div className="clear"></div>
                                                    <p className="z_error"></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>登录手机号：</span>
                                                    {
                                                        (id=='add'||account)?(<input type="text" value={account} className="text-input" maxLength="11" placeholder="只能输入手机号" onChange={(ev)=>{ change(ev,'account')}}/>):(<div><input type='button' value='绑定登录手机号'/><span>绑定后升级为独立账户</span></div>)
                                                    }
                                                    <div className="clear"></div>
                                                    <p className="z_error"></p>
                                                </div>
                                            </div>
                                            <div className="z_main_right">
                                                <div className="input-box h25">
                                                    <span>姓名：</span>
                                                    <input type="text" value={name} className="text-input yongHuming readonly" autoComplete="off" disabled/>
                                                    <div className="z_default_desc">默认读取移动端用户姓名</div>
                                                    <div className="clear"></div>
                                                    <p className="z_error"></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>密码设置：</span>
                                                    <input type="password" value={password?password:''} className="text-input Mima" placeholder="6～20个字符" autoComplete="off" onChange={(ev)=>{ change(ev,'password')}}/>
                                                    <div className="clear"></div>
                                                    <p className="z_error"></p>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>

                                        <div className="z_main_contain">
                                            <div className="z_main_left">
                                                <div className="input-box h25">
                                                    <span>真实姓名：</span>
                                                    <input type="text" className="text-input" value={real_name?real_name:''} onChange={(ev)=>{ change(ev,'real_name')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>出生年月：</span>
                                                    <input value={(birthyear&&birthmonth&&birthday)?(birthyear+'-'+birthmonth+'-'+birthday):''} type="text" className="text-input layicon" readOnly="readonly" onClick={showDateModal} />
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div style={ dateModal }>
                                                    <Calendar format={'YYYY-MM-DD'} onSelect={ handleSelectDate }/>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>民族：</span>
                                                    <input type="text" className="text-input" value={race?race:''} onChange={(ev)=>{ change(ev,'race')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>

                                                <div className="input-box h25">
                                                    <span>证件种类：</span>
                                                    <select className="select-div" onChange={(ev)=>{ change(ev,'card_type')}}>
                                                        <option value="" selected={card_type==''?'selected':''}>请选择</option>
                                                        <option value="1" selected={card_type=='1'?'selected':''}>身份证</option>
                                                        <option value="3" selected={card_type=='3'?'selected':''}>护照</option>
                                                    </select>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>证件号码：</span>
                                                    <input type="text" value={card_id?card_id:''} className="text-input" maxLength="18" onChange={(ev)=>{ change(ev,'card_id')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="z_main_right">
                                                <div className="input-box h25">
                                                    <span>联系方式：</span>
                                                    <input type="text" value={phone?phone:''} onChange={(ev)=>{ change(ev,'phone')}} className="text-input"/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>性别：</span>
                                                    <div className="radio-box">
                                                        <span><input type="radio" className="radio1" name="radio2" id="checkboxa" checked={sex=='1'?'checked':''} /><label htmlFor="checkboxa" onClick={()=>{ click('sex','1')}}>男</label></span>
                                                        <span><input type="radio" className="radio1" name="radio2" id="checkboxb" checked={sex=='2'?'checked':''}/><label htmlFor="checkboxb" onClick={()=>{ click('sex','2')}}>女</label></span>
                                                    </div>
                                                    <p className="errorTip"></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>年龄：</span>
                                                    <input type="text" value={age?age:''} className="text-input" disabled="disabled"/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>婚姻状况：</span>
                                                    <div className="radio-box">

                                                        <span><input type="radio" checked={married=='1'?'checked':''} className="radio1" name="married" id="checkboxc" /><label htmlFor="checkboxc" onClick={()=>{ click('married','1')}}>已婚</label></span>
                                                        <span><input type="radio" checked={married=='0'?'checked':''} className="radio1" name="married" id="checkboxd" /><label htmlFor="checkboxd" onClick={()=>{ click('married','0')}}>未婚</label></span>
                                                    </div>
                                                    <p className="errorTip"></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>有无子女：</span>
                                                    <div className="radio-box">
                                                        <span><input type="radio" checked={have_child=='1'?'checked':''} className="radio1" name="have_child" id="checkboxe" /><label htmlFor="checkboxe" onClick={()=>{ click('have_child','1')}}>有</label></span>
                                                        <span><input type="radio" checked={have_child=='0'?'checked':''} className="radio1" name="have_child" id="checkboxf" /><label htmlFor="checkboxf" onClick={()=>{ click('have_child','0')}}>无</label></span>
                                                    </div>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="z_main_contain no_border">
                                            <div className="z_main_left">
                                                <div className="input-box h25">
                                                    <span>工作单位：</span>
                                                    <input type="text" value={company_name?company_name:''} className="text-input" onChange={(ev)=>{ change(ev,'company_name')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>职业：</span>
                                                    <input type="text" value={job?job:''} className="text-input" onChange={(ev)=>{ change(ev,'job')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="z_main_right">
                                                <div className="input-box h25">
                                                    <span>Email：</span>
                                                    <input type="text" value={email?email:''} className="text-input" onChange={(ev)=>{ change(ev,'email')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                                <div className="input-box h25">
                                                    <span>社保号：</span>
                                                    <input type="text" value={society_number?society_number:''} className="text-input" onChange={(ev)=>{ change(ev,'society_number')}}/>
                                                    <div className="clear"></div>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="clear"></div>
                                            <div className="input-box h25">
                                                <span>邮寄地址：</span>
                                                <input type="text" value={post_address?post_address:''} className="text-input W475" onChange={(ev)=>{ change(ev,'post_address')}}/>
                                                <div className="clear"></div>
                                                <p></p>
                                            </div>
                                            <div className="input-box h25">
                                                <span>备注：</span>
                                                <input type="text" value={remark?remark:''} className="text-input W475" onChange={(ev)=>{ change(ev,'remark')}}/>
                                                <div className="clear"></div>
                                                <p></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </div>
                        {photoBox()}
                </div>
             )
     }
