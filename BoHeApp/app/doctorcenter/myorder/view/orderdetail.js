import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Button,NoticeBar,List } from 'antd-mobile';
const Item = List.Item;

export const OrderDetailUi = ({
    name,
    institution,
    paylist,
    height,
    width
}) => {
    return (
        <div>
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
              lalallalallalalal啦啦啦啦啦lalallalallalalal啦啦啦啦啦lalallalallalalal啦啦啦啦啦lalallalallalalal啦啦啦啦啦
            </NoticeBar>
            <List renderHeader={() => ''} className="my-list">
              <Item extra={name}>就诊时间</Item>
              <Item extra={name}>就诊人</Item>
              <Item extra={name}>联系电话</Item>
            </List>
            <List renderHeader={() => ''} className="my-list">
              <Item extra={institution}>预约项目</Item>
              <Item extra={name}>预约医生</Item>
              <Item extra={name}>预约诊所</Item>
              <Item extra={name}>预约地址</Item>
            </List>
            <Button className="btn" type="primary" onClick={ paylist } style={{position:'fixed',bottom:'0.4rem',width:(width-40)+'px',marginLeft:'20px'}}>选择消费账单</Button>
        </div>
    );
}
