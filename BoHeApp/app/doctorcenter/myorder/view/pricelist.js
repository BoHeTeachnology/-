import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Checkbox,Stepper} from 'antd-mobile';



const CheckboxItem = Checkbox.CheckboxItem;
export const PriceListUi = ({
  pricelist,
  totalmoney,
  typeidx,
  currentpricelist,
checkboxChange,
stepperChange,
leftitemclickhandele,
isselected,
gopayClickhandle,


}) => {
  return (
    <div className="pricelistwrap">
      <div className="l-project" style={{background:'#eff3f7'}}>
        <ul>
          {
          pricelist.map((leftitem,index) =>{
            return(
              <li style={typeidx==index?{background:'#fff'}:{}} onClick={() =>{leftitemclickhandele(index)}}>{leftitem.name}</li>
            )
          })
          }
        </ul>
      </div>
      <div className="r-project" style={{background:'#fff'}}>
        <ul>
          {
          currentpricelist.subclass.map((item,index) =>{
            return(
              <li>
                <span>
                <CheckboxItem key={currentpricelist.id+index} onChange={(event) =>checkboxChange(index,event)}>
                </CheckboxItem>
                </span>
                <span className="pricetype">{item.name}</span>
                <span className="pricemoney">¥ 300.00</span>
                <span><Stepper
               style={{ position: 'absolute', right: '0.2rem',bottom:'0.05rem' }}
               showNumber
               min={1}
               value={item.stepVal}
               onChange={(val)=>stepperChange(val,index)} />
               </span>
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className="b-project">
        <span>合计(人民币元) ¥{totalmoney}</span>
        <span className="membersale">会员折扣</span>
        <div className="gopay" onClick={() =>{gopayClickhandle}}>
          结算
        </div>
      </div>

    </div>

  );
}
