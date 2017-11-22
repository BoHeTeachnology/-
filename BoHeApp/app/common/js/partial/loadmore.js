import React, { Component } from 'react';
import loadingStyle from 'app/common/css/pullup_Loadmore.css'

export const LoadMore = ({
   loading
}) => {
      if(loading){
        return (<div className={loadingStyle['sk-three-bounce']}>
                 <div className={loadingStyle['sk-child']+' '+loadingStyle['sk-bounce1']}></div>
                 <div className={loadingStyle['sk-child']+' '+loadingStyle['sk-bounce2']}></div>
                 <div className={loadingStyle['sk-child']+' '+loadingStyle['sk-bounce3']}></div>
                </div>)
      }else{
        return (<div style={{margin:"auto"}}>
                  <p style={{textAlign:'center'}}>加载新的数据</p>
                </div>)
      }

}