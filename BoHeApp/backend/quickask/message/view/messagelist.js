import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import  LeftList  from '../../../caseadmin/case/leftlist.js';
import { MessageRow } from './messagerow.js';
import WeUI from 'react-weui';
const { Gallery, GalleryDelete, Uploader, Form, Cell,CellBody,FormCell,TextArea,Button} = WeUI;

import ReactPaginate from 'react-paginate';

export const _MessageList_ = ({
	handlePageClick,
	delete_ask,
	deleteid,
	getdeleteid,
	messagelist,
	search,
	reset,
	changeStatus,
	status,
	showDetail,
	close,
	reply,
	noreply,
	detail,
	gallery,
	renderGallery,
	lookbig,
	files,
	allpage,
	idx
}) => {
	    console.log('!@#$%^');
	    console.log(files);
		return (
			<div className="asklist messagelist">
				<div className="delete-tipbox" style={ showDetail?{display:"block"}:{display:'none'}} >
					<div className="new-create-bj new-create-bj2" style={{width:'442px',height:'500px',marginTop:'-250px'}}>
					  <div className="new-create-box creat2" style={{width:'427px',height:'494px'}}>
					    <h4 className="toph4 mb30"><span className="close-dialog" onClick={ close }></span></h4>
					      <div className="tip_box_select">
					      	<div style={{marginBottom:'20px'}}>
					          <span>留言</span>
					          <span style={{marginLeft:'10px'}}>{ (messagelist.length!=0)?messagelist[idx].account:'' }</span>
					        </div>
					        <div style={{marginBottom:'20px'}}>
					          <span style={{marginRight:'5px',float:'left'}}>图片</span>
					        </div>

					        <div className="cell">
								{ renderGallery() }
				                <Form>
			                        <Cell>
				                        <CellBody>
											<Uploader
							                      title=""
							                      maxCount={5}
							                      files={ files }
							                      onError={msg => alert(msg)}
							                      onFileClick={
							                          (e, file, i) => {
							                              console.log('file click', file, i)
							                              let gallery = {
							                                      url: file.url,
							                                      id: i
							                                  }
							                              lookbig(gallery)
							                          }
							                      }
							                      lang={{
							                          maxError: maxCount => `最多允许上传 ${maxCount} 图片`
							                      }}
							                  />
						                </CellBody>
	                    			</Cell>
	                			</Form>
                  			</div>
					      </div>


					      <div className="new-creatbut-box" style={{marginTop:'354px'}}>
					        <input type="button" className="but butgray" onClick={ ()=>{ reply() } } value="通 过"/>
					        <input type="button" className="but butblue" onClick={ () => { noreply() } } value="不通过"/>
					      </div>
					  </div>
					</div>
				</div>
			    <LeftList/>
				<div style={{ marginLeft: '175px',marginTop: '46px',overflow:'hidden',height:'100%'}}>
					<div className="rtop rtop2">
			            <div className="but-box">
			              <p>
			                <a onClick={ delete_ask } className="delete-but" id="delete" style={{cursor:'pointer'}}>删除</a>
			              </p>
			            </div>
				        <div className="top-input-box">
				           	<div>
				           		<span className="desc_span" style={{marginRight:'10px',float:'left'}}>状态</span>
				           		<select onChange={ (ev)=>{ changeStatus(ev) }} className="select_case_top W100px" style={{float:'left',marginTop:'9px'}}>
				           			<option value="" selected={ status==''?'selected':''}>请选择</option>
				           			<option value="0" selected={ status=='0'?'selected':''}>未评审</option>
				           			<option value="1" selected={ status=='1'?'selected':''}>已通过</option>
				           			<option value="2" selected={ status=='2'?'selected':''}>不通过</option>
				           		</select>
				           		<p>
					                <a onClick={search} className="search-but" id="search">搜索</a>
					                <a onClick={reset} className='reset-but' id="reset">重置</a>
					            </p>
					            <div className='clear'></div>
				           	</div>
			            </div>
			        </div>
			        <div className="table-box">
			          <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50">
			              <thead>
			                  <tr>
			                      <th width="60px">选择</th>
			                      <th>姓名</th>
			                      <th>登录手机号</th>
			                      <th>留言时间</th>
			                      <th>留言医生</th>
			                      <th>状态</th>
			                      <th>问题详情</th>
			                  </tr>
			              </thead>
			              <tbody id="caseTable">
			                  {
			                  	messagelist.map((row,idx)=>{
			                    var ret;
			                    if(row.id == deleteid)
			                  	  ret = MessageRow({...row,getdeleteid,deleteid,detail,idx});
			                    else
			                      ret = MessageRow({...row,getdeleteid,detail,idx});
			                  	return ret;
			                  	})
			                  }
			                </tbody>
			          </table>
		             <ReactPaginate previousLabel={"前一页"}
	                   nextLabel={"后一页"}
	                   breakLabel={<a>...</a>}
	                   breakClassName={"break-me"}
	                   pageNum={ Math.ceil(allpage/10) }
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