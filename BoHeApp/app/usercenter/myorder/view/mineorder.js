import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'
import {Media} from 'react-bootstrap';


export const MineOrderUi = ({
  orderslist,
  user,
  orderitemclickhandle
}) => {
  return (
    <div className="myorderwrap" style={{backgroundColor:'rgb(239, 243, 247)'}}>

      {
        orderslist?orderslist.map((orderitem,index) =>{
          return (
            <div onClick={() =>{ orderitemclickhandle(index)}} className="orderitemwrap" style={{
              fontSize:'0.26rem',
              padding:' 0.2rem 0.2rem 0.2rem 0.4rem',
              margin: '0.2rem 0',
              marginTop: '0.4rem',
              color: '#666',
              position: 'relative',
              backgroundColor:'#fff'
            }}>
            <div className="orderinfowrap">
              <img src={user.photo?(qiniudomain+user.photo):require('app/common/images/user_default.jpg')} alt="" style={{width:'0.6rem',height:'0.6rem'}}/>
              <span style={{padding:'0.1rem 0.2rem',fontSize:'0.30rem'}}>{user.name}</span>
              <span style={{color:'rgb(23, 172, 178)', padding: '0.05rem 0.1rem',fontSize:'0.24rem',border: '0.01rem solid rgb(23, 172, 178)',borderRadius: '0.08rem'}}>{orderitem.datetype}</span>
            </div>
            <p style={{margin: '0.2rem 0 0 0',color:'#B5B1B1'}}>{'就诊时间:'+orderitem.date+' '+orderitem.time+'~'+orderitem.end_time}</p>
            <span style={{display:'block',position:'absolute',right:'0.4rem',top:'43%',padding:'0.05rem 0.1rem',color:'#fff',fontSize:'0.22rem',backgroundColor:'#17acb2',borderRadius:'0.08rem'}}>{orderitem.state}</span>
            </div>
          )

      }):''
       }


    </div>
  );

}
