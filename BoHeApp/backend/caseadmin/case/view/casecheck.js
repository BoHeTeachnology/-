import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

import Calendar from 'rc-calendar';
const format = ('YYYY-MM-DD HH mm');

import  ErrorCenter from 'backend/errorcenter/user_patient/errorcenter.js';

import { space } from '../space.js'

function template_index(
	project_id,
    category_id,
    subcategory_id,
    case_index
){
	    var projects = case_index.projects;
		var project_sel;
		var category_sel;
		var subcategory_sel;
		if(!projects)
			projects = []
		projects.map((project)=>{
	        if(project.id == project_id){
	        	project_sel = project;
	        }
		})

        var categorys = [];
		case_index.categorys.map((category)=>{
			 let relations = project_sel?project_sel.relations:[];
			 let flag = 0;
			 relations?relations.map((relation)=>{
	              if(relation == category.id)
	              	 flag = 1;
			 }):''
			 if(flag){
			    categorys.push(category);
			 }
		})
	    categorys.map((category)=>{
	        if(category.id == category_id){
	        	category_sel = category;
	        }
		})
		var subcategorys= [];
		case_index.subcategorys.map((subcategory)=>{
			 let relations = category_sel?category_sel.relations:[];
			 let flag = 0;
			 relations?relations.map((relation)=>{
	              if(relation == subcategory.id)
	              	 flag = 1;
			 }):''
			 if(flag){
			 	subcategorys.push(subcategory)
			 }
		})
	    subcategorys.map((subcategory)=>{
	        if(subcategory.id == subcategory_id){
	        	subcategory_sel = subcategory;
	        }
		})
		return { project_sel, category_sel, subcategory_sel }
}

function main_template(
	project_id,
    category_id,
    subcategory_id,
    case_index
){
    var { project_sel, category_sel, subcategory_sel } =  template_index(project_id, category_id, subcategory_id, case_index);
    return {main_project_sel:project_sel,main_category_sel:category_sel,main_subcategory_sel:subcategory_sel};
}

function main_template_ui(meta_data,changeMeta){

		var ui = [];
        for(var template_id in meta_data){
           if((template_id=='advice')||(template_id=='history'))
               continue;
      	   if(meta_data[template_id].main!=undefined){
      				return (<div>
      					    <div className="case_prebox">
      					        <h3><i className="case_blue"></i><span>主诉：</span></h3>
      					        <div className="case_pre_child">
      					          <textarea value={meta_data[template_id].main?meta_data[template_id].main:''} className="case_textarea" id="" cols="30" rows="10" onChange={(e)=>{ changeMeta('main',e,template_id) }}></textarea>
      					        </div>
      					    </div>
      					    <div className="case_prebox">
      					        <h3><i className="case_orange"></i><span>现病史：</span></h3>
      					        <div className="case_pre_child">
      					          <textarea value={meta_data[template_id].currentill} className="case_textarea" id="" cols="30" rows="10" onChange={(e)=>{ changeMeta('currentill',e,template_id) }}></textarea>
      					        </div>
      					    </div>
      					    </div>)

			}
		}
}

function reExamination_template_ui(meta_data,changeMeta){

    var ui = [];
        for(var template_id in meta_data){
           if((template_id=='advice')||(template_id=='history'))
               continue;
           if(meta_data[template_id].reExamination!=undefined){
              return (<div>
                    <div className="case_prebox">
                        <h3><i className="case_blue"></i><span>复诊：</span></h3>
                        <div className="case_pre_child">
                          <textarea value={meta_data[template_id].reExamination?meta_data[template_id].reExamination:''} className="case_textarea" id="" cols="30" rows="10" onChange={(e)=>{ changeMeta('reExamination',e,template_id) }}></textarea>
                        </div>
                    </div>
                    </div>)

      }
    }
}


function check_template(
	project_id,
    category_id,
    subcategory_id,
    case_index
){
    var { project_sel, category_sel, subcategory_sel } =  template_index(project_id, category_id, subcategory_id, case_index);
    return {check_project_sel:project_sel,check_category_sel:category_sel,check_subcategory_sel:subcategory_sel};
}

