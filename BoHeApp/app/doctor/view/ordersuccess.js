import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {WhiteSpace, Button, Result, Icon} from 'antd-mobile';
import {Media} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'


export const OrderSuccessUi = ({
  height,
  ordersuccessbackhandle,
  photo,
  doctorname,
  jobtitle,
  institution,
  skilledin,
  date,
}) => {
  return (
    <div className="validatesuccesswrap" style={{height:height,background:'#fff'}}>
      {/* <Result img={< img src = {
        require('app/common/images/validate_success.png')
      }
      className = "icon" style = {{ fill: '#F13642' }}/>} title="提交成功" message="感谢您对薄荷牙医的信任，您的预约已成功,我们将会以短信形式通知您。"/> */}
      <p style={{
        paddingTop:'6%',
        paddingBottom:'6%',
        fontSize:'0.56rem',
        fontWeight:'500',
        marginBottom:0,
        textAlign:'center',
        backgroundColor:'rgb(255, 255, 255)',
      }}>预约成功</p>

      <div className="contentwrap" style={{
        padding: '0rem 0.3rem',
        background: '#fff',
      }}>
      <div style={{
        backgroundColor:'rgb(250,250,250)',
        width: '100%',
        height: '2.2rem',
        textAlign: 'center',
        position:'relative',
        borderBottom: '0.01rem solid rgba(0,0,0,0.2)',
        }}>
         {/* <div onClick={ ()=>{ followClick(follow) } } style={{fontSize:'0.28rem',position:'absolute',top:'2.98rem',right:'0.3rem',width:'1.14rem',height:'0.4rem',lineHeight:'0.4rem',color:'#fff',borderRadius:'0.08rem',textAlign:'center',backgroundColor:follow?'#ff673e':'#04b9c0' }}>{follow?'已关注':'＋关注'}</div> */}
        <img src={ photo?qiniudomain+photo:require('app/common/images/user_default.jpg')} style={{
          height: '1.4rem',
          width: '1.4rem',
          position: 'absolute',
          left: '0.3rem',
          top: '0.4rem',
          borderRadius:'0.04rem',
        }}/>
        <span style={{
          fontSize: '0.32rem',
          display: 'block',
          position: 'absolute',
          left: '2rem',
          top: '0.6rem',
          color:'rgba(0,0,0,0.75)',
          fontWeight:'500',
        }}>{doctorname?doctorname:''}</span>
        <br/>
        <span style={{

          overflow: 'hidden',
          height: '0.28rem',
          lineHeight: '0.28rem',
          WhiteSpace: 'nowrap',
          margin: '0 auto',
          textOverflow: 'ellipsis',
          fontSize: '0.28rem',
          display: 'block',
          position: 'absolute',
          left: '2rem',
          top: '1.36rem',
          color: 'rgba(0,0,0,0.45)',

        }}>{jobtitle?jobtitle:''} ｜ {institution?institution:''} </span>

      </div>

      <p style={{
        padding: '0.2rem 0rem 0.2rem 0.4rem',
        background:'#fff',
        marginBottom:'0',
        color: 'rgba(0,0,0,0.75)',
        background: 'rgb(250,250,250)',
        borderBottom: '0.01rem solid rgba(0,0,0,0.2)',
      }}>预约时间:  {date}</p>
      <p style={{
        padding: '0.2rem 0.4rem',
        marginTop: 0,
        color: 'rgba(0,0,0,0.75)',
        background: 'rgb(250,250,250)',
  }}>具体就诊时间、地点，医生助理会再次通知您。</p>
      </div>
      <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'12%'}} type='primary' onClick={ordersuccessbackhandle}>好的</Button>


      <div className="success_online" style={{
        position: "fixed",
        bottom: "1.2rem",
        textAlign: "center",
        width: "100%",
      }}>
        <img src={require('app/common/images/down_logo.png')} alt="logo" style={{
          display: "block",
          width: "0.36rem",
          left: "0",
          right: "0",
          position: "absolute",
          margin: "auto",
        }}/>
        <span style={{
          display: "block",
          position: "absolute",
          width: "100%",
          top: "0.56rem",
          fontSize:"0.24rem"
        }}>您身边的牙医管家</span>
      </div>
    </div>
  );

}
