import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

import  ErrorCenter from 'backend/errorcenter/user_patient/errorcenter.js';

import { space } from '../space.js'

function history_ui(history){
    var ui = [];
    console.log('HISTORY_____');
    console.log(history);
    
    if(!history){
    	return ;
    }
    ui.push(<span>全身情况: </span>)
    history.body_condition?history.body_condition.map((item)=>{
      if(item.state == 1){
        ui.push(<span>{item.name+' '+item.date}</span>)
      }
    }):'';
    ui.push(<br/>);
    ui.push(<span>家族史: </span>)
    history.family_history?history.family_history.map((item)=>{
      if(item.state == 1){
        ui.push(<span>{item.name+' '+item.date}</span>)
      }
    }):'';
    ui.push(<br/>);
    ui.push(<span>用药史: </span>)
    history.medicine?history.medicine.map((item)=>{
      if(item.state == 1){
        ui.push(<span>{item.name+' '+item.date}</span>)
      }
    }):'';
    ui.push(<br/>);
    ui.push(<span>手术史: </span>)
    history.surgery?history.surgery.map((item)=>{
      if(item.state == 1){
        ui.push(<span>{item.name+' '+item.date}</span>)
      }
    }):'';
    ui.push(<br/>);
    ui.push(<span>过敏情况: </span>)
    history.allergy?history.allergy.map((item)=>{
      if(item.state == 1){
        ui.push(<span>{item.name+' '+item.date}</span>)
      }
    }):'';
    ui.push(<br/>);
    ui.push(<span>传染病: </span>)
    history.infection?history.infection.map((item)=>{
      if(item.state == 1){
        ui.push(<span>{item.name+' '+item.date}</span>)
      }
    }):'';

    return ui;
}

function reExamination(meta_data,case_index){

	var ui=[];
     for(var template_id in meta_data){
     	if((template_id=='advice')||(template_id=='history'))
     		continue;
     	let item = meta_data[template_id]
	    if(item.reExamination){
	         ui.push(<div className="case_pre_child">
	                  <div className="case_pre_check_see">
	                    <div className="case_see_main2">{ item.reExamination }</div>
	                  </div>
	                 </div>);
	   }
     }
     return ui;

}

function specicalAche(category,subcategory){
  var acheOne = '牙龈炎牙周炎正畸治疗';
  var acheTwo = '口腔黏膜病';
  var acheThree = '全口义齿';
  if(subcategory == undefined ){
    subcategory = '';
  }
  var catsub =  category+subcategory;
    if( acheOne.indexOf(catsub)>=0 )
      return '全口'
    else if( acheTwo.indexOf(catsub)>=0 )
      return '无牙位'
    else if( acheThree.indexOf(catsub)>=0 )
      return '全口无牙颌'
    else
      return '';

}

function check(meta_data,case_index){
     var ui=[];
     for(var template_id in meta_data){
     	if((template_id=='advice')||(template_id=='history'))
     		continue;
     	let item = meta_data[template_id]
	    if(item.check){
	 		let check_teeth = item.check_teeth?item.check_teeth.toString():'';
	    	var titleSub = '';
	    	var titlePro = '';
	    	var titleCat = '';
	 		case_index.projects?case_index.projects.map((it)=>{
	 			if(it.id){
	 			  if(it.id == item.index.project.id){
		    		titlePro = it.cat_name;
		    	  }
	 			}
		    }):[];
	    	case_index.categorys?case_index.categorys.map((it)=>{
	    		if(it.id){
	    		  if(it.id == item.index.category.id){
		    		titleCat = it.cat_name;
		    	  }
	    		}
		    }):[];
		    case_index.subcategorys?case_index.subcategorys.map((it)=>{
		    	if(it.id){
		    	  if(it.id == item.index.subcategory.id){
		    		titleSub = it.cat_name;
		    	  }
		    	}
		    }):[];
		     console.log(titleCat);
             var ache = specicalAche(titleCat,titleSub);
             console.log('MMMMpppPPPPP')
             console.log(ache);
	         ui.push(<div className="case_pre_child">
	                  <div className="case_pre_check_see">
	                    <h5>
	                      <p>{'项目：'}<span>{ titlePro?titlePro:'' }</span></p>
	                      <p>诊断分类：<span>{ titleCat?titleCat:'' } {titleSub?titleSub:''}</span></p>
	                      <p>牙位：{ (ache!='')?(<a>{ache}</a>):(<a className="case_tooth">{ check_teeth.split(',').sort().toString() }</a>)  } </p>
	                    </h5>
	                    <div className="case_see_main2">{ item.check }</div>
	                  </div>
	                 </div>);
	   }
     }
     return ui;
}

