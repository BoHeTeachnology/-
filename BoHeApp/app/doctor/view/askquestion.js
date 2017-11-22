import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ImageView from 'react-imageview';

import {
  List,
  InputItem,
  WhiteSpace,
  Button,
  ImagePicker,
  TextareaItem
} from 'antd-mobile';


export const askQuestionUi = ({
files,
onChange,
show,
describe,
currentNum,
showViewer,
fileurls,
describeInputChange,
commithandleclick,
closeimgview
}) => {
    return (
      <div className="askquestionwrap">
        <List>
          <TextareaItem
               rows={5}
               value={describe}
               count={100}
               placeholder="李大夫人很好，很有耐心，医术高超。第一次拔牙拔的这么痛快，我的复杂阻生智齿李大夫十分钟就拔完了，感谢您，值得信赖的好医生！"
               onChange={(ev) =>{describeInputChange(ev)}}/>
        </List>
        <Button id="askimgpicker" style={{display:'none'}} type='primary'   ></Button>

        <List id="avatarlist" className="avatarlist" renderHeader={() => "上传图片,分享您的看牙经历(最多5张)"}>
          <ImagePicker capture="camera" files={files}  onChange={(file, type, index) =>{
            onChange(file, type, index)
          }} onImageClick={(index, fs) => {
            show(fs, index)
          }} selectable={files.length <5}/>
        </List>
        <Button className="btn" type='primary' style={{width:'80%',marginLeft:'10%',marginTop:'1.5rem'}} onClick={commithandleclick}>提交</Button>

        <div>
          {!!showViewer && <ImageView imagelist={fileurls} close={closeimgview} current={currentNum} />}
        </div>
      </div>
    )
}
