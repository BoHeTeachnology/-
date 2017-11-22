import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import ReactSwipe from 'react-swipe';
import loginstyles from 'app/common/css/login.css'
import Hammer from 'react-hammerjs'
import { Button,ButtonToolbar,Grid,Row,Col,Image,Thumbnail,PageHeader,small,Media,Tab,Nav,NavItem,Modal} from 'react-bootstrap';
import ImageView from 'react-imageview'
import ReactList from 'react-list';
import { qiniudomain } from 'app/util/utils.js'
import { Icon,Toast} from 'antd-mobile';
import { ListView } from 'antd-mobile';





export const DoctorInfoUi = ({
	passcases,
	orderinfo,
	timearray,
	id,
	name,
	institution,
	skilledin,
	orderdatestr,
	ordercatstr,
	city,
	servicelist,
	jobtitle,
	photo,
	sort,
	introduce,
	experience,
	changeTap,
	tap,
	follow,
	followClick,
	panelshow,
	close,
	down,
	upAndDown,
	lightboxIsOpen,
	showViewer,
	closes,
	show,
	currentNum,
	imagelist,
	share,
	askDoctor,
	renderItem,
	length,
	currentindex,
	ordermodalshow,
	goorderclickhandle,
	follownum,
	orderdatettimehandle,
	ordertimeclickhandle,
	ordermodalclose,
	handlePan,
	options,
	passcaseclickhandle,
	onEndReached,
	dataSource,
	row,
	toLoad,
	turn_num,
	follow_num,
	message_num,
	meiqia,
	getWeekDay,
}) => {
		console.log('LENGTHLLLLL'+length);

		var top_isFull=true
	 	 timearray.map((timeitem,idx) =>{

    if(timeitem.is_full==0){
	   top_isFull =false
		 return
	 }
		 })


		var isZhengji =false;
		if(ordercatstr.indexOf('正畸')>-1 || ordercatstr.indexOf('种植')>-1 || ordercatstr.indexOf('种牙')>-1){
			isZhengji =true
		}
        return (
	            <div style={styles.container} className='doctorinfo_container'>



        	        {/* <Modal
			          show={panelshow}
			          onHide={()=>{ close('no') }}
			          container={this}
			          aria-labelledby="contained-modal-title"
			          style={{position:'fixed',top:'50%',width:'3.88rem',height:'2.36rem',left:'50%',marginTop:'-1.18rem',marginLeft:'-1.94rem',borderRadius:'0.2rem'}}
			        >
			          <Modal.Header closeButton>
			            <Modal.Title id="contained-modal-title" style={{fontSize:'0.28rem'}}>薄荷小提示</Modal.Title>
			          </Modal.Header>
			          <Modal.Body style={{fontSize:'0.28rem',textAlign:'center'}}>
			            是否取消对医生的关注
			          </Modal.Body>
			          <Modal.Footer style={{textAlign:'center'}}>
			            <Button onClick={ ()=>{ close('no') }} style={{fontSize:'0.28rem',padding:'0 0.5rem',color:'#fff',backgroundColor:'#bfc2c2',marginRight:'25px'}}>否</Button>
			            <Button onClick={ ()=>{ close('yes') }} style={{fontSize:'0.28rem',padding:'0 0.5rem',backgroundColor:'#04b9c0',color:'#fff'}}>是</Button>
			          </Modal.Footer>
			        </Modal> */}


							<Modal
						className="ordermodalwrap"
					  show={ordermodalshow}
					  onHide={()=>{ ordermodalclose() }}
					  container={this}
						transparent={true}
						animationType="slide-up"
					  aria-labelledby="contained-modal-title"
					  style={{position:'fixed',width:'100%',display:'block'}}
					 >
						 <div className="orderwrap">

						 <span style={{
							 position: 'absolute',
							 right: '0.4rem',
							 padding:'0.1rem',
							 fontSize:'0.4rem',
						 }} onClick={() => ordermodalclose()}>
							 x
						 </span>

						 <p className="ordertip">
							 请选择就诊时间
						 </p>

						 <div className="orderdate" style={{
							 height:'1.5rem',
						 }}>
							 <ul style={{ width:(orderinfo).length*2.2+0.2+(orderinfo.length-1)*0.2+'rem' }}>
							 {
								 (orderinfo).map((orderdata,idx) =>{
									 return (
 										<li key={idx} style={{width:'2.2rem',color:(currentindex==idx ? '#4ac3c3':(top_isFull ?'rgba(0, 0, 0, 0.45)':'rgba(0,0, 0,0.75)')),border:(currentindex==idx ? '1px solid #4ac3c3': (top_isFull ?'1px solid rgba(0, 0, 0, 0.45)':'1px solid rgba(0, 0, 0, 0.75)')),borderRadius:'0.04rem'}} onClick={() =>{ordertimeclickhandle(idx)}}><p style={{marginBottom:0}}>{orderdata[0].date}</p><span>{getWeekDay(orderdata[0].date)}</span></li>
 							         )
								 })
							 }
							 </ul>
						 </div>
						 <div className="ordertime" style={{backgroundColor:'white',paddingBottom:'0.2rem'}}>
							 <ul style={{padding: '0.2rem',marginRight:'0.2rem'}}>
								 {
                 timearray.map((timeitem,index) =>{
									 return(
										 <li style={{background:'rgba(250, 250, 250,1)',borderRadius:'0.1rem 0.1rem 0 0',height:'0.96rem',lineHeight:'0.96rem'}}><span>{timeitem.time} ~ {timeitem.end_time} {timeitem.is_full==0?' (可约)':' (约满)'} </span><a style={{color:timeitem.is_full==0?'rgb(74, 195, 195)':'rgba(0, 0, 0,0.2)',padding:'.1rem .36rem',height:'0.2rem',fontSize:'0.28rem'}} onClick={() =>{ timeitem.is_full ==0 ? orderdatettimehandle((timeitem.time +'~'+timeitem.end_time),index):''}}>预约 ►</a></li>
									 )
								 })

								 }
							 </ul>
						 </div>
					 </div>
					 </Modal>


	            	{/* <img src={ require('app/common/images/doctor_back.png')} style={{height:'2.68rem',width:'100%'}}/> */}
	            	{/* <div onClick={ share } style={{ position:'absolute',right:'0.2rem',top:'0.4rem' }}>
	            		<img style={{width:'0.25rem',marginTop:'-0.09rem',marginRight:'0.09rem'}} src={ require('app/common/images/greenshare.png') } />
	            		<span style={{fontSize:'0.18rem'}}>分享该医生名片给好友</span>
					       </div> */}
					<div style={{
						backgroundColor:'#fff',
            width: '100%',
            height: '2.2rem',
            textAlign: 'center',
						position:'relative',
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
						}}>{name?name:''}</span>
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

						}}>{institution?institution:''} ｜ {jobtitle?jobtitle:''}</span>
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
					 {/* <img src={ require('app/common/images/down_arrow.png') }
					 style={{
						 position: 'absolute',
             width: '0.48rem',
             height: '0.48rem',
             right: '0.3rem',
             bottom: '0.5rem',
					 }}
					 onClick={ meiqia } className='' /> */}

						{/* <Grid style={{marginTop:'0.55rem'}}>
						    <Row className="show-grid" style={{padding:'0 0.6rem'}}>
						      <Col xs={4} >
						      	 <Image src={require('app/common/images/question.png')} responsive style={{display:'inline-block'}}/><br/>
						      	 <span style={{display:'inline-block',fontSize:'0.28rem',margin:'0.1rem 0 0.04rem'}}>留言</span><br/>
						      	 <span style={{display:'inline-block',fontSize:'0.28rem'}}>{message_num}</span>
						      </Col>
						      <Col xs={4} >
						      	 <Image src={require('app/common/images/care.png')} responsive style={{display:'inline-block'}}/><br/>
						      	 <span style={{display:'inline-block',fontSize:'0.28rem',margin:'0.1rem 0 0.04rem'}}>关注</span><br/>
						      	 <span style={{display:'inline-block',fontSize:'0.28rem'}}>{follow_num}</span>
						      </Col>
						      <Col xs={4} >
						      	 <Image src={require('app/common/images/share.png')} responsive style={{display:'inline-block'}}/><br/>
						      	 <span style={{display:'inline-block',fontSize:'0.28rem',margin:'0.1rem 0 0.04rem'}}>分享</span><br/>
						      	 <span style={{display:'inline-block',fontSize:'0.28rem'}}>{turn_num}</span>
						      </Col>
						    </Row>
					  	</Grid> */}
					</div>

					{/* <Grid style={{backgroundColor:'#fff',height:'0.86rem',width:'100%',margin:'0.2rem 0'}}>
	            	    <Row className="show-grid">
					      <Col xs={4} md={4} style={{height:'0.86rem',textAlign:'center'}}>
					      	<span onClick={ ()=>{ changeTap(1) }} style={{borderBottom: (tap==1)?'2px solid #04b9c0':'2px solid #fff',color: (tap==1)?'#04b9c0':'#2a2b2c',fontSize:'0.28rem',marginTop:'0.16rem',lineHeight:'0.86rem'}}>医生详情</span>
					      </Col>
					      <Col xs={4} md={4} style={{height:'0.86rem',textAlign:'center'}}>
					      	<span onClick={ ()=>{ changeTap(2) }} style={{borderBottom: (tap==2)?'2px solid #04b9c0':'2px solid #fff',color: (tap==2)?'#04b9c0':'#2a2b2c',fontSize:'0.28rem',marginTop:'0.16rem',lineHeight:'0.86rem'}}>过往案例</span>
				      	  </Col>
				      	  <Col xs={4} md={4} style={{height:'0.86rem',textAlign:'center'}}>
					      	<span onClick={ ()=>{ changeTap(3) }} style={{borderBottom: (tap==3)?'2px solid #04b9c0':'2px solid #fff',color: (tap==3)?'#04b9c0':'#2a2b2c',fontSize:'0.28rem',marginTop:'0.16rem',lineHeight:'0.86rem'}}>患者留言</span>
				      	  </Col>
					    </Row>
	            </Grid> */}

	                <div style={{display:(tap==1)?'block':'none',marginTop:'0.01rem'}}>
		                <div style={{backgroundColor:'#fff',marginBottom:'0.01rem',padding:'0.4rem 0.3rem 0 0.3rem'}}>
		                	<h4 style={{fontSize:'0.32rem',marginBottom:'0.3rem',color:'rgba(0,0,0,0.75)'}}>名医简介</h4>
		                	<p style={{ fontSize:'0.28rem',color:'rgba(0,0,0,0.45)',height:upAndDown?'auto':'1rem',WebkitLineClamp:upAndDown?'':2,WebkitBoxOrient:'vertical',lineHeight:'0.5rem',display:'-webkit-box',overflow:(upAndDown)?'visible':'hidden',textOverflow:'ellipsis',marginBottom:0}}>
		                		{ introduce }
		                	</p>
		                	<img src={ require('app/common/images/down_arrow.png') } onClick={ down } className={ upAndDown?'arrow_transfrom':''} style={{display:'block',margin:'0 auto',padding: '0.3rem 0'}}/>

										</div>

		                <div style={{backgroundColor:'#fff',marginBottom:'0.01rem',padding:'0.4rem 0.3rem'}}>
		                	<h4 style={{fontSize:'0.32rem',marginBottom:'0.3rem',color:'rgba(0,0,0,0.75)'}}>擅长领域</h4>
		                	{/* {
		                		servicelist?servicelist.map((servicestr)=>{
		                			return (<span style={{border:'1px solid #04b9c0',padding:'0.04rem 0.2rem',color:'#04b9c0',fontSize:'0.28rem',marginRight:'0.28rem',borderRadius:'0.07rem'}}>{servicestr}</span>)
		                		}):''
                       } */}
												<span style={{color:'rgba(0,0,0,0.45)',fontSize:'0.28rem',marginRight:'0.3rem'}}>{skilledin}</span>

		                </div>
										<div className="go_order" style={{backgroundColor:'#fff',marginBottom:'0.01rem',padding:'0.4rem 0.3rem',position:'relative'}}>
											<h4 style={{fontSize:'0.32rem',marginBottom:'0.3rem',color:'rgba(0,0,0,0.75)'}}>出诊安排</h4>
											<p style={{ fontSize:'0.28rem',color:'rgba(0,0,0,0.45)',width:'75%',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis' }}>出诊项目：{ordercatstr?ordercatstr:'暂无出诊项目'}</p>
											<p style={{ fontSize:'0.28rem',color:'rgba(0,0,0,0.45)',width:'100%',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis' }}>出诊日期：{orderdatestr?orderdatestr:'暂无出诊安排'}</p>
											<span style={
												orderdatestr
												?{
													color: 'rgb(4, 185, 192)',
											    fontSize: '0.28rem',
											    padding: '0.15rem',
											    textAlign: 'center',
											    borderRadius: '0.1rem',
											    position: 'absolute',
											    right: '0.3rem',
											    top: '0.96rem',
													}
												:{
													color: 'rgb(0,0,0,0.45)',
											    fontSize: '0.28rem',
											    padding: '0.15rem',
											    textAlign: 'center',
											    borderRadius: '0.1rem',
											    position: 'absolute',
											    right: '0.3rem',
											    top: '0.96rem',
											    }
										} onClick={() =>{ orderdatestr?goorderclickhandle():''}}>立即预约 ></span>

                  <div className="codeWrap" style={{
										marginTop: '0.3rem',
								    textAlign: 'center',
								    height: '5.02rem',
										borderRadius: '0.04rem',
                    backgroundColor: 'rgb(250, 250, 250)',
									}}>
										<img src={isZhengji?require('app/common/images/img_qrcode_richard.jpeg'):require('app/common/images/img_qrcode_luna.jpeg')} alt="" style={{
											height:'3.16rem',
									    width:'3.16rem',
									    margin:'0.3rem auto',
										}} />
                  	<p style={{
											fontSize: '0.28rem',
                      color: 'rgba(0,0,0,0.45)',
										}}>添加<strong style={{
											fontSize: '0.28rem',
                      color: 'rgba(0,0,0,0.75)',
										}}> 医生助理 {isZhengji?'Richard':'Luna'} </strong>为好友</p>
										<p style={{
											fontSize: '0.28rem',
                      color: 'rgba(0,0,0,0.45)',
										}}>一键预约，安心看牙</p>
                  </div>
										</div>

		                <div style={{backgroundColor:'#fff',marginBottom:'0.01rem',padding:'0.4rem 0.3rem'}}>
		                	<h4 style={{fontSize:'0.32rem',color:'rgba(0,0,0,0.75)',marginBottom:'0.3rem'}}>职称和专业认证</h4>
		                	<p style={{fontSize:'0.28rem',color:'rgba(0,0,0,0.45)'}}>{city?city:''}</p>
		                	<p style={{fontSize:'0.28rem',color:'rgba(0,0,0,0.45)'}}>{experience}</p>
		                </div>

		                <div style={{backgroundColor:'#fff',marginBottom:'0.2rem',padding:'0.4rem 0.3rem'}}>
		                	<h4 style={{fontSize:'0.32rem',color:'rgba(0,0,0,0.75)',marginBottom:'0.3rem'}}>第一执业机构</h4>
		                	<p style={{fontSize:'0.28rem',color:'rgba(0,0,0,0.45)'}}>{institution?institution:''}</p>
		                </div>

		                <Grid style={{padding:'0.3rem',width:'100%'}}>

					  	</Grid>
				  	</div>

				  	{/* <div style={{ display:(tap==2)?'block':'none'}}>

						{
						 ( passcases && passcases.length!=0)?passcases.map((pasecaseitem,index) =>{
							 return(
								 <Grid key={index} onClick={() =>{ passcaseclickhandle(pasecaseitem.id) }  } style={{padding:'0.3rem',width:'100%',backgroundColor:'#fff',marginBottom:'0.2rem'}}>
									 <Row style={{margin:'0'}}>
										 <Col xs={12}>
											 <div style={{fontSize:'0.3rem',marginBottom:'0.2rem',position:'relative'}}>
												 {pasecaseitem.title}
												 <div style={{ borderRadius:'0.16rem',width:'100%',height:'2.8rem',backgroundColor:'rgba(0,0,0,0.4)',color:'#fff',position:'absolute',top:'0.63rem',left:'0'}}>
													 <span style={{position:'absolute',right:'0.3rem',bottom:'0.1rem',fontSize:'0.24rem'}}></span>
												 </div>
											 </div>
											 <img src={ pasecaseitem.photo?qiniudomain+pasecaseitem.photo:'' } style={{borderRadius:'0.16rem',width:'100%',height:'2.8rem'}}/>
											 <p style={{fontSize:'0.26rem',color:'6e6e70',marginTop:'0.2rem'}}>{pasecaseitem.views} 阅读</p>
										 </Col>
									 </Row>
								 </Grid>
							 )
						 }):(<div style={{textAlign:'center',marginTop:'1rem'}}><img src={require('app/common/images/nopass.png')}/></div>)
						}
					  	<Grid style={{padding:'0.3rem',width:'100%',display:'none'}}>
						    <Row style={{margin:'0'}}>
							    <Col xs={6} style={{padding:'0 0.08rem 0 0'}}>
							    	<div style={{backgroundColor:'#04b9c0',color:'#fff',fontSize:'0.34rem',textAlign:'center',height:'0.94rem',lineHeight:'0.94rem',width:'100%',borderRadius:'0.1rem'}}>向医生提问</div>
							    </Col>
							    <Col xs={6} style={{padding:'0 0 0 0.08rem'}}>
							    	<div style={{backgroundColor:'#ff673e',color:'#fff',fontSize:'0.34rem',textAlign:'center',height:'0.94rem',lineHeight:'0.94rem',width:'100%',borderRadius:'0.1rem'}}>联系医生助理</div>
							    </Col>
						    </Row>
					  	</Grid>

				  	</div> */}
						{/* <div style={{ display:(tap==3)?'block':'none',marginBottom:'0rem'}}>

							{
								message_num != 0?(
									<ListView ref="lv"
										dataSource={dataSource}
										renderRow={row}
										className="am-list"
										useBodyScroll
										onScroll={() => { console.log('scroll'); }}
										scrollRenderAheadDistance={500}
										scrollEventThrottle={200}
										onEndReached={onEndReached}
										onEndReachedThreshold={10}
										renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}></div>)}
									/>):(
										<div style={{textAlign:'center',marginTop:'1rem'}}><img src={require('app/common/images/nomessage.png')}/></div>)
							}


						</div>
					<div>
              {
                  !!showViewer && <ImageView imagelist={imagelist} close={ closes } current={ currentNum }/>
              }
          </div> */}
					<div style={{
						position: 'fixed',
            bottom:'0rem',
            width: '100%',
            paddingBottom:'0.2rem',
						paddingTop:'0.2rem',
						borderTop: '1px solid rgba(0,0,0,0.2)',
            backgroundColor:'rgba(247, 247, 247,1)',
	      }}>
				<div style={{width:'100%'}}>
					   <Col xs={6} style={{padding:'0',textAlign: 'center'}}>
							 <img src={require('app/common/images/icon_chat.png')}
                style={{
									width: '0.48rem',
                  height: '0.48rem',
                  position: 'absolute',
                  top: '0.15rem',
                  left: '0.7rem',
								}}
							 alt="" />
						  <div onClick={ meiqia } style={{
								height:'0.8rem',
								lineHeight:'0.8rem',
								paddingLeft:'0.4rem',
								textAlign:'center',
								borderRight:'1px solid rgba(0,0,0,0.2)',
							}}>在线咨询</div>
					   </Col>
						<Col xs={6} style={{padding:'0'}}>
							<img src={require('app/common/images/icon_phone.png')}
							style={{
								width: '0.48rem',
								height: '0.48rem',
								position: 'absolute',
								top: '0.15rem',
								left: '0.7rem',
							}}
							 alt="" />
							<div onClick={ ()=>{ askDoctor(id) }} style={{
								height:'0.8rem',
								lineHeight:'0.8rem',
								textAlign:'center',
								paddingLeft:'0.4rem',
							}}>电话预约</div>
						</Col>

				</div>
					</div>

				</div>
        );

}

const styles = {
	container:{
		margin:0,
		padding:0,
		paddingBottom:'0.34rem',
		backgroundColor:'#eff3f7',
		position:'relative'
	}
}

// <Hammer direction={'DIRECTION_VERTICAL'} options={options}  onPan={ handlePan }>
// 		<ReactList ref="list" axis='y'
// 			itemRenderer={ renderItem }
// 			length={ length }
// 			type='variable'
// 		/>
//
// </Hammer>
