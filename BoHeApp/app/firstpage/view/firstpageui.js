import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import ReactSwipe from 'react-swipe';
import loginstyles from 'app/common/css/login.css'
import Hammer from 'react-hammerjs'
import { Button,ButtonToolbar,Grid,Row,Col,Image,Thumbnail,PageHeader,small,Media,Tab,Nav,NavItem} from 'react-bootstrap';
import {qiniudomain} from 'app/util/utils.js'

const swipeOptions = {
    startSlide: 0,
    auto:  3000,
    speed:  400,
    disableScroll: false,
    continuous: true,
    callback() {
    },
    transitionEnd() {
    }
};

export const FirstPageUi = ({
  home_doctorlist,
  attention_doctorlist,
  famous_doctorlist,
  doctordetailclickhandle,
	handleSwipe,
	toDoctorList,
	toDoctor,
	toOrder,
	toProjectList,
	tap,
	changeTap,
	is_login,
	tologin,
	toQuickOrder,
  banner,
  backoldversionclickhandle,
  toBanner,
  // toMyCenter,
  // toFindDoctor,
}) => {
        return (
	            <div style={styles.container} className='firstpage_container'>
	            	<Hammer onSwipe={ handleSwipe }>
					          <div className={loginstyles.container} style={{height:'3.4rem'}}>
			                <ReactSwipe ref="reactSwipe" swipeOptions={swipeOptions}>
                        {
                          banner.map((item)=>{
                            return (
                              <div>
              									<div style={styles.banner}>
                                  <img src={qiniudomain+item.photo} style={{width:"100%",height:'100%'}} onClick={ ()=>{ toBanner(item.url) }}/>
                                </div>
              								</div>
                            )
                          })
                        }
		                	</ReactSwipe>
         			       </div>
	                </Hammer>

                  <div style={{width:'100%',height:'1.7rem',padding:'0.28rem 0.3rem',backgroundColor:'#fff',margin:'0',borderTop:'1px solid #E8ECEF',borderBottom:'1px solid #E8ECEF'}}>
                     <div style={{ marginTop:'0.2rem' }}>
                        <Image src={require("app/common/images/doctoravatar.png")} responsive style={{width:'0.51rem',height:'0.60rem',marginTop:'0.08rem',marginRight:'0.36rem',float:'left'}}/>
                        <div style={{ height:'0.9rem'}}>
                          <div style={{float:'left',marginTop:'2px'}}>
                            <h4 style={{margin:'0',height:'0.44rem',lineHeight:'0.44rem',color:'#2a2b2c',fontSize:'34px'}}>找医生</h4>
                            <h6 style={{margin:'0',height:'0.44rem',lineHeight:'0.44rem',color:'#04b9c0',fontSize:'22px'}}>查擅长,出诊安排</h6>
                          </div>
                          <div onClick={ toDoctorList } style={{float:'right',height:'0.6rem',lineHeight:'0.6rem',padding:'0 0.2rem',margin:'0.14rem 0',border:'1px solid #04b9c0',borderRadius:'0.3rem',backgroundColor:'#04b9c0',color:'#fff',fontSize:'0.28rem'}}>
                            医生团队
                          </div>
                          <div style={styles.clear}></div>
                        </div>
                    </div>
                   </div>

				  	<div style={{width:'100%',height:'1.7rem',padding:'0.28rem 0.3rem',backgroundColor:'#fff',margin:'0 0 0.16rem 0',borderTop:'1px solid #E8ECEF',borderBottom:'1px solid #E8ECEF'}}>
              <div style={{ marginTop:'0.18rem' }}>
  						    <Image src={require("app/common/images/quickorder.png")} responsive style={{width:'0.51rem',height:'0.60rem',marginTop:'0.08rem',marginRight:'0.36rem',float:'left'}}/>
              		<div style={{ height:'0.9rem'}}>
              			<div style={{float:'left',marginTop:'2px'}}>
              				<h4 style={{margin:'0',height:'0.44rem',lineHeight:'0.44rem',color:'#2a2b2c',fontSize:'34px'}}>快速预约三甲医院的医生</h4>
              				<h6 style={{margin:'0',height:'0.44rem',lineHeight:'0.44rem',color:'#04b9c0',fontSize:'22px'}}>我可是个有要求的人</h6>
              			</div>
              			<div onClick={ toQuickOrder } style={{float:'right',height:'0.6rem',lineHeight:'0.6rem',padding:'0 0.2rem',margin:'0.14rem 0',border:'1px solid #04b9c0',borderRadius:'0.3rem',backgroundColor:'#04b9c0',color:'#fff',fontSize:'0.28rem'}}>
              				快速预约
              			</div>
              			<div style={styles.clear}></div>
              		</div>
            	</div>
            </div>



            <Grid style={{backgroundColor:'#fff',height:'1.1rem',width:'100%',padding:'0.1rem'}}>
        	    <Row className="show-grid" style={{width:'100%'}}>
					      <Col xs={12} md={12} style={{height:'0.86rem',textAlign:'center'}}>
					      	<span onClick={ ()=>{ changeTap(1) }} style={{borderBottom: (tap==1)?'2px solid #04b9c0':'2px solid #fff',color: (tap==1)?'#04b9c0':'#2a2b2c',fontSize:'0.3rem',padding:'0.1rem',position:'relative',top:'0.16rem'}}>名医推荐</span>
					      </Col>
					      {/* <Col xs={6} md={6} style={{height:'0.86rem',paddingLeft:'0.4rem'}}>
					      	<span onClick={ ()=>{ changeTap(2) }} style={{borderBottom: (tap==2)?'2px solid #04b9c0':'2px solid #fff',float:'left',color: (tap==2)?'#04b9c0':'#2a2b2c',fontSize:'0.3rem',height:'0.5rem',marginTop:'0.16rem',lineHeight:'0.5rem'}}>与我有关</span>
			      	  </Col> */}
					    </Row>
            </Grid>

            <Grid style={{padding:0,width:'100%',backgroundColor:'rgb(239, 243, 247)',display:(tap==1)?'block':'none'}}>
              {
                famous_doctorlist.map((itemwrap,index)=>{
                  console.log('warp--------')
                  console.log(index);
                  if(index%2 == 0){
                    return (
                      <Row style={(index==0)?{margin:0,marginTop:'0.2rem',backgroundColor:'rgb(239, 243, 247)',padding:0}:{margin:0,marginTop:'0',backgroundColor:'rgb(239, 243, 247)',padding:0}} key={index}>
                      {
                        famousDoctor(famous_doctorlist,index,doctordetailclickhandle)
                      }
                      </Row>
                    )
                  }
                })
              }

            </Grid>

				  	{/* <div className="myattentionwrap" style={{ backgroundColor:'rgb(239, 243, 247)',display:(tap==2)?'block':'none'}}>
				  		<div style={{display:(is_login?'block':'none'),borderTop:'0.2rem solid rgb(239, 243, 247)'}}>
						  	<div style={{ width:'100%',height:'0.86rem',backgroundColor:'#fff',padding:'0 0.3rem',color:'#666',lineHeight:'0.86rem',fontSize:'0.28rem',marginBottom:'0.2rem'}}>
						  		我关注的
						  	</div>
						  	 <Grid style={{padding:'0rem',width:'100%'}}>
							    <Row style={{margin:'0',backgroundColor:'rgb(239, 243, 247)'}}>

                    {
                      attention_doctorlist?attention_doctorlist.map((attentionlistitem,index) =>{
                        return (<Col xs={6} style={(index%2==0)?{padding:'0 0.1rem 0 0'}:{padding:'0 0 0 0.1rem'}} key={index}>
                        <Thumbnail src={attentionlistitem.photo?qiniudomain+attentionlistitem.photo:require("app/common/images/quick_order.png")} onClick={() =>{doctordetailclickhandle(attentionlistitem.id)}} alt="" style={{padding:'0.2rem 0.1rem 0 0',heigth:'3.76rem',borderRadius:'10px',marginTop:'0'}}>
                          <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'0.2rem',left:'1.63rem',color:'#2a2b2c'}}>{attentionlistitem.name}</h4>
                          <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'0.8rem',left:'1.63rem',color:'#666' }}>{attentionlistitem.jobtitle}</h4>
                          <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem',marginLeft:'0.2rem'}}>{attentionlistitem.institution}</h4>
                          <p style={{ fontSize:'0.22rem',color:'#999',marginLeft:'0.1rem',textOverflow:'ellipsis',overflow:'hidden',borderTop:'1px solid #999',marginTop:'0.22rem',textAlign:'left',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
                            {attentionlistitem.introduce}
                          </p>

                        </Thumbnail>
                      </Col>)

                    }):''
                     }

							    </Row>
						  	</Grid>

						  	<div style={{ display:'none',width:'100%',height:'0.86rem',backgroundColor:'#fff',padding:'0 0.3rem',color:'#666',lineHeight:'0.86rem',fontSize:'0.28rem'}}>
						  		我的私人牙医
						  	</div>
						  	<Grid style={{padding:'0.3rem',width:'100%',display:'none'}}>
							    <Row style={{margin:'0'}}>
								    <Col xs={6} style={{padding:'0 0.08rem 0 0'}}>
								      <Thumbnail src={require("app/common/images/quick_order.png")} alt="242x200" style={{padding:'0.2rem',heigth:'3.76rem',borderRadius:'3px'}}>
								        <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'-1rem',left:'1.43rem',color:'#2a2b2c'}}>南哲</h4>
								        <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'-0.5rem',left:'1.43rem',color:'#666' }}>主任医师</h4>
								        <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem'}}>北京大学口腔医院</h4>
								        <p style={{ fontSize:'0.22rem',color:'#666',borderTop:'1px solid #666',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
								        	fasklfjklas离开那里开房间里卡芬兰马上付款啦什么asfafsaffasfas
								        </p>

								      </Thumbnail>
								    </Col>
								    <Col xs={6} style={{padding:'0 0 0 0.08rem'}}>
								      <Thumbnail src={require("app/common/images/quick_order.png")} alt="242x200" style={{padding:'0.2rem',heigth:'3.76rem',borderRadius:'3px'}}>
								        <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'-1rem',left:'1.43rem',color:'#2a2b2c'}}>南哲</h4>
								        <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'-0.5rem',left:'1.43rem',color:'#666' }}>主任医师</h4>
								        <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem'}}>北京大学口腔医院</h4>
								        <p style={{ fontSize:'0.22rem',color:'#666',borderTop:'1px solid #666',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
								        	fasklfjklas离开那里开房间里卡芬兰马上付款啦什么asfafsaffasfas
								        </p>

								      </Thumbnail>
								    </Col>
							    </Row>
							    <Row style={{margin:'0'}}>
								    <Col xs={6} style={{padding:'0 0.08rem 0 0'}}>
								      <Thumbnail src={require("app/common/images/quick_order.png")} alt="242x200" style={{padding:'0.2rem',heigth:'3.76rem',borderRadius:'3px'}}>
								        <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'-1rem',left:'1.43rem',color:'#2a2b2c'}}>南哲</h4>
								        <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'-0.5rem',left:'1.43rem',color:'#666' }}>主任医师</h4>
								        <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem'}}>北京大学口腔医院</h4>
								        <p style={{ fontSize:'0.22rem',color:'#666',borderTop:'1px solid #666',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
								        	fasklfjklas离开那里开房间里卡芬兰马上付款啦什么asfafsaffasfas
								        </p>

								      </Thumbnail>
								    </Col>
								    <Col xs={6} style={{padding:'0 0 0 0.08rem'}}>
								      <Thumbnail src={require("app/common/images/quick_order.png")} alt="242x200" style={{padding:'0.2rem',heigth:'3.76rem',borderRadius:'3px'}}>
								        <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'-1rem',left:'1.43rem',color:'#2a2b2c'}}>南哲</h4>
								        <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'-0.5rem',left:'1.43rem',color:'#666' }}>主任医师</h4>
								        <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem'}}>北京大学口腔医院</h4>
								        <p style={{ fontSize:'0.22rem',color:'#666',borderTop:'1px solid #666',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
								        	fasklfjklas离开那里开房间里卡芬兰马上付款啦什么asfafsaffasfas
								        </p>

								      </Thumbnail>
								    </Col>
							    </Row>
						  	</Grid>
						</div>
						 <div style={{display:(is_login?'none':'block'),borderTop:'1px solid #d4dadf',borderBottom:'1px solid #d4dadf'}}>
							<div style={{height:'3.6rem',textAlign:'center'}}>
								<span onClick={ tologin } style={{display:'inline-block',padding:'0 0.4rem',color:'#fff',backgroundColor:'#04b9c0',borderRadius:'0.12rem',margin:'1rem auto 0.4rem',height:'0.6rem',lineHeight:'0.6rem',fontSize:'0.3rem'}}>登录／注册</span>
								<div style={{margin:'0 auto',color:'#2a2b2c',fontSize:'0.22rem'}}>注册成为薄荷牙医的用户,</div>
								<div style={{margin:'0.1rem auto',color:'#2a2b2c',fontSize:'0.22rem'}}>关注您喜欢的医生</div>
							</div>
							<div style={{ width:'100%',height:'0.86rem',display:'none',backgroundColor:'#fff',padding:'0 0.3rem',color:'#666',lineHeight:'0.86rem',fontSize:'0.28rem'}}>
						  		为您推荐
						  	</div>
						  	<Grid style={{padding:'0.3rem',width:'100%',display:'none'}}>
							    <Row style={{margin:'0'}}>
								    <Col xs={6} style={{padding:'0 0.08rem 0 0'}}>
								      <Thumbnail src={require("app/common/images/quick_order.png")} alt="242x200" style={{padding:'0.2rem',heigth:'3.76rem',borderRadius:'3px'}}>
								        <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'0.2rem',left:'1.43rem',color:'#2a2b2c'}}>南哲</h4>
								        <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'0.8rem',left:'1.43rem',color:'#666' }}>主任医师</h4>
								        <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem'}}>北京大学口腔医院</h4>
								        <p style={{ fontSize:'0.22rem',color:'#666',borderTop:'1px solid #666',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
								        	fasklfjklas离开那里开房间里卡芬兰马上付款啦什么asfafsaffasfas
								        </p>

								      </Thumbnail>
								    </Col>
								    <Col xs={6} style={{padding:'0 0 0 0.08rem'}}>
								      <Thumbnail src={require("app/common/images/quick_order.png")} alt="242x200" style={{padding:'0.2rem',heigth:'3.76rem',borderRadius:'3px'}}>
								        <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'0.2rem',left:'1.43rem',color:'#2a2b2c'}}>南哲</h4>
								        <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'0.8rem',left:'1.43rem',color:'#666' }}>主任医师</h4>
								        <h4 style={{color:'#666',fontSize:'0.26rem',marginTop:'0.22rem'}}>北京大学口腔医院</h4>
								        <p style={{ fontSize:'0.22rem',color:'#666',borderTop:'1px solid #666',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
								        	fasklfjklas离开那里开房间里卡芬兰马上付款啦什么asfafsaffasfas
								        </p>

								      </Thumbnail>
								    </Col>
							    </Row>
						  	</Grid>
						</div>

					</div> */}
          {/* <div className="backoldversion" onClick={ backoldversionclickhandle } style={{ textAlign:'center',marginTop:'0.6rem',position:'relative',backgroundColor:'white',padding:'0.1rem 0'}}>
            返回旧版
          </div>  */}
				  	<div style={{width:'100%',textAlign:'center'}}>
					  	<img src={require('app/common/images/bohelogo.png')} style={{width:'1.5rem',height:'1.5rem',marginTop:'1rem'}}/>
					  	<br/>
					  	<br/>
					  	<br/>
				  	</div>

            <div style={{
              position: 'fixed',
              bottom:'0rem',
              width: '100%',
              paddingBottom:'0.2rem',
              paddingTop:'0.2rem',
              borderTop: '1px solid rgba(0,0,0,0.2)',
              backgroundColor:'rgba(247, 247, 247,1)',
            }}>
            {/* <div style={{width:'100%'}}>
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
                <div  onClick={toFindDoctor} style={{
                  height:'0.8rem',
                  lineHeight:'0.8rem',
                  paddingLeft:'0.4rem',
                  textAlign:'center',
                  borderRight:'1px solid rgba(0,0,0,0.2)',
                }}>找医生</div>
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
                <div onClick={ toMyCenter} style={{
                  height:'0.8rem',
                  lineHeight:'0.8rem',
                  textAlign:'center',
                  paddingLeft:'0.4rem',
                }}>个人中心</div>
              </Col>

            </div> */}
            </div>



				</div>
        );

}

