import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const Desc = ({
  tooth_pic,
  tooth_type,
  tooth_around,
  tooth_square,
  tooth_suggestion
}) => {

        return (<div className="yabj">
                        <h6 className="yaToptitle">薄荷牙医诊断报告</h6>
                        <h4 className="preyatitle"><span>牙体和外科情况</span></h4>
                        <div className="yaDescpic" id="tooth_pic">
                        <img src={tooth_pic} alt=""/>
                        </div>
                        <h4 className="preyatitle"><span>牙周情况</span></h4>
                        <div className="tooth_aroundbox" id="tooth_type">
                        <dl>
                        <dt className={(tooth_type==1)?"cur":""}><p><img src={require('app/common/images/ya1.png')} alt=""/></p></dt>
                        <dd><p>牙龈炎或牙周炎早期，牙龈红肿，牙槽骨没有或刚刚开始少量流失</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(tooth_type==2)?"cur":""}><img src={require('app/common/images/ya2.png')} alt=""/></dt>
                        <dd><p>牙周炎中期，牙龈红肿，牙槽骨有明显流失，牙缝开始变大，消肿后牙龈退缩明显</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(tooth_type==3)?"cur":""}><img src={require('app/common/images/ya3.png')} alt=""/></dt>
                        <dd><p>牙周炎晚期，开始变身“常牙怪”——牙槽骨流失进一步加重，牙龈退缩更明显，牙齿被动“变长”，并开始松动</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(tooth_type==4)?"cur":""}><img src={require('app/common/images/ya4.png')} alt=""/></dt>
                        <dd><p>你可以去拔牙了！牙医已经不想和你说话，并向你扔来一把拔牙钳，和你摇摇欲坠的牙齿</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        </div>
                        <h4 className="preyatitle"><span>牙列情况</span></h4>
                        <div className="tooth_around" id="tooth_square">
                        <dl>
                        <dt className={(tooth_square==2)?"cur":''}><img src={require('app/common/images/yapic_01.png')} alt=""/><span></span></dt>
                        <dd>牙列不齐</dd>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(tooth_square==1)?"cur":''}><img src={require('app/common/images/yapic_02.png')} alt=""/><span></span></dt>
                        <dd>牙列基本齐整</dd>
                        <div className="clear"></div>
                        </dl>
                        </div>
                        <h4 className="preyatitle"><span>综合意见</span></h4>
                        <div className="toothAllideas" id="tooth_suggestion">
                              {tooth_suggestion}
                        </div>
                        <div className="toothboxfoot">
                        <img src={require('app/common/images/ma.png')} alt=""/>
                        <p>薄荷牙医 © 2016</p>
                        </div>
                        </div>) 
      }
      