import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'


export const MyDoctorUi = ({
attention_doctorlist,
attentiondoctorclickhandle
}) => {
  return (
    <div className="mydoctorWrap">
      <div className="firstpage_container">

        <div style={{
          width: '100%',
          backgroundColor: '#fff',
          padding: '0.28rem',
          color: '#666',
          fontSize: '0.28rem',
          borderBottom:'1px solid #ddd',
          marginTop:'0'
        }}>
          我关注的
        </div>
        <Grid style={{
          padding: '0.2rem',
          width: '100%',
          backgroundColor:'rgb(239, 243, 247)',
        }}>
          <Row style={{
            margin: '0',
            padding:'0',
            backgroundColor:'rgb(239, 243, 247)',
          }}>
           {
              attention_doctorlist?attention_doctorlist.map((attentionitem,index) =>{
          return(
            <Col xs={6} key={index} style={(index%2==0)?{padding: '0 0.1rem 0 0'}:{padding: '0 0 0 0.1rem'}}>
              <Thumbnail src={attentionitem.photo?qiniudomain+attentionitem.photo:require("app/common/images/quick_order.png")} onClick={() =>{attentiondoctorclickhandle(attentionitem.id)}} alt="" style={{
                padding: '0.2rem',
                heigth: '3.76rem',
                borderRadius: '10px'
              }}>
                <h4 className="attention_before_h4" style={(index%2==0)?{left:'1.53rem'}:{left:'1.68rem'} }>{attentionitem.name}</h4>
                <h4 className="attention_after_h4" style={(index%2==0)?{left:'1.53rem'}:{left:'1.68rem'} }>{attentionitem.jobtitle}</h4>
                <h4 style={{
                  color: '#666',
                  fontSize: '0.26rem',
                  marginTop: '0.22rem'
                }}>{attentionitem.institution}</h4>
                <p style={{
                  fontSize: '0.22rem',
                  color: '#666',
                  textOverflow:'ellipsis',
                  overflow:'hidden',
                  borderTop: '1px solid #666',
                  marginTop: '0.22rem',
                  paddingTop: '0.19rem',
                  height: '1.9rem',
                  lineHeight: '0.35rem'
                }}>
                  {attentionitem.introduce}
                </p>

              </Thumbnail>
            </Col>
              )
            }):''
           }

          </Row>

        </Grid>

      </div>
    </div>
);

  }
