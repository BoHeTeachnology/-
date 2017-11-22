import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {WhiteSpace, Button, Result, Icon} from 'antd-mobile';

export const ValidatefailUi = ({}) => {
  return (
    <div className="withdrawsuccesswrap">
      <Result img={< img src = {
        require('app/common/images/validate_fail.png')
      }
      className = "icon" style = {{ fill: '#F13642' }}/>} title="提交失败" message="感谢您对薄荷牙医的信任，你的审核提交失败，请重新认证。"/>
      <WhiteSpace/>
<WhiteSpace/>
<WhiteSpace/>
      <div className="success_online" style={{
        position: "fixed",
        bottom: "1.2rem",
        textAlign: "center",
        width: "100%",
      }}>
        <img src={require('app/common/images/down_logo.png')} alt="logo" style={{
          display: "block",
          width: "0.36rem",
          left: "0",
          right: "0",
          position: "absolute",
          margin: "auto",
        }}/>
        <span style={{
          display: "block",
          position: "absolute",
          width: "100%",
          top: "0.56rem",
          fontSize:"0.24rem"
        }}>您身边的牙医管家</span>
      </div>
    </div>
  );

}
