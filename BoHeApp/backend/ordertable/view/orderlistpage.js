import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import { OrderData as OrderRow } from './orderdata.js'

import ReactPaginate from 'react-paginate';

import Calendar from 'rc-calendar';


export const OrderList = ({
     orders,
     doctors,
     clinics,
	   nodata,
     length,
     toAddOrder,
     toDeleteOrder,
     toEditOrder,
     toOrderInfo,
     handlePageClick,
     pageNum,
     moreSlider,
     getdeleteid,
     deleteid,
     handleSelectDate,
     dateModal,
     showDateModal
     }) => {
	  var  rowidx=0;
      return (<div>
                <div className="rtop rtop2">
                    <div className="but-box">
                      <p>
                        <a onClick={toAddOrder} className="add-but">新建</a>
                        <a onClick={toEditOrder} className="edit-but">修改</a>
                        <a onClick={toDeleteOrder} className="delete-but">删除</a>
                      </p>
                    </div>
                    <div className="top-input-box">
                      <p>预约单号：<input type="text" id="reserve_number"/></p>
                      <p>就诊人： <input type="text" id="patient_name"/></p>
                      <p style={{position:'relative'}}>预约时间：<input type="text" id="timeStart" readonly className="riliicon" onClick={ showDateModal }/>
                                  <div style={ dateModal }>
                                      <Calendar format={'YYYY-MM-DD'} onSelect={ handleSelectDate }/>
                                  </div>
                                  <span> 至 </span>
                                  <input type="text" id="timeEnd" readonly className="riliicon"/></p>

                      <p>所属公司：<input type="text" id="company_name"/></p>

                      <div className="moresel">
                        <span onClick={ moreSlider } className="moreButspan"><b>更多</b><i></i></span>
                        <div className="moreboxhide">
                            <p>项目：<input type="text" id="project_name"/></p>
                            <div className="orderDoctor">
                                <span className="doctorspan">医生：</span>
                                <div className="col-sm-9" id="DocInputbox">
                                    <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
                                      <button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
                                        <span className="placeholder" id="DovVal" data-val="">请选择</span>
                                        <span className="caret"></span>
                                      </button>
                                      <div className="dropdown-menu">
                                        <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
                                          <label className="sr-only" for="input-bts-ex-5"></label>
                                          <div className="search-box">
                                            <div className="input-group">
                                              <input type="text" placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search form-control3" aria-describedby="search-icon5" tabindex="1" />
                                            </div>
                                          </div>
                                          <div className="list-to-filter">
                                                <ul className="list-unstyled" id="doctor_id">
                                                   { doctors.map((doctor)=>{
                                                       return <li className="filter-item items" data-filter={ doctor.name } data-value={doctor.id}>{ doctor.name }</li>
                                                   })}
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
                            <div className="orderDoctor">
                                <span className="doctorspan">诊所：</span>
                                <div className="col-sm-9" id="DocInputbox">
                                    <div id="bts-ex-5" className="selectpicker" data-clear="true" data-live="true">
                                      <button data-id="prov" type="button" className="btn btn-lg btn-block btn-default dropdown-toggle">
                                        <span className="placeholder" id="DovVal" data-val="">请选择</span>
                                        <span className="caret"></span>
                                      </button>
                                      <div className="dropdown-menu">
                                        <div className="live-filtering" data-clear="true" data-autocomplete="true" data-keys="true">
                                          <label className="sr-only" for="input-bts-ex-5"></label>
                                          <div className="search-box">
                                            <div className="input-group">
                                              <input type="text" placeholder="请输入搜索内容" id="input-bts-ex-5" className="form-control live-search form-control3" aria-describedby="search-icon5" tabindex="1" />
                                            </div>
                                          </div>
                                          <div className="list-to-filter">
                                                <ul className="list-unstyled" id="doctor_id">
                                                   { clinics.map((clinic)=>{
                                                       return <li className="filter-item items" data-filter={ clinic.clinic_name } data-value={clinic.id}>{ clinic.clinic_name }</li>
                                                   })}
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
                        <a href="javascript:void(0)" className="search-but" id="search">搜索</a>
                        <a href="javascript:void(0)" className='reset-but' id="reset">重置</a>
                      </p>
                    </div>
                </div>
                <div className="table-box">
                <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50">
                <thead>
                  <tr>
                    <th width="60px">选择</th>
                    <th width="80px">预约单号</th>
                    <th width="100px">就诊人</th>
                    <th width="120px">预约时间</th>
                    <th width="80px">提交日期</th>
                    <th>所属公司</th>
                    <th width="80px">医生</th>
                    <th width="100px">诊所</th>
                    <th width="80px">项目</th>
                    <th width="80px">预约状态</th>
                    <th width="100px">联系方式</th>
                    <th width="80px">是否本人</th>
                    <th>备注</th>
                  </tr>
               </thead>
               <tbody id="accountTbody">
                  {orders.map((row)=>{
                    var ret;
                    console.log('~~~~~~~~~~~~~');
                    console.log(row.id);
                    console.log(deleteid);
                    if(row.id == deleteid)
                  	  ret = OrderRow({...row,rowidx,toOrderInfo,getdeleteid,deleteid});
                    else
                      ret = OrderRow({...row,rowidx,toOrderInfo,getdeleteid});
                  	rowidx++;
                  	return ret;
                  })}
               </tbody>
               </table>
               <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a>...</a>}
                       breakClassName={"break-me"}
                       pageNum={110}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={ handlePageClick }
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
               </div>
               </div>)
}

