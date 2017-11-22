import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {WhiteSpace, Button, Result, Icon} from 'antd-mobile';

export const IndentyfailUi = ({
newvalidateclickhandle,
error,
error_time,
}) => {
  return (
    <div className="validatesuccesswrap">
      <Result img={< img src = {
        require('app/common/images/validate_fail.png')
      }
      className = "icon" style = {{ fill: '#F13642' }}/>} title="认证失败" message="您的身份认证审核失败,请重新认证,如有疑问，请拨打客服电话400-9696791"/>
      <WhiteSpace/>
  <div className="failmessagewrap">
  <p>·审核时间:{error_time}</p>
  <p>· 失败原因:{error}</p>
  </div>
  <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'1.5rem'}} type='primary' onClick={newvalidateclickhandle}>重新认证</Button>

    </div>
  );

}
