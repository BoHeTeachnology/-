import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import ReactSwipe from 'react-swipe';
import loginstyles from 'app/common/css/login.css'
import Hammer from 'react-hammerjs'
import { Button,ButtonToolbar,Grid,Row,Col,Image,Thumbnail,PageHeader,small,Media,Tab,Nav,NavItem} from 'react-bootstrap';


export const QuickOrderUI = ({
	call,
	toFirstPage,
	height
}) => {
	return(
			<div style={{width:'100%',margin:0,backgroundColor:'#eff3f7',textAlign:'center',padding:'0.4rem'}}>
			<img src={require('app/common/images/quickorderdetail.png')} style={{}}/>

				<div style={styles.card}>
					<span style={styles.title}>温馨提示</span>
					<div style={{width:'100%',height:'2.2rem',marginTop:'0.2rem'}}>
						<div style={{margin:'0',height:'2rem',width:'100%'}} >
							<img src={require('app/common/images/call.png')} style={{height:'1rem',float:'left',marginTop: '0.4rem',marginLeft: '0.3rem'}}/>
							<div style={{ float:'left',marginLeft:'0.2rem'}}>
								<p style={{height:'0.6rem',lineHeight:'0.6rem',textAlign: 'left',fontSize:'0.26rem',margin:'0.4rem 0 0 0'}}>医生助理电话 <a href="tel:400-9696791">400-9696791</a></p>
								<p style={{height:'0.6rem',lineHeight:'0.6rem',textAlign: 'left',fontSize:'0.26rem',margin:'0'}}>帮助你快速预约</p>
							</div>
							<div className='clear'></div>
						</div>
					</div>
					<div>
						<Row style={{margin:'0'}}>
						    <Col xs={6} style={{padding:'0 0.08rem 0 0'}}>
						    	<div onClick={ toFirstPage } style={{backgroundColor:'#999',color:'#fff',fontSize:'0.34rem',textAlign:'center',height:'0.94rem',lineHeight:'0.94rem',width:'100%',borderRadius:'0.1rem'}}>我再想一想</div>
						    </Col>
						    <Col xs={6} style={{padding:'0 0 0 0.08rem'}}>
						    	<div onClick={ call } style={{backgroundColor:'#04b9c0',color:'#fff',fontSize:'0.34rem',textAlign:'center',height:'0.94rem',lineHeight:'0.94rem',width:'100%',borderRadius:'0.1rem'}}>好的,打吧</div>
						    </Col>
					    </Row>
					</div>
				</div>
			</div>
		)
}

const styles = {
	container:{

	},
	card:{
		backgroundColor:'#fff',
		marginTop:'0.2rem',
    position: 'relative',
		borderRadius:'0.2rem',
		boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
		padding:'0.3rem'
	},
	title:{
		fontSize:'0.3rem',
		display:'block',
		width:'100%',
		height:'0.96rem',
		lineHeight:'0.96rem',
		borderBottom:'1px solid #d5dbe0',
		textAlign:'center'
	}
}
