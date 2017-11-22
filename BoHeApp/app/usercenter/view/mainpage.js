import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {qiniudomain} from 'app/util/utils.js'
import {Grid,Row,Col} from 'react-bootstrap';

import {

  Button

} from 'antd-mobile';

export const UCenter = ({
  height,
attentionnum,
mynotenum,
userinfo,
  toOrders,
  toMySetting,
  toMyDoctor,
  toMyNote,
  logouthandleclick,
  toFindDoctor,
  // toMyCenter,
  // toSettingCenter,
}) => {

  return (
    <div className='usercenterwrap' style={{
    height:(height+'px'),
    backgroundColor:'rgb(239, 243, 247)'
}}>
      <header className="p_top huanzhebg">
        <dl>
          <dt id="userImg" onClick={toMySetting}><img src={userinfo.photo?(qiniudomain+userinfo.photo):require('app/common/images/user_default.jpg')} alt=""/></dt>
          <dd id="userName">{userinfo.name?userinfo.name:'薄荷用户'}</dd>
        </dl>
      </header>

      <div className="myArea">
        {/* <div className="myAreaWrap">

          <div onClick={toMyDoctor} className="myareason mydoctor">
            <span>我的牙医</span>
            <span>{attentionnum}</span>
          </div>
          <div onClick={toMyNote} className="myareason myquestion">
            <span>我的留言</span>
            <span>{mynotenum}</span>
          </div>
          <div className="clear"></div>
        </div> */}
      </div>


      <div className="block">
        <div onClick={toOrders} className="a1">
          <div className="blockson">
            <img src={require('app/common/images/huanzhe2.png')} alt=""/>
            <span>我的预约</span>
          </div>
        </div>
        <div onClick={toSettingCenter} className="a2">
          <div className="blockson">
            <img src={require('app/common/images/huanzhe5.png')} alt=""/>
            <span>设置</span>
          </div>
        </div>
      </div>

      <div className="fotIcon">
        <img style={{ width:'1.5rem',marginBottom:'0.1rem' }} src={require('app/common/images/bohelogo.png')} alt=""/>
      </div>


      <div style={{
        position: 'fixed',
        bottom:'0rem',
        width: '100%',
        paddingBottom:'0.2rem',
        paddingTop:'0.2rem',
        borderTop: '1px solid rgba(0,0,0,0.2)',
        backgroundColor:'rgba(247, 247, 247,1)',
    }}>
    {/* <div style={{width:'100%'}}>
         <Col xs={6} style={{padding:'0',textAlign: 'center'}}>
           <img src={require('app/common/images/icon_chat.png')}
            style={{
              width: '0.48rem',
              height: '0.48rem',
              position: 'absolute',
              top: '0.15rem',
              left: '0.7rem',
            }}
           alt="" />
          <div onClick={toFindDoctor} style={{
            height:'0.8rem',
            lineHeight:'0.8rem',
            paddingLeft:'0.4rem',
            textAlign:'center',
            borderRight:'1px solid rgba(0,0,0,0.2)',
          }}>找医生</div>
         </Col>
        <Col xs={6} style={{padding:'0'}}>
          <img src={require('app/common/images/icon_phone.png')}
          style={{
            width: '0.48rem',
            height: '0.48rem',
            position: 'absolute',
            top: '0.15rem',
            left: '0.7rem',
          }}
           alt="" />
          <div onClick={toMyCenter} style={{
            height:'0.8rem',
            lineHeight:'0.8rem',
            textAlign:'center',
            paddingLeft:'0.4rem',
          }}>个人中心</div>
        </Col>
    </div> */}
      </div>


    </div>
  )
}
