import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import WeUI from 'react-weui';
const { Gallery, GalleryDelete, Uploader, Form, Cell,CellBody,FormCell,TextArea,Button} = WeUI;


import ReactPaginate from 'react-paginate';

export const askDoctorView = ({
  renderGallery,
  files,
  lookbig,
  upPic
}) => {
    return (
      <div>
      <div className="asklist" style={{padding:'0.2rem 0.3rem'}}>
           <div className="cell">
                { renderGallery() }
                        <Form>
                            <FormCell>
                              <CellBody>
                                  <TextArea style={{border: '1px solid #d9d9d9',padding: '0',marginBottom: '0.2rem',fontSize: '0.24rem',height: '3.1rem',width:'100%'}} placeholder="例如：请问，我是孕妇，怀孕期间可以洗牙吗？洗牙会不会把牙齿洗薄了呢？"  maxlength="100"></TextArea>
                              </CellBody>
                            </FormCell>
                              <Cell>
                                <CellBody style={{marginTop:'1rem'}}>
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

              <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'0.5rem'}} type='primary' onClick={upPic}>确定</Button>
      </div>
    )
}
