import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'
import {Button} from 'antd-mobile';
export const MineOrderInfoUi = ({
  currentorderitem,
  user,
  cancelorderhandleclick,
}) => {
  return (
    <div className="myorderinfowrap" style={{backgroundColor:'#fff',paddingBottom:'1rem'}}>
    <div className="orderperson" style={{borderBottom:'0.15rem solid rgb(239, 243, 247)',fontSize:'0.28rem',color:'#888'}}>
      <p style={{padding: '0.2rem 0.2rem 0 0.2rem',fontSize:'0.28rem'}}>就诊人:<span style={{marginLeft:'0.2rem'}}>{user.name?user.name:'薄荷用户'}</span></p>
      <p style={{padding: '0.2rem 0.2rem 0 0.2rem',fontSize:'0.28rem',marginBottom: '0.2rem'}}>就诊时间:<span style={{marginLeft:'0.2rem'}}>{currentorderitem.date+'   '+currentorderitem.time+'~'+currentorderitem.end_time}</span></p>
    </div>
    <div className="orderinfowrap" style={{fontSize:'0.28rem',color:'#888'}}>
      <p style={{padding: '0.2rem',fontSize: '0.32rem',color: '#444',borderBottom:' 0.15rem solid rgb(239, 243, 247)'}}>预约信息</p>
      <p style={{padding: '0.2rem 0.2rem 0 0.2rem'}}>预约项目:<span style={{marginLeft:'0.2rem'}}> {currentorderitem.datetype}</span></p>
      <p style={{padding: '0.2rem 0.2rem 0 0.2rem'}}>预约医生:<span style={{marginLeft:'0.2rem'}}>{currentorderitem.doc_name}</span></p>
      <p style={{padding: '0.2rem 0.2rem 0 0.2rem'}}>预约诊所:<span style={{marginLeft:'0.2rem'}}>固瑞齿科中海店</span></p>
      <p style={{padding: '0.2rem 0.2rem 0 0.2rem'}}><span style={{display:'inline-block'}}>预约地址:</span><span style={{marginLeft:'0.2rem',position:'relative',fontSize:'0.28rem',marginLeft:'1.4rem',top:'-0.4rem',textAlign:'left',display:'inline-block'}}>北京市朝阳区建国门外大街光华东里8号中海广场1号楼（北楼商业门）3层05号</span></p>
    </div>
    <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'1.5rem'}} type='primary' onClick={()=>{cancelorderhandleclick(currentorderitem.id)}}>取消预约</Button>

   </div>
);

}
