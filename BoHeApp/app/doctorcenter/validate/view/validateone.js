import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageView from 'react-imageview';

import {
  List,
  InputItem,
  WhiteSpace,
  Button,
  Card,
  Steps,
  Icon,
  ImagePicker,
  Radio,
  Flex,
  Picker
} from 'antd-mobile';

export const ValidateoneUi = ({
  district,
  showViewer,
  currentNum,
  imagelist,
  show,
  closeimgview,
  files,
  sex,
  citys,
  onChange,
  pickerValue,
  // cityOkBtnhandleClick,
  nexthandleclick,
  selectsexhandleclick,
  validateInputChange,
  changePick

}) => {
  const CustomChildren = props => (
    <div onClick={props.onClick} style={{
      backgroundColor: '#fff',
      padding: '0 0.3rem'
    }}>
      <div style={{
        display: 'flex',
        height: '0.9rem',
        lineHeight: '0.9rem',
        fontSize:'0.28rem',
      }}>
        <div style={{
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{props.children}</div>
        <div style={{
          textAlign: 'right',
          color: '#888'
        }}>{props.extra}</div>
      </div>
    </div>
  );

  const Step = Steps.Step;
  return (
    <div className="validateonewrap">
      <div className="validateStep" style={{
        padding: '0.4rem 0.6rem 0.4rem 0.4rem'
      }}>

        <Steps direction="horizontal">
          <Step title="" icon={< img src = {
            require('app/common/images/validate_s_one.png')
          } />}/>
          <Step title="" icon={< img src = {
            require('app/common/images/validate_f_two.png')
          } />}/>
          <Step title="" icon={< img src = {
            require('app/common/images/validate_f_three.png')
          } />}/>
        </Steps>
      </div>
      <Button id="indentypicker12" style={{display:'none'}} type='primary'   ></Button>
      <List id="avatarlist" className="avatarlist" renderHeader={() => "请上传正面照片，当做头像"}>
        <ImagePicker files={files} onChange={(file, type, index) =>{
          onChange(file, type, index)
        }} onImageClick={(index, fs) => {
          show(fs, index)
        }} selectable={files.length <1}/>
        <div className="avatarexamplewrap">
          <span>头像示例</span>
          <img src={require('app/common/images/validate_avatar.png')} alt=""/>
          <dl className="">
            <dd>* 正面照片</dd>
            <dd>* 边框完整</dd>
            <dd>* 字体清晰</dd>
          </dl>
        </div>
      </List>
      <List renderHeader={() => '基本信息'}>
        <InputItem clear placeholder="请输入真实姓名" onChange={(ev) =>{validateInputChange(ev,'username')}} >姓名:</InputItem>
      </List>
      <List>
        <Flex style={{
          padding: '0.3rem 0',
          color: '#000',
          fontSize:'0.34rem',
        }}>
          <Flex.Item style={{
            color: '#000',
            flex: 'none',
            paddingLeft: '0.3rem',
            paddingRight: '0.3rem',
            fontSize:'0.28rem',
          }}>性别</Flex.Item>
          <span style={{
            marginLeft: '0.8rem',
            fontSize:'0.28rem',
          }}>
            <Radio className="my-radio" checked={(sex == '1')? true: false} onChange={e => selectsexhandleclick('1')}>男</Radio>
          </span>
          <span style={{
            marginLeft: '0.8rem',
            fontSize:'0.28rem',
          }}>
            <Radio className="my-radio" checked={(sex == '0') ? true: false} onChange={e => selectsexhandleclick('0')}>女</Radio>
          </span>
        </Flex>
      </List>
      <List>
        <InputItem clear={true} type="phone" placeholder="请输入手机号" onChange={(ev) =>{validateInputChange(ev,'phone')}} >手机号:</InputItem>
      </List>
      <List>
        <InputItem clear={true} placeholder="请输入真实身份证号" onChange={(ev) =>{validateInputChange(ev,'identity')}} >身份证号:</InputItem>
      </List>
      <List>
        <Picker
          data={district}
          style={{fontSize:'0.34rem'}}
          title="选择地区"
          extra="请选择"
          value={pickerValue}
          cols={2}
          onChange={(city) =>{ cityOkBtnhandleClick(city)}}
          onPickerChange={(ev)=>changePick(ev)}
            >
                <CustomChildren>选择地区</CustomChildren>
            </Picker>


      </List>
      <WhiteSpace/>
      <WhiteSpace/>
      <Button className="btn" style={{width:'80%',marginLeft:'10%',marginTop:'0.5rem'}} type='primary' onClick={nexthandleclick}>下一步</Button>

      <div>
        {!!showViewer && <ImageView imagelist={[files[0].url]} close={closeimgview} current={currentNum} />}
      </div>
    </div>
  );

}
