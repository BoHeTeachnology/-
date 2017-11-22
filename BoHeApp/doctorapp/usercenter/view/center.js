import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {qiniudomain} from 'doctorapp/util/utils.js'

export const CenterUI = ({
  userInfo,
  width,
  height,
  myorderBtnClickHandle,
  transfercenterBtnClickHandle,
  listitemClickHandle,
}) => {
  return (
    <div className="center_wrap" style={{

      fontSize: '0.34rem',
      backgroundColor:'#fff',
    }}>

      <div className="center_topwrap" style={{
          textAlign: 'center',
          marginBottom:'0.2rem',
      }}>
        <img src={userInfo.photo?(qiniudomain+userInfo.photo):require('doctorapp/common/images/user_default.jpg')} alt="" style={{
          display: 'inline-block',
          marginTop: '0.4rem',
          border: '0.02rem solid #eee',
          borderRadius: '50%',
          width: '1.6rem',
          height: '1.6rem'
        }}/>
        <p className="top_p" style={{
          marginTop: '0.14rem'
        }}>
          {userInfo.name?userInfo.name:'薄荷用户'}
        </p>
      </div>
      <div className="center_selectwrap" style={{
        borderBottom: '1px solid #eee'
      }}>
        <div onClick={myorderBtnClickHandle} style={{
          width: '49.6%',
          display: 'inline-block',
          textAlign: 'center',
          borderRight: '1px solid #aaa',
          padding: '0.16rem 1px 0.16rem 0'
        }}>
          我的预约
        </div>
        <div onClick={transfercenterBtnClickHandle} style={{
          width: '49.6%',
          display: 'inline-block',
          textAlign: 'center',
          padding: '0.16rem 1px 0.16rem 0'
        }}>
          转诊中心
        </div>
      </div>

      <div className="center_listwrap">
        <div className="itemwrap" style={{
          borderBottom: '1px solid #eee'
        }} onClick={() => {
          listitemClickHandle(0)
        }}>
          <span style={{
            display: 'inline-block',
            padding: '0.16rem 0 0.16rem 0.2rem'
          }}>出诊安排</span>
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
          listitemClickHandle(1)
        }}>
          <span style={{
            display: 'inline-block',
            padding: '0.16rem 0 0.16rem 0.2rem'
          }}>我的钱包</span>
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
          listitemClickHandle(2)
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
          listitemClickHandle(3)
        }}>
          <span style={{
            display: 'inline-block',
            padding: '0.16rem 0 0.16rem 0.2rem'
          }}>设置</span>
          <span style={{
            position: 'absolute',
            right: '0.2rem',
            lineHeight: '0.8rem'
          }}>
            >
          </span>
        </div>

      </div>

    </div>
  )}
