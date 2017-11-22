import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageView from 'react-imageview';

import {
  List,
  InputItem,
  WhiteSpace,
  Button,
  Steps,
  Icon,
  ImagePicker,

} from 'antd-mobile';

export const ValidatethreeUi = ({
  showViewer,
  currentNum,
  show,
  closeimgview,
  indentyfiles,
  zhiyefiles,
  zigefiles,
  imgUrls,
indentyhandleChange,
zhiyehandleChange,
zigehandleChange,
nexthandleclick
}) => {

  const Step = Steps.Step;
  return (
    <div className="validatethreewrap" style={{paddingBottom:'1rem'}}>
      <div className="validateStep" style={{
            padding: '0.4rem 0.6rem 0.4rem 0.4rem'
      }}>

    <Steps direction="horizontal">
     <Step status="finish" title="" icon={<img src={require('app/common/images/validate_s_one.png')} />} />
     <Step  status="finish" title="" icon={<img src={require('app/common/images/validate_s_two.png')} />} />
     <Step status="finish" title="" icon={<img src={require('app/common/images/validate_s_three.png')} />} />
    </Steps>
    </div>

    <Button id="indentypicker12" style={{display:'none'}} type='primary'   ></Button>

      <List className="indentylist" renderHeader={() => "身份证正面照"}>
        <ImagePicker id="indentypicker" files={indentyfiles} onChange={(file, type, index) =>indentyhandleChange(file, type, index)} onImageClick={(index, fs) => {
          show(fs, index,'indenty')
        }} selectable={indentyfiles.length < 1}/>
       <div className="indentyexamplewrap">
  <span>身份证</span>
  <img src={require('app/common/images/validate_indenty.png')} alt="" />
    <dl className="">
      <dd>* 正面照片</dd>
      <dd>* 边框完整</dd>
      <dd>* 字体清晰</dd>
    </dl>
       </div>

      </List>
      <List className="zhiyelist"  renderHeader={() => "执业证"}>
        <ImagePicker files={zhiyefiles} onChange={(file, type, index) =>zhiyehandleChange(file, type, index)} onImageClick={(index, fs) => {
          show(fs, index,'zhiye')
        }} selectable={zhiyefiles.length < 1}/>
        <div className="zhiyeexamplewrap">
       <span>执业证</span>
       <img src={require('app/common/images/validate_zhiye.png')} alt="" />
       <dl className="">
       <dd>* 正面照片</dd>
       <dd>* 边框完整</dd>
       <dd>* 字体清晰</dd>
       </dl>
      </div>
      </List>
      <List className="zigelist"  renderHeader={() => "资格证"}>
        <ImagePicker files={zigefiles} onChange={(file, type, index) =>zigehandleChange(file, type, index)} onImageClick={(index, fs) => {
          show(fs, index,'zige')
        }} selectable={zigefiles.length < 1}/>
        <div className="zigeexamplewrap">
   <span>资格证</span>
   <img src={require('app/common/images/validate_zige.png')} alt="" />
     <dl className="">
       <dd>* 正面照片</dd>
       <dd>* 边框完整</dd>
       <dd>* 字体清晰</dd>
     </dl>
        </div>
      </List>
      <WhiteSpace/>
      <Button className="btn" type='primary' style={{width:'80%',marginLeft:'10%',marginTop:'0.5rem'}}  onClick={nexthandleclick}>提交审核</Button>
<div className="tipwrap">
  <span style={{
  display: "block",
width: "100%",
textAlign: "center",
padding: ".2rem",
fontSize: "0.3rem",
color: "#999",
  }}>提交则表示同意<strong style={{color: "#000"}}>《薄荷牙医医生服务协议》</strong></span>
</div>

<div>
  {!!showViewer && <ImageView imagelist={imgUrls} close={() =>closeimgview()} current={currentNum} />}
</div>
    </div>
  );

}
