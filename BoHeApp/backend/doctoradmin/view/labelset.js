import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


export const LabelSet = ({
	 data,
     nodata,
     length,
     toAddUser,
     toDeleteUser,
     toEditUser,
     toUserInfo,
     handlePageClick,
     pageNum,
     labeladdshow,
     isShow,
     labelname,
     labelchange,
     labeladd
}) => {

	var count = 0;
      return (<div className="checkbox-box" style={{width:"900px",marginBottom:"10px"}}>
			        <div className="checkBone">
			        {
			          data?data.map((label)=>{
			          	count++;
      				    return (<span style={{position:'relative',float:'left',paddingRight: '15px',paddingLeft: '15px',position: 'relative',lineHeight:'30px',fontSize:'12px'}}>
					      	  	 <input type="checkbox" class="checkbox" id={"checkboxa_"+count}/>
					      	  	 <label htmlFor={"checkboxa_"+count} style={{backgroundPositionY:'1px',lineHeight:'30px',paddingLeft:'19px',width: '16px',display: 'block',borderRadius: '2px',position:'absolute',top:'6px',left: '0'}}></label><i>{ label.name }</i>
				      	  	   </span>)
      			      }):''
			        }
			        </div>
			        <div className="countryInput">
			          <input type="button" value="添加" className="addCbut" onClick={ labeladdshow }/>
			          <em className="Countryhide" style={ isShow==1?{display:'block'}:{display:'none'} } >
			            <input type="text" className="cuontryval" onChange={ (e)=>{labelchange(e)} }  value={labelname}/>
			            <input type="button" value="完成" className="addCountry" onClick={ ()=>{ labeladd(labelname) } }/>
			          </em>
			        </div>
			    </div>
            )
    }
