import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Grid } from 'antd-mobile';
import {qiniudomain} from 'app/util/utils.js'


export const DoctorMainUi = ({
  clickGrid,
  allow,
  toallow,
  validatestr,
  name,
  photo,
  identity,
  blance,
  institution,
  jobtitle,
}) => {
          var data = [
              {
                icon:require('app/common/images/wallet.png'),
                text:'我的钱包'
              },
              {
                icon:require('app/common/images/invite.png'),
                text:'邀请码'
              },
              {
                icon:require('app/common/images/mycard.png'),
                text:'我的名片'
              },
              {
                icon:require('app/common/images/mycard.png'),
                text:'我的预约'
              }
          ]
          return (
              <div>
                  <div style={{width:'100%',height:'3.78rem',position:'relative'}}>
                    <img src={require('app/common/images/bg.png')} style={{width:'100%',height:'100%'}}/>
                    <img src={photo?qiniudomain+photo:require('app/common/images/man.png')} style={{width:'1.6rem',height:'1.6rem',borderRadius:'50%',position:'absolute',top:'0.4rem',left:'50%',marginLeft:'-0.8rem'}}/>
                    {
                      allow?(
                        <div>
                          <div style={{width:'100%',height:'0.6rem',lineHeight:'0.6rem',position:'absolute',top:'2.9rem',textAlign:'center',fontSize:'0.24rem',color:'#00a2ae'}}>{institution?institution:''} &nbsp;&nbsp;&nbsp;&nbsp;{jobtitle?jobtitle:''}</div>
                          <div style={{width:'100%',height:'0.6rem',lineHeight:'0.6rem',position:'absolute',top:'2.3rem',textAlign:'center',fontSize:'0.36rem',color:'#00a2ae'}}>{name?name:''}</div>
                        </div>
                      ):(
                        <div>
                          <div onClick={(validatestr=='审核中')?'':toallow} style={{width:'2rem',height:'0.6rem',lineHeight:'0.6rem',position:'absolute',top:'2.4rem',textAlign:'center',fontSize:'0.38rem',background:'#f58d47',left:'50%',marginLeft:'-1rem',borderRadius:'0.3rem',color:'#fff',fontSize:'0.32rem'}}>{validatestr}</div>
                          <div style={{width:'100%',height:'0.6rem',lineHeight:'0.6rem',position:'absolute',top:'3.05rem',textAlign:'center',fontSize:'0.24rem',color:'#00a2ae'}}>上传证书，完善资料，加入薄荷</div>
                        </div>
                      )
                    }
                  </div>
                  <div style={{width:'100%',height:'0.2rem',borderTop:'1px solid #ccc',borderBottom:'1px solid #ccc'}}></div>
                  <Grid data={data} columnNum={3} hasLine={false} onClick={ clickGrid }/>
                  <div style={{width:'100%',height:'0rem',borderBottom:'1px solid #ccc'}}></div>


              </div>
          );
}
