import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {
  List,
  InputItem,
  WhiteSpace,
  Button,
  Steps,
  Icon,
  Flex,
  TextareaItem,
  Tag,
  Modal
} from 'antd-mobile';

export const ValidatetwoUi = ({
  currentIndex,
  tagLists,
  describe,
  addtagHandleClick,
  deletetagHandleClick,
  nexthandleclick,
  validateInputChange,
}) => {

  const Step = Steps.Step;
  const prompt = Modal.prompt;

  return (
    <div className="validatetwowrap" style={{paddingBottom:'1rem'}}>

      <div className="validateStep" style={{
            padding: '0.4rem 0.6rem 0.4rem 0.4rem'
      }}>

    <Steps direction="horizontal">
     <Step status="finish" title="" icon={<img src={require('app/common/images/validate_s_one.png')} />} />
     <Step title="" icon={<img src={require('app/common/images/validate_s_two.png')} />} />
     <Step title="" icon={<img src={require('app/common/images/validate_f_three.png')} />} />
    </Steps>
      </div>

      <List renderHeader={() => "出诊信息"}>
        <InputItem clear placeholder="请填写所在医院" onChange={(ev) =>{validateInputChange(ev,'address')}} >所在医院:</InputItem>
        <InputItem clear placeholder="请填写所在科室" onChange={(ev) =>{validateInputChange(ev,'keshi')}} >所在科室:</InputItem>
        <WhiteSpace/>
        <InputItem clear placeholder="请填写职称" onChange={(ev) =>{validateInputChange(ev,'job')}} >职称:</InputItem>
        <Flex style={{
          padding: '0.3rem'
        }}>
          <Flex.Item style={{
            color: '#000',
            flex: 'none',
            marginRight:'0.8rem',
            fontSize:'0.28rem'
          }}>擅长:</Flex.Item>
          <Flex.Item>

          {  tagLists.map((item,index) => {
      //运用currentIndex 保证key值唯一
       return(<Tag  key={index+item+currentIndex} closable
       onClose={() => {
         deletetagHandleClick(item)
       }}
       afterClose={() => {
         console.log('afterClose');
       }}
     >{item}</Tag>



   )
})
  }
            <span style={{
              width:"1rem",
              height:"0.46rem",
              textAlign:"center",
              display:"inline-block",
              marginTop: '0.2rem',
              borderRadius: "0.04rem",
              border: "0.01rem solid #dcdcdc",
              lineHeight: "0.46rem",
              textAlign: "center"

            }} onClick={() => prompt('添加标签', '最多添加三个标签', [
     { text: '取消' },
     { text: '添加', onPress:value =>addtagHandleClick(value)},
   ], 'plain-text', '')} >+</span>
          </Flex.Item>

        </Flex>

        <Flex style={{
        backgroundColor:'#f5f5f9'
        }}>

          <Flex.Item style={{
            padding: '0.3rem',
            color: '#666',
            width: '100%',
            fontSize:'0.24rem',
          }}>* 平台接受住院医师（仅接受三甲医院）、主治医师、副主任医师及主任医师进驻</Flex.Item>
        </Flex>
      </List>
      <List renderHeader={() => "简介"}>
        <TextareaItem
             rows={5}
             value={describe}
             count={100}
             placeholder="擅长口腔外科治疗，临床治疗20年，有丰富的经验..."
             onChange={(ev) =>{validateInputChange(ev,'describe')}}/>
      </List>
      <WhiteSpace/>

      <Button className="btn" type='primary' style={{width:'80%',marginLeft:'10%',marginTop:'0.5rem'}} onClick={nexthandleclick}>下一步</Button>

    </div>
  );

}