const styles = {
	container:{
		margin:0,
		padding:0,
		backgroundColor:'#eff3f7',
    height:'3.4rem'
	},
	banner:{
		width:'100%',
		height:'3.4rem',
		backgroundColor:'#fff',
		fontSize:'0.3rem'
	},
	bodystyle:{
		position: "relative",
		height: "100%",
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: "0.28rem",
		color:"#000",
		margin: 0,
		padding: 0,
        WebkitTapHighlightColor: "transparent",
        FontFamily: "微软雅黑,Arial,sans-serif",
        background: "#fff",
        margin:0,
        padding:0
   	},
   	small_container:{
   		height:'0.86rem',
   		lineHeight:'0.86rem',
   		fontSize:'0.30rem',
   		padding:'0 0.30rem',
   		backgroundColor:'#fff'
   	},
   	small_title:{
   		borderBottom:'0.02rem solid #d4dadf',
   		height:'0.86rem',
   		lineHeight:'0.86rem',
   		margin:'0',
   		color:'#2a2b2c',
   		fontSize:'0.30rem'
   	},
   	more:{
   		float:'right',
   		fontSize:'0.24rem',
   		color:'#04b9c0'
   	},
   	clear:{
   		clear:'both'
   	},
   	thumbnail_name:{
   		position:'absolute'
   	}
}

