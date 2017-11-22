import React, { Component } from 'react';
import styles from './css/left_list.css'

export const LeftList = ({
    onClick,
    onClickToExpand,
    table
}) => {

    var itemsui = table.list.map((item)=>{
        var itemid_lv1 = item.id;

        if(item.children){
          return (<li key={itemid_lv1}>
                     <label className={(table.choose&&(table.choose==item.id))?styles['cur']:''} onClick={ (ev) =>{ onClickToExpand(ev,itemid_lv1); }}>
                     <a className={styles[item.classname]} href="#">
                     <b>{item.name}</b>
                     </a>
                     <i className={item.showchild?styles['roate']:''}></i>
                     </label>
                     {item.showchild?item.children.map((child)=>{
                        var itemid_lv2 = child.id;
                        return (<li key={ itemid_lv2 } className={(table.choose&&(table.choose==itemid_lv2))?styles['cur']:''} onClick={ (ev) =>{onClick(ev,itemid_lv2);}}>
                                  <a href="#" style={{paddingLeft:"22px"}}>
                                  <b>{child.name}</b>
                                  </a>
                                </li>)
                     }):''}
                  </li>

                )
        }else{
          return (<li key={itemid_lv1}>
                    <label className={(table.choose&&(table.choose==item.id))?styles['cur']:''} onClick={ (ev) =>{onClick(ev,itemid_lv1);}}>
                     <a className={styles[item.classname]} href="#">
                     <b>{item.name}</b>
                     </a>
                     </label>
                  </li>)
        }
    })

    return (<div className={styles["container-left"]}>
              <h3></h3>
              <ul className={styles['list']}>
                {itemsui}
              </ul>
            </div>)

}