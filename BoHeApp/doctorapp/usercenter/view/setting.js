import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile';

export const SettingUI = ({
  width,
  height,
  settinglistitemClickHandle,
  logoutBtnHandleClick,
}) => {
  return (
    <div className="setting_wrap">

      <div className="itemwrap" style={{
        borderBottom: '1px solid #eee'
      }} onClick={() => {
        settinglistitemClickHandle(0)
      }}>
        <span style={{
          display: 'inline-block',
          padding: '0.16rem 0 0.16rem 0.2rem'
        }}>关于我们</span>
        <span style={{
          position: 'absolute',
          right: '0.2rem',
          lineHeight: '0.8rem'
        }}>
          >
        </span>
      </div>


      <div className="itemwrap" style={{
        borderBottom: '1px solid #eee'
      }} onClick={() => {
        settinglistitemClickHandle(1)
      }}>
        <span style={{
          display: 'inline-block',
          padding: '0.16rem 0 0.16rem 0.2rem'
        }}>通知</span>
        <span style={{
          position: 'absolute',
          right: '0.2rem',
          lineHeight: '0.8rem'
        }}>
          >
        </span>
      </div>

      <div className="itemwrap" style={{
        borderBottom: '1px solid #eee'
      }} onClick={() => {
        settinglistitemClickHandle(2)
      }}>
        <span style={{
          display: 'inline-block',
          padding: '0.16rem 0 0.16rem 0.2rem'
        }}>隐私保护</span>
        <span style={{
          position: 'absolute',
          right: '0.2rem',
          lineHeight: '0.8rem'
        }}>
          >
        </span>
      </div>

      <div className="itemwrap" style={{
        borderBottom: '1px solid #eee'
      }} onClick={() => {
        settinglistitemClickHandle(3)
      }}>
        <span style={{
          display: 'inline-block',
          padding: '0.16rem 0 0.16rem 0.2rem'
        }}>意见反馈</span>
        <span style={{
          position: 'absolute',
          right: '0.2rem',
          lineHeight: '0.8rem'
        }}>
          >
        </span>
      </div>
      <Button className="btn" type='primary' style={{
        width: '80%',
        marginLeft: '10%',
        marginTop: '3rem'
      }} onClick={logoutBtnHandleClick}>提现</Button>
    </div>
  )
}
