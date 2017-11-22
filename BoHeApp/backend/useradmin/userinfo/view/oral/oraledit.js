import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'


/* item_lv2 is group  item_lv0_name 'surgery'*/
function infoGet(datalv0,item_lv3,item_lv2,item_lv1){
   var retdata;
   datalv0.map((data) => {

          if(data.name == item_lv1.name){

            if(item_lv2.type == 'm'){
                if(data.val[item_lv3.id]&&(item_lv3.name==data.val[item_lv3.id])){
                  retdata = true;
                }
            }else{
                if(data.val[item_lv2.id]&&(item_lv3.name==data.val[item_lv2.id])){
                  retdata = true;
                }
            }

          }
   })
   return retdata;
}

/* item_lv1 '面型'' item_lv0_name 'surgery' */
function oral(item_lv1,item_lv0_name,click,oraledit){
    return (
        <div style={{ marginTop:'10px'}}>
            {item_lv0_name!='mucosa'?(<span className="H_content_radio_title">{item_lv1.name}</span>):''}
            {
                /*item_lv2  group has no name */
                item_lv1.groups.map((item_lv2)=>{
                    if(item_lv0_name!='mucosa'){
                        return (
                        <div style={{ marginTop:'10px',marginLeft:'129px'}}>
                            {
                                group(item_lv2,item_lv1,item_lv0_name,click,oraledit)
                            }
                        </div>
                        )
                    }else{
                        return (
                        <div>
                            {
                                group(item_lv2,item_lv1,item_lv0_name,click,oraledit)
                            }
                        </div>
                        )
                    }
                })
            }
        </div>
        )
}
/*item_lv2 is a group has no name */
function group(item_lv2,item_lv1,item_lv0_name,click,oraledit){
    console.log(oraledit);
    if(item_lv2.type == 's'){
        return item_lv2.group.map((item_lv3)=>{
            var metaitem = (oraledit.oral&&oraledit.oral[item_lv0_name])?infoGet(oraledit.oral[item_lv0_name], item_lv3, item_lv2,item_lv1):undefined;
            return (
                 <span className="H_content_list_item H_content_list_item_radio">
                   <input type="radio" className="radio radio2" id={item_lv0_name+item_lv3.id} name={item_lv0_name+item_lv2.id} checked={(metaitem)?'checked':''}/>
                   <label htmlFor={item_lv0_name+item_lv3.id} onClick={ ()=>{ metaitem?(item_lv3.check=1):(item_lv3.check=0); click(item_lv0_name,item_lv3,item_lv2.id)} }><i>&nbsp;{item_lv3.name}</i></label>
                 </span>
            )
        })
    }else{
       return item_lv2.group.map((item_lv3)=>{
            var metaitem = (oraledit.oral&&oraledit.oral[item_lv0_name])?infoGet(oraledit.oral[item_lv0_name], item_lv3, item_lv2,item_lv1):undefined;
            return (
                  <span className="H_content_list_item H_content_list_item_radio">
                    <input type="checkbox" id={item_lv0_name+item_lv3.id} checked={(metaitem)?'checked':''}/>
                    <label htmlFor={item_lv0_name+item_lv3.id} onClick={ ()=>{ metaitem?(item_lv3.check=1):(item_lv3.check=0); click(item_lv0_name,item_lv3,item_lv3.id)} }><i>&nbsp;{item_lv3.name}</i></label>
                  </span>
            )
       })
    }
}
export const OralEdit = ({
  oraltable,
  oraledit,
  click,
  change
}) => {
      var height = window.innerHeight || document.documentElement.clientHeight;
      console.log('CCCCCCCHHHH')
      console.log(oraltable);
      return (
                <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
                <div className='z_userContainMain'>
                    <div className="containb_right" id="edit_page">
                        <div className="H_content">
                          <div className="H_content_title">
                            <span className="H_title_span H_title_color2">牙周</span>
                          </div>

                          <div className="H_content_list" id="teeth_around">
                            <div className="H_small_box H_margin_bottom20">
                                {
                                    oraltable.teetharound.map((item_lv1)=>{
                                        return oral(item_lv1,"teetharound",click,oraledit);
                                    })
                                }
                            </div>
                          </div>

                          <div className="H_content_title">
                            <span className="H_title_span H_title_color2">粘膜</span>
                          </div>

                          <div className="H_content_list" id="teeth_around">
                            <div className="H_small_box H_margin_bottom20">
                                {
                                    oraltable.mucosa.map((item_lv1)=>{
                                        return oral(item_lv1,"mucosa",click,oraledit);
                                    })
                                }
                            </div>
                          </div>

                          <div className="H_content_title">
                            <span className="H_title_span H_title_color2">外科</span>
                          </div>

                          <div className="H_content_list" id="teeth_around">
                            <div className="H_small_box H_margin_bottom20">
                                {
                                    oraltable.surgery.map((item_lv1)=>{
                                        return oral(item_lv1,"surgery",click,oraledit);
                                    })
                                }
                            </div>
                          </div>

                          <div className="H_content_title">
                            <span className="H_title_span H_title_color2">牙病治疗及修复史</span>
                          </div>

                          <div className="H_content_list" id="teeth_around">
                            <div className="H_small_box H_margin_bottom20">
                              <span className="H_content_list_item H_margin_bottom_none padding_left0">
                                治疗及修复史
                                <textarea className="teeth_repair_textarea" style={{ border: '1px solid rgb(204, 204, 204' }} value={ (oraledit.oral.repairhis[0]&&oraledit.oral.repairhis[0].val)?oraledit.oral.repairhis[0].val.content:'' } onChange={(e)=>{ change('治疗及修复史',e)}}></textarea>
                              </span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                </div>
             )
    }










