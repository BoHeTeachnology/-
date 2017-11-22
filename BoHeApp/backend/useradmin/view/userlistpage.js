import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import { UserData as UserRow } from './userdata.js'

import ReactPaginate from 'react-paginate';

export const UserList = ({
	   data,
	   nodata,
     length,
     toAddUser,
     toDeleteUser,
     toEditUser,
     toUserInfo,
     handlePageClick,
     pageNum,
     chooseUser,
     count,
     change,
     reset,
     search,
     real_name,
     company_name,
     account
     }) => {
	    var  rowidx=0;
      console.log('###@@@!!!')
      return (<div>
                 <div className="rtop rtop2">
                   <div className="but-box">
                     <p>
                       <a onClick={toAddUser} className="add-but">新建</a>
                       <a onClick={ toEditUser} className="edit-but">修改</a>
                       <a onClick={toDeleteUser} className="delete-but">删除</a>
                     </p>
                   </div>

                 <div className="top-input-box">
                   <p>真实姓名：<input type="text" id="real_name" value={ real_name } onChange={ (ev)=>{ change(ev,'real_name') } }/></p>
                   <p>账号：<input type="text" id="account" value={ account } onChange={ (ev)=>{ change(ev,'account') } }/></p>
                   <p>所在公司：<input type="text" id="company_name" value={ company_name } onChange={ (ev)=>{ change(ev,'company_name') } }/></p>
                   <p>
                     <a href="javascript:void(0)" className="search-but" id="search" onClick={ search } >搜索</a>
                     <a href="javascript:void(0)" className='reset-but' id="reset" onClick={ reset } >重置</a>
                   </p>
                 </div>
                </div>
                <div className="table-box">
                <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50 poolTable">
                <thead>
                  <tr>
                    <th width="60px">选择</th>
                    <th>薄荷名</th>
                    <th>真实姓名</th>
                    <th>登录手机号</th>
                    <th>头像</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>所在公司</th>
                    <th>联系方式</th>
                    <th width="80px">注册时间</th>
                  </tr>
               </thead>
               <tbody id="accountTbody">
                  {data.map((row)=>{
                  	var ret = UserRow({...row,rowidx,toUserInfo,chooseUser});
                  	rowidx++;
                  	return ret;
                  })}
               </tbody>
               </table>
               <ReactPaginate previousLabel={"前一页"}
                       nextLabel={"后一页"}
                       breakLabel={<a>...</a>}
                       breakClassName={"break-me"}
                       pageNum={Math.ceil(count/10)}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={ handlePageClick }
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
               </div>
               </div>)
}