function cure(meta_data,case_index){

     var ui=[];
     for(var template_id in meta_data){
     	if((template_id=='advice')||(template_id=='history'))
     		continue;
     	let item = meta_data[template_id]
	    if(item.cure){
	    	let cure_teeth = item.cure_teeth?item.cure_teeth.toString():'';
	    	var titleSub = '';
	    	var titlePro = '';
	    	var titleCat = '';
	 		case_index.projects.map((it)=>{
	 			if(it.id){
	 			  if(it.id == item.index.project.id){
		    		titlePro = it.cat_name;
		    	  }
	 			}
		    })
	    	case_index.categorys.map((it)=>{
	    		if(it.id){
	    		  if(it.id == item.index.category.id){
		    		titleCat = it.cat_name;
		    	  }
	    		}
		    })
		    case_index.subcategorys.map((it)=>{
		    	if(it.id){
		    	  if(it.id == item.index.subcategory.id){
		    		titleSub = it.cat_name;
		    	  }
		    	}
		    })
	         ui.push(<div className="case_pre_child">
	                  <div className="case_pre_check_see">
	                    <h5>
	                      <p>{'项目：'}<span>{ titlePro?titlePro:'' }</span></p>
	                      <p>诊断分类：<span>{ titleCat?titleCat:'' } {titleSub?titleSub:''}</span></p>
	                    </h5>
	                    <div className="case_see_main2">{ item.cure }</div>
	                  </div>
	                 </div>);
	   }
     }
     return ui;

}

function diagnoses(meta_data,case_index){

	 var ui=[];
     for(var template_id in meta_data){
     	if((template_id=='advice')||(template_id=='history'))
     		continue;
     	let item = meta_data[template_id]
        if(item.check!=undefined){
        	let check_teeth = item.check_teeth?item.check_teeth.toString():'';
        	console.log('check_teeth_________')
        	console.log(check_teeth);
        	var titleSub = '';
        	var titlePro = '';
        	var titleCat = '';
	 		case_index.projects.map((it)=>{
	 			if(it.id){
	 			  if(it.id == item.index.project.id){
		    		titlePro = it.cat_name;
		    	  }
	 			}
		    })
	    	case_index.categorys.map((it)=>{
	    		if(it.id){
	    		  if(it.id == item.index.category.id){
		    		titleCat = it.cat_name;
		    	  }
	    		}
		    })
		    case_index.subcategorys.map((it)=>{
		    	if(it.id){
		    	  if(it.id == item.index.subcategory.id){
		    		titleSub = it.cat_name;
		    	  }
		    	}
		    })
			ui.push(<span>{ check_teeth+' '+(titleCat?titleCat:'')+' '+(titleSub?titleSub:'')}</span>)
        }
     }
     return ui;
}


