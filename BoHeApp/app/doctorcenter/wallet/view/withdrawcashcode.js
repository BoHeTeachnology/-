import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';

export const WithdrawcashCodeUi = ({
  secretValue,
  secretagainValue,
  secretOkhandleclick,
  secretInputChange,
}) => {
  return (
    <div>
      <List renderHeader={() => "请输入6位数字作为 提现密码，与银行卡密码不同"}>
        <InputItem type="password" placeholder="请输入提现密码" value={secretValue} onChange={(ev) => secretInputChange(ev,'secret')} clear={true}></InputItem>
        <InputItem type="password" placeholder="请确认密码" value={secretagainValue} onChange={(ev) => secretInputChange(ev,'againsecret')} clear={true}></InputItem>
      </List>
      <WhiteSpace/>
      <WhiteSpace/>
      <Button className="btn" type='primary' style={{width:'80%',marginLeft:'10%',marginTop:'1rem'}} disabled={(secretValue==''||secretagainValue=='')?true:false} onClick={secretOkhandleclick}>确认</Button>
    </div>
  );

}
