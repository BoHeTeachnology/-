 import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import { DoctorData as UserRow } from './doctordata.js'

import ReactPaginate from 'react-paginate';

export const DoctorList = ({
     data,
     nodata,
     length,
     toAddUser,
     toDeleteUser,
     toEditUser,
     toUserInfo,
     handlePageClick,
     pageNum,
     }) => {
      var  rowidx=0;
      return (<div>
                  <div className="rtop rtop2">
                    <div className="but-box">
                      <p>
                        <a href="javascript:void(0)" className="add-but" onClick={ toAddUser } >新建</a>
                        <a href="javascript:void(0)" className="edit-but" id="edit">修改</a>
                        <a href="javascript:void(0)" className="delete-but" id="delete">删除</a>
                      </p>
                    </div>
                    <div className="top-input-box">
                      <p>医生账号：<input type="text" id="account"/></p>
                      <p>医生姓名：<input type="text" id="name"/></p>
                      <p>所在医院：<input type="text" id="hospital"/></p>
                      <p>
                        <a href="javascript:void(0)" className="search-but" id="search">搜索</a>
                        <a href="javascript:void(0)" className='reset-but' id="reset">重置</a>
                      </p>
                    </div>
                </div>
                <div className="table-box">
                <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50 doctortable">
                    <thead>
                        <tr>
                            <th width="60px">选择</th>
                            <th>医生账号</th>
                            <th>姓名</th>
                            <th>头像</th>
                            <th>出生日期</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>联系电话</th>
                            <th>职称</th>
                            <th>擅长领域</th>
                            <th>执业年限</th>
                            <th>所在医院</th>
                            <th>邀请码</th>
                            <th>是否显示</th>
                        </tr>
                    </thead>
                   <tbody id="accountTbody">
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