function famousDoctor(famous_doctorlist,index,doctordetailclickhandle){
  let _view = famous_doctorlist.slice(index,index+2).map((item,idx)=>{
    console.log('----------')
    console.log(idx);
    return (
    //   <Col key={idx} xs={6} style={ (idx%2==0)?{padding:'0 0.08rem 0 0'}:{padding:'0 0 0 0.08rem'}}>
    //   <Thumbnail onClick={() =>{doctordetailclickhandle(item.id)}} src={ item.photo?(qiniudomain+item.photo):require("app/common/images/quick_order.png")} alt="242x200" style={{paddingTop:'0.2rem',heigth:'3.76rem',borderRadius:'10px'}}>
    //     <h4 style={{ fontSize:'0.26rem',position:'absolute',top:'0.2rem',left:'1.63rem',color:'#2a2b2c',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: 1,WebkitBoxOrient: 'vertical',overflow:'hidden'}}>{item.name}</h4>
    //     <h4 style={{ fontSize:'0.22rem',position:'absolute',top:'0.8rem',left:'1.63rem',color:'#666',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: 1,WebkitBoxOrient: 'vertical',overflow:'hidden' }}>{item.jobtitle}</h4>
    //     <h4 style={{color:'#666',marginLeft:'0.1rem',fontSize:'0.26rem',marginTop:'0.22rem',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: 1,WebkitBoxOrient: 'vertical',overflow:'hidden'}}>{item.institution}</h4>
    //     <p style={{ marginLeft:'0.1rem',overflow:'hidden',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: 5,WebkitBoxOrient: 'vertical',fontSize:'0.22rem',color:'#999',borderTop:'1px solid #999',marginTop:'0.22rem',paddingTop:'0.19rem',height:'1.9rem',lineHeight:'0.35rem' }}>
    //       {item.introduce}
    //     </p>
    //
    //   </Thumbnail>
    // </Col>

    <div style={{
      backgroundColor:'#fff',
      width: '100%',
      height: '2.2rem',
      textAlign: 'center',
      position:'relative',
      borderBottom:'1px solid rgba(0,0,0,0.2)',
      }} onClick={() =>{doctordetailclickhandle(item.id)}}>
       {/* <div onClick={ ()=>{ followClick(follow) } } style={{fontSize:'0.28rem',position:'absolute',top:'2.98rem',right:'0.3rem',width:'1.14rem',height:'0.4rem',lineHeight:'0.4rem',color:'#fff',borderRadius:'0.08rem',textAlign:'center',backgroundColor:follow?'#ff673e':'#04b9c0' }}>{follow?'已关注':'＋关注'}</div> */}
      <img src={item.photo?(qiniudomain+item.photo):require("app/common/images/quick_order.png")} alt="242x200" style={{
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
      }}>{item.name}</span>
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

      }}>{item.degree?item.degree:''} ｜ {item.skilledin?item.skilledin:''}</span>
      <span style={{
         position: 'absolute',
         right: '0.3rem',
         top: '0.4rem',
         fontSize: '0.20rem',
         background: '#04b9c0',
         padding: '0.02rem 0.1rem',
         color: '#fff',
      }}>推荐</span>
    </div>
  )
  })
  return _view;
}
