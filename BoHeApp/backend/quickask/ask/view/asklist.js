import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import  LeftList  from '../../../caseadmin/case/leftlist.js';
import { AskRow } from './askrow.js';
import WeUI from 'react-weui';
const { Gallery, GalleryDelete, Uploader, Form, Cell,CellBody,FormCell,TextArea,Button} = WeUI;

import ReactPaginate from 'react-paginate';

export const _AskList_ = ({
	handlePageClick,
	allpage,
	delete_ask,
	deleteid,
	getdeleteid,
	asks,
	search,
	reset,
	changeStatus,
	status,
	showDetail,
	close,
	reply,
	noreply,
	detail,
	renderGallery,
	files,
	lookbig,
	askfiles,
	lookaskbig,
	renderGalleryAsk,
	idx,
	asklist
}) => {
	    console.log('!@#$%^');
		return (
			<div className="asklist">
				<div className="delete-tipbox" style={ showDetail?{display:"block"}:{display:'none'}} >
					<div className="new-create-bj new-create-bj2" style={{width:'442px',height:'500px',marginTop:'-250px'}}>
					  <div className="new-create-box creat2" style={{width:'427px',height:'494px'}}>
					    <h4 className="toph4 mb30"><span className="close-dialog" onClick={ close }></span></h4>
					      <div className="tip_box_select">
					      	<div style={{marginBottom:'20px'}}>
					          <span>问题</span>
					          <span style={{marginLeft:'10px'}}>{ (asklist.length!=0)?asklist[idx].account:'' }</span>
					        </div>
					        <div style={{marginBottom:'20px'}}>
					          <span style={{marginRight:'5px',float:'left'}}>图片</span>
					        </div>
					        <div className="cell messagelist">
								{ renderGalleryAsk() }
				                <Form>
			                        <Cell>
				                        <CellBody>
											<Uploader
							                      title=""
							                      maxCount={5}
							                      files={ askfiles }
							                      onError={msg => alert(msg)}
							                      onFileClick={
							                          (e, file, i) => {
							                              let gallery = {
							                                      url: file.url,
							                                      id: i
							                                  }
							                              lookaskbig(gallery)
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
					        <div className="cell">
								{ renderGallery() }
				                <Form>
				                    <FormCell>
				                    	<CellBody>
				                        	<TextArea style={{border: '1px solid #d9d9d9',padding: '0',marginBottom: '0.2rem',fontSize: '0.24rem',height: '3.1rem',width:'100%'}} placeholder="例如：请问，我是孕妇，怀孕期间可以洗牙吗？洗牙会不会把牙齿洗薄了呢？"  maxlength="100"></TextArea>
				                    	</CellBody>
				                    </FormCell>
			                        <Cell>
				                        <CellBody>
											<Uploader
							                      title="上传口腔实拍图，方便医生做诊断。"
							                      maxCount={5}
							                      files={ files }
							                      onError={msg => alert(msg)}
							                      // onChange={(file,e) => {
							                      //
							                      //     let newFiles = [...this.state.demoFiles, {url:file.data}];
							                      //     console.log('文件数据'+newFiles);
							                      //  console.log(writeObj(newFiles))
							                      //     this.setState({
							                      //         demoFiles: newFiles
							                      //     });
							                      // }}
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
							                      id="zdh"
							                  />
						                </CellBody>
	                    			</Cell>
	                			</Form>
                  			</div>
					      </div>
					      <div className="new-creatbut-box" style={{marginTop:'354px'}}>
					        <input type="button" className="but butgray" onClick={ ()=>{ reply() } } value="回复"/>
					        <input type="button" className="but butblue" onClick={ () => { noreply() } } value="不回复"/>
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
				           			<option value="0" selected={ status=='0'?'selected':''}>未回答</option>
				           			<option value="1" selected={ status=='1'?'selected':''}>已回答</option>
				           			<option value="2" selected={ status=='2'?'selected':''}>不回答</option>
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
			                      <th>提问时间</th>
			                      <th>回答时间</th>
			                      <th>状态</th>
			                      <th>问题详情</th>
			                  </tr>
			              </thead>
			              <tbody id="caseTable">
			                  {
			                  	asklist.map((row,idx)=>{
			                    var ret;
			                    if(row.id == deleteid)
			                  	  ret = AskRow({...row,getdeleteid,deleteid,detail,idx});
			                    else
			                      ret = AskRow({...row,getdeleteid,detail,idx});
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