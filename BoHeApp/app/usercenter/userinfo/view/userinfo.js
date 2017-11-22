import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'
import {
  List,
  InputItem,
  WhiteSpace,
  Button,
  Steps,
  Icon,
  Radio,
  ImagePicker,
  Flex
} from 'antd-mobile';

export const UserInfoUi = ({
  sex,
  headtype,
  avatarimg,
  photo,
  files,
  username,
  mobile,
  userage,
  nexthandleclick,
  selectsexhandleclick,
  userinputitemchange,
  avatarchange,

}) => {
  return (
    <div className="usercenterwrap" style={{overflow:'hidden',backgroundColor:'#fff',paddingBottom:'1rem'}}>
    <List renderHeader={() => '我的个人信息'}>

  <List style={{height:'1.8rem'}}>
    <div className="avatarwrap" style={{
      height: '1rem',
      position:'absolute',
      width:'100%'
    }}>
      <span style={{
        marginLeft: '0.3rem',
        display:'inline-block',
        fontSize: '0.34rem',
        padding: '0.2rem 0 0.2rem 0',
        lineHeight:'1.6rem',
      }}>头像</span>
     <img style={{position: 'absolute',borderRadius:'50%',right: '0.4rem',top:'0.2rem',width:'1.4rem',height:'1.4rem'}} src={avatarimg?avatarimg:qiniudomain+photo} />
     <input ref="avatardom" style={{position: 'absolute',opacity:'0',borderRadius:'50%',right: '0.4rem',top:'0.2rem',width:'1.4rem',height:'1.4rem'}} type="file" id="avatar-src" onChange={(avatarfiles) =>{avatarchange(avatarfiles)}}/>

      <Button id="avatarpicker" style={{display:'none'}} type='primary'></Button>
    </div>

  </List>
  <List>
    <InputItem
      onChange={(ev) =>{userinputitemchange(ev,'name')}}
      value={username}
    >姓名
    </InputItem >
   </List>
          <List>
          <InputItem
            value={mobile}
            disabled
          >电话
          </InputItem >
         </List>
          <List >
        <Flex style={{
    padding: '0.2rem 0',
    color: '#000',
    fontSize: '0.34rem'
  }}>
    <Flex.Item style={{
      color: '#000',
      flex: 'none',
      paddingLeft: '0.3rem',
      paddingRight: '0.3rem',
      fontSize: '0.34rem'
    }}>性别</Flex.Item>
    <span style={{
      marginLeft: '0.8rem',
      fontSize: '0.28rem'
    }}>
      <Radio className="my-radio" checked={(sex == 'male')
        ? true
        : false} onChange={e => selectsexhandleclick('male')}>男</Radio>
    </span>
    <span style={{
      marginLeft: '0.8rem',
      fontSize: '0.28rem'
    }}>
      <Radio className="my-radio" checked={(sex == 'female')
        ? true
        : false} onChange={e => selectsexhandleclick('female')}>女</Radio>
    </span>
  </Flex>
  </List>
    <List>
          <InputItem
            onChange={(ev) =>{userinputitemchange(ev,'age')}}
            value={userage}
            type="number"
          >年龄
          </InputItem >
        </List>
          </List>
          <WhiteSpace/>
          <WhiteSpace/>
          <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'0.5rem'}} type='primary' onClick={nexthandleclick}>确认修改</Button>

        </div>
);

  }
