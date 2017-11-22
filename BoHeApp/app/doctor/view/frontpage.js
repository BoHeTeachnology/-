import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'
import { List, Checkbox, Flex,Button } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


export const FrontPage = ({nodata,
   handlePan,
   options,
   renderItem,
   length,
   dropdown,
   tap,
   height,
   changeDoctor,
   search,
   change,
   clearSearch,
   searchDoctor,
   choose,
   chooseTime,
   servicecategroy,
   chooseSer,
   chooseTimeName,
   chooseSerName,
   keypress,
   change_week,
   week,
   confirm,
   chooseFamousName,
   chooseFamous
}) => {
        return (<div style={{backgroundColor:'#eff3f7',position:'relative'}} className='frontpage'>
              <div style={{height:'0.88rem',width:'100%',padding:'0.15rem 0.15rem',marginBottom:'0.2rem',backgroundColor:'#fff',position:'fixed',top:'0',zIndex:'9'}}>
                  <div style={{height:'0.8rem',lineHeight:'0.62rem',border:'1px solid #eee',borderRadius:'0.04rem',background:'#f7f7f7',}}>
                     <img src={ require('app/common/images/icon_search.png') } style={{margin:'0.1rem 0.1rem',float:'left',width:'0.5rem',height:'0.5rem' }}/>
                        <form onSubmit={keypress}>
                          <input onBlur={ keypress } onChange={ change } value={ searchDoctor } type='text' style={{color:'rgba(0,0,0,0.45)',width:'77%',height:'0.44rem',fontSize:'0.24rem',outline:'none',border:'none',marginTop:'0.06rem',backgroundColor:'#f7f7f7'}} placeholder='医生姓名／医院名称'/>
                        </form>
                     <img onClick={ clearSearch } src={ require('app/common/images/clean.png') } style={{float:'right',marginRight:'0.17rem',display:changeDoctor?'inline':'none',marginTop:'-0.4rem',width:'0.28rem',height:'0.28rem'}}/>
                     <div className='clear'></div>
                  </div>
              </div>
              <div style={{width:'100%',height:'0.2rem',backgroundColor:'#fff',borderBottom:'1px solid #eee',position:'fixed',top:'0.86rem',zIndex:'9'}}></div>
        			<div style={{width:'100%',backgroundColor:'#fff',padding:'0.2rem 0',position:'fixed',top:'1.06rem',zIndex:'9',borderBottom:'1px solid #eee'}}>
                <div onClick={ ()=>{ dropdown(3) }} style={{width:'33%',float:'left',textAlign:'center',fontSize:'0.28rem',borderRight:'1px solid #d5dbe0'}}>
                  { chooseFamousName?chooseFamousName:'全部医生' }<img src={ require('app/common/images/icon_triangle_down.png') } className={ (tap==3)?'arrow_transfrom':''} style={{marginLeft:'0.1rem',marginTop:'-0.02rem'}}/>
                </div>
        				<div onClick={ ()=>{ dropdown(1) }} style={{width:'33%',float:'left',textAlign:'center',fontSize:'0.28rem',borderRight:'1px solid #d5dbe0'}}>
        					{ chooseSerName?chooseSerName:'不限领域' }<img src={ require('app/common/images/icon_triangle_down.png') } className={ (tap==1)?'arrow_transfrom':''} style={{marginLeft:'0.1rem',marginTop:'-0.02rem'}}/>
        				</div>
        				<div onClick={ ()=>{ dropdown(2) }} style={{width:'33%',float:'left',textAlign:'center',fontSize:'0.28rem'}}>
        					{ chooseTimeName?chooseTimeName:'出诊时间'}<img src={ require('app/common/images/icon_triangle_down.png') } className={ (tap==2)?'arrow_transfrom':''} style={{marginLeft:'0.1rem',marginTop:'-0.02rem'}}/>
        				</div>
        				<div className='clear'></div>
        			</div>
        			<div style={{width:'100%',display:(tap==1)?'block':'none',backgroundColor:'rgba(0,0,0,0.4)',position:'fixed',height:(height/50-0.82)+'rem',top:'1.91rem',zIndex:'9'}}>
        				<ul style={{width:'100%',listStyle:'none',backgroundColor:'#fff'}}>
                  <li value='all' onClick={ ()=>{ choose('ser','all') }} style={{ color:(chooseSer=='all')?'#04b9c0':'#454545',width:'100%',textAlign:'center',fontSize:'0.24rem',height:'0.85rem',lineHeight:'0.8rem'}}>不限领域</li>
                  {
                    servicecategroy.map((serviceitem)=>{
                      return (
                          <li key={serviceitem.id} value={ serviceitem.name } onClick={ ()=>{ choose('ser',serviceitem.id,serviceitem.name) }} style={{ color:(serviceitem.id==chooseSer?'#04b9c0':'#454545'),width:'100%',textAlign:'center',fontSize:'0.24rem',height:'0.85rem',lineHeight:'0.85rem'}}>{ serviceitem.name }</li>
                        )
                    })
                  }
        				</ul>

        			</div>
        			<div className="new_doctor_list" style={{width:'100%',display:(tap==2)?'block':'none',backgroundColor:'rgba(0,0,0,0.4)',position:'fixed',height:(height/50-0.82)+'rem',top:'1.9rem',zIndex:'9'}}>
        				{
                  // <ul style={{width:'100%',listStyle:'none',backgroundColor:'#fff'}}>
          				// 	<li onClick={ ()=>{ choose('time',0,'不限时间') }} style={{ color:chooseTime==1?'#04b9c0':'#454545',width:'100%',textAlign:'center',fontSize:'0.24rem',height:'0.8rem',lineHeight:'0.8rem'}}>不限时间</li>
          				// 	<li onClick={ ()=>{ choose('time',1,'近7天出诊') }} style={{ color:chooseTime==2?'#04b9c0':'#454545',width:'100%',textAlign:'center',fontSize:'0.24rem',height:'0.8rem',lineHeight:'0.8rem'}}>近7天出诊</li>
          				// </ul>
                  <List style={{backgroundColor:'#fff'}}>
                    {week.map( (i,idx ) => (
                      <CheckboxItem key={i.value} checked={i.checked} onChange={ () => { change_week(idx) } }>
                        {i.label}
                      </CheckboxItem>
                    ))}
                  </List>

                }
                <div style={{height:'100px',width:'100%',background:'#fff'}}>
                  <Button type="primary" onClick={ confirm } style={{fontSize:'28px',borderRadius:'4px',position:'absolute',left:'50%',marginLeft:'-1rem',marginTop:'0.1rem',width:'2rem',height:'0.8rem',marginRight:'0.3rem',borderRadius:'0.04rem',backgroundColor:'rgba(23,172,178,1)',textDecoration:'none',color:'#fff'}}>确定</Button>
                </div>
        			</div>
              <div className="new_doctor_list" style={{width:'100%',display:(tap==3)?'block':'none',backgroundColor:'rgba(0,0,0,0.4)',position:'fixed',height:(height/50-0.82)+'rem',top:'1.9rem',zIndex:'9'}}>
        				{
                  <ul style={{width:'100%',listStyle:'none',backgroundColor:'#fff'}}>
          					<li onClick={ ()=>{ choose('famous',0,'全部医生') }} style={{ color:chooseFamous==0?'#04b9c0':'#454545',width:'100%',textAlign:'center',fontSize:'0.24rem',height:'0.8rem',lineHeight:'0.8rem'}}>全部医生</li>
          					<li onClick={ ()=>{ choose('famous',1,'推荐医生') }} style={{ color:chooseFamous==1?'#04b9c0':'#454545',width:'100%',textAlign:'center',fontSize:'0.24rem',height:'0.8rem',lineHeight:'0.8rem'}}>推荐医生</li>
          				</ul>
                }
        			</div>

	 				<Hammer direction={'DIRECTION_VERTICAL'} options={options}  onPan={ handlePan }>
					<div style={{paddingTop:'1.96rem'}}>
					<div className="myOrdermainbox" style={{overflow: 'scroll',height: '100%'}}>
	            	<ReactList ref="list" axis='y'
								itemRenderer={ renderItem }
								length={ length }
								type='uniform'
					/>
					</div>
					</div>
					</Hammer>
				</div>
    	       )
    }
