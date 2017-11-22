import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import  getApiIp  from 'doctortool/util/apiinterface.js'

export const _OrderSuccess_ = ({
    name,
    clinic_name,
    clinicaddress,
	clinic,
	visittime,
	visitdate,
	week,
	patientname,
	patientphone,
	qr_code
}) => {return(

	<div className="success_box">
	 	<h3>
	 		<img src={require("doctortool/common/images/success.png")} alt="" />
	 		<p>预约成功</p>
	 	</h3>
		<h6 className="tipspot time_tipspot order_label">
			<label>预约详情</label>
		</h6>
		<div className="order_desc_box">
			<p><span>医生</span><b>{name}</b></p>
			<p><span>时间</span><b>{visitdate +" "}{visittime +" "}{week +" "}</b></p>
			<p><span>地址</span><b>{clinicaddress}</b></p>
			<div className="clear"></div>
		</div>
		<h6 className="tipspot time_tipspot order_label">
			<label>预约人信息</label>
		</h6>
		<div className="order_desc_box">
			<p><span>姓名</span><b>{patientname}</b></p>
			<p><span>电话</span><b>{patientphone}</b></p>
			<div className="clear"></div>
		</div>
		<div className="wxmabox">
			<p>关注「薄荷牙医」微信公众号，在「用户中心」查看预约详情</p>
			<img src={require('doctortool/common/images/ewm.jpg')} alt=""/>
			<span>如有任何问题请联系客服：<a href='tel:400-9696791'>400-9696791</a></span>
		</div>
	</div>

	)
}
