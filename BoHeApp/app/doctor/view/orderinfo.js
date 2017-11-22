import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Media} from 'react-bootstrap';
import {List, Picker, WhiteSpace,Button} from 'antd-mobile';
import Hammer from 'react-hammerjs'
import {qiniudomain} from 'app/util/utils.js'
const Item = List.Item;

export const OrderInfoUi = ({
  doctorname,
  date,
  timetype,
  photo,
  cat,
  skilledin,
  jobtitle,
  district,
  pickvalue,
  orderitemsurehandle,
  go_orderhandle,

}) => {
  return (
    <div className="orderinfo_wrap">
      <div className="order_doctorinfo" style={{backgroundColor:'#fff'}}>
        <Media>
          <Media.Left>
            <img width={140} height={140} style={{
              margin:'0.4rem',
              borderRadius:'0.04rem',
            }} src={photo?(qiniudomain+photo):require('app/common/images/user_default.jpg')} alt=""/>
          </Media.Left>
          <Media.Body style={{
            width: '5rem'
          }}>
            <Media.Heading style={{
              fontSize: '0.32rem',
              display: 'block',
              marginRight: '0.2rem',
              float: 'left',
              marginTop: '0.68rem',
              whiteSpace: 'nowrap',
              color:'rgba(0,0,0,0.75)',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{doctorname}</Media.Heading>
            <Media.Heading style={{
              fontSize: '0.28rem',
              display: 'inline-block',
              marginTop: '0.7rem',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              color:'rgba(0,0,0,0.75)',
            }}>
              {jobtitle}</Media.Heading>
            <p style={{
              float: 'left',
              display: '-webkit-box',
              textOverflow: 'ellipsis',
              color: '#6e6e70',
              marginTop:'0.2rem',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              fontSize: '0.28rem',
              color:'rgba(0,0,0,0.45)',
              height: '0.44rem',
              lineHeight: '0.34rem',
              overflow: 'visible',
              width: '100%'
            }}>{skilledin}</p>
          </Media.Body>
        </Media>
      </div>
      <div className="serviceinfo_wrap">
        <List>
          <Item extra={date+' '+timetype}>预约时间</Item>
        </List>
        <List>
          <Item extra={cat.name?cat.name:'固瑞齿科中海店'}>就诊诊所</Item>
        </List>
        <List>
          <div className="" style={{ height:'1.6rem'}}>
            <span style={{
              marginLeft: '0.3rem',
              fontSize: '0.32rem',
              display: 'inline-block',
              width: '28%',
              height: '1rem',
              color:'rgba(0,0,0,0.75)',
              lineHeight: '1rem',
            }}>诊所地址</span>
            <span style={{
              marginLeft: '30%',
              width: '70%',
              display: 'inline-block',
              fontSize:'0.28rem',
              position: 'relative',
              top: '-0.8rem',
              right:'0.3rem',
              textAlign:'right',
              color:'rgba(0,0,0,0.45)',
            }}>{cat.addr?cat.addr:''}</span>
          </div>
        </List>
        <List>
          <Picker data={district} cols={1} value={pickvalue} onChange={(pickvalue) => {orderitemsurehandle(pickvalue)}}>
            <List.Item arrow="horizontal">预约项目</List.Item>
          </Picker>
        </List>
        <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'1rem'}} type='primary' onClick={go_orderhandle}>确认预约</Button>

      </div>
    </div>
  );

}
