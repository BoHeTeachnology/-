import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {List, InputItem, WhiteSpace, Button, Card} from 'antd-mobile';

export const WithdrawvalidateUi = ({
  validatephone,
  validatecode,
  validatindenty,
  codetext,
  isclick,
  codebtnclickhandle,
  validateInputChange,
  validateNexthandle,
}) => {
  return (
    <div>
      <List renderHeader={() => "我们将向您的薄荷预留手机号发送短信，请查收"}>
        <InputItem
          value={validatephone}
          type="phone"
          onChange={(ev)=>{validateInputChange(ev,'phone')}}
          placeholder="请输入手机号"
          clear={true}
        >手机号</InputItem>
        <InputItem
          value={validatecode}
          type="text"
          onChange={(ev)=>{validateInputChange(ev,'code')}}
          placeholder="请输入验证码"
          clear={false}
          extra={<span disabled onClick={(isclick==true)?codebtnclickhandle:''}>{codetext}</span>}
        >验证码</InputItem>
      </List>
      <WhiteSpace/>

      <List renderHeader={() => "填填写您的身份证号验证身份"}>
        <InputItem
          value={validatindenty}
          type="text"
          onChange={(ev)=>{validateInputChange(ev,'indenty')}}
          placeholder="请输入身份证号"
          clear={true}
        ></InputItem>
      </List>
      <WhiteSpace/>
      <WhiteSpace/>
      <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'1rem'}} type='primary' disabled={(validatephone==''||validatecode==''||validatindenty=='')?true:false} onClick={validateNexthandle}>下一步</Button>
    </div>
  );

}
