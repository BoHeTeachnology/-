import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

import Calendar from 'rc-calendar';

function infoGet(subtable,name){
   var retitem;
   subtable.map((item) => {
       if(item.name == name){
          retitem = item;
       }
   } )
   return retitem;
}


export const HistoryEdit = ({
  historytable,
  historyedit,
  change,
  click,
  handleSelectDateBodyCon,
  showDateModalBodyCon,
  dateModalBodyTest,
  dateModalToothWash,
  dateBodyTest,
  dateToothWash

}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      var count = 0;
      var _count=0;
      console.log('124124453511');
      console.log(historyedit);
      return (
                <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
                <div className='z_userContainMain'>
                    <div className="containb_right">
                            <div className="z_jws_main">
                                <h2 className="no_border" style={{ borderTop:'none' }}><i className="row_1"></i><span>全身情况</span></h2>
                                <div className="z_checkbox_main">
                                    <div className="checkbox-box">
                                        <div className="checkBone">
                                            {

                                                historytable.body_condition.map((item)=>{
                                                    count++;
                                                        return (
                                                            <span className="W120" style={ item.dateUI?{height:'30px',width:'300px'}:{} }>
                                                            {
                                                            (function(item){
                                                                var metaitem = (historyedit.history&&historyedit.history.body_condition)?infoGet(historyedit.history.body_condition,item.name):undefined;
                                                                return item.dateUI?(<div><b>{item.name}</b>
                                                                    <input type="text" className="layicon" readonly=""  value={metaitem?metaitem.date:''} onClick={()=>{showDateModalBodyCon(item)} }/>
                                                                      <div style={ item.dateUI }>
                                                                      <Calendar format={'YYYY-MM-DD'} onSelect={ (date)=>{ handleSelectDateBodyCon(item,date)} }/>
                                                                      </div>
                                                                    </div>):(<div><input type="checkbox" className="checkbox" id={"checkboxa_"+count} checked={(metaitem)?'checked':''}/>
                                                                    <label htmlFor={"checkboxa_"+count} onClick={()=>{ metaitem?(item.check=1):(item.check=0); click('body_condition',item) }} ><i>{item.name}</i></label></div>)})(item)
                                                            }
                                                            </span>
                                                        )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_2"></i><span>家族史</span></h2>
                                <div className="z_checkbox_main" id="family_history">
                                    <div className="checkbox-box">
                                        <div className="checkBone">
                                            {

                                                historytable.family_history.map((item)=>{
                                                    count++;
                                                    var metaitem = (historyedit.history&&historyedit.history.family_history)?infoGet(historyedit.history.family_history,item.name):undefined;
                                                    return (
                                                            <span className="W120">
                                                                <input type="checkbox" className="checkbox" id={"checkboxb_"+count} checked={metaitem?'checked':''}/>
                                                                <label htmlFor={"checkboxb_"+count} onClick={ () => { metaitem?(item.check=1):(item.check=0); click('family_history',item) }} ><i>{item.name}</i></label>
                                                            </span>
                                                        )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_3"></i><span>用药史</span></h2>
                                <div className="z_checkbox_main" id="medicine">
                                    <div className="checkbox-box">
                                        <div className="checkBone clear_checkbox">
                                            {
                                                historytable.medicine.map((item)=>{
                                                    count++;
                                                    var metaitem = (historyedit.history&&historyedit.history.medicine)?infoGet(historyedit.history.medicine,item.name):undefined;

                                                    return (
                                                        <span>
                                                            <input type="checkbox" className="checkbox" id={"checkboxc_"+count} checked={metaitem?'checked':''}/>
                                                            <label htmlFor={"checkboxc_"+count} onClick={ () => { metaitem?(item.check=1):(item.check=0); click('medicine',item) }}><i>{item.name}</i></label>
                                                        </span>
                                                        )
                                                })
                                            } 
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_4"></i><span>手术史</span></h2>
                                <div className="z_checkbox_main" id="surgery">
                                    <div className="checkbox-box">
                                        <div className="checkBone clear_checkbox">
                                            {
                                                historytable.surgery?historytable.surgery.map((item)=>{
                                                    count++;
                                                    var metaitem = (historyedit.history&&historyedit.history.surgery)?infoGet(historyedit.history.surgery,item.name):undefined;
                                                    return (
                                                       <span>
                                                            <input type="checkbox" className="checkbox" id={`checkboxd_${count}`} checked={metaitem?'checked':''}/>
                                                            <label htmlFor={"checkboxd_"+count} onClick={ () => {metaitem?(item.check=1):(item.check=0); click('surgery',item) }}><i>{item.name}</i></label>
                                                            <b>&nbsp;</b>
                                                            {(function (item){
                                                                var describe='';
                                                                (historyedit.history&&historyedit.history.surgery)?historyedit.history.surgery.map((info)=>{
                                                                    console.log(info)
                                                                    if(info.name == '近期做过手术'){
                                                                        describe = info.describe;
                                                                    }
                                                                }):'';


                                                                return item.name=='近期做过手术'?(
                                                                <input className="Wid480" type="text" value={ describe } onChange={ (ev)=>{ change('surgery',item,ev) } }  style={ (metaitem)?{display:'inline-block'}:{display:'none'} }/>                                       
                                                                ):'';
                                                            })(item)}
                                                        </span>
                                                    )
                                                }):''
                                            }
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>

                                <h2><i className="row_5"></i><span>过敏情况</span></h2>
                                <div className="z_checkbox_main">
                                    <div className="checkbox-box">
                                        <div className="checkBone">
                                            {
                                                historytable.allergy.map((item)=>{
                                                    count++;
                                                    var metaitem = (historyedit.history&&historyedit.history.allergy)?infoGet(historyedit.history.allergy,item.name):undefined;

                                                    return (
                                                        <span className="W120">
                                                            <input type="checkbox" className="checkbox" id={"checkboxe_"+count} checked={(metaitem)?'checked':''}/>
                                                            <label htmlFor={"checkboxe_"+count} onClick={ () => {  metaitem?(item.check=1):(item.check=0);click('allergy',item) }}><i>{item.name}</i></label>
                                                            {(function (item){
                                                                var describe='';
                                                                (historyedit.history&&historyedit.history.allergy)?historyedit.history.allergy.map((info)=>{
                                                                    console.log("1111111111111111111111111")
                                                                    console.log(info)
                                                                    if(info.name == '其他过敏情况'){
                                                                        describe = info.describe;
                                                                    }
                                                                }):'';
                                                                return item.name=='其他过敏情况'?(
                                                                <input className="Wid480" type="text" value={describe} onChange={ (ev)=>{ change('allergy',item,ev) } } style={ (metaitem)?{display:'inline-block'}:{display:'none'} }/>
                                                                ):'';
                                                            })(item)}
                                                        </span>

                                                    )
                                                })
                                            } 
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_6"></i><span>传染病</span></h2>
                                <div className="z_checkbox_main pbtom30" id="infection">
                                    <div className="checkbox-box">
                                        <div className="checkBone">
                                            {
                                                historytable.infection.map((item)=>{
                                                    count++;
                                                    var metaitem = (historyedit.history&&historyedit.history.infection)?infoGet(historyedit.history.infection,item.name):undefined;
                                                    return (
                                                        <span className="W120">
                                                            <input type="checkbox" className="checkbox" id={"checkboxf_"+count} checked={(metaitem)?'checked':''}/>
                                                            <label htmlFor={"checkboxf_"+count} onClick={ () => { metaitem?(item.check=1):(item.check=0);click('infection',item) }}><i>{item.name}</i></label>
                                                            {(function (item){
                                                                var describe='';
                                                                (historyedit.history&&historyedit.history.infection)?historyedit.history.infection.map((info)=>{

                                                                    if(info.name == '其他传染病'){
                                                                        describe = info.describe;
                                                                    }
                                                                    console.log(describe);
                                                                }):'';
                                                                return item.name=='其他传染病'?(
                                                                <input className="Wid480" type="text" value={ describe } onChange={ (ev)=>{ change('infection',item,ev) } } style={ (metaitem)?{display:'inline-block'}:{display:'none'} }/>
                                                                ):'';
                                                            })(item)}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
             )
     }

