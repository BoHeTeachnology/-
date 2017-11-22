import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {WhiteSpace, Result, Icon} from 'antd-mobile';

export const WithdrawfailUi = ({}) => {
  return (
    <div classname="validatesuccesswrap"> 
      <Result img={< img src = {
        require('app/common/images/down_logo.png')
      }
      className = "icon" style = {{ fill: '#F13642' }}/>} title="验证失败" message="提现失败，请联系客服400-9696791或拨打电话13146291005进行提现"/>
      <WhiteSpace/>
      <div className="fail_online">
        <span style={{
          position: "fixed",
          bottom:" 0.2rem",
          width: "100%",
          textAlign: "center",
          fontSize:"0.24rem"
        }}>在线客服</span>
      </div>
    </div>
  );

}
