import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile';
export const WalletUI = ({width, height, cashBtnHandleClick}) => {
  return (
    <div className="wallet_wrap">
      <span style={{
        display: 'block',
        width: '100%',
        fontSize: '0.24rem',
        textAlign: 'right',
        marginTop: '0.2rem',
        paddingRight: '0.2rem'
      }}>总排名：NO.1</span>
      <h3 style={{
        fontSize: '0.50rem',
    textAlign: 'center',
    marginTop: '2.6rem',
      }}>1500.00</h3>
      <p style={{
        textAlign: 'center',
      marginTop: '0.4rem',
      fontSize: '0.28rem',
      }}>转诊中心收入：600</p>
      <p style={{
        textAlign: 'center',
    fontSize: '0.28rem',
      }}>邀请医生收入：900</p>
      <Button className="btn" type='primary' style={{
        width: '80%',
        marginLeft: '10%',
        marginTop: '4rem'
      }} onClick={cashBtnHandleClick}>提现</Button>

    </div>
  )
}
