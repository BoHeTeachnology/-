 import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import { ClinicData as UserRow } from './clinicdata.js'

import ReactPaginate from 'react-paginate';

export const ClinicList = ({
     data,
     nodata,
     length,
     toAddUser,
     toDeleteUser,
     toEditUser,
     toUserInfo,
     handlePageClick,
     pageNum,
     clinicadd
     }) => {
      var  rowidx=0;
      return (<div>
                  <div className="rtop rtop2">
                    <div className="but-box">
                      <p>
                        <a href="javascript:void(0)" className="add-but" onClick={ clinicadd }>新建</a>
                        <a href="javascript:void(0)" className="edit-but" id="edit">修改</a>
                        <a href="javascript:void(0)" className="delete-but" id="delete">删除</a>
                      </p>
                    </div>

                    <div className="top-input-box">
                      <p>诊所品牌：<input type="text" id="clinic_brand"/></p>
                      <p>
                        <a href="javascript:void(0)" className="search-but" id="search">搜索</a>
                        <a href="javascript:void(0)" className='reset-but' id="reset">重置</a>
                      </p>
                    </div>
                </div>
                <div className="table-box">
                <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50 poolTable">
                    <thead>
                      <tr>
                          <th width="60px">选择</th>
                          <th width="80px">诊所编号</th>
                          <th>诊所品牌</th>
                          <th>诊所名称</th>
                          <th>诊所地址</th>
                          <th>牙椅数量</th>
                          <th>诊所负责人</th>
                          <th>诊所负责人电话</th>
                          <th>薄荷对接人</th>
                          <th>对接人电话</th>
                          <th>是否显示</th>
                      </tr>
                    </thead>
                   <tbody id="caseTable">
                      {data.map((row)=>{
                        var ret = UserRow({...row,rowidx,toUserInfo});
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
