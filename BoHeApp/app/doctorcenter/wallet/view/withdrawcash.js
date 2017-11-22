import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {List, InputItem, WhiteSpace, Button, Card} from 'antd-mobile';

export const WithdrawcashUi = ({
cashValue,
secretValue,
banknumber,
withdrawInputChange,
withdrawcashAllhandle,
withdrawConfirmhandle,
forgetpasswordhandleclick,
}) => {
  return (
    <div className="withdrawcashwrap">
      <List>
        <WhiteSpace/>
        <div style={{'paddingLeft':'0.3rem',paddingTop: '0.3rem',fontSize:'0.28rem'}}>中国银行</div>
        <WhiteSpace/>
        <div style={{'padding':'0 0.3rem 0 0.3rem',fontSize:'0.28rem'}}>{banknumber}</div>
        <WhiteSpace/>

      </List>
      <WhiteSpace/>

      <List>
        <WhiteSpace/>
        <div style={{'paddingLeft':'0.3rem',fontSize:'0.28rem'}}>提现金额</div>
        <InputItem value={cashValue} style={{'paddingBootom':'0.15rem'}} placeholder="请输入提现金额" onChange={(ev) =>{withdrawInputChange(ev,'cash')}} extra={< Button type = "primary" onClick={withdrawcashAllhandle} size = "small" inline > 全部提现 < /Button>}>¥</InputItem>
        <WhiteSpace/>
      </List>
      <WhiteSpace/>
      <List>
        <InputItem  value={secretValue} style={{fontSize:'0.28rem'}} type="password" placeholder="请输入提现密码" onChange={(ev) =>{withdrawInputChange(ev,'withdrawsecret')}} clear={true}>提现密码</InputItem>
      </List>
       <p style={{marginBottom: '0',fontSize: '0.26rem',textAlign: 'center',backgroundColor: '#f5f5f9',padding: '0.1rem 0'}} onClick={forgetpasswordhandleclick}>忘记密码</p>
      <WhiteSpace/>

      <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'1rem'}} type='primary' disabled={cashValue==''|| secretValue==''?true:false} onClick={withdrawConfirmhandle}>确认提现</Button>
    </div>
  );

}
