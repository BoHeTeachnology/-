import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const _DoctorCenter_ = ({
  toOrder,
  doctor,
  toDoctorAssitant
}) => {
    return (
    	<div>
    		<div className="doctorboxbj">
				<div className="doctorboxmain">
					<h3 className="doc_title"><span>薄荷牙医</span></h3>
					<div className="line"></div>
					<dl className="user_box">
						<dt><img src={require("doctortool/common/images/pic.jpeg")} alt="" /></dt>
						<dd>
							<p><span>姓名：</span><b>{doctor.name}</b></p>
							<p><span>职称：</span><b>{doctor.position}</b></p>
							<p><span>所属单位：</span><b>{doctor.hospital}</b></p>
							<div className="clear"></div>
						</dd>
					</dl>
					<div className="doctor_descbox">
						<h4>名医简介</h4>
						<div className="doctor_desc">{doctor.context}</div>
					</div>

				</div>
			</div>
			<div className="btn_box">
				<h5>
					<span className="float_left btn_gray" onClick={ toOrder } >立即预约</span>
					<span className="float_right" onClick={ toDoctorAssitant } >联系医生助理</span>
				</h5>
				<div className="clear"></div>
				<div className="xieyibox">
				<span><input type="checkbox" id="checkboxInput" checked /><label for="checkboxInput"></label></span>
					<p>我已认真阅读并同意<a href="aggrement.html">《薄荷牙医用户服务协议》</a></p>
				</div>
			</div>
    	</div>

)}
