import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

var ToothAche = ({ tooth,ache_list }) => {
      console.log('12345678900')
      return (<div className={'H_teeth_position_list_margin_bottom'}>
                <label>
                  {'牙齿'+tooth.name+':'}
                </label>
                <p>
                   { tooth.ache.map((idx)=>{
                        return  (<span className='H_teeth_position_list_margin'>
                                {ache_list[idx].name}
                                </span>)
                   })
                 }
                </p>
             </div>)

}


var  TeethAche = ({ teeth_ui }) => {
        var  teethui = [];
        console.log('*&987798')
        teeth_ui.teeth.forEach((tooth)=>{
              if(tooth.ache.length)
                teethui.push(ToothAche({ tooth,ache_list:teeth_ui.ache_list}))
        })
        return  teethui;

}

export const TeethShow = ({
    teethtype,
    mteeth_ui,
    cteeth_ui,
    toMteeth,
    toCteeth
}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      return (
              <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
              <div className='z_userContainMain'>
               <div className='containb_right' style={{ paddingBottom:"50px" }}>
               <div className="H_teeth_position" >
                 <div className="H_teeth_position_left">
                   <span onClick={ toMteeth } className={ teethtype=='M'?"man active":'man'} id="mantab">成人牙位图</span>
                   <span onClick={ toCteeth } className={ teethtype=='C'?"child active":'child'} id="childtab">幼儿牙位图</span>
                 </div>
                 {
                   (teethtype=='M')?(<div>
                   <div className="H_teeth_position_pic">
                       {  (mteeth_ui&&mteeth_ui.teeth)?mteeth_ui.teeth.map((tooth)=>{
                             return (<div className={'H_teeth_position_pic_same '+ 'H_teeth_position_pic_'+tooth.name} style={tooth.ache.length>0?{backgroundColor:'#cc6060'}:{backgroundColor:'#fafcff'}}>
                                          {tooth.name}
                                     </div>
                                )
                       }):''
                      }
                   </div>
                   <div className="H_teeth_position_list">
                       {  TeethAche({teeth_ui:mteeth_ui}) }
                   </div>
                   </div>):(<div>
                   <div className="H_teeth_position_pic H_teeth_position_pic_son">
                        {  (cteeth_ui&&cteeth_ui.teeth)?cteeth_ui.teeth.map((tooth)=>{
                             return (<div className={'H_teeth_position_pic_same '+ 'H_teeth_position_pic_'+tooth.name} style={tooth.ache.length>0?{backgroundColor:'#cc6060'}:{backgroundColor:'#fafcff'}}>
                                          {tooth.name}
                                     </div>
                                )
                       }):''
                      }
                   </div>
                   <div className="H_teeth_position_list">
                        {  TeethAche({teeth_ui:cteeth_ui}) }
                   </div>
                   </div>)
               }

               </div>
              </div>
              </div>
              </div>
            )
     }

