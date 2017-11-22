import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Media } from 'react-bootstrap';
import { qiniudomain } from 'app/util/utils.js'


export const DoctorView = ({status,
  photo,
  id,
  name,
  sort,
  institution,
  city,
  skilledin,
  toDetail,
  width,
  jobtitle,
  degree,
}) => {
          return (<div  onClick={ () =>{toDetail(id)} }>
                     {
                      //  <Media>
                      //    <Media.Left>
                      //       <img  style={{borderRadius: '0.1rem',width:'1.1rem',height:'1.1rem'}} src={  photo?(qiniudomain+photo):require('app/common/images/user_default.jpg')} alt="Image"/>
                      //     </Media.Left>
                      //     <Media.Body style={{width:(width-180)/100+'rem'}}>
                      //     <div className="headingwrap" style={{lineHeight:'0.4rem'}}>
                      //       <Media.Heading style={{fontSize:'0.30rem',marginTop:'0',width:'22%',float:'left',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',marginLeft: '0.2rem'}}>{name}</Media.Heading>
                      //       <Media.Heading style={{fontSize:'0.24rem',width:'72%',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow: 'hidden'}}>{ city?city:''} | { institution?institution:''}</Media.Heading>
                      //   </div>
                      //       <p style={{ float:'left',marginTop:'0.34rem',marginLeft:'0.2rem',display:'-webkit-box',textOverflow:'ellipsis',color:'#6e6e70',WebkitLineClamp:2,WebkitBoxOrient:'vertical',fontSize:'0.22rem',height:'0.44rem',lineHeight:'0.34rem',overflow:'visible',width:'100%'}}>{skilledin}</p>
                      //     </Media.Body>
                      // </Media>
                      <div></div>
                    }
                    <div style={{
                      backgroundColor:'#fff',
                      width: '100%',
                      height: '2.2rem',
                      textAlign: 'center',
                      position:'relative',
                      borderBottom:'1px solid rgba(0,0,0,0.05)',
                      }} onClick={() =>{toDetail(id)}}>
                       {/* <div onClick={ ()=>{ followClick(follow) } } style={{fontSize:'0.28rem',position:'absolute',top:'2.98rem',right:'0.3rem',width:'1.14rem',height:'0.4rem',lineHeight:'0.4rem',color:'#fff',borderRadius:'0.08rem',textAlign:'center',backgroundColor:follow?'#ff673e':'#04b9c0' }}>{follow?'已关注':'＋关注'}</div> */}
                      <img src={photo?(qiniudomain+photo):require("app/common/images/quick_order.png")} alt="242x200" style={{
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
                      }}>{name}</span>
                      <br/>
                      <span style={{

                        overflow: 'hidden',
                        height: '0.28rem',
                        lineHeight: '0.28rem',
                        whiteSpace: 'nowrap',
                        width:'66%',
                        margin: '0 auto',
                        textOverflow: 'ellipsis',
                        fontSize: '0.28rem',
                        display: 'block',
                        textAlign:'left',
                        position: 'absolute',
                        left: '2rem',
                        top: '1.36rem',
                        color: 'rgba(0,0,0,0.45)',

                      }}>{degree?degree:''} ｜ {skilledin?skilledin:''}</span>
                      <span style={{
                         position: 'absolute',
                         display:sort >0?'block':'none',
                         right: '0.3rem',
                         top: '0.4rem',
                         fontSize: '0.20rem',
                         background: '#04b9c0',
                         padding: '0.02rem 0.1rem',
                         color: '#fff',
                      }}>推荐</span>
                    </div>
                  </div>)
      }

const styles = {
  container:{
    width:'100%',
    backgroundColor:'#fff',
    margin:'0 0 0.2rem',
    padding:'0.3rem',
    height:'1.7rem'
  }
}
