import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile';

export const SettingUI = ({
  logouthandleclick
}) => {

  return (
    <div className="settingwrap">
      <div className="aboutuswrap" style={{
        padding: ' 0.3rem 0.4rem',
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        关于我们
        <span style={{
          position: 'absolute',
          right:'0.4rem',
        }}>
          >
        </span>
      </div>
      <div className="secretwrap" style={{
        padding: ' 0.3rem 0.4rem',
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}>
        隐私保护
        <span style={{
          position: 'absolute',
          right:'0.4rem',
        }}>
          >
        </span>
      </div>

      <Button className="btn" style={{
        width: '80%',
        marginLeft: '10%',
        position: 'fixed',
         bottom: '0.8rem',
      }} type='primary' onClick={logouthandleclick}>注销</Button>

    </div>
  )
}
