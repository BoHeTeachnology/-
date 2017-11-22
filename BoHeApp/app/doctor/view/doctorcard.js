
import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import { Button,ButtonToolbar,Grid,Row,Col,Image,Thumbnail,PageHeader,small,Media,Tab,Nav,NavItem,Modal} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'

export const DoctorCardUi = ({
	institution,
	introduce,
	jobtitle,
	name,
	label_arr,
	job_age,
	photo,
	height,
	toShare
}) => {
        return (
    <div style={{height:height,backgroundColor:'#fff'}}>
    	<div style={{background:'#04b9c0',width:'100%',height:'10.1rem',padding:'0.6rem 0.56rem'}} className='doctorCard'>
		    <div style={{height:'100%',width:'100%',position:'relative',borderRadius:'0.15rem',background:'url('+require('app/common/images/doctorcardbg.png')+') no-repeat',backgroundColor:'#fff'}}>
		    	<div style={{position:'absolute',width:'100%',height:'100%',padding:'0.6rem'}}>
		    		<div style={{width:'2rem',height:'2rem',margin:'0 auto'}}>
		    			<img style={{width:'100%',height:'100%',borderRadius:'50%'}} src={  photo?(qiniudomain+photo):require('app/common/images/user_default.jpg')}/>
		    		</div>
		    		<div style={{margin:'0.4rem auto',textAlign:'center'}}>
		    			<span style={{fontSize:'0.38rem',position:'relative',margin:'0 auto'}}>
		    				{name}
		    			</span>
		    		</div>
		    		<div style={{margin:'0.3rem auto',width:'100%'}}>
		    			<span style={{ width:'100%',textAlign:'center',overflow:'hidden',height:'0.28rem',lineHeight:'0.28rem',whiteSpace:'nowrap',margin:'0 auto',textOverflow:'ellipsis',fontSize:'0.28rem',display:'block'}}>{institution?institution:''} ｜ {jobtitle?jobtitle:''}</span>
		    		</div>
		    		<div style={{width:'100%',height:'0.02rem',backgroundColor:'#04b9c0',margin:'0.4rem auto'}}>

		    		</div>
		    		<div style={{width:'100%',margin:'0.6rem auto'}}>
		    			<h4 style={{fontSize:'0.3rem'}}>名医简介</h4>
		    			<p style={{ fontSize:'0.26rem',color:'#6e6e70',height:'auto',WebkitLineClamp:3,WebkitBoxOrient:'vertical',lineHeight:'0.5rem',display:'-webkit-box',overflow:'hidden',textOverflow:'ellipsis'}}>
	                		{ introduce }
	                	</p>
		    		</div>
		    	</div>
		    </div>
    	</div>
    	<div style={{height:0.2*height,paddingTop:'0.2rem'}}>
			<Row style={{margin:'0'}}>
				<Col xs={12} style={{textAlign:'center'}}>
					<Image onClick={ toShare } style={{ width:'1.5rem',height:'1.5rem',marginBottom:'0.2rem'}} src={require('app/common/images/doctorcardcode.jpg')}/>
					<p style={{fontSize:'0.22rem'}}>关注“薄荷牙医”预约该医生</p>
				</Col>
			</Row>
		</div>
	</div>
)}
