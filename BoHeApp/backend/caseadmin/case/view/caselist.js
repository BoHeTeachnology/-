import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import Calendar from 'rc-calendar';
const format = ('YYYY-MM-DD');

import { CaseRow } from './caserow.js';

import ReactPaginate from 'react-paginate';

import { space } from '../space.js';

function select_template(
	project_id,
	category_id,
	subcategory_id,
	projects,
	categorys,
	subcategorys,
	chooseProject,
	chooseCategory,
	chooseSubCategory
	){
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
      return (<div>
              <span className="desc_span">诊断项目：</span>
              <select onChange={ (ev)=>{ chooseProject(ev) } } className="select_case_top W100px" name="" id="">
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
              <select onChange={ (ev)=>{ chooseCategory(ev) } } className="select_case_top W100px" name="" id="">
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

              <select onChange={ (ev)=>{ chooseSubCategory(ev)} } className="select_case_top W100px" name="" id="">
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




export const _CaseList_ = ({
	cases,
	doctors,
	clinics,
	nodata,
    deleteid,
    getdeleteid,
	handlePageClick,
    toCaseInfo,
    toSearch,
    toAddCase,
    toDeleteCase,
    toEditCase,
    options,
    length,
    change,
    moreSlider,
    chooseVisitTime,
    date,
    calendarShow,
    clickCalendar,
    click,
    reset,
    username,
    caseid,
    phone,
    clinic,
    doctor,
    closeCal,
    allpages,

   project_id,
    category_id,
    subcategory_id, 
    chooseProject,
    chooseCategory,
    chooseSubCategory,
    case_index
}) => {
	    var rowidx = 0;
	    console.log('!@#$%^');
	    console.log(deleteid);
    	
    	var projects = case_index.projects;
		var categorys = case_index.categorys;
		var subcategorys = case_index.subcategorys;
		return (
			<div>
			   { space() }
				<div style={{ marginLeft: '175px',marginTop: '46px',overflow:'hidden',height:'100%'}}>
					<div className="rtop rtop2">
			            <div className="but-box">
			              <p>
			                <a onClick={toAddCase} className="add-but" id="add" style={{cursor:'pointer'}}>新建</a>
			                <a onClick={toEditCase} className="edit-but" id="edit" style={{ display:'none',cursor:'pointer'}} >修改</a>
			                <a onClick={toDeleteCase} className="delete-but" id="delete" style={{cursor:'pointer'}}>删除</a>
			              </p>
			            </div>

			            <div className="top-input-box">
			              <p>用户姓名： <input type="text" id="name" value={username?username:''} onChange={(ev) => { change('username',ev)}}/></p>
			              <p>手机号：   <input type="text" id="account" value={phone?phone:''} onChange={(ev) => { change('phone',ev)}}/></p>
			              <p>病历号：   <input type="text" id="caseNum" value={caseid?caseid:''} onChange={(ev) => { change('caseid',ev)}}/></p>
			              <p style={{ position:'relative' }}>就诊时间:
			              	 	<input type="text" value={ date?date:''  } className="riliicon" id="J-xl" readOnly="readonly" onClick={ clickCalendar } />
                                    <div style={ calendarShow?{display:'block',position:'absolute',top:'38px',left:'61px'}:{display:'none',position:'absolute',top:'31px',left:'75px'} }>
                                      <Calendar format={'YYYY-MM-DD'} showDateInput={false} onSelect={ chooseVisitTime }/>
                                    </div>
	                                <p className="error PL75"></p>
			              </p>
			              <div className="orderDoctor">
			                  <span className="doctorspan">医生:</span>
			                  <div className="col-sm-10" id="DocInputbox">
			                      <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
			                        { doctor==undefined?(<button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
			                          <span className="text" id="DovVal" data-val='请选择'>请选择</span>
			                          <span className="caret"></span>
			                        </button>):(<button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
			                          <span className="text" id="DovVal" data-val={ doctor.name}>{ doctor.name }</span>
			                          <span className="caret"></span>
			                        </button>)
			                    	}
			                        <div className="dropdown-menu">
			                          <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
			                            <label className="sr-only" htmlFor="input-bts-ex-5"></label>
			                            <div className="search-box">
			                              <div className="input-group">
			                                <input type="text"  placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search form-control3" aria-describedby="search-icon5" tabIndex="1" />
			                              </div>
			                            </div>
			                            <div className="list-to-filter">
			                                  <ul className="list-unstyled" id="doctor_id">
			                                    {
			                                      doctors?doctors.map((doctor)=>{
	                                                       return <li className="filter-item items" onClick={ ()=>{ click('doctor',doctor.name,doctor.id) } } data-filter={ doctor.name } data-value={doctor.id}>{ doctor.name }</li>
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
			                  <p></p>
			              </div>

			              <div className="moresel">
			                <span onClick={moreSlider} className="moreButspan"><b>更多</b><i></i></span>
			                <div className="moreboxhide" style={ {width:'215px'} }>
			                  <div className="orderDoctor">
			                      <span className="doctorspan">诊所：</span>
			                      <div className="col-sm-10" id="ClinkBox">
			                          <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
			                            <button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
			                              <span className="placeholder" id="DovVal" data-val="">{ clinic==undefined?'请选择':clinic.name}</span>
			                              <span className="caret"></span>
			                            </button>
			                            <div className="dropdown-menu">
			                              <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
			                                <label className="sr-only" htmlFor="input-bts-ex-5"></label>
			                                <div className="search-box">
			                                  <div className="input-group">
			                                    <input type="text" placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search form-control3" aria-describedby="search-icon5" tabIndex="1" />
			                                  </div>
			                                </div>
			                                <div className="list-to-filter">
			                                      <ul className="list-unstyled" id="clinic_id">
			                                           {
				                                         clinics?clinics.map((clinic)=>{
		                                                       return <li className="filter-item items" onClick={ ()=>{ click('clinic',clinic.clinic_name,clinic.id) } } data-filter={ clinic.clinic_name } data-value={clinic.id}>{ clinic.clinic_name }</li>
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
			                      <p></p>
			                  </div>
			                </div>
			              </div>
			              <p>
			                <a onClick={toSearch} className="search-but" id="search">搜索</a>
			                <a onClick={reset} className='reset-but' id="reset">重置</a>
			              </p>
			              {

                          	select_template(
                          		project_id,
                              	category_id,
                              	subcategory_id,
                              	projects,
                              	categorys,
                              	subcategorys,
                                chooseProject,
			                    chooseCategory,
			                    chooseSubCategory
                                )
			              }
			            </div>
			        </div>
			        <div className="table-box" onClick={ closeCal }>
			          <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50">
			              <thead>
			                  <tr>
			                      <th width="60px">选择</th>
			                      <th width="80px">病历号</th>
			                      <th>就诊人</th>
			                      <th>手机号</th>
			                      <th>就诊时间</th>
			                      <th>诊断项目</th>
			                      <th>就诊医生</th>
			                      <th>诊所</th>
			                      <th>联系方式</th>
			                      <th>类别</th>
			                      <th>状态</th>
			                  </tr>
			              </thead>
			              <tbody id="caseTable">
			                  {
			                  	cases.map((row)=>{
			                    var ret;
			                    console.log('AAAAAAAAAABBBBBBB')
			                    console.log(row.id);
			                    console.log(deleteid)
			                    if(row.id == deleteid)
			                  	  ret = CaseRow({...row,rowidx,toCaseInfo,getdeleteid,deleteid});
			                    else
			                      ret = CaseRow({...row,rowidx,toCaseInfo,getdeleteid});
			                  	rowidx++;
			                  	return ret;
			                  })
			                  }
			                </tbody>
			          </table>
		             <ReactPaginate previousLabel={"前一页"}
	                   nextLabel={"后一页"}
	                   breakLabel={<a>...</a>}
	                   breakClassName={"break-me"}
	                   pageNum={ Math.ceil(allpages/10) }
	                   marginPagesDisplayed={2}
	                   pageRangeDisplayed={5}
	                   clickCallback={ handlePageClick }
	                   containerClassName={"pagination"}
	                   subContainerClassName={"pages pagination"}
	                   activeClassName={"active"} />
			        </div>
				</div>
			</div>
		)
      }