function get_index(meta_data,template_id,case_index){

        let project;
	   	  let category;
	   	  let subcategory;
        if(meta_data[template_id].index.project){

             let idx = case_index.projects.findIndex( project => project.id == meta_data[template_id].index.project.id )
             if( idx>=0 )
	             project = case_index.projects[idx].cat_name;
        }

        if(meta_data[template_id].index.category){

             let idx = case_index.categorys.findIndex( category => category.id == meta_data[template_id].index.category.id )
             if( idx>=0 )
	             category = case_index.categorys[idx].cat_name;
        }

        if(meta_data[template_id].index.subcategory){

             let idx = case_index.subcategorys.findIndex( subcategory => subcategory.id == meta_data[template_id].index.subcategory.id )
             if( idx>=0 )
	             subcategory = case_index.subcategorys[idx].cat_name;
        }

        return  { project, category, subcategory }
}

var choose_teeth_ui;

function generate_choose_teeth_ui(template_id){

  function choose_teeth_ui(teethShow,closePanel,tooth_list,chooseTooth,meta_data){

  let check_teeth = meta_data[template_id]?meta_data[template_id].check_teeth:[];
  return  (<div className="new-create-opcity" style={ teethShow==1?{display:'block'}:{display:'none'} } >
              <div className="new-create-bj sortipbj" style={{marginTop:"-256px;"}}>
                <div className="new-create-box">
                  <h4 className="toph4"><b>选择牙位</b><span className="close-dialog" onClick={ closePanel }></span></h4>
                  <div className="case_choose_tooth" style={{ height:'370px'}}>
                      <div className="tooths_pic_main case_main_picbox" id="">
                        <div className="tooth_box_pic_left">
                            {
                              tooth_list.map((tooth)=>{
                                   let selected = false;
                                   check_teeth?check_teeth.map((checked_tooth)=>{
                                         if(tooth == checked_tooth)
                                             selected = true;
                                   }):''
                                   return (<span onClick={ ()=>{ chooseTooth(tooth) } } className={'round_teeth '+ 'tooth_'+tooth} style={ selected?{backgroundColor:'red'}:{backgroundColor:'#fafcff'} }>
                                                {tooth}
                                           </span>
                                      )
                             })}
                        </div>
                      </div>
                  </div>
                  <div className="new-creatbut-box" style={{ display:'none' }}>
                    <input type="button" className="but butgray" value="取 消" onClick={ closePanel } />
                    <input type="button" className="but butblue" value="确 定" id="confirm-but"/>
                  </div>
                </div>
              </div>
      </div>)
   }

     return choose_teeth_ui;
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


function check_template_ui(meta_data,changeMeta,case_index,toothpanel,deleteTemp){
      var ui = [];
      for(var _template_id in meta_data){
           if((template_id=='advice')||(template_id=='history'))
               continue;
           let template_id = _template_id;
           if(meta_data[template_id].main!=undefined&&meta_data[template_id].check!=undefined){
                let { project, category, subcategory} = get_index(meta_data,template_id,case_index)
                var ache = specicalAche(category,subcategory);
                  ui.push(<div className="case_pre_child">
                        <div className="case_pre_check">
                          <h4>
                            <p>{'项目：'}</p><p>{project?project:''}</p>
                            <p>{'诊断分类：'}</p><p>{category?category:''} {subcategory?subcategory:''}</p>
                            <p>{'牙位：'}</p>
                            { ( ache!='' )?( <a>{ache}</a>)
                            :(<a className="case_tooth" onClick={ ()=>{ choose_teeth_ui = generate_choose_teeth_ui(template_id); toothpanel(template_id,meta_data[template_id].check_teeth); }} >{ (meta_data[template_id].check_teeth&&meta_data[template_id].check_teeth.length!=0)?meta_data[template_id].check_teeth.toString():'请选择' }</a>)

                            }
                          </h4>
                          <textarea value={meta_data[template_id].check} className="check_textarea" id="" cols="30" rows="10" onChange={ (e)=>{ changeMeta('check',e,template_id) } }></textarea>
                        </div>
                       </div>)
           }else if(meta_data[template_id].check!=undefined){
                    let { project, category, subcategory} = get_index(meta_data,template_id,case_index)
                    var ache = specicalAche(category,subcategory);
                    ui.push(<div className="case_pre_child">
                          <div className="case_pre_check">
                            <h4>
                              <p>{'项目：'}</p><p>{project?project:''}</p>
                              <p>{'诊断分类：'}</p><p>{category?category:''} {subcategory?subcategory:''}</p>
                              <p>{'牙位：'}</p>
                            { ( ache!='' )?( <a>{ache}</a>)
                              :(<a className="case_tooth" onClick={ ()=>{ choose_teeth_ui = generate_choose_teeth_ui(template_id); toothpanel(template_id,meta_data[template_id].check_teeth); }} >{ (meta_data[template_id].check_teeth&&meta_data[template_id].check_teeth.length!=0)?meta_data[template_id].check_teeth.sort().toString():'请选择' }</a>)

                            }
                              <b className='close_small' onClick={ ()=>{ deleteTemp(template_id) }} ></b>
                            </h4>
                            <textarea value={meta_data[template_id].check} className="check_textarea" id="" cols="30" rows="10" onChange={ (e)=>{ changeMeta('check',e,template_id) } }></textarea>
                          </div>
                         </div>)
		    }
    }
    return ui;
}

function cure_template(
	project_id,
    category_id,
    subcategory_id,
    case_index
){
    var { project_sel, category_sel, subcategory_sel } =  template_index(project_id, category_id, subcategory_id, case_index);
    return {cure_project_sel:project_sel,cure_category_sel:category_sel,cure_subcategory_sel:subcategory_sel};
}

function cure_template_ui(meta_data,changeMeta,case_index,deleteTemp){
      var ui = [];
      for(var _template_id in meta_data){
        if((template_id=='advice')||(template_id=='history'))
               continue;
        let template_id = _template_id;
        if(meta_data[template_id].cure!=undefined&&meta_data[template_id].main!=undefined){
            let { project, category, subcategory} = get_index(meta_data,template_id,case_index)
            ui.push(<div className="case_pre_child">
                  <div className="case_pre_check">
                    <h4>
                      <p>{'项目：'}</p><p>{project?project:''}</p>
                      <p>{'诊断分类：'}</p><p>{category?category:''} {subcategory?subcategory:''}</p>
                    </h4>
                    <textarea value={meta_data[template_id].cure} className="check_textarea" id="" cols="30" rows="10" onChange={(e)=>{ changeMeta('cure',e,template_id) }}></textarea>
                  </div>
                 </div>)
        }else if(meta_data[template_id].cure!=undefined){
            let { project, category, subcategory} = get_index(meta_data,template_id,case_index)
            ui.push(<div className="case_pre_child">
                  <div className="case_pre_check">
                    <h4>
                      <p>{'项目：'}</p><p>{project?project:''}</p>
                      <p>{'诊断分类：'}</p><p>{category?category:''} {subcategory?subcategory:''}</p>
                      <b className='close_small' onClick={ ()=>{ deleteTemp(template_id) }} ></b>
                    </h4>
                    <textarea value={meta_data[template_id].cure} className="check_textarea" id="" cols="30" rows="10" onChange={(e)=>{ changeMeta('cure',e,template_id) }}></textarea>
                  </div>
                 </div>)
        }
    }
    return ui;
}

function select_template(project_id,
	category_id,
	subcategory_id,
	projects,
	categorys,
	subcategorys,
	chooseProject,
	chooseCategory,
	chooseSubCategory,
	where,
  meta_data,
  case_index
	){
    if(where == 'main'){
      console.log('#$%%%%%%%');
      console.log(project_id);
      console.log(category_id);
      console.log(subcategory_id);
    }
	  var sel_project;
	  var sel_category;

      var _categorys = [];
      var _subcategorys = [];

      function select_pro(sel_project){
      	 if(sel_project){
          	categorys.map((category) => {
              	  (sel_project&&sel_project.relations)?sel_project.relations.map((id)=>{
              	  	  if(id == category.id)
              	  	     _categorys.push(category)
              	  }):{}
              })
          }
      }
      function select_cat(sel_category){
          if(sel_category){
      	 	subcategorys.map((subcategory) => {
          	    (sel_category&&sel_category.relations)?sel_category.relations.map((id)=>{
          	  	  if(id == subcategory.id)
          	  	     _subcategorys.push(subcategory)
          	  }):{}
          	})
          }
      }
      var pro = [];
      var cat = [];
      var sub = [];
      pro.push(<option>请选择</option>);
      cat.push(<option>请选择</option>);
      sub.push(<option>请选择</option>);
      return (<div className="input-box2">
              <span className="desc_span">诊断项目：</span>
              <select onChange={ (ev)=>{ chooseProject(where,ev) } } className="select_case_top W100px" name="" id="">
                       {projects?pro.concat(projects.map((project) =>{
                      	  if(project_id == project.id){
                             sel_project = project;
                      	  	 return <option selected='selected' value={ project.id }>{ project.cat_name }</option>;
                      	  }else if(project_id != project.id){
                             return <option value={ project.id }>{ project.cat_name }</option>;
                      	  }
                        })):''
                      }
              </select>
              { select_pro( sel_project) }
              <select onChange={ (ev)=>{ chooseCategory(where,ev) } } className="select_case_top W100px" name="" id="">
                       {_categorys?cat.concat(_categorys.map((category) =>{
                      	  if(category_id == category.id){
                      	  	 sel_category = category;
                      	  	 return <option selected='selected' value={ category.id }>{ category.cat_name }</option>
                      	  }else if(category_id != category.id){
                      	  	return <option value={ category.id }>{ category.cat_name }</option>
                      	  }

                        })):''
                      }
              </select>
              { select_cat(sel_category) }

              <select onChange={ (ev)=>{ chooseSubCategory(where,ev)} } className="select_case_top W100px" name="" id="">
                       {_subcategorys?sub.concat(_subcategorys.map((subcategory) =>{
                      	  if(subcategory_id == subcategory.id){
                      	  	 return <option selected='selected' value={ subcategory.id }>{ subcategory.cat_name }</option>
                      	  }else if(subcategory_id != subcategory.id){
                             return <option value={ subcategory.id }>{ subcategory.cat_name }</option>
                      	  }
                        })):''
                      }
              </select>
              <p className="error PL75"></p>
          </div>)
}

function diagnose(meta_data,case_index){
    var ui=[];
    for(var template_id in meta_data){
       if((template_id=='advice')||(template_id=='history'))
               continue;
       if(meta_data[template_id].check!=undefined){
        	  let { project, category, subcategory} = get_index(meta_data,template_id,case_index)
            ui.push(<span>{ (meta_data[template_id].check_teeth?meta_data[template_id].check_teeth.toString():'')+' '+ (category?category:'')+' '+(subcategory?subcategory:'')}</span>)
       }
    }
    return ui;
}

function history_ui(history){
    var ui = [];
    console.log(history);
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

function user_title(changeUserMsg,changeUser,search,ulShow,users,getUser,edit,haveUser,patient_phone,patient_name){
  
  if(edit.patient_id){
    haveUser({user_id:edit.patient_id,id:edit.id })
    return <span className='desc_span'>{patient_name+' '+patient_phone }</span>
  }else{
    return (<div className="visit_personbox">
            <input type="text" className="visit_inputs" value={ changeUserMsg } onChange={ (ev)=>{ changeUser(ev) } } />
            <input type="button" value="搜索" className="visit_searchs" onClick={ search } />
            <ul style={ ulShow=='1'?{display:'block',zIndex:9}:{display:'none',zIndex:9}}>

              {users?users.map((user)=>{
                return <li onClick={ ()=>{ getUser({user_id:user.id,patient_name:user.name,patient_phone:user.phone}) }}><span>{user.name}</span>  {user.phone} （{user.account}）</li>
              }):''}

            </ul>
          </div>)
  }

}

export const _CaseEdit_ = ({
  	edit,
  	onSend,
  	case_index,
    chooseProject,
    chooseCategory,
    chooseSubCategory,
    addMainTemplate,
    addCheckTemplate,
    addCureTemplate,
    changeMeta,
    change,
    main_project_id,
    main_category_id,
    main_subcategory_id,
    check_project_id,
    check_category_id,
    check_subcategory_id,
    cure_project_id,
    cure_category_id,
    cure_subcategory_id,
    onSave,
    projects,
    categorys,
    subcategorys,
    changeUser,
    search,
    changeUserMsg,
    users,
    getUser,
    ulShow,
    allShow,
    history,
    teethShow,
    toothpanel,
    chooseTooth,
    closePanel,
    deleteTemp,
    addTemp,
    addTempCheck,
    addTempCure,
    cancel,
    clickCalendar,
    calendarShow,
    chooseVisitTime,
    haveUser,
    doctors,
    clinics,
    getDoctor,
    getClinic,
    patient_name,
    patient_phone,
    patient_photo,
    closeCal,
    showPannelTip,
    hidePannelTip,
    tipname,
    is_send,
    downShow,
    stopProp,
    toDocument,
    backToList
}) => {

  if(!main_project_id){
     for(var template_id in edit.meta_data){
       if((template_id=='advice')||(template_id=='history'))
               continue;
       if(edit.meta_data[template_id].main!=undefined){
          main_project_id = edit.meta_data[template_id].index.project.id;
       }
     }
  }

  if(!main_category_id){
     for(var template_id in edit.meta_data){
       if((template_id=='advice')||(template_id=='history'))
               continue;
       if(edit.meta_data[template_id].main!=undefined){
          main_category_id = edit.meta_data[template_id].index.category.id;
       }
     }
  }

  if(!main_subcategory_id){
     for(var template_id in edit.meta_data){
       if((template_id=='advice')||(template_id=='history'))
               continue;
       if(edit.meta_data[template_id].main!=undefined){
          main_subcategory_id = edit.meta_data[template_id].index.subcategory.id;
       }
     }
  }

	var { main_project_sel, main_category_sel, main_subcategory_sel } = main_template(main_project_id,main_category_id,main_subcategory_id,case_index);
	var { check_project_sel, check_category_sel, check_subcategory_sel } = check_template(check_project_id,check_category_id,check_subcategory_id,case_index);
	var { cure_project_sel, cure_category_sel, cure_subcategory_sel } = cure_template(cure_project_id,cure_category_id,cure_subcategory_id,case_index);

  console.log('编辑。。。。');
  console.log(edit);
	var projects = case_index.projects;
	var categorys = case_index.categorys;
	var subcategorys = case_index.subcategorys;
	var typetip = [];
	typetip.push(<option value='0'>请选择</option>);
  var height = window.innerHeight || document.documentElement.clientHeight;
  var width = window.innerWidth || document.documentElement.clientWidth;
  var tooth_list = [11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];
  var history = edit.id?(edit.history?edit.history:history):history;

  for(var template_id in edit.meta_data){
     if((template_id=='advice')||(template_id=='history'))
             continue;
     if(edit.meta_data[template_id].main!=undefined){
          let { project, category, subcategory} = get_index(edit.meta_data,template_id,case_index)
          var title = (<span>{  (project?project:'')+' '+(category?category:'')+' '+(subcategory?subcategory:'')}</span>)
     }
  }
  return(
		<div>
      <ErrorCenter/>
      <div className="delete-tipbox" style={ showPannelTip?{display:"block"}:{display:'none'}} >
        <div className="new-create-bj new-create-bj2" style={{width:'442px'}}>
          <div className="new-create-box creat2" style={{width:'427px'}}>
            <h4 className="toph4 mb30"><span className="close-dialog" onClick={ ()=>{ hidePannelTip() } }></span></h4>
              <div className="tip_box_select">
                  { tipname }
              </div>
              <div className="new-creatbut-box">
                <input type="button" className="but butgray" onClick={ ()=>{ hidePannelTip() } } value="取 消"/>
                <input type="button" className="but butblue" onClick={ () => { hidePannelTip() } } value="确 定"/>
              </div>
          </div>
        </div>
      </div>
      { space() }
      {choose_teeth_ui?choose_teeth_ui(teethShow,closePanel,tooth_list,chooseTooth,edit.meta_data):''}
			<div className="rtop rtop_edit" onClick={ closeCal }>
	            <div className="but-box bj-none">
	                <p>
	                    <a className="back-but" onClick={ backToList } >返回</a>
	                    <a onClick={ ()=>{ }} className="save-but" id="save-but" style={ edit.is_send==1?{background:"#666",cursor:'pointer',pointerEvents:'none'}:{cursor:'pointer'}} >{ edit.is_send==1?'已发送':'发送'}</a>
	                    { (edit.status==0)?(<span className="sent-but"></span>):'' }
	                </p>
	            </div>
                <div className="userInfobox case_user_top_main" id="header_desc">
                <div>
                    <dl>
                        <dt id="user_photo"><img src={edit.photo?edit.photo:(patient_photo?patient_photo:'')} alt=""/></dt>
                        <dd>
                            <div className="input-box2 caseheadertop" id="visit_purson2">
                                  <span className="desc_span">就诊人：</span>
                                  { user_title(changeUserMsg,changeUser,search,ulShow,users,getUser,edit,haveUser,patient_phone,patient_name) }
                                  <p className="error PL60"></p>
                                  <p className="desc_tip PL60" id="desc_tip1"> </p>
                            </div>
                            <div className="header_user_main" style={ edit.parent_account?{ display:'block'}:{display:'none'} }>
                                <span className="desc_span">主账户：</span>
                                <label style={ edit.parent_account?{display:'block'}:{display:'none'} }>{ edit.parent_account?(edit.parent_account.real_name?edit.parent_account.real_name:''):''}</label>
                            </div>
                        </dd>
                        <a href="javascript:;" className="default_inputbtn see-but3 Float_r" id="see-but-case" onClick={ ()=>{ toDocument(edit.patient_id) }} >查看档案</a>
                        <div className="clear"></div>
                    </dl>
                </div>
               </div>
	        <div className="add-box-container" style={ (edit.patient_id||(allShow==1))?{display:"block"}:{display:'none'}}>
	            <div className="user_main_top" style={{ backgroundColor:'#fff' }}>
	                <div className="time repoter_top" style={{ top:'175px',zIndex:1 }}>
	                    <div className="z_time_btn">
	                        <h6 className="header_case_bj">
	                          <span>{ title }</span>
	                          <input onClick={ onSave } type="button" value="保存" className="default_inputbtn z_save_btn"/>
	                        </h6>

	                    </div>
	                </div>
	                <div className="userContain repoter_container" id="" style={ { top:'220px' } } onClick={ closeCal }>
	                    <div className="z_userContainMain">
	                      <div className="containb_right Mtopbox_case" id="" >
	                        <div className="containb_right_inner" style={{paddingBottom:'300px'}}>

	                          <div className="input_top_floatbox">
	                              <div className="input-box2 case_num_input">
	                                  <span className="desc_span">病 历 号 ：</span>
	                                  <label htmlFor="">{edit.case_number?edit.case_number:''}</label>
	                              </div>
	                              <div className="input-box2">
	                                  <span className="desc_span">状态：</span>
	                                  <select onChange={ (ev) => { change('type',ev) } }  className="select_case_top W100px" name="" id="">
						                       {
							                       	typetip.concat([1,2].map((type) => {
														              if(edit.type == type)
							                      	  	 return <option selected='selected' value={ type }>{ (type==1)?'初诊':'复诊' }</option>
							                      	    else
							                             return <option value={ type }>{ (type==1)?'初诊':'复诊' }</option>
							                        }))
						                      }
						                       </select>
	                                  <p className="error PL75"></p>
	                              </div>
	                              <div className="input-box2" style={{ position:'relative' }}>
	                                  <span className="desc_span">就诊日期：</span>
	                                  <input type="text" value={ edit.visit_time } className="text-input layicons wd140" id="J-xl" readOnly="readonly" onClick={ (ev)=>{clickCalendar(ev)} } />
                                      <div onClick={ (ev)=>{ stopProp(ev) } } style={ calendarShow?{display:'block',position:'absolute',top:'31px',left:'75px'}:{display:'none',position:'absolute',top:'31px',left:'75px'} }>
                                        <Calendar format={'YYYY-MM-DD HH mm'} showDateInput={true} onSelect={ (ev)=>{ chooseVisitTime(ev) } }/>
                                      </div>
	                                  <p className="error PL75"></p>
	                              </div>
	                              <div className="input-box2 widdiv">
	                                  <span className="desc_span">医生：</span>
	                                  <div className="col-sm-8" id="DocInputbox">
	                                      <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
	                                        <button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
	                                          <span className="placeholder" id="DovVal" data-val="">{edit.doctor_name?edit.doctor_name:'请选择'}</span>
	                                          <span className="caret"></span>
	                                        </button>
	                                        <div className="dropdown-menu">
	                                          <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
	                                            <label className="sr-only" htmlFor="input-bts-ex-5"></label>
	                                            <div className="search-box">
	                                              <div className="input-group">
	                                                <input type="text" placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search" aria-describedby="search-icon5" tabIndex="1"/>
	                                              </div>
	                                            </div>
	                                            <div className="list-to-filter">
	                                                  <ul className="list-unstyled" id="doctor_id">
					                                     {
					                                       doctors?doctors.map((doctor)=>{
			                                                        return <li className="filter-item items" data-filter={ doctor.name } data-value={doctor.id} onClick={ ()=>{ getDoctor(doctor.id,doctor.name) }} >{ doctor.name }</li>
			                                               }):''
					                                     }
	                                                  </ul>
	                                              <div className="no-search-results">
	                                                <div className="alert alert-warning" role="alert"><i className="fa fa-warning margin-right-sm"></i>没有找到 <strong>'<span></span>'</strong>相关数据</div>
	                                              </div>
	                                            </div>
	                                          </div>
	                                        </div>
	                                        <input type="hidden" name="bts-ex-5" value=""/>
	                                      </div>
	                                  </div>
	                                  <p className="error PL50"></p>
	                              </div>
	                              <div className="input-box2 zhensuo widdiv">
	                                  <span className="desc_span">诊所：</span>
	                                  <div className="col-sm-8" id="ClinkBox">
	                                      <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
	                                        <button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
	                                          <span className="placeholder" id="ClinkVal" data-val="">{edit.clinic_name?edit.clinic_name:'请选择'}</span>
	                                          <span className="caret"></span>
	                                        </button>
	                                        <div className="dropdown-menu">
	                                          <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
	                                            <label className="sr-only" htmlFor="input-bts-ex-5"></label>
	                                            <div className="search-box">
	                                              <div className="input-group">
	                                                <input type="text" placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search" aria-describedby="search-icon5" tabIndex="1"/>
	                                              </div>
	                                            </div>
	                                            <div className="list-to-filter">
	                                                  <ul className="list-unstyled" id="clinic_id">
				                                           {
					                                         clinics?clinics.map((clinic)=>{
			                                                       return <li className="filter-item items" data-filter={ clinic.clinic_name } data-value={clinic.id} onClick={ ()=>{ getClinic(clinic.id,clinic.clinic_name) } } >{ clinic.clinic_name }</li>
			                                                 }):''
					                                       }
	                                                  </ul>
	                                              <div className="no-search-results">
	                                                <div className="alert alert-warning" role="alert"><i className="fa fa-warning margin-right-sm"></i>没有找到 <strong>'<span></span>'</strong>相关数据</div>
	                                              </div>
	                                            </div>
	                                          </div>
	                                        </div>
	                                        <input type="hidden" name="bts-ex-5" value=""/>
	                                      </div>
	                                  </div>
	                                  <p className="error PL50"></p>
	                              </div>
                                  {
                                  	select_template(main_project_id,
				                                  	main_category_id,
				                                  	main_subcategory_id,
				                                  	projects,
				                                  	categorys,
				                                  	subcategorys,
				                                    chooseProject,
													                  chooseCategory,
													                  chooseSubCategory,
				                                  	'main'
                                            )
                                   }
                                   <div className='input-box2 zhensuo widdiv'>
                                      <a className='default_inputbtn z_add_btn' style={{marginTop:'0px',cursor:'pointer'}} onClick={ () => { addMainTemplate(main_project_sel, main_category_sel, main_subcategory_sel,edit.type) } }>添加</a>
	                                 </div>
                                <div className="clear">&nbsp;</div>
	                          		</div>
	                          <div className="case_container_main" style={ downShow?{display:'block'}:{display:'none'}}>
                              <div style={ edit.type=='2'?{display:'none'}:{display:'block'}}>
                                {main_template_ui(edit.meta_data,changeMeta)}
                              </div>
	                            <div className="case_prebox" style={ edit.type=='2'?{display:'none'}:{display:'block'}}>
	                                <h3><i className="case_black"></i><span>既往史：</span></h3>
	                                <div className="case_pre_child">
	                                  <p className="history_case">
	                                      { history_ui(history) }
	                                  </p>
	                                </div>
	                            </div>
                              <div style={ edit.type=='2'?{display:'block'}:{display:'none'}}>
                                {reExamination_template_ui(edit.meta_data,changeMeta)}
                              </div>



	                            <div className="case_prebox">
	                                <h3><i className="case_blue"></i><span>检查：</span><a className="add_case_check" onClick={ ()=>{ addTemp('check') }} >添加<b>+</b></a></h3>
	                                <div className="delete-tipbox" style={ addTempCheck?{display:"block"}:{display:'none'}} >
                                    <div className="new-create-bj new-create-bj2" style={{width:'442px'}}>
                                      <div className="new-create-box creat2" style={{width:'427px'}}>
                                        <h4 className="toph4 mb30">请选则检查模板<span class="close-dialog" onClick={ ()=>{ cancel('check') } }></span></h4>
                                          <div className="tip_box_select">
                                            {
                                              select_template(check_project_id,
                                                      check_category_id,
                                                      check_subcategory_id,
                                                      projects,
                                                      categorys,
                                                      subcategorys,
                                                      chooseProject,
                                                      chooseCategory,
                                                      chooseSubCategory,
                                                      'check')
                                            }
                                          </div>
                                          <div className="new-creatbut-box">
                                            <input type="button" className="but butgray" onClick={ ()=>{ cancel('check') } } value="取 消"/>
                                            <input type="button" className="but butblue" onClick={ () => { cancel('check');addCheckTemplate(check_project_sel, check_category_sel, check_subcategory_sel,edit.type) } } value="确 定"/>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                    {check_template_ui(edit.meta_data,changeMeta,case_index,toothpanel,deleteTemp)}
	                            </div>

	                            <div className="case_prebox">
	                                <h3><i className="case_orange"></i><span>影像学检查：</span></h3>
	                                <div className="case_pre_child">
	                                  <p className="history_case">
	                                      <span style={ { display: 'none'} }>暂无影像！请到客户管理中增添影像资料。</span>
	                                      <label className="see_user_photozip">查看该客户影像资料</label>
	                                  </p>
	                                </div>
	                            </div>
	                            <div className="case_prebox">
	                                <h3><i className="case_black"></i><span>诊断：</span></h3>
	                                <div className="case_pre_child">
	                                  <p className="history_case">
                                          {diagnose(edit.meta_data,case_index)}
	                                  </p>
	                                </div>
	                            </div>

	                            <div className="case_prebox">
	                                <h3><i className="case_blue"></i><span>处置：</span><a className="add_case_check" onClick={ ()=>{ addTemp('cure') }}>添加<b>+</b></a></h3>
	                                <div className="delete-tipbox" style={ addTempCure?{display:"block"}:{display:'none'}} >
                                    <div className="new-create-bj new-create-bj2" style={{width:'442px'}}>
                                      <div className="new-create-box creat2" style={{width:'427px'}}>
                                        <h4 className="toph4 mb30">请选则检查模板<span class="close-dialog" onClick={ ()=>{ cancel('cure') } }></span></h4>
                                          <div className="tip_box_select">
                                              {
                                                select_template(cure_project_id,
                                                        cure_category_id,
                                                        cure_subcategory_id,
                                                        projects,
                                                        categorys,
                                                        subcategorys,
                                                        chooseProject,
                                                        chooseCategory,
                                                        chooseSubCategory,
                                                        'cure',
                                                        edit.meta_data,
                                                        case_index)
                                              }
                                          </div>
                                          <div className="new-creatbut-box">
                                            <input type="button" className="but butgray"  onClick={ ()=>{ cancel('cure') } } value="取 消"/>
                                            <input type="button" className="but butblue"  onClick={ () => { cancel('cure');addCureTemplate(cure_project_sel, cure_category_sel, cure_subcategory_sel,edit.type) } } value="确 定"/>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
	                                {cure_template_ui(edit.meta_data,changeMeta,case_index,deleteTemp)}
	                            </div>
	                            <div className="case_prebox Pbtom50" style={{display:'none'}}>
	                                <h3><i className="case_orange"></i><span>医嘱：</span></h3>
	                                <div className="case_pre_child">
	                                  <textarea value={ edit.advice } className="case_textarea" id="" cols="30" rows="10" onChange={(ev) => change('advice',ev)}></textarea>
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
      }

		</div>
	   </div>
	)

      }