export const _CaseShow_ = ({
	case_bak,
	onSend,
	timeseq,
	toEditCase,
	toAddCase,
	case_index,
	chooseCase,
	toDocument,
	backToList

}) => {
		console.log('_CaseShow_............');
		console.log(case_bak);
        var main_template;
		for(var template_id in case_bak.meta_data){
			 if((template_id!='advice')&&(template_id!='history')&&(case_bak.meta_data[template_id].main!=undefined))
                 main_template = case_bak.meta_data[template_id];
		}
	    var main = main_template?main_template.main:'';
	    var currentill = main_template?main_template.currentill:'';
	    var title = '';
	    var titleSub = '';
	    var titlePro = '';
	    var titleCat = '';
	    console.log(case_index);
	    console.log(timeseq);

	    case_index.projects.map((it)=>{
	    	if(it.id){
	    		if(!main_template)
	    			return;
	    	  if(it&&(it.id == main_template.index.project.id)){
	    		titlePro = it.cat_name;
	    	  }
	    	}
	    })
	    case_index.categorys.map((it)=>{
	    	if(it.id){
	    		if(!main_template)
	    			return;
	    	  if(it&&(it.id == main_template.index.category.id)){
	    		titleCat = it.cat_name;
	    	  }
	    	}
	    })
	    case_index.subcategorys.map((it)=>{
	    	if(it.id){
	    		if(!main_template)
	    			return;
	    	  if(it&&(it.id == main_template.index.subcategory.id)){
	    		titleSub = it.cat_name;
	    	  }
	    	}
	    })
	    // var title = (case_bak.content[0].category?(case_bak.content[0].category+'-'):'')+(case_bak.content[0].subcategory?(case_bak.content[0].subcategory):'');
	    title = titlePro+' '+titleCat+' '+titleSub;
        var ill_history = case_bak.history?case_bak.history:'无';
        var advice = case_bak.advice?case_bak.advice:'';
        console.log('_CaseShow_............');
        console.log(titlePro);
        console.log(titleCat);
        console.log(titleSub);
		return(
			<div>
				<ErrorCenter/>
				{ space() }
				<div className="rtop rtop_edit">
		            <div className="but-box bj-none">
		                <p>
		                    <a className="back-but" onClick={ backToList } >返回</a>
		                    <a onClick={ ()=>{ onSend(case_bak.id) } } className="save-but" id="send-but" style={case_bak.is_send==1?{background:"#666",pointerEvents: 'none'}:{}}>{ case_bak.is_send==1?'已发送':'发送' } </a>
		                </p>
		            </div>
		            <div className="userInfobox case_user_top_main" id="">
		                <div>
		                    <dl>
		                        <dt id="user_photo"><img src={case_bak.photo} alt=""/></dt>
		                        <dd>
		                            <h3>
		                                <span id="">就诊人：<b>{case_bak.patient_name} {case_bak.patient_phone}</b></span>
		                            </h3>
		                            <p id="" style={ case_bak.parent_account == ''?{display:'none'}:{display:'block'}}>主账户：<span>{ case_bak.parent_account?(case_bak.parent_account.real_name==''?'':case_bak.parent_account.real_name):''} {case_bak.parent_account.phone==''?'':case_bak.parent_account.phone}</span></p>
		                        </dd>
		                        <div className="head_desc_btnbox Wid225" id="head_btnbox">
		                          <a onClick={()=>{ toAddCase({user_id:case_bak.patient_id,patient_name:case_bak.patient_name,patient_phone:case_bak.patient_phone,patient_photo:case_bak.photo}) }} className="default_inputbtn see-but3">新建病历</a>
		                          <a className="default_inputbtn see-but3" id="see-but-case" onClick={ ()=>{ toDocument(case_bak.patient_id) }} >查看档案</a>
		                        </div>
		                        <div className="clear"></div>
		                    </dl>
		                </div>
		            </div>
		        </div>
		        <div className="add-box-container">
		            <div className="user_main_top">
		                <div className="user_topmenu user_topmenu_edit" style={{ marginLeft:'174px'}}>
		                    <ul>
		                        <select className="case_time_select" onChange={ (ev)=>{ chooseCase(ev) }} >
		                            {
		                            	timeseq.map((item)=>{
		                            		if(item.id == case_bak.id)
                                              return <option value={ item.id } selected='selected'>{item.visit_time}</option>
                                            else
                                              return <option value={ item.id } >{item.visit_time}</option>
		                            	})
		                            }
		                        </select>
		                    </ul>

		                </div>
		                <div className="time repoter_top" style={{top:'206px'}}>
		                    <div className="z_time_btn">
		                        <h6 className="header_case_bj">
		                          <span>{title}</span>
		                          <a onClick={ ()=>{ toEditCase({ user_id:case_bak.patient_id,id:case_bak.id,patient_name:case_bak.patient_name,patient_phone:case_bak.patient_phone }) } } className="default_inputbtn z_edit_btn">编辑</a>
		                        </h6>

		                    </div>
		                </div>
		                <div className="userContain repoter_container" style={{top:'250px'}}>
		                    <div className="z_userContainMain">
		                      <div className="containb_right Mtopbox_case">
		                        <div className="containb_right_inner" style={{paddingBottom:'400px'}}>

		                          <div className="input_top_floatbox input_top_see_dloatbox">
		                              <div className="input-box2 case_num_input">
		                                  <span className="desc_span">病 历 号 ：</span>
		                                  <label className="case_see_label">{case_bak.case_number}</label>
		                              </div>
		                              <div className="input-box2">
		                                  <span className="desc_span">状态：</span>
		                                  <label className="case_see_label">{case_bak.type=='1'?'初诊':'复诊'}</label>
		                              </div>
		                              <div className="input-box2">
		                                  <span className="desc_span">就诊日期：</span>
		                                  <label className="case_see_label">{case_bak.visit_time}</label>
		                              </div>
		                              <div className="input-box2 widdiv">
		                                  <span className="desc_span">医生：</span>
		                                  <label className="case_see_label">{case_bak.doctor_name} {case_bak.doctor_account} </label>

		                              </div>
		                              <div className="input-box2 zhensuo widdiv">
		                                  <span className="desc_span">诊所：</span>
		                                  <label className="case_see_label">{case_bak.clinic_name}</label>

		                              </div>
		                              <div className="input-box2">
		                                  <span className="desc_span">诊断项目：</span>
		                                  <label className="case_see_label">{titlePro?titlePro:''} {titleCat?titleCat:''} {titleSub?titleSub:''}</label>
		                              </div>
		                              <div className="clear">&nbsp;</div>
		                          </div>
		                          <div className="case_container_main">
		                          	<div style={case_bak.type=='2'?{display:'none'}:{display:'block'}}>
			                            <div className="case_prebox">
			                                <h3><i className="case_blue"></i><span>主诉：</span></h3>
			                                <div className="case_pre_child">
			                                  <p className="case_see_main">{main}</p>
			                                </div>
			                            </div>
			                            <div className="case_prebox">
			                                <h3><i className="case_orange"></i><span>现病史：</span></h3>
			                                <div className="case_pre_child">
			                                  <p className="case_see_main">{currentill}</p>
			                                </div>
			                            </div>
			                            <div className="case_prebox">
			                                <h3><i className="case_black"></i><span>既往史：</span></h3>
			                                <div className="case_pre_child">
			                                  <p className="history_case">
	                                               <span>{history_ui(case_bak.meta_data.history)}</span>
			                                  </p>
			                                </div>
			                            </div>
			                        </div>

			                        <div className="case_prebox" style={case_bak.type=='2'?{display:'block'}:{display:'none'}}>
		                                <h3><i className="case_blue"></i>
		                                <span>复诊：</span></h3>
                                        { reExamination(case_bak.meta_data,case_index)}
		                            </div>


		                            <div className="case_prebox">
		                                <h3><i className="case_blue"></i>
		                                <span>检查：</span></h3>
                                        {check(case_bak.meta_data,case_index)}
		                            </div>

		                            <div className="case_prebox">
		                                <h3><i className="case_orange"></i><span>影像学检查：</span></h3>
		                                <div className="case_pre_child">
		                                  <p className="history_case">
		                                      <span style={{display:'none'}}>暂无影像！请到客户管理中增添影像资料。</span>
		                                      <label className="see_user_photozip">查看该客户影像资料</label>
		                                  </p>
		                                </div>
		                            </div>
		                            <div className="case_prebox">
		                                <h3><i className="case_black"></i>
		                                <span>诊断：</span></h3>
		                                <div className="case_pre_child">
		                                  <p className="history_case">
                                              {diagnoses(case_bak.meta_data,case_index)}
		                                  </p>
		                                </div>
		                            </div>

		                            <div className="case_prebox">
		                                <h3><i className="case_blue"></i>
		                                <span>处置：</span>
		                                </h3>
		                                { cure(case_bak.meta_data,case_index) }
		                            </div>
		                            <div className="case_prebox Pbtom50" style={{display:'none'}}>
		                                <h3><i className="case_orange"></i>
		                                <span>医嘱：</span></h3>
		                                <div className="case_pre_child">
		                                  <p className="case_see_main">{case_bak.meta_data.advice?case_bak.meta_data.advice:''}</p>
		                                </div>
		                            </div>
		                          </div>

		                        </div>
		                      </div>

		                    </div>
		                    <div className="clear"></div>
		                </div>

		            </div>
		        </div>
		    </div>
		)
      }