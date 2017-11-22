import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

export const TeethEdit = ({
    teethtype,
    mteeth_ui,
    cteeth_ui,
    toMteeth,
    toCteeth,
    clickOnTooth,
    curToothName,
    clickOnMAche,
    clickOnCAche
}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      var macheidx=0;
      return (
              <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
              <div className='z_userContainMain'>
               <div className='containb_right' style={{ paddingBottom:"50px" }}>
               <div className="H_teeth_position" >
                 <div className="H_teeth_position_left">
                   <span onClick={ toMteeth } className={ teethtype=='M'?"man active":'man' } id="mantab">成人牙位图</span><span onClick={ toCteeth } className={ teethtype=='C'?"child active":'child'} id="childtab">幼儿牙位图</span>
                 </div>
                 {
                   (teethtype=='M')?(<div>
                   <div className="H_teeth_position_pic">
                       {  mteeth_ui.teeth?mteeth_ui.teeth.map((tooth)=>{
                             return (<div onClick={(ev) => {clickOnTooth(ev,tooth.name)}} className={'H_teeth_position_pic_same '+ 'H_teeth_position_pic_'+tooth.name} style={(curToothName==tooth.name)?{backgroundColor:'#c1d5f2'}:(tooth.ache.length>0?{backgroundColor:'#cc6060'}:{backgroundColor:'#fafcff'})}>
                                          {tooth.name}
                                     </div>
                                )
                       }):''}
                   </div>
                   <div className="H_teeth_position_list">
                      <div className="H_teeth_position_list_title" >
                       <span style={{fontSize: '18px'}}>{curToothName?('牙齿：' + curToothName):'请选择左图的牙齿，进行添加'}</span>
                      </div>
                        <div className="H_teeth_position_list_item" style={curToothName?{}:{pointerEvents:'none'}}>
                          { mteeth_ui.ache_list?mteeth_ui.ache_list.map((ache)=>{
                              var _marchidx = macheidx++;
                              return (<div className="wrap">
                                         <input type="checkbox"  id={_marchidx}  checked={ache.bool}/>
                                         <label onClick={(ev)=>{clickOnMAche(ev,_marchidx,curToothName,!ache.bool)}} htmlFor={_marchidx}><i>&nbsp;{ache.name}</i></label>
                                     </div>)
                          }):''}
                        </div>
                   </div>
                   </div>):(<div>
                   <div className="H_teeth_position_pic H_teeth_position_pic_son">
                        {  cteeth_ui.teeth?cteeth_ui.teeth.map((tooth)=>{
                             return (<div onClick={(ev) => {clickOnTooth(ev,tooth.name)}} className={'H_teeth_position_pic_same '+ 'H_teeth_position_pic_'+tooth.name} style={(curToothName==tooth.name)?{backgroundColor:'#c1d5f2'}:(tooth.ache.length>0?{backgroundColor:'#cc6060'}:{backgroundColor:'#fafcff'})}>
                                          {tooth.name}
                                     </div>
                                )
                       }):''}
                   </div>
                   <div className="H_teeth_position_list">
                      <div className="H_teeth_position_list_title" >
                       <span style={{fontSize: '18px'}}>{curToothName?('牙齿：' + curToothName):'请选择左图的牙齿，进行添加'}</span>
                      </div>
                        <div className="H_teeth_position_list_item" style={curToothName?{}:{pointerEvents:'none'}}>
                          { cteeth_ui.ache_list?cteeth_ui.ache_list.map((ache,index)=>{

                              return (<div className="wrap">
                                         <input type="checkbox"  id={index}  checked={ache.bool}/>
                                         <label onClick={(ev)=>{clickOnCAche(ev,index,curToothName,!ache.bool)}} htmlFor={index}><i>&nbsp;{ache.name}</i></label>
                                     </div>)
                          }):''}
                        </div>
                   </div>
                   </div>)
               }

               </div>
              </div>
              </div>
              </div>
            )
     }

