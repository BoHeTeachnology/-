import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {WhiteSpace, Button, Result, Icon} from 'antd-mobile';

export const WithdrawsuccessUi = ({
  backtohomeclickhandle,
}) => {
  return (
    <div className="validatesuccesswrap">
      <Result img={< img src = {
        require('app/common/images/validate_success.png')
      }
      className = "icon" style = {{ fill: '#F13642' }}/>} title="提交成功" message="提现申请已发送，提现金额会在2个工作日内到账，如有任何问题，请拨打客服电话400-9696791"/>
      <WhiteSpace/>


      <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'1.5rem'}} type='primary' onClick={backtohomeclickhandle}>返回首页</Button>


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
