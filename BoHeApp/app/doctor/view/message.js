import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Button,ButtonToolbar,Grid,Row,Col,Image,Thumbnail,PageHeader,small,Media,Tab,Nav,NavItem,Modal} from 'react-bootstrap';
import { qiniudomain } from 'app/util/utils.js'

function img(image,show,messageid,idx,index){
  console.log(11119999);
    return (
      <img src={ qiniudomain+image } style={{width:'100%'}} onClick={ ()=>{ show(messageid,idx,index) } }/>)
}

function imageui(featured_images,messageid,show,width,index){
  let _imageui = [];
  console.log('Q')
  console.log(featured_images)
  console.log('Q')
  if(featured_images.length == 1){
    featured_images.map((image,idx)=>{
      console.log('image-----------------');
      console.log(image);
      console.log(image);
      _imageui.push(
        <Col xs={8} style={{height:(width-115)*2/3+'px',overflow:'hidden'}}>
          {
            // img(image,show,messageid,idx,index)
            <img src={ qiniudomain+image } style={{width:'100%'}} onClick={ ()=>{ show(messageid,idx,index) } }/>
          }
        </Col>
      )
    })
  }else if(featured_images.length >= 2 ){
    featured_images.map((image,idx)=>{
    console.log(image);
    _imageui.push(
        <Col xs={4} style={{height:'180px',overflow:'hidden'}}>
        {
          // img(image,show,messageid,idx,index)
          <img src={ qiniudomain+image } style={{width:'100%'}} onClick={ ()=>{ show(messageid,idx,index) } }/>
        }
        </Col>
      )
    })
  }
  return _imageui;
}

export const MessageView = ({status,
  username,
  content,
  id,
  idx,
  show,
  messageid,
  created_at,
  type,
  goodNum,
  width,
  height,
  good,
  goodState,
  featured_images,
  userphoto,
  imagelist
}) => {
          console.log('QWERDFDFDF!!!!!')
            console.log(id);
          console.log(featured_images);
          console.log('QWERDFDFDF!!!!!')
          console.log(width);
          console.log(height);
          return (<div style={{marginBottom:'0.2rem'}}>
                      <Grid style={{padding:'0.3rem',width:'100%',backgroundColor:'#fff'}}>
                        <Media>
                          <Media.Left>
                            <img style={{width:'0.6rem',height:'0.6rem',marginTop:'0.2rem',borderRadius:'100%'}} src={ userphoto?(qiniudomain+userphoto):require('app/common/images/invitepic2.png') } alt="Image"/>
                          </Media.Left>
                          <Media.Body style={{padding:0}}>
                            <Media.Heading style={{fontSize:'0.32rem',height:'1rem',lineHeight:'1rem'}}>{username?username:'薄荷用户'}</Media.Heading>
                          </Media.Body>
                        </Media>
                        <Row style={{margin:'0.2rem 0'}}>
                          <Col xs={12} >
                            <p style={{fontSize:'0.24rem'}}>{content}</p>
                          </Col>
                        </Row>
                        <Row style={{margin:'0'}}>
                          {
                            imageui(featured_images,id,show,width,idx)
                          }
                        </Row>
                        <Row style={{marginTop:'0.2rem'}}>
                          <Col xs={12} style={{position:'relative'}}>
                            <span style={{fontSize:'0.24rem'}}>{created_at}</span>
                            <span style={{fontSize:'0.24rem'}}></span>
                            <span onClick={ ()=>{ good(id) } } style={{float:'right',fontSize:'0.24rem'}}>{goodNum}人赞👍</span>
                            <span style={ goodState==true?{visibility:'visible'}:{visibility:'hidden'}}>
                              <span style={ goodState==true?{position:'absolute',top:'-1rem',right:'0',fontSize:'0.5rem',transition:'2s',opacity:0}:{position:'absolute',top:'0',right:'0',fontSize:'0.2rem',opacity:1}} className="addgood">{(goodState==true)?'+1':''}</span>
                            </span>

                          </Col>
                        </Row>
                      </Grid>
                    </div>
                    )
      }
