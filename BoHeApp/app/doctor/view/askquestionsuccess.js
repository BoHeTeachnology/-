import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {WhiteSpace, Button, Result, Icon} from 'antd-mobile';

export const AskQuestionSuccessUi = ({
  asksuccessbackhandle
}) => {
  return (
    <div className="validatesuccesswrap">
      <Result img={< img src = {
        require('app/common/images/validate_success.png')
      }
      className = "icon" style = {{ fill: '#F13642' }}/>} title="提交成功" message="感谢您对薄荷牙医的信任，您的提问已成功,审核通过后,我们会推送给医生。"/>
      <WhiteSpace/>

      <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'0.5rem'}} type='primary' onClick={asksuccessbackhandle}>返回首页</Button>


      <div className="success_online" style={{
        position: "fixed",
        bottom: "0",
        textAlign: "center",
        width: "100%",
      }}>
        <img src={require('app/common/images/bohelogo.png')} alt="logo" style={{
          display: "block",
          width: "1.5rem",
          left: "0",
          bottom: '0.2rem',
          right: "0",
          position: "absolute",
          margin: "auto",
        }}/>

      </div>
    </div>
  );

}
