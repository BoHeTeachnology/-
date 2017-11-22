import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'


export const HistoryShow = ({
	historyedit
}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      console.log('BBFBFBFBFBFBFBFBFB');
      console.log(historyedit);
      return (
          		<div className="userContain z_userContain_edit z_userContain_see" style={{height : "523px;"}}>

                    <div className="z_userContainMain">
                        <div className="containb_right" style={{ minHeight: "520px;" }}>
                            <div className="z_no_past_data" style={{ display:"none" }}>
                                <p>
                                    <img src={ require("backend/common/images/nodata.png") } alt=""/>
                                    <span>此项目暂无数据</span>
                                    <a href="javascript:;" className="default_inputbtn z_add_btn2">添加</a>
                                </p>
                            </div>
                            <div className="z_jws_main">
                                <h2 className="no_border"><i className="row_1"></i><span>全身情况</span></h2>
                                <div className="z_checkbox_main see_hide">
                                    <div className="z_past_desc">
                                		{
                                			historyedit.history.body_condition?historyedit.history.body_condition.map((item)=>{
		                                      return ( <span><span>{item.name}</span><span>{item.date}</span></span>)
		                                    }):''
                                    }
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_2"></i><span>家族史</span></h2>
                                <div className="z_checkbox_main see_hide">
                                    <div className="z_past_desc">
                                    	{
                                    		(historyedit.history&&historyedit.history.family_history)?historyedit.history.family_history.map((item)=>{
		                                      return ( <span>{item.name}</span> )
		                                    }):''
                                    	}
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_3"></i><span>用药史</span></h2>
                                <div className="z_checkbox_main see_hide">
                                    <div className="z_past_desc">
                                    	{
                                    		(historyedit.history&&historyedit.history.medicine)?historyedit.history.medicine.map((item)=>{
		                                      return ( <span>{item.name}</span> )
		                                    }):''
                                    	}
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_4"></i><span>手术史</span></h2>
                                <div className="z_checkbox_main see_hide">
                                   	<div className="z_past_desc">
                                   		{
                                   			(historyedit.history&&historyedit.history.surgery)?historyedit.history.surgery.map((item)=>{
		                                      return ( <span><span>{item.name}</span><span>{item.describe}</span></span> )
		                                    }):''
                                   		}
                                   	</div>
                                    <div className="clear"></div>
                                </div>

                                <h2><i className="row_5"></i><span>过敏情况</span></h2>
                                <div className="z_checkbox_main see_hide" >
                                    <div className="z_past_desc">
										                  {
                                   			(historyedit.history&&historyedit.history.allergy)?historyedit.history.allergy.map((item)=>{
                                   				console.log("EEEEEWWWQQQQQ")
                                   				console.log(item)
		                                      return ( <span><span>{item.name}</span><span>{item.describe}</span></span> )
		                                    }):''
                                   		}	
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <h2><i className="row_6"></i><span>传染病</span></h2>
                                <div className="z_checkbox_main see_hide pbtom30">
                                    <div className="z_past_desc">
                                    	{
                                   			(historyedit.history&&historyedit.history.infection)?historyedit.history.infection.map((item)=>{
		                                      return ( <span><span>{item.name}</span><span>{item.describe}</span></span> )
		                                    }):''
                                   		}
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                	<div className="clear"></div>
                </div>
             )
     }

